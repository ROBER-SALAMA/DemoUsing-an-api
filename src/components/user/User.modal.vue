<template>
    <div class="w-[81.5%] h-[18%] left-[18.5%] z-20 absolute bg-orange-400">
        <section class="flex p-10 justify-center items-start ">
            <button onclick="document.getElementById('myModal').showModal()" id="btn"
                class="py-3 px-10 bg-gray-800 text-white rounded text shadow-xl">Agregar</button>
        </section>

        <dialog id="myModal" class=" bg-red-300 rounded-md w-[65%] h-[80%]">
            <div class="flex flex-col w-full h-auto">
                <!-- Header -->
                <div class="flex w-full h-auto justify-center items-center">
                    <div class="flex w-10/12 h-auto py-3 justify-center items-center text-2xl font-bold">
                        Crear usuario
                    </div>
                    <div onclick="document.getElementById('myModal').close();"
                        class="flex w-1/12 h-auto justify-center cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="feather feather-x">
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
                            <input type="text" id="rolName" name="rolName" placeholder="Rol"
                                class="mt-1 p-2 block w-full rounded-md bg-white border-gray-300 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                        </div>
                        <!-- Botones -->
                        <div class="flex justify-center space-x-4">
                            <button 
                                type="submit"
                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Crear usuario</button>
                            <button 
                                type="submit"
                                class="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">Cancelar</button>
                        </div>
                    </form>
                </div>
            </div>
        </dialog>
    </div>
</template>

<script lang="ts" setup>

</script>

<style lang="scss" scoped>
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