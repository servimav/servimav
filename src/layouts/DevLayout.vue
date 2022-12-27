<script setup lang='ts'>
import DevSidebar from '@/components/layout/DevSidebarLeft.vue';
import SidebarButton from '@/components/layout/SidebarButton.vue';
import { ref } from 'vue';

const showSidebar = ref(false);
</script>

<template>
  <div class="text-gray-800 bg-gray-200">

    <sidebar-button class="md:hidden" position="left" v-model="showSidebar" />

    <Suspense>
      <div>
        <dev-sidebar class="left-sidebar" @click-link="showSidebar=false" :class="{'show-sidebar': showSidebar}" />

        <main class="main-content" :class="{'main-content-move': showSidebar}">
          <div class="text-gray-800">
            <router-view />
          </div>
        </main>
      </div>
    </Suspense>
  </div>
</template>
