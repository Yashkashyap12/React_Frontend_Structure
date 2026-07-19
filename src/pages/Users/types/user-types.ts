export interface User {
    id: number;
    name: string;
    email: string;
}

export interface UserForm {
    name: string;
    email: string;
}

export type UserAction = "add" | "edit" | "view";