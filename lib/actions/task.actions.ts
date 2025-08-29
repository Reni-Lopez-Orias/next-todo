"use server";

import { z } from "zod";
import postgres from "postgres";
import { revalidatePath } from "next/cache";
import { IStatus, ITask, ITaskState } from "../definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

// ----------------------- SCHEMA -----------------------
const TaskSchema = z.object({
  userId: z.number(),
  priority: z.enum(["low", "mid", "high"]),
  dueDate: z
    .string()
    .nullable()
    .refine(
      (val) => {
        if (!val) return true; // permitir vacío
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const due = new Date(val);
        return due >= today;
      },
      { message: "Due date cannot be in the past" }
    ),
  description: z.string().min(1, "Description is required"),
});

export async function saveTask(
  prevState: ITaskState,
  formData: FormData
): Promise<ITaskState> {
  const taskId = formData.get("taskId"); // si viene => update
  const validatedFields = TaskSchema.safeParse({
    userId: Number(formData.get("userId")),
    description: formData.get("description"),
    priority: formData.get("priority"),
    dueDate: formData.get("due_date"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Required fields are invalid.",
    };
  }

  try {
    if (taskId) {
      // UPDATE
      await sql`
        UPDATE tasks
        SET 
          description = ${validatedFields.data.description},
          priority = ${validatedFields.data.priority},
          due_date = ${validatedFields.data.dueDate || null}
        WHERE id = ${Number(taskId)}
      `;
      revalidatePath("/");
      return { success: true, message: "Task updated successfully" };
    } else {
      // INSERT
      await sql`
        INSERT INTO tasks (description, priority, due_date, created_at, user_id)
        VALUES (
          ${validatedFields.data.description}, 
          ${validatedFields.data.priority}, 
          ${validatedFields.data.dueDate || null},
          ${new Date()},
          ${Number(validatedFields.data.userId)}
        )
      `;
      revalidatePath("/");
      return { success: true, message: "Task created successfully" };
    }
  } catch (error) {
    console.error("Database error:", error);
    return {
      success: false,
      message: taskId ? "Error updating task" : "Error creating task",
    };
  }
}

export async function completeTask(taskId: number) {
  try {
    await sql`UPDATE tasks SET completed = TRUE WHERE id = ${taskId}`;
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error updating task status:", error);
  }
}

export async function deleteTask(taskId: number) {
  try {
    await sql`DELETE FROM tasks WHERE id = ${taskId}`;
    revalidatePath("/dashboard");
  } catch (error) {
    console.error("Error deleting task", error);
  }
}

export async function fetchTasks(
  userId: number,
  query: string,
  currentPage: number,
  status: IStatus = "all"
): Promise<ITask[]> {
  const ITEMS_PER_PAGE = 5;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    let whereClause = sql`WHERE description ILIKE ${`%${query}%`} AND user_id = ${userId}`;

    if (status && status !== "all") {
      if (status === "pending") {
        whereClause = sql`${whereClause} AND completed = false`;
      } else if (status === "completed") {
        whereClause = sql`${whereClause} AND completed = true`;
      } else if (status === "priority") {
        whereClause = sql`${whereClause} AND priority = 'high'`;
      }
    }

    const tasks = await sql<ITask[]>`
      SELECT 
        id,
        description,
        priority,
        TO_CHAR(due_date, 'MM/DD/YYYY') as due_date,
        TO_CHAR(created_at, 'MM/DD/YYYY') as created_at,
        completed
      FROM tasks
      ${whereClause}
      ORDER BY 
        CASE WHEN completed THEN 1 ELSE 0 END,
        CASE priority 
          WHEN 'high' THEN 1 
          WHEN 'mid' THEN 2 
          WHEN 'low' THEN 3 
        END,
        due_date NULLS LAST,
        created_at DESC
      LIMIT ${ITEMS_PER_PAGE} OFFSET ${offset}
    `;
    return tasks;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tasks.");
  }
}
