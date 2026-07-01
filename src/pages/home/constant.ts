import { CTSeoMetaPropsMeta } from '@/components/ct-seo-meta/type';
import { WORDS } from '@/constants/languages';
import { CONTACT_KEYS } from '@/constants/others';

import { ExpressionMap } from './type';

export const pageMeta: CTSeoMetaPropsMeta = {
  descriptionPage: 'Home page for Custom Dashboard',
  titlePage: 'Home || Custom',
};

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
