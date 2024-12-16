import { Position } from './Position';

export interface Department {
  id: string;
  name: string;
  description: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  position: Position[];
}