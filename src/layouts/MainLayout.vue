<script setup lang='ts'>
// import AppHeader from '@/components/layout/AppHeader.vue';
import SidebarButton from '@/components/layout/SidebarButton.vue';
import AppSidebar from '@/components/layout/AppSidebar.vue';
import AppIntroSection from '@/components/sections/AppIntroSection.vue';

import { onMounted, ref } from 'vue';
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */

const mainContent = ref();
const sidebarOpen = ref(false);
const sidebarVisible = ref(false);

const observer = new IntersectionObserver(
  ([entry]) => {
    sidebarVisible.value = !entry.isIntersecting;
  },
  {
    threshold: 0
  }
);
onMounted(() => {
  observer.observe(mainContent.value);
});
</script>

<template>
  <div class="text-gray-800">
    <div :class="{'scroll-intro': sidebarVisible}" class="relative" ref="mainContent">
      <app-intro-section id="section-intro" />
    </div>
    <!-- <app-header v-model="sidebarOpen" /> -->
    <div class="h-screen">

      <sidebar-button v-if="sidebarVisible" v-model="sidebarOpen" white position="left" class="md:hidden" />

      <app-sidebar :class="{'scrollSidebar': !sidebarVisible}" v-model="sidebarOpen" />

      <main class="mt-4 main-content" :class="{'w-full': !sidebarVisible}">
        <router-view />
      </main>
    </div>
  </div>
</template>

<style scoped>
.scrollSidebar {
  transform: translateX(-300px);
}


.scroll-intro {
  transform: translateX(300px);
  width: calc(100% - 300px);
}

@media screen and (max-width: 768px) {
  .scroll-intro {
    width: 100%;
  }
}
</style>