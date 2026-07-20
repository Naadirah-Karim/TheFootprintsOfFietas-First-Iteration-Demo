import { Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing">
      <MusicToggle />
      <div className="hero">
        <img src="/Icons/footprint-logo.png" alt="TFOF Logo" className="logo-icon" />
        <h1>The Footprints of Fietas</h1>
        <p className="tagline">
          A community isn't just buildings, it's the spaces between them, filled with memories.
        </p>
        <img
          src="/Icons/footprints-houses-row.png"
          alt="Illustration of a row of colourful Fietas houses beside a pile of demolition rubble"
          className="houses-illustration"
        />
        <div className="buttons">
          <Link to="/chapters/1/1" className="btn-story">
            Begin Story
          </Link>
          <Link to="/map" className="btn-exploration">
            Explore Fietas
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
