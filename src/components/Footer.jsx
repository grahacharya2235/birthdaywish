import confetti from "canvas-confetti";
import { content } from "../content";

export default function Footer({ onRestart }) {
  const handleConfetti = () => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    confetti({
      particleCount: prefersReduced ? 40 : 140,
      spread: 80,
      startVelocity: 38,
      origin: { y: 0.7 },
      colors: ["#FF6F91", "#FFC857", "#2FBF8F", "#A87FD1"],
    });
  };

  return (
    <div className="stage">
      <p className="closing">{content.closingLine}</p>
      <div className="signature">{content.signature}</div>
      <button className="confetti-btn" type="button" onClick={handleConfetti}>
        🎉 set off some confetti
      </button>
      <button className="restart-link" type="button" onClick={onRestart}>
        watch it again
      </button>
    </div>
  );
}
