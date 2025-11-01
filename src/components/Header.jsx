import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import {
  FaSearch,
  FaGlobe,
  FaBars,
  FaTimes,
  FaBroadcastTower,
  FaUniversity,
  FaHeartbeat,
  FaIndustry,
  FaBook,
  FaExchangeAlt,
  FaUsers,
} from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import "./Header.css";

const searchMap = {
  "telecom services": "/telecom",
  "banking & financial services": "/banking",
  "health care services": "/healthcare",
  manufacturing: "/manufacturing",
  "education & trust": "/education",
  "imports & exports": "/imports",
  "about us": "/about",
  leadership: "/leadership",
  careers: "/careers",
  contact: "/contact",
  home: "/",
};

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [languageMenu, setLanguageMenu] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const searchRef = useRef(null);
  const inputRef = useRef(null);

  // Header shadow on scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Search suggestions
  useEffect(() => {
    const val = query.trim().toLowerCase();
    if (!val) {
      setSuggestions([]);
      return;
    }
    const results = Object.keys(searchMap).filter((key) =>
      key.toLowerCase().includes(val)
    );
    setSuggestions(results);
  }, [query]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearch(false);
        setQuery("");
        setSuggestions([]);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  /* ✅ Navigation Handlers — clean instant navigation */
  const handleSearchSelect = (text) => {
    const key = Object.keys(searchMap).find(
      (k) => k.toLowerCase() === text.toLowerCase()
    );
    const route = key ? searchMap[key] : null;
    if (route) {
      navigate(route);
      setShowSearch(false);
      setQuery("");
      setSuggestions([]);
      setMenuOpen(false);
      setLanguageMenu(false);
    }
  };

  const handleLinkClick = (path, e) => {
    e?.stopPropagation();
    navigate(path);
    setMenuOpen(false);
    setOpenDropdown(null);
    setLanguageMenu(false);
  };

  const handleHomeClick = (e) => {
    e?.stopPropagation();
    if (window.location.pathname === "/") {
      window.location.reload();
    } else {
      navigate("/");
    }
    setMenuOpen(false);
    setOpenDropdown(null);
    setLanguageMenu(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  // Dropdown hover logic
  let dropdownCloseTimer;
  const openDropdownWithDelay = (name) => {
    clearTimeout(dropdownCloseTimer);
    setOpenDropdown(name);
  };
  const closeDropdownWithDelay = () => {
    dropdownCloseTimer = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <header className={`header-modern ${isScrolled ? "scrolled" : ""}`}>
      {/* === Mobile Toggle === */}
      <button
        className="menu-toggle"
        onClick={toggleMobileMenu}
        aria-label="Toggle navigation menu"
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* === Logo === */}
      <div className="header-left" onClick={handleHomeClick}>
        <img src="/uvvacha.png" alt="Uvaacha Logo" className="logo-img" />
      </div>

      {/* === NAVIGATION === */}
      <nav className="header-nav" role="navigation">
        <ul className={`menu ${menuOpen ? "active" : ""}`}>
          <li
            onClick={handleHomeClick}
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </li>

          {/* What We Do */}
          <li
            className={`dropdown ${
              [
                "/telecom",
                "/banking",
                "/healthcare",
                "/manufacturing",
                "/education",
                "/imports",
              ].includes(location.pathname)
                ? "active"
                : ""
            }`}
            onMouseEnter={() => openDropdownWithDelay("what")}
            onMouseLeave={closeDropdownWithDelay}
            onClick={() =>
              setOpenDropdown(openDropdown === "what" ? null : "what")
            }
          >
            <span>
              What we do{" "}
              <MdKeyboardArrowDown
                className={`arrow ${openDropdown === "what" ? "open" : ""}`}
              />
            </span>
            {openDropdown === "what" && (
              <ul
                className="dropdown-menu wide"
                onMouseEnter={() => openDropdownWithDelay("what")}
                onMouseLeave={closeDropdownWithDelay}
              >
                <div className="dropdown-column">
                  <li onClick={(e) => handleLinkClick("/telecom", e)}>
                    <FaBroadcastTower /> Telecom Services
                  </li>
                  <li onClick={(e) => handleLinkClick("/banking", e)}>
                    <FaUniversity /> Banking & Financial Services
                  </li>
                  <li onClick={(e) => handleLinkClick("/healthcare", e)}>
                    <FaHeartbeat /> Health Care Services
                  </li>
                </div>
                <div className="dropdown-column">
                  <li onClick={(e) => handleLinkClick("/manufacturing", e)}>
                    <FaIndustry /> Manufacturing
                  </li>
                  <li onClick={(e) => handleLinkClick("/education", e)}>
                    <FaBook /> Education & Trust
                  </li>
                  <li onClick={(e) => handleLinkClick("/imports", e)}>
                    <FaExchangeAlt /> Imports & Exports
                  </li>
                </div>
              </ul>
            )}
          </li>

          {/* Who We Are */}
          <li
            className={`dropdown ${
              ["/about", "/leadership"].includes(location.pathname)
                ? "active"
                : ""
            }`}
            onMouseEnter={() => openDropdownWithDelay("who")}
            onMouseLeave={closeDropdownWithDelay}
            onClick={() =>
              setOpenDropdown(openDropdown === "who" ? null : "who")
            }
          >
            <span>
              Who we are{" "}
              <MdKeyboardArrowDown
                className={`arrow ${openDropdown === "who" ? "open" : ""}`}
              />
            </span>
            {openDropdown === "who" && (
              <ul
                className="dropdown-menu single"
                onMouseEnter={() => openDropdownWithDelay("who")}
                onMouseLeave={closeDropdownWithDelay}
              >
                <li onClick={(e) => handleLinkClick("/about", e)}>
                  <FaUsers /> About Us
                </li>
                <li onClick={(e) => handleLinkClick("/leadership", e)}>
                  <FaUsers /> Leadership
                </li>
              </ul>
            )}
          </li>

          <li
            onClick={(e) => handleLinkClick("/careers", e)}
            className={location.pathname === "/careers" ? "active" : ""}
          >
            Careers
          </li>

          <li
            onClick={(e) => handleLinkClick("/contact", e)}
            className={location.pathname === "/contact" ? "active" : ""}
          >
            Contact Us
          </li>
        </ul>
      </nav>

      {/* === Search + Language === */}
      <div className="header-right">
        {!showSearch ? (
          <FaSearch className="header-icon" onClick={() => setShowSearch(true)} />
        ) : (
          <div className="search-container" ref={searchRef}>
            <div className="slide-search">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearchSelect(query)}
              />
              <span
                className="close-icon"
                onClick={() => {
                  setShowSearch(false);
                  setQuery("");
                  setSuggestions([]);
                }}
              >
                ✕
              </span>

              {suggestions.length > 0 && (
                <ul
                  className="suggestions-list"
                  style={{
                    width: inputRef.current
                      ? `${inputRef.current.offsetWidth}px`
                      : "260px",
                  }}
                >
                  {suggestions.map((item) => (
                    <li key={item} onClick={() => handleSearchSelect(item)}>
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        )}

        {/* === Language Selector === */}
        <div className="language-selector">
          <div
            className="lang-toggle"
            onClick={() => setLanguageMenu((prev) => !prev)}
          >
            <FaGlobe />
            <span className="lang-text">Global (En)</span>
            <MdKeyboardArrowDown className="arrow" />
          </div>

          {languageMenu && (
            <ul className="lang-dropdown">
              <li>🌎 English</li>
              <li>🇫🇷 French</li>
              <li>🇪🇸 Spanish</li>
              <li>🇮🇳 Hindi</li>
            </ul>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
