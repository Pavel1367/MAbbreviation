<template>
  <q-header elevated  height-hint="98">
    <q-toolbar class="shadow" :class="[bgColor, textColor]">
      <q-btn flat no-caps>
        <q-icon class="q-mr-xs" name="collections_bookmark" />
        <span class="" style="font-size: 18px"
          ><span class="text-blue">M</span>Abbreviation</span
        >
      </q-btn>
      <q-space></q-space>
      <!--
        notice shrink property since we are placing it
        as child of QToolbar
      -->
      <q-tabs indicator-color="blue" v-model="tab" shrink>
        <q-route-tab to="/" exact name="tab1" label="Main" />
        <q-route-tab to="/about" exact name="tab2" label="About" />
      </q-tabs>
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useQuasar } from 'quasar';

import { ref, computed } from 'vue';
const bgColor = computed(() => {
  return $q.dark.isActive ? 'bg-dark' : 'bg-white'
})
const textColor = computed(() => {
  return $q.dark.isActive ? 'text-white' : 'text-dark'
})
const $q = useQuasar();
const tab = ref('');
</script>

<style scoped></style>
