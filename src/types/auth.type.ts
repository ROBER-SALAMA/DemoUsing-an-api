//! paso 2 los type
export interface MakeLoginData {
    email: string;
    passaword: string;
}

export interface User {
    id: number;
    email: string;
    rolId: string;
}

export interface Response {
    access_token?: string;
    user?: User;
}