<template>
  <div class="bg-gray-200 py-7 shadow-lg flex justify-between container">
    <select
      v-model="versionSort"
      @change="versionChange"
      class="py-3 px-2 rounded-lg"
    >
      <option value="asc">Ascending</option>
      <option value="des">Descending</option>
    </select>
    <input
      @change="versionChange"
      v-model="nameSort"
      placeholder="Enter Text"
      class="border rounded-lg active:border-black py-2 px-3"
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
