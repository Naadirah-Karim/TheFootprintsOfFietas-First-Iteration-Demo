import { useState } from "react";
import { Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import gallery from "../data/gallery";
import "../styles/GalleryPage.css";

function GalleryPage() {
  const [active, setActive] = useState(null);

  return (
    <div className="gallery-page">
      <MusicToggle />
      <header className="page-header header--gallery">
        <PageHeading title="Fietas Gallery" />
      </header>
      <img src="/Icons/banner 2.png" className="banner-strip" alt="" />
      <div className="gallery-grid">
        {gallery.map((item, i) => (
          <button
            key={i}
            className="gallery-item"
            onClick={() => setActive(item)}
          >
            <img src={item.src} alt={item.caption} loading="lazy" />
            <span className="gallery-caption">{item.caption}</span>
          </button>
        ))}
      </div>

      {active && (
        <div className="lightbox" onClick={() => setActive(null)}>
          <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption} />
            <p>{active.caption}</p>
            <button className="lightbox-close" onClick={() => setActive(null)}>
              ✕
            </button>
          </div>
        </div>
      )}

      <a href="#top" className="up-btn" aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}

export default GalleryPage;
