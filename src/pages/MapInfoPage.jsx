import { useNavigate, useParams, Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import mapLocations from "../data/mapLocations";
import "../styles/MapInfoPage.css";

function MapInfoPage() {
  const { locationId } = useParams();
  const navigate = useNavigate();
  const location = mapLocations.find((l) => l.id === locationId);

  if (!location) {
    return (
      <div className="mapinfo-page">
        <p>That location could not be found.</p>
        <Link to="/map">Back to map</Link>
      </div>
    );
  }

  return (
    <div className="mapinfo-page">
      <MusicToggle />
      <header className="page-header header--mapinfo">
        <PageHeading title={location.pageTitle} />
      </header>

      <div className="mapinfo-body">
        <div className="mapinfo-images">
          {location.images.map((src, i) => (
            <img key={i} src={src} alt={`${location.name} photograph ${i + 1}`} />
          ))}
        </div>

        <div className="mapinfo-text">
          <h2>
            {location.name}
            <span className="mapinfo-credit"> by David Goldblatt</span>
          </h2>
          {location.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>

      <button className="back-btn" onClick={() => navigate(-1)} aria-label="Back">
        ←
      </button>
      <Link to="/map" className="up-btn" aria-label="Back to map">
        ↑
      </Link>
    </div>
  );
}

export default MapInfoPage;
