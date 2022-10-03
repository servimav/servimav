<script setup lang='ts'>
import SkillWidget, { ISkill } from '@/components/widgets/SkillWidget.vue';
import { isOnViewport, whenOnViewport, useSkills, useJsonData } from '@/helpers';
import { computed, onBeforeUnmount, onMounted, ref } from 'vue';
/**
 * -----------------------------------------
 *	Data
 * -----------------------------------------
 */
const showAll = ref(false);
const $jsonData = await useJsonData();

// List developer skills
const skills = computed<ISkill[]>(() => {
  const s: ISkill[] = [];
  const allSkills = useSkills();
  $jsonData.skills.forEach(skillName => {
    for (const key in allSkills) {
      if (Object.prototype.hasOwnProperty.call(allSkills, key)) {
        if (skillName === key)
          s.push(allSkills[key]);
      }
    }
  })
  return s;
});

const transition = ref<Array<boolean>>([]);
/**
 * -----------------------------------------
 *	Methods
 * -----------------------------------------
 */

function scrollListener(el: Element, key: number) {
  transition.value[key] = isOnViewport(el)
}
/**
 * -----------------------------------------
 *	Lifecycle
 * -----------------------------------------
 */

onMounted(() => {
  skills.value.forEach((skill, key) => {
    const el = document.getElementById(`skill-widget-s01-${key}`);
    if (el)
      whenOnViewport(el, () => scrollListener(el, key))
  })
});

onBeforeUnmount(() => {
  skills.value.forEach((skill, key) => {
    const el = document.getElementById(`skill-widget-s01-${key}`);
    if (el)
      whenOnViewport(el, () => scrollListener(el, key), true)
  })
})
</script>

<template>
  <section>
    <div class="text-center sm:text-justify sm:px-4">
      <h4 class="text-3xl">My Skills</h4>
      <div class="font-thin">{{$jsonData.developer.skill}}</div>
    </div>
    <div class="mt-4">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        <skill-widget v-for="(skill, key) in skills" class="mt-12 opacity-0 shadow-2xl" :id="`skill-widget-s01-${key}`"
          :class="{'skill-widget-animation': transition[key], 'hidden': !showAll && key>2}" :skill="skill"
          :key="`skill-w-${key}`" />
      </div>
      <div class="mt-4">
        <div class="btn p-2 hover:bg-gray-500 hover:text-white bg-slate-300" @click="showAll = !showAll">
          {{showAll?'Hide':'Show'}} All Skills</div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@import '../../css/animations.css';

.skill-widget-animation {
  animation: opacity-transformY-animation 1s linear 0s 1 normal forwards;
}
</style>