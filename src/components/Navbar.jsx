import { Link } from 'react-router-dom';
import { FaDownload, FaMoon, FaSun } from 'react-icons/fa';
import { resumeMeta } from '../data';

export default function Navbar({ theme, onToggleTheme, isResumePage }) {
  return (
    <header className="site-header">
      <nav className="navbar section-shell" aria-label="Primary navigation">
        <Link className="brand" to="/">
          <span className="brand-mark">YB</span>
          <span className="brand-text">Yahya</span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/resume">Resume</Link>
          {isResumePage ? null : <a href="#experience">Experience</a>}
          {isResumePage ? null : <a href="#projects">Projects</a>}
        </div>

        <div className="nav-actions">
          <a className="resume-download-nav" href={resumeMeta.resumeFile} download>
            <FaDownload className="inline-icon" />
            Download CV
          </a>

          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            {theme === 'dark' ? <FaSun className="inline-icon" /> : <FaMoon className="inline-icon" />}
            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
            <span className="theme-toggle-orb" aria-hidden="true" />
          </button>
        </div>
      </nav>
    </header>
  );
}