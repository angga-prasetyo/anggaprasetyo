import { EnumValues } from '@/types/common';

export enum LANGUAGES {
  IDN = 'id',
  ENG = 'en',
}

export enum WORDS {
  ALLOW = 'allow',
  DENY = 'deny',
  INDONESIA = 'indonesia',
  ENGLISH = 'english',
  NEXT = 'next',
  POPUP__ENABLE_SOUND_TITLE = 'popup__enable_sound_title',
  POPUP__ENABLE_SOUND_DESCRIPTION = 'popup__enable_sound_description',
  POPUP__CHOOSE_LANGUAGE_TITLE = 'popup__choose_language_title',
}

export const words: {
  [key in EnumValues<typeof WORDS>]: {
    [key in EnumValues<typeof LANGUAGES>]: string;
  };
} = {
  [WORDS.ALLOW]: {
    [LANGUAGES.IDN]: 'Izinkan',
    [LANGUAGES.ENG]: 'Allow',
  },
  [WORDS.DENY]: {
    [LANGUAGES.IDN]: 'Tolak',
    [LANGUAGES.ENG]: 'Deny',
  },
  [WORDS.INDONESIA]: {
    [LANGUAGES.IDN]: 'Indonesia 🇮🇩',
    [LANGUAGES.ENG]: 'Indonesia 🇮🇩',
  },
  [WORDS.ENGLISH]: {
    [LANGUAGES.IDN]: 'Inggris (Amerika) 🇺🇸',
    [LANGUAGES.ENG]: 'English (US) 🇺🇸',
  },
  [WORDS.NEXT]: {
    [LANGUAGES.IDN]: 'Lanjut',
    [LANGUAGES.ENG]: 'Next',
  },
  [WORDS.POPUP__ENABLE_SOUND_TITLE]: {
    [LANGUAGES.IDN]: 'IZINKAN PUTAR SUARA?',
    [LANGUAGES.ENG]: 'ALLOW PLAY SOUND?',
  },
  [WORDS.POPUP__ENABLE_SOUND_DESCRIPTION]: {
    [LANGUAGES.IDN]: 'Izinkan untuk mendapatkan pengalaman terbaik',
    [LANGUAGES.ENG]: 'Allow to get the best experience.',
  },
  [WORDS.POPUP__CHOOSE_LANGUAGE_TITLE]: {
    [LANGUAGES.IDN]: 'PILIH BAHASA',
    [LANGUAGES.ENG]: 'CHOOSE LANGUAGE',
  },
};
