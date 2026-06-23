import { Particle } from './type';

export function generateParticles(
  count: number,
  accelerationDivider: number,
): Particle[] {
  const colors = [
    '#00ffb4',
    '#00d4ff',
    '#7b5fff',
    '#ff3cdc',
    '#ffffff',
  ];
  return Array.from({ length: count }, () => {
    const angle = Math.random() * 360;
    const dist = 60 + Math.random() * 1400;
    const rad = (angle * Math.PI) / 180;
    return {
      x: Math.cos(rad) * dist,
      y: Math.sin(rad) * dist,
      size: 5 + Math.random() * 3,
      color:
        colors[Math.floor(Math.random() * colors.length)],
      duration: (1.2 + Math.random() * 2.4) / accelerationDivider,
      delay: -(Math.random() * 3),
    };
  });
}
