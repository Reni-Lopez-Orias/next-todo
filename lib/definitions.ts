export interface IUser {
  id: string;
  name: string;
  email: string;
  password: string;
}

export interface ILoginState {
  errors?: {
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export interface IRegisterState {
  errors?: {
    name?: string[];
    email?: string[];
    password?: string[];
  };
  message?: string | null;
  success?: boolean;
}

export const IPriorityOptionsSelect = [
  {
    value: "low",
    label: "Low",
  },
  {
    value: "mid",
    label: "Mid",
  },
  {
    value: "high",
    label: "High",
  },
];

export type IPriority = "low" | "mid" | "high";
export type IStatus = "all" | "completed" | "pending" | "priority";

export interface ITask {
  id: number;
  completed?: boolean;
  description: string;
  priority: IPriority;
  due_date: string | null;
}

export interface ITaskState {
  errors?: {
    dueDate?: string[];
    priority?: string[];
    description?: string[];
  };
  success?: boolean;
  message?: string | null;
}

export interface IStats {
  total: number;
  pending: number;
  completed: number;
  highPriority: number;
}