<template>
  <div>
    <div v-for="(data, i) in detail" key="i">{{ data.name }}</div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import details from "./static/db.js";

const detail = ref(details.slice(0, 100));
console.log(detail.value);
</script>
