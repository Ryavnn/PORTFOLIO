import './Navbar.css';

const Navbar = ({ navigateTo, activePage }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo" onClick={() => navigateTo('home')} style={{ cursor: 'pointer' }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
            <rect x="1" y="1" width="38" height="38" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L28 28M28 12L12 28" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
        <nav className="nav">
          <a
            href="#work"
            onClick={(e) => { e.preventDefault(); navigateTo('work'); }}
            className={activePage === 'work' ? 'active' : ''}
          >
            Work
          </a>
          <a
            href="#services"
            onClick={(e) => { e.preventDefault(); navigateTo('services'); }}
            className={activePage === 'services' ? 'active' : ''}
          >
            Services
          </a>
          <a
            href="#about"
            onClick={(e) => { e.preventDefault(); navigateTo('about'); }}
            className={activePage === 'about' ? 'active' : ''}
          >
            About
          </a>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); navigateTo('contact'); }}
            className={activePage === 'contact' ? 'active' : ''}
          >
            Contact
          </a>
        </nav>
        <button className="cta-button" onClick={() => navigateTo('contact')}>Lets talk</button>
      </div>
    </header>
  );
};

export default Navbar;
