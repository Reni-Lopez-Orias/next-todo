import postgres from "postgres";
import { IStats } from "./definitions";

const sql = postgres(process.env.POSTGRES_URL!, { ssl: "require" });

export async function fetchStatsTask(userId: number): Promise<IStats> {
  try {
    const data = await sql`
      SELECT 
        COUNT(*) as total_tasks,
        SUM(CASE WHEN completed = true THEN 1 ELSE 0 END) as completed_tasks,
        SUM(CASE WHEN completed = false THEN 1 ELSE 0 END) as pending_tasks,
        SUM(CASE WHEN priority = 'high' THEN 1 ELSE 0 END) as high_priority_tasks
      FROM tasks
      WHERE user_id = ${userId};
    `;

    return {
      total: Number(data[0].total_tasks),
      completed: Number(data[0].completed_tasks),
      pending: Number(data[0].pending_tasks),
      highPriority: Number(data[0].high_priority_tasks),
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch task card data.");
  }
}

export async function fetchTasksPages(
  userId: number,
  query: string,
  status: "all" | "pending" | "completed" | "priority" = "all",
): Promise<number> {
  const ITEMS_PER_PAGE = 5;

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

    const data = await sql`
      SELECT COUNT(*) as count
      FROM tasks
      ${whereClause}
    `;

    const totalPages = Math.ceil(Number(data[0].count) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of tasks.");
  }
}