import React from 'react';
import './WorkCTA.css';

const WorkCTA = () => {
  return (
    <section className="work-cta">
      <div className="work-cta-container">
        <div className="work-cta-box">
          <h2 className="work-cta-title">
            READY TO START YOUR<br />
            PROJECT? LET'S BUILD<br />
            SOMETHING <span className="monumental-text">MONUMENTAL.</span>
          </h2>
          <button className="btn-work-cta">
            GET IN TOUCH
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkCTA;
