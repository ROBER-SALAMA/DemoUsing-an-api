import { defineStore } from 'pinia';
import { create_rol, get_rol, update_rol, delete_rol } from '../services/rol.service';
import { GetRol } from '../types/rol.type';
import { useToast } from 'vue-toastification';

const toast = useToast();
export const UseRolStore = defineStore("rol", {
    state: () => ({
        rol: [] as GetRol[],
        pages: [] as Array<string | number>,
        pagines: {
        total: 0,
        totalPages: 0,
        nextPag: 0,
        prevPag: 0,
        currentPage: 0,
        },
    }),
    actions: {
        async GetAllRol(){
            try {
                const data = await get_rol();
                this.rol = data.rol
            } catch (error) {
                toast.error("Error")
            }
        },

        async CreateRol(rol:string) {
            try{
                const data = await create_rol(rol)

                if (data.ok) {
                    await this.GetAllRol()
                    toast.success("Rol creado ")
                    
                }else{
                    toast.error("Error al crear rol")
                }
            }catch{
                toast.error("Error")
            }
        },

        async DeleteRol(id: number) {
            try {
                const data = await delete_rol(id);
                if (data.ok) {
                    toast.success("Rol eliminado")
                }
            } catch  {
                toast.error("Error")
            }
        },

        async UpdateRol(id:number, rol:string ) {
            try {
                const data = await update_rol(id,rol);
                if (data.ok) {
                    await this.GetAllRol();
                    toast.info("ROl actualizado")
                }else{
                    toast.error("Error al actualizar rol")
                }
            } catch (error) {
                toast.error("Error en el servidor")
            }
        }
    }
})