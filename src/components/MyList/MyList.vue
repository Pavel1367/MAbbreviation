<template>
  <div class="q-mt-xl w-100">
  
      <transition-group
        appear
        @leave="onLeave"
        @before-enter="onBeforeEnter"
        @enter="onEnter"
      >
        <MyListItem
          :abbreviation="abbreviation"
          :index="index"
          v-for="(abbreviation, index) in abbreviations"
          :key="abbreviation.id"
          :data-index="index"
        />
      </transition-group>

    <h2 v-if="!totalFound" class="text-center">
      Nothing found <q-icon name="sentiment_dissatisfied" />
    </h2>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import MyListItem from '../MyListItem.vue';
import { useMainStore } from 'src/mystore/main';
import { useListAnimations } from './useListAnimations';
const { abbreviations, totalFound } = storeToRefs(useMainStore());
const { onLeave, onEnter, onBeforeEnter } = useListAnimations();

onMounted(() => {
  console.log('rendered list');
});
</script>

<style scoped></style>
