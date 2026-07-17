import { LANGUAGES, words, WORDS } from '@/constants/languages';
import { CONTACT_KEYS } from '@/constants/others';
import { UIEndpointsCommon } from '@/constants/ui-endpoints/common';
import { UseComponentStoreProps } from '@/stores/component/type';

import { CTSeoMetaPropsMeta } from '../ct-seo-meta/type';

import { CTLayoutProps, ExpressionMap } from './type';

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
      titlePage: 'Loading || Angga Prasetyo',
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

export const charExpressions: ExpressionMap = {
  [CONTACT_KEYS.EMAIL]: {
    Fcl_MTH_Fun: 0.7,
  },
  [CONTACT_KEYS.WA]: {
    Fcl_BRW_Angry: 0.8,
  },
  [CONTACT_KEYS.GITHUB]: {
    Fcl_BRW_Surprised: 0.9,
    Fcl_EYE_Surprised: 0.8,
    Fcl_MTH_Surprised: 0.1,
  },
  [CONTACT_KEYS.IN]: {
    Fcl_EYE_Joy: 1,
    Fcl_MTH_Fun: 0.8,
  },
  [WORDS.CHAT__NO_PAGES]: {
    Fcl_EYE_Sorrow: 0.5,
    Fcl_MTH_Sorrow: 1,
    Fcl_BRW_Sorrow: 1,
  },
  neutral: {
    Fcl_ALL_Neutral: 1,
  },
};
