<template>
  <div>
    <div class="list_item row items-start w-100">
      <div class="abbreviation col-2">
        <word-highlighter
          :query="searchQuery.query"
          :highlight-style="highlight as any"
        >
          <h5 class="q-mt-xs highlight">
            {{ index + 1 }}. {{ abbreviation.name }}
          </h5>
        </word-highlighter>
      </div>
      <div class="eng_list col-5">
        <q-list>
          <q-item
            class="items-start"
            v-ripple
            v-for="(meaning, index) in abbreviation.eng"
            :key="index"
          >
            <q-item-section class="text-subtitle1">
              <word-highlighter
                :highlight-style="highlight as any"
                :query="searchQuery.contentSearch ? searchQuery.query : ''"
              >
                {{ abbreviation.eng.length > 1 ? `${index + 1}) ` : '-' }}
                {{ meaning }}
              </word-highlighter>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
      <div class="rus_list col-5">
        <q-list
          separator
          v-for="(meaning, index) in abbreviation.rus"
          :key="index"
        >
          <q-item v-ripple>
            <q-item-section class="text-subtitle1">
              <word-highlighter
                :highlight-style="highlight as any"
                :query="searchQuery.contentSearch ? searchQuery.query : ''"
              >
                {{ abbreviation.rus.length > 1 ? `${index + 1}) ` : '-' }}

                {{ meaning }}
              </word-highlighter>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    </div>
    <q-separator />
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import WordHighlighter from 'vue-word-highlighter';
import { useMainStore } from 'src/mystore/main';
import { IAbbreviation } from 'src/mystore/models';
import { storeToRefs } from 'pinia';
// import { computed } from 'vue';
defineProps<{ abbreviation: IAbbreviation; index: number }>();

const { searchQuery } = storeToRefs(useMainStore());
// const searchQueryString = computed(()=>{
//   return searchQuery.value.query.toString()
// })
const highlight = reactive({
  color: '#1997ff',
  backgroundColor: 'transparent',
});
</script>

<style scoped>
.list_item {
  padding: 10px 0;
}

</style>
