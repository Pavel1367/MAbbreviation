<template>
  <div class="search w-100">
    <q-input
      outlined
      v-model="searchQuery.query"
      debounce="500"
      class="text-h6"
      label-slot
    >
      <template v-slot:prepend>
        <q-icon name="search" size="32px" />
      </template>
      <template v-slot:label>
        Total found:
        <span class="q-px-sm bg-blue text-white text-italic rounded-borders">{{
          tweened.value.toFixed(0)
        }}</span>
      </template>

      <template v-slot:append>
        <q-icon
          name="close"
          @click="searchQuery.query = ''"
          class="cursor-pointer"
        />
      </template>
    </q-input>
    <q-linear-progress
      v-if="isLoading"
      dark
      query
      color="cyan"
      class="q-mt-none absolute"
    />
    <div class="q-pt-md flex q-gutter-lg">
      <q-toggle
        :label="'Search by content'"
        v-model="searchQuery.contentSearch"
      />
      <q-toggle
        :label="'Dark Mode'"
        v-model="darkMode"
        @update:model-value="toggleDarkMode"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { watch, ref, reactive, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useMainStore } from '../mystore/main';
import gsap from 'gsap';
import { useQuasar } from 'quasar';
const { searchQuery, isLoading, totalFound } = storeToRefs(useMainStore());
const tweened = reactive({ value: 0 });
const $q = useQuasar();
const darkMode = ref($q.dark.isActive);
const toggleDarkMode = () => {
  $q.dark.set(!$q.dark.isActive);
  return true;
};
onMounted(() => {
  tweened.value = totalFound.value;
  console.log('mounted search');
});

watch(totalFound, (newValue) => {
  gsap.to(tweened, { duration: 0.5, value: newValue });
});
</script>

<style scoped></style>
