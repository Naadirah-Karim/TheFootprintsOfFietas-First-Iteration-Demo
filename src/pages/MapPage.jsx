import { useState } from "react";
import { Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import mapLocations from "../data/mapLocations";
import "../styles/MapPage.css";

function MapPage() {
  const [activeMinor, setActiveMinor] = useState(null);

  const mainPins = mapLocations.filter((l) => l.hasDetail);
  const minorPins = mapLocations.filter((l) => !l.hasDetail);

  return (
    <div className="map-page">
      <MusicToggle />
      <header className="page-header header--map">
        <PageHeading title="Map" subtitle="Click on a location to visit" />
      </header>

      <div className="map-wrap">
        <div className="map-canvas">
          <img src={`${import.meta.env.BASE_URL}Icons/fietas-map-zoom.jpg`} alt="Illustrated map of Fietas" className="map-image" />

          {/* pins link through to the details page */}
          {mainPins.map((loc) => (
            <div
              key={loc.id}
              className={`map-marker label-${loc.labelPos}`}
              style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
            >
              <span className="map-label-box">{loc.name}</span>
              <Link to={`/map/${loc.id}`} className="map-pin" aria-label={loc.name}>
                <img src={`${import.meta.env.BASE_URL}Icons/map.png`} alt="" />
              </Link>
            </div>
          ))}

          {/* Minor pins: name-only popup on click/hover, no detail page yet */}
          {minorPins.map((loc) => (
            <button
              key={loc.id}
              className="map-marker-minor"
              style={{ top: `${loc.y}%`, left: `${loc.x}%` }}
              onClick={() =>
                setActiveMinor(activeMinor === loc.id ? null : loc.id)
              }
              onMouseEnter={() => setActiveMinor(loc.id)}
              onMouseLeave={() => setActiveMinor(null)}
              aria-label={loc.name}
            >
              <span className="minor-dot" />
              <span
                className={`minor-label ${activeMinor === loc.id ? "visible" : ""}`}
              >
                {loc.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      <Link to="/chapters" className="back-btn" aria-label="Back">
        ←
      </Link>
    </div>
  );
}

export default MapPage;
