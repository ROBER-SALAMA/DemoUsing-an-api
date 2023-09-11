<template>
    <ul class="flex w-9 justify-centerbg-orange-800">
      <li class="bg-lime-400">
        <button
          @click="changePage(prev)"
          class="mx-1 bg-blue-950 cursor-pointer rounded-full p-2 w-12 h-12 text-center text-lg text-white"
          :disabled="currentPage === 1"
        >
          <oh-vue-icon name="bi-arrow-left-circle-fill" scale="1.5"></oh-vue-icon>
        </button>
      </li>
      <li
        v-for="page in pages"
        :key="page"
        :class="['mx-1 border font-semibold border-blue rounded-full p-2 w-12 h-12 text-center text-sm flex justify-center items-center cursor-pointer', currentPage === page ? 'bg-blue-958 text-white' : 'text-blue-956']"
        @click="changePage(page)"
      >
        {{ page }}
      </li>
      <li class="bg-red-800">
        <button
          class="mx-1 bg-blue-950 rounded-full p-2 w-12 h-12 cursor-pointer text-center text-lg text-white"
          :disabled="currentPage === totalPag"
          @click="changePage(next)"
        >
          <oh-vue-icon name="bi-arrow-right-circle-fill" scale="1.5"></oh-vue-icon>
        </button>
      </li>
    </ul>
  </template>
  

<script lang="ts" setup>
// import OhVueIcon from "../../plugins/oh-vue-icon"

interface Props {
  pages: Array<number | string>;
    currentPage: number;
    totalPag: number;
    next: number;
    prev: number;
}

const { pages, currentPage, totalPag, next, prev } = defineProps<Props>();

type Emits = {
    (event: "method", page: number | string): void;
}

const emits = defineEmits<Emits>();

const changePage = (page: number | string) => {
    emits("method", page)
}



</script>

<style lang="scss" scoped>


</style>