import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../styles/Menu.css";

const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/chapters", label: "Chapters" },
  { to: "/map", label: "Map" },
  { to: "/gallery", label: "Gallery" },
  { to: "/stories", label: "Fietas Stories" },
  { to: "/about", label: "About" },
];

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu Button (hidden while sidebar is open) */}
      {!isOpen && (
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Open menu"
        >
        <img src={`${import.meta.env.BASE_URL}Icons/menu.png`} />
        </button>
      )}

      {/* Overlay */}
      <div
        className={`menu-overlay ${isOpen ? "visible" : ""}`}
        onClick={closeMenu}
      ></div>

      {/* Sidebar Menu */}
      <div className={`menu-sidebar ${isOpen ? "open" : ""}`}>
        <button
          className="menu-close"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          ✕
        </button>
        <div className="menu-header">
        <img src={`${import.meta.env.BASE_URL}Icons/banner.png`} />
          <div className="menu-header-bar">
            <h3>Menu</h3>
          </div>
        </div>

        <nav className="menu-nav">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive ? "menu-link active" : "menu-link"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="menu-footer">
          <p className="intents-text">
            A community isn't just buildings, it's the spaces between them,
            filled with memories.
          </p>
        </div>
      </div>
    </>
  );
}

export default Menu;
