<template>
  <div>
    <button @click="sortVersionsAsc">Sort Ascending</button>
    <button @click="sortVersionsDesc">Sort Descending</button>
    <ul>
      <li v-for="version in sortedVersions" :key="version">{{ version }}</li>
    </ul>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import db from "./db.json";

export default {
  setup() {
    const versions = ref(db.versions);

    const sortedVersions = computed(() => {
      return versions.value.sort((a, b) => {
        // Parsing the version numbers into arrays of numbers
        const versionA = a.split(".").map(Number);
        const versionB = b.split(".").map(Number);

        // Comparing each part of the version number
        for (let i = 0; i < Math.max(versionA.length, versionB.length); i++) {
          const partA = versionA[i] || 0;
          const partB = versionB[i] || 0;

          if (partA < partB) {
            return -1;
          } else if (partA > partB) {
            return 1;
          }
        }

        return 0;
      });
    });

    const sortVersionsAsc = () => {
      versions.value.sort();
    };

    const sortVersionsDesc = () => {
      versions.value.sort().reverse();
    };

    return {
      sortedVersions,
      sortVersionsAsc,
      sortVersionsDesc,
    };
  },
};
</script>
