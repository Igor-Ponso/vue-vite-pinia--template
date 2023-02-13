<script setup lang="ts">
  /**
   * Help Layout.
   * @name 'LayoutDefault'
   * @version 1.0.0
   * @note
   * Please be aware this is a
   * template proposal for the
   * default layout
   */

  import { useThemeStore } from '@/store/themeStore';
  import { storeToRefs } from 'pinia';
  const themeStore = useThemeStore();
  const { theme } = storeToRefs(themeStore);
</script>

<template>
  <v-app :theme="theme">
    <v-main>
      <v-container :class="['fill-height']">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>