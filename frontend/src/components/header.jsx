import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import '../styles/header-footer.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Setze immer den Dark-Modus als Standard
    setIsDarkMode(true);
    document.documentElement.setAttribute('data-theme', 'dark');

    // Header standardmäßig geschlossen lassen
    setIsOpen(false);
  }, []);

  const toggleHeader = () => {
    const newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    localStorage.setItem('headerIsOpen', newIsOpen);
  };

  const toggleMode = (mode) => {
    // Ändere den Modus und speichere ihn in localStorage
    setIsDarkMode(mode === 'dark');
    localStorage.setItem('theme', mode);
    document.documentElement.setAttribute('data-theme', mode);
  };

  return (
    <>
      <button className={`toggle-button ${isOpen ? 'button-open' : ''}`} onClick={toggleHeader}>
        {isOpen ? (
          <svg className="icon left-arrow">
            <use href="/assets/icons/left-arrow.svg#left-arrow" />
          </svg>
        ) : (
          <svg className="icon right-arrow">
            <use href="/assets/icons/right-arrow.svg#right-arrow" />
          </svg>
        )}
      </button>
      
      {isOpen && (
        <header className="header">
          <div className="mode-toggle-buttons">
            <button
              className={`mode-toggle-button ${isDarkMode ? 'active' : ''}`}
              onClick={() => toggleMode('dark')}
              disabled={isDarkMode}
            >
              <svg className="icon dark-mode">
                <use href="/assets/icons/dark-mode.svg#dark-mode" />
              </svg>
            </button>
            <button
              className={`mode-toggle-button ${!isDarkMode ? 'active' : ''}`}
              onClick={() => toggleMode('light')}
              disabled={!isDarkMode}
            >
              <svg className="icon light-mode">
                <use href="assets/icons/light-mode.svg#light-mode" />
              </svg>
            </button>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projekte</Link></li>
              <li><Link to="/documents">Documente</Link></li>
              <li><Link to="/contact">Kontakt</Link></li>
              <li><Link to="/about">Über uns</Link></li>
            </ul>
          </nav>
          <Footer />
        </header>
      )}
    </>
  );
};

export default Header;