export interface Position {
  id: string;
  name: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  description: string;
  departmentId: string;
  employeeCount: number;
}