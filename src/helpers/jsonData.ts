import { $router } from '@/router';
import { RouteLocationNormalized, RouteLocationNormalizedLoaded } from 'vue-router';
import type { ISkillKey } from './skillData';

/**
 * -----------------------------------------
 *	Type
 * -----------------------------------------
 */

export interface IJsonData {
  about: string[];
  developer: {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    skill: string;
    profileImg: string;
  },
  skills: ISkillKey[];
  site: {
    introImg: string;
  }
}

/**
 * -----------------------------------------
 *	Function
 * -----------------------------------------
 */

export const useJsonData = async (route?: RouteLocationNormalizedLoaded): Promise<IJsonData> => {
  const currentRoute = route ? route : $router.currentRoute.value;
  if (currentRoute.params.developer) {
    const res = await fetch(`/json/${currentRoute.params.developer}.json`);
    return await res.json();
  } else {
    throw new Error("fetch Error");
  }
}