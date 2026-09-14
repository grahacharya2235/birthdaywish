import { useState } from "react";
import CakePreview from "./CakePreview";

export default function GiftBox({ design, onNext }) {
  const [opened, setOpened] = useState(false);

  const openBox = () => {
    if (opened) return;
    setOpened(true);
    setTimeout(() => onNext?.(), 1900);
  };

  return (
    <div className="stage giftbox-scene">
      <div className="eyebrow">a little surprise</div>
      <button
        type="button"
        className={`gift ${opened ? "opened" : ""}`}
        onClick={openBox}
        aria-label="Open the gift box"
      >
        <div className="gift-lid" />
        <div className="gift-ribbon-bow" />
        <div className="gift-box" />
        <div className="cake-reveal">
          <CakePreview design={design} lit={false} />
        </div>
      </button>
      <p className="giftbox-prompt">
        {opened ? "there it is..." : "tap the box to open it"}
      </p>
    </div>
  );
}
