//! paso 2 los type
export interface MakeLoginData {
    email: string;
    password: string;
}

export interface User {
    id: number;
    email: string;
    rolId: string;
}

export interface Response {
    token?: string;
    user?: User;
}