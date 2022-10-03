<script setup lang='ts'>
import SvgIcon from '@jamescoyle/vue-icon'
import { mdiMenu, mdiClose } from '@mdi/js'
import { toRefs } from 'vue';

const $emit = defineEmits<{ (e: 'click-link'): void, (e: 'update:model-value', p: boolean): void }>();
const $props = defineProps<{ modelValue: boolean }>();

const { modelValue } = toRefs($props)
</script>

<template>
  <header>
    <nav class="relative">
      <div class="fixed z-20 w-full bg-white border-b border-gray-100">
        <!-- Primary Navigation Menu -->
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex justify-between h-16 gap-5">
            <!-- AppLogo -->
            <div class="flex">
              <div class="shrink-0 flex items-center cursor-pointer">
                asdasd
              </div>
            </div>
            <!-- / AppLogo -->
            <div class="flex items-center md:hidden shrink-0">
              <div class="cursor-pointer" @click="$emit('update:model-value', !modelValue)">
                <svg-icon type="mdi" :path="modelValue ? mdiClose : mdiMenu" />
              </div>
            </div>
          </div>
        </div>
        <!-- / Primary Navigation Menu -->
      </div>
    </nav>
  </header>
</template>