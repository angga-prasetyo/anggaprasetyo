import { EnumValues } from '@/types/common';

export enum LANGUAGES {
  IDN = 'id',
  ENG = 'en',
}

export const words: {
  [key: string]: { [key in EnumValues<typeof LANGUAGES>]: string };
} = {
  allow: {
    [LANGUAGES.IDN]: 'Izinkan',
    [LANGUAGES.ENG]: 'Allow',
  },
  indonesia: {
    [LANGUAGES.IDN]: 'Indonesia 🇮🇩',
    [LANGUAGES.ENG]: 'Indonesia 🇮🇩',
  },
  english: {
    [LANGUAGES.IDN]: 'Inggris (Amerika) 🇺🇸',
    [LANGUAGES.ENG]: 'English (US) 🇺🇸',
  },
  next: {
    [LANGUAGES.IDN]: 'Lanjut',
    [LANGUAGES.ENG]: 'Next',
  },
  popup__enable_sound_title: {
    [LANGUAGES.IDN]: 'IZINKAN PUTAR SUARA?',
    [LANGUAGES.ENG]: 'ALLOW PLAY SOUND?',
  },
  popup__enable_sound_description: {
    [LANGUAGES.IDN]: 'Izinkan untuk mendapatkan pengalaman terbaik',
    [LANGUAGES.ENG]: 'Allow to get the best experience.',
  },
  popup__choose_language_title: {
    [LANGUAGES.IDN]: 'PILIH BAHASA',
    [LANGUAGES.ENG]: 'CHOOSE LANGUAGE',
  },
};
