<script setup lang='ts'>
import SvgIcon from '@jamescoyle/vue-icon';

/**
 * -----------------------------------------
 *	Init
 * -----------------------------------------
 */

export interface ISkill {
  color: string;
  iconColor: string;
  icon: string;
  title: string;
  description: string;
}

const $props = defineProps<{
  skill: ISkill
}>()
</script>

<template>
  <div
    class="skill-widget border border-gray-200 shadow-gray-300 hover:shadow-2xl hover:shadow-gray-400 text-center pt-5">
    <span class="icon-container">
      <div class="flex justify-center">
        <svg-icon class="icon" type="mdi" :path="$props.skill.icon" />
      </div>

    </span>
    <div class="py-12">
      <div class="text-lg">{{$props.skill.title}}</div>
      <div class="p-1 font-thin ">
        {{$props.skill.description}}
        <slot />
      </div>
    </div>
  </div>
</template>


<style scoped>
.skill-widget {
  border-bottom: 2px solid v-bind('$props.skill.color');
}

.icon-container {
  position: absolute;
  top: -20px;
  left: 0;
  right: 0;
  width: 100px;
  height: 50px;
  display: table;
  margin: 0 auto;
  background: v-bind('$props.skill.color');
}

.icon-container::after,
.icon-container::before {
  position: absolute;
  left: 0;
  right: 0;
  content: '';
}

.icon-container::after {
  bottom: -30px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 30px 50px 1px 50px;
  border-color: v-bind('$props.skill.color') transparent transparent transparent;
}

.icon-container::before {
  top: -30px;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 1px 50px 30px 50px;
  border-color: transparent transparent v-bind('$props.skill.color') transparent;
}

.icon {
  color: v-bind('$props.skill.iconColor');
  z-index: 1;
  width: 2.5rem;
  height: 3rem;
}
</style>