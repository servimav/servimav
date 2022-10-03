<script setup lang='ts'>
import SvgIcon from '@jamescoyle/vue-icon';
import { mdiHeart } from '@mdi/js'
</script>

<template>
  <footer class="p-2">
    <div class="text-center font-thin text-sm">
      <p>
        Made with
        <svg-icon type="mdi" class="w-4 inline" :path="mdiHeart" />
        by <a href="https://github.com/AdriCQ">AdriCQ</a>
      </p>
    </div>

  </footer>
</template>