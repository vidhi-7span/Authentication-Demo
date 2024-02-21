<template>
  <Header @changed="versionSort"></Header>
  <div>
    <div v-for="(data, i) in sortedDetails" :key="i">
      <pre>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import details from "../static/db.js";
import Header from "../components/Header.vue";
const detail = ref(details.slice(0, 100));
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
