<template>
    <button @click="confirmDelete">Eliminar</button>
  </template>
  
  <script setup lang="ts">
  import Swal from 'sweetalert2';
  import 'sweetalert2/dist/sweetalert2.css';
  
  const confirmDelete = async () => {
    const result = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar',
    });
  
    if (result.isConfirmed) {
      Swal.fire('Eliminado', 'El elemento ha sido eliminado', 'success');
    }
  };
  </script>
  
  <style lang="scss" scoped>
  </style>
  