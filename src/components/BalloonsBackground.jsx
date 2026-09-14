const CONFETTI_COLORS = [
  "var(--pink)",
  "var(--yellow)",
  "var(--mint)",
  "var(--lilac)",
];

const CONFETTI_PIECES = Array.from({ length: 16 }, (_, i) => ({
  left: (i * 137.5) % 100,
  delay: (i * 0.9) % 8,
  duration: 9 + (i % 5) * 1.6,
  color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
  size: 6 + (i % 3) * 3,
  round: i % 3 === 0,
}));

export default function BalloonsBackground() {
  return (
    <div className="balloon-bg" aria-hidden="true">
      <div className="balloon b1" />
      <div className="balloon b2" />
      <div className="balloon b3" />
      <div className="balloon b4" />
      <div className="balloon b5" />
      <div className="balloon b6" />

      {CONFETTI_PIECES.map((c, i) => (
        <span
          key={i}
          className="confetti-piece"
          style={{
            left: `${c.left}%`,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
            background: c.color,
            width: `${c.size}px`,
            height: `${c.round ? c.size : c.size * 0.4}px`,
            borderRadius: c.round ? "50%" : "2px",
          }}
        />
      ))}
    </div>
  );
}
