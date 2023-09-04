// import { GetRol } from './rol.type';
//? obtener
export interface GetUser{
    id: number
    name: string
    lastName: string
    age: number
    gender: string
    email: string
    password: string
    isActive: boolean
    rol: {
        id: number
        rol: string
        isActive: boolean
    }
    rolId: number;
}

export interface CreateUser{
    lasName: number
    age: number
    gender:string
    email: string
    password: string
    isActive: boolean
    rolId: number
}

export interface UpdateUser{
    id: number
    lasName: number
    age: number
    email: string
    isActive: boolean
    rolId: number
}