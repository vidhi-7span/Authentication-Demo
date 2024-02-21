<template>
  <div
    class="bg-gray-200 py-7 shadow-lg flex justify-between items-center text-center container px-6"
  >
    <select
      v-model="versionSort"
      @change="versionChange"
      class="py-3 px-2 rounded-lg border hover:shadow-slate-600 hover:shadow-md hover:ring-2 ring-black border-black"
    >
      <option value="asc">Ascending</option>
      <option value="des">Descending</option>
    </select>
    <h1 class="text-3xl font-bold shadow-md rounded-md shadow-slate-600 px-3">
      Welcome!
    </h1>
    <input
      @change="versionChange"
      v-model="nameSort"
      placeholder="Enter Name"
      class="border rounded-lg active:border-black py-2 px-3 order hover:shadow-slate-600 hover:shadow-md hover:ring-2 ring-black border-black"
    />
  </div>
</template>
<script setup>
import { ref } from "vue";

const versionSort = ref("asc");
const nameSort = ref("");
const emit = defineEmits(["changed"]);
const versionChange = () => {
  emit("changed", versionSort.value, nameSort.value);
};
const nameChange = () => {
  emit("search", nameSort.value);
};
</script>
