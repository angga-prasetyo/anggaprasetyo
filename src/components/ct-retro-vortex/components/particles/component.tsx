import { Particle } from './type';

export function Particles({ items }: { items: Particle[] }) {
  return (
    <div className="absolute">
      {items.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-particle-drift"
          style={{
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 4px 1px ${p.color}`,
            '--px': `${p.x}px`,
            '--py': `${p.y}px`,
            '--duration': `${p.duration}s`,
            '--delay': `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
