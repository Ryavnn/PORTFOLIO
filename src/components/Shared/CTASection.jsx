import { Link } from 'react-router-dom';
import './CTASection.css';

const CTASection = () => {
  return (
    <section className="contact-section">
      <div className="contact-wrapper">
        <div className="contact-content">
          <div className="contact-cta">
            <p className="contact-label">OPEN FOR WORK</p>
            <h2 className="contact-title">
              LET'S BUILD<br />
              <span className="accent-text">SOMETHING</span><br />
              GREAT
            </h2>
            <p className="contact-description">
              Whether you need a product built from scratch, a<br />
              new website or an idea brought to life – I'm ready.<br />
              Let's talk scope, timeline, and vision.
            </p>
          </div>
          <div className="contact-info">
            <div className="contact-info-inner">
              <p className="contact-label">GET IN TOUCH</p>
              <a href="mailto:info@njorogeryan.tech" className="contact-email">info@njorogeryan.tech</a>
              <div className="contact-actions">
                <Link to="/contact"><button className="btn-primary">Work with me →</button></Link>
                <a href="/Ryan_Njoroge_CV.pdf" download target="_blank" rel="noopener noreferrer"><button className="btn-outline">Download CV ↓</button></a>
              </div>
              <div className="contact-stats">
                <div className="stat">
                  <p className="stat-number">20+</p>
                  <p className="stat-label">Projects<br />completed</p>
                </div>
                <div className="stat">
                  <p className="stat-number">3+ yrs</p>
                  <p className="stat-label">Of hands-on<br />experience</p>
                </div>
                <div className="stat">
                  <p className="stat-number">100%</p>
                  <p className="stat-label">Client<br />satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

