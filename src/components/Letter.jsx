import { useEffect, useRef, useState } from "react";
import { content } from "../content";

const FULL_TEXT = content.letter.join("\n\n");

export default function Letter({ onNext }) {
  const [opened, setOpened] = useState(false);
  const [typed, setTyped] = useState("");
  const [done, setDone] = useState(false);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (!opened) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      setTyped(FULL_TEXT);
      setDone(true);
      return;
    }

    let i = 0;
    intervalRef.current = setInterval(() => {
      i += 1;
      setTyped(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) {
        clearInterval(intervalRef.current);
        setDone(true);
      }
    }, 22);

    return () => clearInterval(intervalRef.current);
  }, [opened]);

  const skipTyping = () => {
    if (!opened || done) return;
    clearInterval(intervalRef.current);
    setTyped(FULL_TEXT);
    setDone(true);
  };

  return (
    <div className="stage letter-stage">
      <div className="section-head">
        <div className="eyebrow">For You, Kirti</div>
        <h2>A Little Letter</h2>
      </div>

      <div className={`envelope ${opened ? "opened" : ""}`}>
        <div className="envelope-graphic">
          <div className="envelope-back" />
          <div className="envelope-flap" />
          <button
            type="button"
            className="envelope-seal"
            onClick={() => {
              if (!opened) setOpened(true);
            }}
            aria-label="Open the letter"
            aria-hidden={opened}
            tabIndex={opened ? -1 : 0}
          >
            💌
          </button>
        </div>

        <div className="note-card" onClick={skipTyping}>
          <div className="washi-tape" />
          <p className="typewriter-text">
            {typed}
            {!done && <span className="typewriter-cursor" />}
          </p>
          {done && <p className="note-signoff">{content.signOff}</p>}
        </div>
      </div>

      {!opened && <p className="envelope-hint">tap the seal to open it</p>}
      {opened && !done && (
        <p className="envelope-hint">tap the note to skip ahead</p>
      )}

      {done && (
        <button type="button" className="continue-btn" onClick={onNext}>
          Captured moments of the birthday girl 🎂📷
        </button>
      )}
    </div>
  );
}
