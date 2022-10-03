<script setup lang='ts'>
import IntroSection from '@/components/sections/DevIntroSection.vue';
import AboutSection from '@/components/sections/DevAboutSection.vue';
import SkillsSection from '@/components/sections/DevSkillsSection.vue';
import ProjectsSection from '@/components/sections/DevProjectsSection.vue';
</script>

<template>
  <intro-section id="section-intro" />

  <about-section id="section-about" class="section-container mt-12" />

  <skills-section id="section-skills" class="section-container" />

  <projects-section id="section-projects" class="section-container" />

</template>