<script setup lang='ts'>
import { toRefs } from 'vue';
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMenu, mdiClose } from '@mdi/js';

const $emit = defineEmits<{ (e: 'update:model-value', p: boolean): void }>();
const $props = defineProps<{ modelValue: boolean, position: 'left' | 'right', white?: boolean }>();

const { modelValue, position, white } = toRefs($props)
</script>

<template>
  <!-- Menu Button -->
  <div class="fixed top-0 z-50" :class="position === 'left'?'left-0':'right-0'">
    <div class="cursor-pointer p-1" :class="white && !modelValue ? 'text-white' : 'text-gray-800'"
      @click="$emit('update:model-value', !modelValue)">
      <SvgIcon type="mdi" :path="modelValue?mdiClose:mdiMenu" class="h-8 w-8" />
    </div>
  </div>
  <!-- / Menu Button -->
</template>