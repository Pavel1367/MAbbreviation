<template>
  <q-layout view="lHh Lpr lFf">
    <MyHeader></MyHeader>
    <q-scroll-area
      
       :delay="10"
       style="height: 100vh;"
    >
      <q-page-container>
        <router-view v-slot="{ Component }">
          <transition
            appear
            mode="out-in"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
          >
            <component :is="Component" />
          </transition>
        </router-view>
      </q-page-container>
    </q-scroll-area>
  </q-layout>
</template>

<script setup lang="ts">
import MyHeader from 'src/components/MyHeader.vue';
// const thumbStyle = {
//   right: '4px',
//   borderRadius: '5px',
//   backgroundColor: '#027be3',
//   width: '5px',
//   opacity: 0.75,
// };

// const barStyle = {
//   right: '2px',
//   borderRadius: '9px',
//   backgroundColor: '#027be3',
//   width: '9px',
//   opacity: 0.2,
// };
</script>
