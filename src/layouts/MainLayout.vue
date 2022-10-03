<script setup lang='ts'>
// import AppHeader from '@/components/layout/AppHeader.vue';
import SidebarButton from '@/components/layout/SidebarButton.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';
import { ref } from 'vue';
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const sidebarOpen = ref(false);
</script>

<template>
  <div class="xl:px-20 text-gray-800 bg-gray-200">

    <!-- <app-header v-model="sidebarOpen" /> -->
    <sidebar-button v-model="sidebarOpen" position="left" class="md:hidden" />

    <app-sidebar v-model="sidebarOpen" />

    <main class="main-content">
      <router-view />
    </main>
  </div>
</template>