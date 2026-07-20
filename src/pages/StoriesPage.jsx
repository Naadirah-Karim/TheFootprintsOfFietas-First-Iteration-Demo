import { Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import stories from "../data/stories";
import "../styles/StoriesPage.css";

function StoriesPage() {
  return (
    <div className="stories-page">
      <MusicToggle />
      <header className="page-header header--stories">
        <PageHeading title="Fietas Stories" />
      </header>
      <img src="/Icons/banner 2.png" className="banner-strip" alt="" />
      <div className="stories-list">
        {stories.map((story) => (
          <div key={story.id} className="story-card">
            <img src="/Icons/love.png" alt="" className="story-icon" />
            <div className="story-info">
              <span className="story-date">{story.date}</span>
              <h2>{story.title}</h2>
              <span className="story-author">By {story.author}</span>
            </div>
            <Link to={`/stories/${story.id}`} className="story-read-btn">
              READ
            </Link>
          </div>
        ))}
      </div>

      <a href="#top" className="up-btn" aria-label="Back to top">
        ↑
      </a>
    </div>
  );
}

export default StoriesPage;
