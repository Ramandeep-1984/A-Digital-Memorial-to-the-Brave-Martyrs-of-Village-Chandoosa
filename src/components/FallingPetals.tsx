import { useEffect, useState, useRef } from 'react';

interface Petal {
  id: number;
  emoji: string;
  x: number;
  delay: number;
  size: number;
}

interface FallingPetalsProps {
  trigger: number; // increments each time lamp is pressed
}

const emojis = ['⚔️', '⚔️', '☬', '⚔️', '☬', '⚔️', '⚔️', '☬', '⚔️', '⚔️'];

export default function FallingPetals({ trigger }: FallingPetalsProps) {
  const [petals, setPetals] = useState<Petal[]>([]);
  const nextId = useRef(0);

  useEffect(() => {
    if (trigger === 0) return;

    // Generate 25-30 petals spread across the screen
    const count = 25 + Math.floor(Math.random() * 6);
    const newPetals: Petal[] = [];

    for (let i = 0; i < count; i++) {
      newPetals.push({
        id: nextId.current++,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        x: Math.random() * 96 + 2, // 2% to 98% of screen width
        delay: Math.random() * 2.5, // staggered over 2.5 seconds
        size: 1.2 + Math.random() * 1.2, // 1.2rem to 2.4rem
      });
    }

    setPetals((prev) => [...prev, ...newPetals]);

    // Clean up after animation finishes (5s animation + 2.5s max delay + buffer)
    const cleanup = setTimeout(() => {
      setPetals((prev) => prev.filter((p) => !newPetals.find((np) => np.id === p.id)));
    }, 8000);

    return () => clearTimeout(cleanup);
  }, [trigger]);

  if (petals.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[90] pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-0 animate-fall-down"
          style={{
            left: `${petal.x}%`,
            animationDelay: `${petal.delay}s`,
            fontSize: `${petal.size}rem`,
          }}
        >
          {petal.emoji}
        </div>
      ))}
    </div>
  );
}
