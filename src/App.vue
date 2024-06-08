<template>
  <router-view />
</template>

<script setup lang="ts">
defineOptions({
  name: 'App',
});
</script>
<style>
.container{
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 15px;
}
.vh-100{
  min-height: 100vh;
}
.w-100 {
  width: 100%;
}
</style>
