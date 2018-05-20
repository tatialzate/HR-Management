import { Project } from '../projects/project';

export interface Employee {
    id: string;
    name: string;
    company: string;
    age: number;
    birthday: Date;
    favoriteColor: string;
    project: Project;
}
