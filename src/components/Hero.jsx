import { content } from "../content";

export default function Hero({ onNext }) {
  return (
    <div className="stage hero-stage">
      <div className="hero-eyebrow">🎂 A Birthday Surprise, Just For You</div>
      <h1>
        Happy Birthday,
        <br />
        <span>Kirti!</span>
      </h1>
      <p className="hero-sub">{content.heroSubtitle}</p>
      <button type="button" className="continue-btn" onClick={onNext}>
        Open the letter for you 💌
      </button>
    </div>
  );
}
