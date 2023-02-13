<script setup lang="ts">
  import { useHead } from '@vueuse/head';

  useHead({
    title: '<your-project-name>',
    meta: [{ name: 'description', content: 'Sample Example' }],
  });
</script>

<template>
  <router-view />
</template>

<style scoped></style>
