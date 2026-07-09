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
  POPUP__CHOOSE_LANGUAGE_TITLE = 'popup__choose_language_title',
  POPUP__CONFIGURATION_TITLE = 'popup__configuration_title',
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
  RECOMMENDED = 'recommended',
  LOADING_AUDIO = 'loading_audio',
  PERSONAL = 'personal',
  COMPANY = 'company',
  EMPTY = 'empty',
  JANUARY = 'jan',
  OCTOBER = 'oct',
  AUGUST = 'aug',
  JULY = 'jul',
  DECEMBER = 'dec',
  OUTSOURCED = 'outsourced',
  DURATION = 'dur',
  CONTRIBUTIONS = 'cont',
  TRIMEGAH_TRIMAPLUS_C_1 = 'tri_tp_c_1',
  TRIMEGAH_TRIMAPLUS_C_2 = 'tri_tp_c_2',
  TRIMEGAH_TRIMAPLUS_C_3 = 'tri_tp_c_3',
  TRIMEGAH_TRIMAPLUS_C_4 = 'tri_tp_c_4',
  HUKUMKU_C_1 = 'hk_c_1',
  HUKUMKU_C_2 = 'hk_c_2',
  HUKUMKU_C_3 = 'hk_c_3',
  INFINID_C_1 = 'inf_c_1',
  INFINID_C_2 = 'inf_c_2',
  INFINID_C_3 = 'inf_c_3',
  INFINID_C_4 = 'inf_c_4',
  KARGO_C_1 = 'kgo_c_1',
  KARGO_C_2 = 'kgo_c_2',
  KARGO_C_3 = 'kgo_c_3',
  KARGO_C_4 = 'kgo_c_4',
}

type AllWordKeys = EnumValues<typeof WORDS> | CONTACT_KEYS;

export const words: {
  [key in AllWordKeys]: {
    [key in EnumValues<typeof LANGUAGES>]: string;
  };
} = {
  [WORDS.RECOMMENDED]: {
    [LANGUAGES.IDN]: 'Dianjurkan',
    [LANGUAGES.ENG]: 'Recommended',
  },
  [WORDS.LOADING_AUDIO]: {
    [LANGUAGES.IDN]: 'Memuat Suara',
    [LANGUAGES.ENG]: 'Loading Audio',
  },
  [WORDS.ALLOW]: {
    [LANGUAGES.IDN]: 'HIDUPKAN SUARA',
    [LANGUAGES.ENG]: 'ENABLE AUDIO',
  },
  [WORDS.DENY]: {
    [LANGUAGES.IDN]: 'MATIKAN',
    [LANGUAGES.ENG]: 'MUTED',
  },
  [WORDS.INDONESIA]: {
    [LANGUAGES.IDN]: 'Indonesia',
    [LANGUAGES.ENG]: 'Indonesia',
  },
  [WORDS.ENGLISH]: {
    [LANGUAGES.IDN]: 'Inggris (Amerika)',
    [LANGUAGES.ENG]: 'English (US)',
  },
  [WORDS.NEXT]: {
    [LANGUAGES.IDN]: 'Lanjut',
    [LANGUAGES.ENG]: 'Next',
  },
  [WORDS.POPUP__ENABLE_SOUND_TITLE]: {
    [LANGUAGES.IDN]: 'SUARA',
    [LANGUAGES.ENG]: 'AUDIO OUTPUT',
  },
  [WORDS.POPUP__CONFIGURATION_TITLE]: {
    [LANGUAGES.IDN]: 'Konfigurasi Sistem',
    [LANGUAGES.ENG]: 'System Configuration',
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
  [WORDS.PERSONAL]: {
    [LANGUAGES.IDN]: 'Pribadi',
    [LANGUAGES.ENG]: 'Personal',
  },
  [WORDS.COMPANY]: {
    [LANGUAGES.IDN]: 'Perusahaan',
    [LANGUAGES.ENG]: 'Company',
  },
  [WORDS.EMPTY]: {
    [LANGUAGES.IDN]: 'KOSONG',
    [LANGUAGES.ENG]: 'NO DATA',
  },
  [WORDS.OCTOBER]: {
    [LANGUAGES.IDN]: 'Oktober',
    [LANGUAGES.ENG]: 'October',
  },
  [WORDS.AUGUST]: {
    [LANGUAGES.IDN]: 'Agustus',
    [LANGUAGES.ENG]: 'August',
  },
  [WORDS.JANUARY]: {
    [LANGUAGES.IDN]: 'Januari',
    [LANGUAGES.ENG]: 'January',
  },
  [WORDS.JULY]: {
    [LANGUAGES.IDN]: 'Juli',
    [LANGUAGES.ENG]: 'July',
  },
  [WORDS.DECEMBER]: {
    [LANGUAGES.IDN]: 'Desember',
    [LANGUAGES.ENG]: 'December',
  },
  [WORDS.OUTSOURCED]: {
    [LANGUAGES.IDN]: 'Dialihdayakan ke',
    [LANGUAGES.ENG]: 'Outsourced to',
  },
  [WORDS.DURATION]: {
    [LANGUAGES.IDN]: 'Waktu',
    [LANGUAGES.ENG]: 'Duration',
  },
  [WORDS.CONTRIBUTIONS]: {
    [LANGUAGES.IDN]: 'Kontribusi',
    [LANGUAGES.ENG]: 'Contributions',
  },
  [WORDS.TRIMEGAH_TRIMAPLUS_C_1]: {
    [LANGUAGES.IDN]:
      'Membangun aplikasi trading desktop cross-platform menggunakan Tauri (Rust + React) yang mendukung 2 kelas aset: saham dan reksa dana.',
    [LANGUAGES.ENG]:
      'Engineered a cross-platform desktop trading app using Tauri (Rust + React) supporting 2 asset classes: stocks and mutual funds.',
  },
  [WORDS.TRIMEGAH_TRIMAPLUS_C_2]: {
    [LANGUAGES.IDN]:
      'Membangun orderbook real-time serta alur order buy/sell/amend/withdraw dengan 4 tipe validitas order (Day, GTD, GTC, advanced order) melalui NATS WebSocket.',
    [LANGUAGES.ENG]:
      'Built real-time orderbook and buy/sell/amend/withdraw order flows with 4 order validity types (Day, GTD, GTC, advanced order) via NATS WebSocket.',
  },
  [WORDS.TRIMEGAH_TRIMAPLUS_C_3]: {
    [LANGUAGES.IDN]:
      'Menghadirkan fitur reksa dana mencakup 3 tipe transaksi: buy, sell, dan switch order dengan perhitungan berbasis NAV dan riwayat order.',
    [LANGUAGES.ENG]:
      'Delivered mutual fund features across 3 transaction types: buy, sell, and switch orders with NAV-based calculations and order history.',
  },
  [WORDS.TRIMEGAH_TRIMAPLUS_C_4]: {
    [LANGUAGES.IDN]:
      'Mengoptimalkan performa live data streaming dengan memperbaiki logika reconnection NATS dan mengurangi re-render tabel orderbook pada tick berfrekuensi tinggi.',
    [LANGUAGES.ENG]:
      'Optimized live data streaming performance by improving NATS reconnection logic and reducing orderbook table re-render on high-frequency ticks.',
  },
  [WORDS.HUKUMKU_C_1]: {
    [LANGUAGES.IDN]:
      'Membangun 5 alur pengguna utama: registrasi, verifikasi OTP, unggah dokumen KYC, pengaturan profil, dan dashboard beranda untuk platform legal tech.',
    [LANGUAGES.ENG]:
      'Built 5 core user flows: registration, OTP verification, KYC document upload, profile settings, and home dashboard for a legal tech platform.',
  },
  [WORDS.HUKUMKU_C_2]: {
    [LANGUAGES.IDN]:
      'Mengembangkan sistem notifikasi dan alur status verifikasi yang menangani 3 status pengguna: pending, approved, dan rejected.',
    [LANGUAGES.ENG]:
      'Developed a notification system and verification status flow handling 3 user states: pending, approved, and rejected.',
  },
  [WORDS.HUKUMKU_C_3]: {
    [LANGUAGES.IDN]:
      'Menghadirkan layout mobile-responsive penuh di seluruh halaman menggunakan SASS dan React Router v6.',
    [LANGUAGES.ENG]:
      'Delivered full mobile-responsive layout across all pages with SASS and React Router v6.',
  },
  [WORDS.INFINID_C_1]: {
    [LANGUAGES.IDN]:
      'Mengembangkan alur pengajuan pinjaman HELOC multi-step (7 tahap) yang mencakup pre-qualification, properti, pendapatan, identitas, dan pengumpulan dokumen.',
    [LANGUAGES.ENG]:
      'Developed a 7-step multi-step HELOC loan application flow covering pre-qualification, property, income, identity, and document submission.',
  },
  [WORDS.INFINID_C_2]: {
    [LANGUAGES.IDN]:
      'Mengintegrasikan 3 layanan pihak ketiga — selfie biometrik VIDA, open banking Brankas, dan autocomplete Google Maps — ke dalam satu formulir aplikasi.',
    [LANGUAGES.ENG]:
      'Integrated 3 third-party services — VIDA biometric selfie, Brankas open banking, and Google Maps autocomplete — into a single application form.',
  },
  [WORDS.INFINID_C_3]: {
    [LANGUAGES.IDN]:
      'Membangun fitur unggah file custom yang mendukung unggah multi-dokumen, preview PDF, dan pengambilan foto melalui kamera mobile, dengan validasi format dan ukuran.',
    [LANGUAGES.ENG]:
      'Built a custom file uploader supporting multi-document upload, PDF preview, and mobile camera capture with format and size validation.',
  },
  [WORDS.INFINID_C_4]: {
    [LANGUAGES.IDN]:
      'Mengimplementasikan tracking Facebook Pixel dan Google Analytics di seluruh halaman public-facing.',
    [LANGUAGES.ENG]:
      'Implemented Facebook Pixel and Google Analytics tracking across all public-facing pages.',
  },
  [WORDS.KARGO_C_1]: {
    [LANGUAGES.IDN]: 'Memelihara last-mile TMS yang menangani routing pengiriman, delivery order, dan profil transporter/armada/driver selama 200+ commit dalam proyek 9 bulan.',
    [LANGUAGES.ENG]: 'Maintained a last-mile TMS handling shipment routing, delivery orders, and transporter/fleet/driver profiles across 200+ commits over a 9-month engagement.',
  },
  [WORDS.KARGO_C_2]: {
    [LANGUAGES.IDN]: 'Mengimplementasikan modul payables dan receivables dengan review Delivery Order multi-tab, alur aksi pembayaran, dan formulir penyesuaian mencakup 3 tipe pembayaran transporter (dedicated, on-call, shipper).',
    [LANGUAGES.ENG]: 'Implemented payables and receivables modules with multi-tab Delivery Order review, payment action flows, and adjustment forms covering 3 transporter payment types (dedicated, on-call, shipper).',
  },
  [WORDS.KARGO_C_3]: {
    [LANGUAGES.IDN]: 'Membangun bulk upload/download CSV untuk 5 entitas data (routing, transporter, armada, driver, kontrak) dengan validasi dan penanganan error.',
    [LANGUAGES.ENG]: 'Built bulk CSV upload/download for 5 data entities (routing, transporter, fleet, driver, contract) with validation and error handling.',
  },
  [WORDS.KARGO_C_4]: {
    [LANGUAGES.IDN]: 'Menulis unit test untuk modul payable menggunakan React Testing Library, berkontribusi pada pipeline CI test-coverage.',
    [LANGUAGES.ENG]: 'Wrote unit tests for payable modules using React Testing Library, contributing to a test-coverage CI pipeline.',
  },
};
