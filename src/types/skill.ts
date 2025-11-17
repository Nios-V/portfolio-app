export interface Skill {
    id: string;
    name: string;
    icon_url?: string;
    experience_level?: 'Básico' | 'Intermedio' | 'Avanzado';
    is_core?: boolean;
}