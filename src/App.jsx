import { useState } from "react";
import BalloonsBackground from "./components/BalloonsBackground";
import DraftBanner from "./components/DraftBanner";
import GiftBox from "./components/GiftBox";
import Candle from "./components/Candle";
import Hero from "./components/Hero";
import Letter from "./components/Letter";
import Gallery from "./components/Gallery";
import WishForm from "./components/WishForm";
import Footer from "./components/Footer";

const CAKE_DESIGN = {
  shape: "round",
  frosting: "pink",
  topping: "sprinkles",
  candleColor: "yellow",
};

export default function App() {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => Math.min(stages.length - 1, i + 1));
  const restart = () => setIndex(0);

  const stages = [
    <GiftBox key="gift" design={CAKE_DESIGN} onNext={next} />,
    <Candle key="candle" design={CAKE_DESIGN} onNext={next} />,
    <Hero key="hero" onNext={next} />,
    <Letter key="letter" onNext={next} />,
    <Gallery key="gallery" onNext={next} />,
    <WishForm key="wish" onNext={next} />,
    <Footer key="footer" onRestart={restart} />,
  ];

  return (
    <div className="app-shell">
      <BalloonsBackground />
      <DraftBanner />
      <div className="card">{stages[index]}</div>
    </div>
  );
}
