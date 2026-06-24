const RAY_ANGLES = Array.from({ length: 12 }, (_, i) => i * 30);

export function Rays() {
  return (
    <div
      className="absolute w-screen h-screen top-[50%] left-[50%] animate-rotate-ray">
      {RAY_ANGLES.map((angle) => (
        <div
          key={angle}
          className="absolute top-[50%] left-[50%] w-full h-px origin-[0_50%]"
          style={{
            transform: `rotate(${angle}deg)`,
            background:
              'linear-gradient(to right, rgba(0,255,200,0.7), transparent)',
          }}
        />
      ))}
    </div>
  );
}
