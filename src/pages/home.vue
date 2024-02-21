<template>
  <Header @changed="versionSort"></Header>
  <div
    class="p-5 grid grid-cols-2 gap-5 order shadow-slate-600 shadow-md ring-2 ring-black border-black"
  >
    <router-link
      :to="'/detail/' + data.slug"
      v-for="(data, i) in sortedDetails"
      :key="i"
      class="border rounded-lg border-black hover:ring-2 ring-black p-2 overflow-hidden hover:shadow-slate-600 hover:shadow-md"
    >
      Name : {{ data.name }}<br />
      Language : {{ data.language }}<br />
      Slug : {{ data.slug }}<br />
      Version : {{ data.version }}
    </router-link>
  </div>
  <div>
    <h1 class="text-3xl font-bold px-3 text-center pt-5">Thank You!</h1>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import details from "../static/db.js";
import Header from "../components/Header.vue";
const detail = ref(details.slice(0, 15));
const versionCurrentSort = ref("asc");
const searchKeyword = ref("");

const sortedDetails = computed(() => {
  // Sort Records by asc & des
  let sortedRecords = [];
  if (versionCurrentSort.value == "asc") {
    sortedRecords = detail.value.sort((a, b) => a.version - b.version);
  } else {
    sortedRecords = detail.value.sort((a, b) => b.version - a.version);
  }

  // Filter For keyword
  return sortedRecords.filter((item) => {
    return item.name.includes(searchKeyword.value);
  });
});

const versionSort = (versionSort, SearchKey) => {
  versionCurrentSort.value = versionSort;
  searchKeyword.value = SearchKey;
};
</script>
