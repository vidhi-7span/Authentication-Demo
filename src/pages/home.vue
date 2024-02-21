<template>
  <div>
    <div v-for="(data, i) in detail" key="i">{{ data.name }}</div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import details from "../static/db.js";

const detail = ref(details.slice(0, 100));
// console.log(detail.value);

onMounted(async () => {
  try {
    const response = await fetch("../static/db.js");
    const jsonData = await response.json();
    detail.value = jsonData;
  } catch (error) {
    console.error(error);
  }
});

onmouse;
</script>
