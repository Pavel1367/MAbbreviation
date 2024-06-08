<template>
  <q-page-container class="container">
    <q-page class="column items-center">
      <MySearch />

      <MyList />
      <div
        v-if="hasMore"
        class="intersector"
        v-intersection="onIntersection"
      ></div>
    </q-page>
  </q-page-container>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import MySearch from 'src/components/MySearch.vue';
import MyList from '../components/MyList/MyList.vue';
import { useMainStore } from 'src/mystore/main';
import { storeToRefs } from 'pinia';

const { abbreviations, searchQuery, hasMore, isIntersectionActive } =
  storeToRefs(useMainStore());
const { fetchAbbreviations,resetIntersectionActive } = useMainStore();

const onIntersection = (entry: IntersectionObserverEntry) => {
  if (isIntersectionActive.value) return true;
  if (entry.isIntersecting && hasMore.value)
    fetchAbbreviations(searchQuery.value);
  console.log('fetch intersection');
  return true;
};

onMounted(() => {
  resetIntersectionActive();
  if (abbreviations.value.length) return;
  fetchAbbreviations();
  console.log('fetchworked');
});
</script>
<style scoped>
.intersector {
  height: 30px;
  position: relative;
}
</style>
