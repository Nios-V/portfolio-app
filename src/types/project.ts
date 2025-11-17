import type { Skill } from "./skill.js";

export interface Project {
    id: string;
    profile_id: string;
    name: string;
    short_description: string;
    complete_description?: string;
    image_url?: string;
    repository_url?: string;
    project_skills?: Skill[];
}