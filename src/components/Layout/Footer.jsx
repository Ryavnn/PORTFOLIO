import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-minimal">
      <div className="footer-wrapper">
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} RYAN NJOROGE. ALL RIGHTS RESERVED.</p>
          <div className="footer-links">
            <a href="https://github.com/Ryavnn" target="_blank" rel="noopener noreferrer">GITHUB</a>
            <a href="https://x.com/techbuildske" target="_blank" rel="noopener noreferrer">TWITTER (X)</a>
            <a href="https://www.instagram.com/ryanbuilds.ke/" target="_blank" rel="noopener noreferrer">INSTAGRAM</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
