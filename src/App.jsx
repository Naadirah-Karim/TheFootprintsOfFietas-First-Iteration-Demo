import { Routes, Route, Navigate } from "react-router-dom";
import Menu from "./components/Menu";
import LandingPage from "./pages/LandingPage";
import ChaptersPage from "./pages/ChaptersPage";
import ChapterPage from "./pages/ChapterPage";
import MapPage from "./pages/MapPage";
import MapInfoPage from "./pages/MapInfoPage";
import GalleryPage from "./pages/GalleryPage";
import StoriesPage from "./pages/StoriesPage";
import StoryDetailPage from "./pages/StoryDetailPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
      <div className="app">
        <Menu />
        <main className="main">
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />
                } />
            <Route path="/chapters" element=
            {<ChaptersPage />
              } />
            <Route path="/chapters/:chapterId/:pageId" element=
            {<ChapterPage />
            } />
            <Route path="/map" element=
            {<MapPage />
            } />
            <Route path="/map/:locationId" element=
            {<MapInfoPage />
            } />
            <Route path="/gallery" element=
            {<GalleryPage />
            } />
            <Route path="/stories" element=
            {<StoriesPage />
            } />
            <Route path="/stories/:storyId" element=
            {<StoryDetailPage />
            } />
            <Route path="/about" element=
            {<AboutPage />
            } />
            <Route path="*" element=
            {<Navigate to="/" replace />
            } />
          </Routes>
        </main>
         <footer className="footer">
          <div className="footer-container">
          <p> © 2026 | Designed By Naadirah Karim</p>
        </div>
      </footer>
      </div>
  );
}

export default App;