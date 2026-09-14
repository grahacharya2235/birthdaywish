import { useState } from "react";
import { content } from "../content";

export default function Gallery({ onNext }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const openPhoto = (i) => setActiveIndex(i);
  const closePhoto = () => setActiveIndex(null);

  const active = activeIndex !== null ? content.photos[activeIndex] : null;

  return (
    <div className="stage">
      <div className="section-head">
        <div className="eyebrow">little moments</div>
        <h2>a few of my favorite pictures of us</h2>
      </div>

      <div className="gallery-grid">
        {content.photos.map((photo, i) => (
          <button
            type="button"
            className="gallery-tile"
            key={i}
            onClick={() => openPhoto(i)}
          >
            <p>{photo.caption}</p>
          </button>
        ))}
      </div>

      <p className="gallery-hint">tap a memory to see the photo</p>

      <button type="button" className="continue-btn" onClick={onNext}>
        your turn →
      </button>

      {active && (
        <div className="gallery-lightbox" onClick={closePhoto}>
          <div
            className="gallery-lightbox-photo"
            onClick={(e) => e.stopPropagation()}
          >
            {active.src ? (
              <img src={active.src} alt={active.caption} />
            ) : (
              <div className="gallery-lightbox-placeholder">📷</div>
            )}
            <p className="gallery-lightbox-caption">{active.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}
