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
  FaPlus,
  FaMinus,
  FaUserTie,
} from "react-icons/fa";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";
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
  
  // Mobile menu accordion states
  const [mobileWhatWeDoOpen, setMobileWhatWeDoOpen] = useState(false);
  const [mobileWhoWeAreOpen, setMobileWhoWeAreOpen] = useState(false);

  const searchInputRef = useRef(null);

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

  // Focus input when search panel opens
  useEffect(() => {
    if (showSearch && searchInputRef.current) {
      setTimeout(() => {
        searchInputRef.current.focus();
      }, 100);
    }
  }, [showSearch]);

  // Close mobile menu when route changes
  useEffect(() => {
    setMenuOpen(false);
    setMobileWhatWeDoOpen(false);
    setMobileWhoWeAreOpen(false);
  }, [location.pathname]);

  /* ✅ Navigation Handlers */
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
    setMobileWhatWeDoOpen(false);
    setMobileWhoWeAreOpen(false);
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
    setMobileWhatWeDoOpen(false);
    setMobileWhoWeAreOpen(false);
  };

  const toggleMobileMenu = () => {
    setMenuOpen((prev) => !prev);
    setOpenDropdown(null);
    if (!menuOpen) {
      setMobileWhatWeDoOpen(false);
      setMobileWhoWeAreOpen(false);
    }
  };

  const handleSearchOpen = () => {
    setShowSearch(true);
    setQuery("");
    setSuggestions([]);
  };

  const handleSearchClose = () => {
    setShowSearch(false);
    setQuery("");
    setSuggestions([]);
  };

  // Dropdown hover logic (Desktop)
  let dropdownCloseTimer;
  const openDropdownWithDelay = (name) => {
    clearTimeout(dropdownCloseTimer);
    setOpenDropdown(name);
  };
  const closeDropdownWithDelay = () => {
    dropdownCloseTimer = setTimeout(() => setOpenDropdown(null), 200);
  };

  return (
    <>
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

        {/* === DESKTOP NAVIGATION === */}
        <nav className="header-nav desktop-nav" role="navigation">
          <ul className="menu">
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
                    <FaUserTie /> Leadership
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

        {/* === MOBILE NAVIGATION === */}
        <nav className={`mobile-nav ${menuOpen ? "active" : ""}`}>
          <ul className="mobile-menu">
            <li
              onClick={handleHomeClick}
              className={location.pathname === "/" ? "active" : ""}
            >
              Home
            </li>

            {/* What We Do - Mobile Accordion */}
            <li className="mobile-dropdown">
              <div
                className="mobile-dropdown-header"
                onClick={() => setMobileWhatWeDoOpen(!mobileWhatWeDoOpen)}
              >
                <span>What we do</span>
                {mobileWhatWeDoOpen ? <FaMinus /> : <FaPlus />}
              </div>
              <ul className={`mobile-submenu ${mobileWhatWeDoOpen ? "open" : ""}`}>
                <li onClick={(e) => handleLinkClick("/telecom", e)}>
                  <FaBroadcastTower /> Telecom Services
                </li>
                <li onClick={(e) => handleLinkClick("/banking", e)}>
                  <FaUniversity /> Banking & Financial Services
                </li>
                <li onClick={(e) => handleLinkClick("/healthcare", e)}>
                  <FaHeartbeat /> Health Care Services
                </li>
                <li onClick={(e) => handleLinkClick("/manufacturing", e)}>
                  <FaIndustry /> Manufacturing
                </li>
                <li onClick={(e) => handleLinkClick("/education", e)}>
                  <FaBook /> Education & Trust
                </li>
                <li onClick={(e) => handleLinkClick("/imports", e)}>
                  <FaExchangeAlt /> Imports & Exports
                </li>
              </ul>
            </li>

            {/* Who We Are - Mobile Accordion */}
            <li className="mobile-dropdown">
              <div
                className="mobile-dropdown-header"
                onClick={() => setMobileWhoWeAreOpen(!mobileWhoWeAreOpen)}
              >
                <span>Who we are</span>
                {mobileWhoWeAreOpen ? <FaMinus /> : <FaPlus />}
              </div>
              <ul className={`mobile-submenu ${mobileWhoWeAreOpen ? "open" : ""}`}>
                <li onClick={(e) => handleLinkClick("/about", e)}>
                  <FaUsers /> About Us
                </li>
                <li onClick={(e) => handleLinkClick("/leadership", e)}>
                  <FaUserTie /> Leadership
                </li>
              </ul>
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
          <FaSearch className="header-icon" onClick={handleSearchOpen} />

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

      {/* === RIGHT SIDE SEARCH PANEL === */}
      <div className={`search-panel ${showSearch ? "active" : ""}`}>
        <div className="search-panel-header">
          <div className="search-panel-title">Search</div>
          <button className="search-panel-close" onClick={handleSearchClose}>
            <MdClose />
          </button>
        </div>

        <div className="search-panel-body">
          <div className="search-input-wrapper">
            <FaSearch className="search-input-icon" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && query.trim()) {
                  handleSearchSelect(query);
                }
              }}
              className="search-panel-input"
            />
          </div>

          {/* Search Results */}
          {suggestions.length > 0 && (
            <div className="search-results">
              <div className="search-results-title">Suggestions</div>
              <ul className="search-results-list">
                {suggestions.map((item) => (
                  <li
                    key={item}
                    onClick={() => handleSearchSelect(item)}
                    className="search-result-item"
                  >
                    <FaSearch className="search-result-icon" />
                    <span>{item.charAt(0).toUpperCase() + item.slice(1)}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* No Results */}
          {query && suggestions.length === 0 && (
            <div className="search-no-results">
              <p>No results found for "{query}"</p>
            </div>
          )}
        </div>
      </div>

      {/* === SEARCH OVERLAY === */}
      {showSearch && (
        <div className="search-overlay" onClick={handleSearchClose}></div>
      )}
    </>
  );
}

export default Header;