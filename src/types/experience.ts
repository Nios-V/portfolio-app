import type { Goal } from "./goal.js";

export interface Experience {
    id: string;
    profile_id: string;
    type: 'Laboral' | 'Académica' | 'Voluntariado';
    company_name: string;
    position?: string;
    start_date: string;
    end_date?: string | null;
    order: number;
    goals?: Goal[];
}