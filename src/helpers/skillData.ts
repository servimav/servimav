import type { ISkill } from '@/components/widgets/SkillWidget.vue'
import {
  mdiAndroid, mdiWeb, mdiGit, mdiLanguageHtml5, mdiLanguageCss3, mdiNodejs, mdiLaravel, mdiVuejs,
  mdiLanguageTypescript
} from '@mdi/js';
/**
 * Skill key
 */
export type ISkillKey = 'android' | 'css3' | 'fullstack' | 'git' | 'html5' | 'laravel' | 'nodejs' | 'ty[escript' | 'vuejs' | string;
/**
 * 
 */
interface IUseSkills {
  [key: ISkillKey]: ISkill;
}

/**
 * 
 * @returns 
 */
export function useSkills(): IUseSkills {
  return {
    fullstack: {
      color: '#2f7ac4',
      description: 'Fullstack Web Developer',
      icon: mdiWeb,
      iconColor: 'white',
      title: 'Web'
    },
    android: {
      color: '#26a69a',
      description: 'Android hybrid application development',
      icon: mdiAndroid,
      iconColor: 'white',
      title: 'Android'
    },
    git: {
      color: '#211e1e',
      description: 'Git',
      icon: mdiGit,
      iconColor: 'white',
      title: 'Version Control'
    },
    // Advanced
    nodejs: {
      color: '#178a32',
      description: 'Express, NestJS',
      icon: mdiNodejs,
      iconColor: 'white',
      title: 'NodeJS'
    },
    laravel: {
      color: '#de142c',
      description: 'Backend PHP Framework',
      icon: mdiLaravel,
      iconColor: 'white',
      title: 'Laravel'
    },
    vuejs: {
      color: '#1dad3f',
      description: 'Pinia, Quasar, Composition API, VueRouter',
      icon: mdiVuejs,
      iconColor: 'white',
      title: 'Vuejs'
    },
    // Advanced row 2
    html5: {
      color: '#d98429',
      description: 'HTML5 markup',
      icon: mdiLanguageHtml5,
      iconColor: 'white',
      title: 'HTML5'
    },
    css3: {
      color: '#2653a6',
      description: 'CSS3, Bootstrap 5, Tailwinds, SCSS',
      icon: mdiLanguageCss3,
      iconColor: 'white',
      title: 'CSS3'
    },
    typescript: {
      color: '#2653a6',
      description: 'Javascript / Typescript',
      icon: mdiLanguageTypescript,
      iconColor: 'white',
      title: 'Typescript'
    },
  }
}