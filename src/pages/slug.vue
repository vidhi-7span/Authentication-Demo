<template>
  <div class="flex items-center min-h-dvh">
    <div
      class="p-5 mx-auto w-80 shadow-2xl rounded-lg"
      v-for="(data, i) in slugRecord"
      :key="i"
    >
      <span>Name : {{ data.name }}</span>
      <br />
      <span>Bio : {{ data.bio }}</span>
      <br />
      <span>Language : {{ data.language }}</span>
      <br />
      <span>Slug : {{ data.slug }}</span>
      <br />
      <span>Version : {{ data.version }}</span
      ><br />
      <button
        @click="goBack"
        class="px-4 font-bold hover:shadow-slate-600 hover:shadow-md py-2 border-2 hover:ring-2 ring-black border-black rounded-md my-3"
      >
        Go Back
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import details from "../static/db.js";

const router = useRouter();
const slugPath = ref(router.currentRoute.value.params.slug);

const slugRecord = computed(() => {
  return details.filter((item) => {
    return item.slug == slugPath.value;
  });
});

const goBack = () => {
  router.go(-1);
};
</script>
