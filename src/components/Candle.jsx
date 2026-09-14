import { useState } from "react";
import CakePreview from "./CakePreview";

export default function Candle({ design, onNext }) {
  const [lit, setLit] = useState(false);

  const lightCandle = () => {
    if (lit) return;
    setLit(true);
    setTimeout(() => onNext?.(), 1700);
  };

  return (
    <div className="stage candle-scene">
      <CakePreview design={design} lit={lit} onClick={lightCandle} />
      <p className={`candle-prompt ${lit ? "lit-text" : ""}`}>
        {lit ? "there we go... 🕯️" : "tap the candle to light it"}
      </p>
    </div>
  );
}
