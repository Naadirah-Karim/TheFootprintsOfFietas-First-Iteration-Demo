import { Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import chapters from "../data/chapters";
import "../styles/ChaptersPage.css";

function ChaptersPage() {
  return (
    <div className="chapters-page">
      <MusicToggle />
      <header className="page-header header--chapters">
        <PageHeading title="Story Chapters" />
      </header>
      <img src={`${import.meta.env.BASE_URL}Icons/banner 2.png`} className="banner-strip" alt="" />

      <div className="chapters-divider">
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`} alt="" className="divider-pin" />
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`}  alt="" className="divider-pin" />
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`}  alt="" className="divider-pin" />
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`}  alt="" className="divider-pin" />
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`}  alt="" className="divider-pin" />
        <img src={`${import.meta.env.BASE_URL}Icons/clothespin.png`}  alt="" className="divider-pin" />
      </div>

      <div className="chapters-grid">
        {chapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={`/chapters/${chapter.id}/1`}
            className="chapter-card"
          >
            <img src={`${import.meta.env.BASE_URL}Icons/GirlLady2.png`} alt="" className="chapter-illustration" />
            <span className="chapter-label">CHAPTER {chapter.id}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default ChaptersPage;
