<template>
  <q-header elevated class="bg-primary text-white" height-hint="98">
    <q-toolbar class="bg-white shadow-1 rounded-borders text-dark">
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
import { ref } from 'vue';

const tab = ref('');
</script>

<style scoped></style>
