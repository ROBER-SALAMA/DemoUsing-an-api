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
                        <th class="p-3">Contraseña</th>
                        <th class="p-3">Usuario Activo</th>
                        <th class="p-3 text-left">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr class="bg-gray-800">
                        <td class="p-3">John</td>
                        <td class="p-3">Doe</td>
                        <td class="p-3">30</td>
                        <td class="p-3">Masculino</td>
                        <td class="p-3">john.doe@example.com</td>
                        <td class="p-3">********</td>
                        <td class="p-3">Sí</td>
                        <td class="p-3">
                            <!-- modal -->
                            <button onclick="document.getElementById('myModal2').showModal()" id="btn" type="button"
                                class="border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline">
                                Actualizar
                            </button>
                            <dialog id="myModal2" class=" bg-red-300 rounded-md w-[65%] h-[50%]">
                                <div class="flex flex-col w-full h-auto">
                                    <!-- Header -->
                                    <div class="flex w-full h-auto justify-center items-center">
                                        <div
                                            class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                                            Actualizar usuario
                                        </div>
                                        <div onclick="document.getElementById('myModal2').close();"
                                            class="flex w-1/12 h-auto justify-center cursor-pointer">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                                                <line x1="18" y1="6" x2="6" y2="18"></line>
                                                <line x1="6" y1="6" x2="18" y2="18"></line>
                                            </svg>
                                        </div>
                                    </div>
                                    <div
                                        class="flex w-full h-auto py-10 px-2 justify-center items-center bg-gray-200 rounded text-center text-gray-500">
                                        <!-- formulario -->
                                        <form class="flex flex-col space-y-4">
                                            <div class="mb-4">
                                                <input type="text" id="rolName" name="rolName " placeholder="Nombre"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Apellido"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Edad"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Genero"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Correo"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Contraseña"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                                <input type="text" id="rolName" name="rolName" placeholder="Usuario activo"
                                                    class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                            </div>
                                            <!-- Botones -->
                                            <div class="flex justify-center space-x-4">
                                                <button type="submit"
                                                    class="px-4 py-2 bg-indigo-500 text-white rounded hover:bg-indigo-600">Actualizar usuario</button>
                                                <button type="button"
                                                    class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Cancelar</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </dialog>
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

dialog[open] {
    animation: appear .15s cubic-bezier(0, 1.8, 1, 1.8);
}

dialog::backdrop {
    background: linear-gradient(45deg, rgba(0, 0, 0, 0.5), rgba(54, 54, 54, 0.5));
    backdrop-filter: blur(3px);
}


@keyframes appear {
    from {
        opacity: 0;
        transform: translateX(-3rem);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>