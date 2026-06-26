import { EnumValues } from '@/types/common';

import { CONTACT_KEYS } from './others';

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
  OVERVIEW = 'overview',
  PROFILE = 'profile',
  WORKS = 'works',
  PROJECT = 'project',
  RECORD = 'record',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
  NAVBAR__MINIMIZE = 'navbar__minimize',
  DOWNLOAD_CV = 'download_cv',
  CHAT__NO_PAGES = 'chat__no_pages',
}

type AllWordKeys = EnumValues<typeof WORDS> | CONTACT_KEYS;

export const words: {
  [key in AllWordKeys]: {
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
  [WORDS.NAVBAR__MINIMIZE]: {
    [LANGUAGES.IDN]: 'Geser untuk Perkecil ',
    [LANGUAGES.ENG]: 'Swipe to Minimize ',
  },
  [WORDS.DOWNLOAD_CV]: {
    [LANGUAGES.IDN]: 'Unduh CV',
    [LANGUAGES.ENG]: 'Download CV',
  },
  [WORDS.CHAT__NO_PAGES]: {
    [LANGUAGES.IDN]:
      'Maaf, halaman itu sedang dalam pengerjaan. Saat ini kamu belum bisa akses kesana.',
    [LANGUAGES.ENG]:
      'Sorry, the page is still in progress. For now you cannot access it.',
  },
  [CONTACT_KEYS.WA]: {
    [LANGUAGES.IDN]:
      'Sebaiknya kamu kirim konfirmasi dulu melalui whatsapp chat sebelum menelpon!',
    [LANGUAGES.ENG]: 'Before you call me, you better chat me first!',
  },
  [CONTACT_KEYS.EMAIL]: {
    [LANGUAGES.IDN]:
      'Tenang saja, walaupun terlihat aneh, alamat email ini bisa dihubungi kok.',
    [LANGUAGES.ENG]:
      'Relax, this email is legit. Try send me a warm welcome there.',
  },
  [CONTACT_KEYS.GITHUB]: {
    [LANGUAGES.IDN]:
      'Oh? Apakah kamu familiar dengan github? Masa iya kita memiliki profesi yang sama...',
    [LANGUAGES.ENG]:
      'Oh? Are you using github too? I wonder we have the same role...',
  },
  [CONTACT_KEYS.IN]: {
    [LANGUAGES.IDN]:
      'Itu adalah media sosial profesionalku, tapi kamu boleh saja kok basa basi denganku disana.',
    [LANGUAGES.ENG]:
      'That is my professional social media, but it will not hurt for say hi there.',
  },
  [WORDS.CONTACT]: {
    [LANGUAGES.IDN]: 'Info Kontak',
    [LANGUAGES.ENG]: 'Contact Info',
  },
  [WORDS.OVERVIEW]: {
    [LANGUAGES.IDN]: 'Ringkasan',
    [LANGUAGES.ENG]: 'Overview',
  },
  [WORDS.PROFILE]: {
    [LANGUAGES.IDN]: 'Profil',
    [LANGUAGES.ENG]: 'Profile',
  },

  [WORDS.WORKS]: {
    [LANGUAGES.IDN]: 'Karya',
    [LANGUAGES.ENG]: 'Works',
  },
  [WORDS.PROJECT]: {
    [LANGUAGES.IDN]: 'Projek',
    [LANGUAGES.ENG]: 'Project',
  },
  [WORDS.RECORD]: {
    [LANGUAGES.IDN]: 'Arsip',
    [LANGUAGES.ENG]: 'Record',
  },
  [WORDS.EXPERIENCE]: {
    [LANGUAGES.IDN]: 'Pengalaman',
    [LANGUAGES.ENG]: 'Experience',
  },
};
