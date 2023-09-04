<template>
    <div class="col-span-12 z-30 absolute w-[81.5%] h-[calc(100% - 20%)] top-[20%] left-[18.5%] flex justify-center">
        <div class="overflow-auto lg:overflow-visible">
            <table class="table text-gray-400 border-separate space-y-6 text-sm">
                <thead class="bg-gray-800 text-gray-500">
                    <tr>
                        <th class="p-3">Nombre</th>
                        <th class="p-3">Apellido</th>
                        <th class="p-3">Edad</th>
                        <th class="p-3">Género</th>
                        <th class="p-3">Correo</th>
                        <th class="p-3">Rol</th>
                        <th class="p-3">Activo</th>
                        <th class="p-3 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="users in user" class="bg-gray-800" >
                        <td class="p-3">{{ users.name }}</td>
                        <td class="p-3">{{ users.lastName }}</td>
                        <td class="p-3">{{ users.age }}</td>
                        <td class="p-3">{{users.gender  }}</td>
                        <td class="p-3">{{ users.email }}</td>
                        <td class="p-3">{{ users.rol }}</td>
                        <td class="p-3 text-green-500">Sí</td>
                        <td class="p-3">
                            <!-- modal -->
                            <updateuser></updateuser>
                            <button type="button"
                                class="border border-red-500 bg-red-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline">
                                Eliminar
                            </button>
                        </td>
                    </tr>
                    <!--gregar mas filas-->
                </tbody>
            </table>
        </div>
    </div>
</template>

<script lang="ts" setup>
import updateuser from '../../components/user/Update.user.vue'
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';

// pagination
import { UseUserStore } from '../../store/user.store';
const { GetAllUser } = UseUserStore();

const { user } = storeToRefs(UseUserStore())

onMounted(async () => {
    await GetAllUser()
});

</script>

<style lang="scss" scoped>
.table {
    border-spacing: 0 15px;
}

i {
    font-size: 1rem !important;
}

.table tr {
    border-radius: 20px;
}

tr td:nth-child(n+8),
tr th:nth-child(n+8) {
    border-radius: 0 .625rem .625rem 0;
}

tr td:nth-child(1),
tr th:nth-child(1) {
    border-radius: .625rem 0 0 .625rem;
}


</style>