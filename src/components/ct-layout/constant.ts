import { LANGUAGES, words, WORDS } from '@/constants/languages';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { UseComponentStoreProps } from '@/stores/component/type';

import { CTSeoMetaPropsMeta } from '../ct-seo-meta/type';

import { CTLayoutProps } from './type';

export const headerHeight = 70;
export const breadcrumbHeight = 10;
export const menuSidebarWidth = 240;
export enum NAV_ITEM_ID {
  PROFILE = 'profile',
  PROJECT = 'project',
  EXP = 'experience',
}
export const pageLayouts: (language?: UseComponentStoreProps['language']) => {
  [key in UIEndpointsCommon]?: {
    layoutProps?: Omit<CTLayoutProps, 'children'>;
    meta: CTSeoMetaPropsMeta;
  };
} = (language = LANGUAGES.ENG) => ({
  [UIEndpointsCommon.LOADING]: {
    meta: {
      titlePage: 'Loading Page in Angga Prasetyo',
      descriptionPage: 'Loading Page for Angga Prasetyo',
    },
  },
  [UIEndpointsCommon.HOME]: {
    meta: {
      titlePage: 'Profile || Angga Prasetyo',
      descriptionPage: 'Profile Page for Angga Prasetyo',
    },
    layoutProps: {
      title: words[WORDS.OVERVIEW][language],
      showNav: true,
      showChar: true,
    },
  },
  [UIEndpointsCommon.PROJECTS]: {
    meta: {
      titlePage: 'Projects || Angga Prasetyo',
      descriptionPage: 'Projects Page for Angga Prasetyo',
    },
    layoutProps: {
      title: words[WORDS.OVERVIEW][language],
      showNav: true,
      showChar: false,
    },
  },
});
