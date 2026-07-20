import { useNavigate, useParams, Link } from "react-router-dom";
import MusicToggle from "../components/MusicToggle";
import PageHeading from "../components/PageHeading";
import chapters from "../data/chapters";
import "../styles/ChapterPage.css";

function ChapterPage() {
  const { chapterId, pageId } = useParams();
  const navigate = useNavigate();

  const chapterNum = Number(chapterId);
  const pageNum = Number(pageId);

  const chapterIndex = chapters.findIndex((c) => c.id === chapterNum);
  const chapter = chapters[chapterIndex];

  if (!chapter) {
    return (
      <div className="chapter-page">
        <p>That chapter could not be found.</p>
        <Link to="/chapters">Back to chapters</Link>
      </div>
    );
  }

  const page = chapter.pages[pageNum - 1];

  const isLastPageOfChapter = pageNum >= chapter.pages.length;
  const isLastChapter = chapterIndex >= chapters.length - 1;
  const isVeryFirstPage = chapterIndex === 0 && pageNum === 1;

  const goNext = () => {
    if (!isLastPageOfChapter) {
      navigate(`/chapters/${chapter.id}/${pageNum + 1}`);
    } else if (!isLastChapter) {
      navigate(`/chapters/${chapters[chapterIndex + 1].id}/1`);
    }
  };

  const goBack = () => {
    if (pageNum > 1) {
      navigate(`/chapters/${chapter.id}/${pageNum - 1}`);
    } else if (chapterIndex > 0) {
      const prevChapter = chapters[chapterIndex - 1];
      navigate(`/chapters/${prevChapter.id}/${prevChapter.pages.length}`);
    } else {
      navigate("/chapters");
    }
  };

  return (
    <div className="chapter-page">
      <MusicToggle />
      <header className="page-header header--chapters">
        <PageHeading
          title={page.heading}
          subtitle={`Page ${pageNum} of ${chapter.pages.length}`}
        />
      </header>

      <div className="chapter-body-wrap">
        <div className="chapter-body">
          {page.paragraphs.map((para, i) =>
            page.isFinal && i === page.paragraphs.length - 1 ? (
              <p key={i} className="chapter-dedication">
                {para}
              </p>
            ) : (
              <p key={i}>{para}</p>
            )
          )}

          <div className="chapter-nav">
            {!isVeryFirstPage && (
              <button className="chapter-nav-btn ghost" onClick={goBack}>
                ← Back
              </button>
            )}
            {page.isFinal ? (
              <Link to="/map" className="btn-exploration">
                Explore Fietas
              </Link>
            ) : (
              <button className="chapter-nav-btn" onClick={goNext}>
                {isLastPageOfChapter ? "Next Chapter" : "Continue"} →
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChapterPage;
