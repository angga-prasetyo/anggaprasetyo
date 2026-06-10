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
