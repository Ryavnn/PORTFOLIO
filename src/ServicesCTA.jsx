import React from 'react';
import './ServicesCTA.css';

const ServicesCTA = () => {
  return (
    <section className="services-cta">
      <div className="services-cta-content">
        <div className="services-cta-left">
          <h2 className="services-cta-title">
            GOT A<br />
            PROJECT<br />
            IN <span className="accent-text">MIND?</span>
          </h2>
        </div>
        
        <div className="services-cta-right">
          <div className="services-cta-actions">
            <button className="btn-brutal-primary">
              START THE CONVERSATION →
            </button>
            <button className="btn-brutal-secondary">
              DOWNLOAD CV ↓
            </button>
            <a href="mailto:info@njorogeryan.tech" className="services-cta-email">
              info@njorogeryan.tech
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesCTA;
