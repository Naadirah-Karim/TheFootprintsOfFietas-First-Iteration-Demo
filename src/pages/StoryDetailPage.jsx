import { useNavigate, useParams, Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import stories from "../data/stories";
import "../styles/StoryDetailPage.css";

function StoryDetailPage() {
  const { storyId } = useParams();
  const navigate = useNavigate();
  const story = stories.find((s) => s.id === storyId);

  if (!story) {
    return (
      <div className="story-detail-page">
        <p>That story could not be found.</p>
        <Link to="/stories">Back to Fietas Stories</Link>
      </div>
    );
  }

  return (
    <div className="story-detail-page">
      <MusicToggle />
      <header className="page-header header--stories">
        <PageHeading
          title={story.title}
          subtitle={`${story.date} · By ${story.author}`}
        />
      </header>

      <div className="story-detail-body">
        {story.body.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>

      <button className="back-btn" onClick={() => navigate(-1)} aria-label="Back">
        ←
      </button>
    </div>
  );
}

export default StoryDetailPage;
