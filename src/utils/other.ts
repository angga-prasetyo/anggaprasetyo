import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

import { useHomeStore } from '@/stores/home/store';

export function preloadAudio(src: string, timeout = 5000): Promise<void> {
  return new Promise((resolve) => {
    const audio = new Audio();
    const timer = setTimeout(resolve, timeout);
    audio.oncanplaythrough = () => {
      clearTimeout(timer);
      resolve();
    };
    audio.onerror = () => {
      clearTimeout(timer);
      resolve();
    };
    audio.preload = 'auto';
    audio.src = src;
    audio.load();
  });
}

export function preloadImage(src: string, timeout = 5000): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    const timer = setTimeout(resolve, timeout);
    img.onload = () => {
      clearTimeout(timer);
      resolve();
    };
    img.onerror = () => {
      clearTimeout(timer);
      resolve();
    };
    img.src = src;
  });
}

export function preloadGLTF(path: string): Promise<void> {
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(
      path,
      (gltf) => {
        // Store parsed result — no network request needed in HomePage
        useHomeStore.getState().changeGltf(gltf);
        resolve();
      },
      undefined,
      reject,
    );
  });
}
