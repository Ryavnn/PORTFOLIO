import React from 'react';
import './Mockups.css';

export function BrowserMockup({ url = "localhost", children }) {
  return (
    <div className="browser-mockup">
      {/* Chrome bar */}
      <div className="browser-chrome-bar">
        {/* Traffic lights */}
        <div className="browser-traffic-lights">
          <span className="browser-dot browser-dot-red" />
          <span className="browser-dot browser-dot-yellow" />
          <span className="browser-dot browser-dot-green" />
        </div>

        {/* URL bar */}
        <div className="browser-url-bar-container">
          <div className="browser-url-bar">
            {/* Lock icon */}
            <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="browser-lock-icon">
              <rect x="1" y="4" width="6" height="5" rx="0.5" fill="#6B7280"/>
              <path d="M2 4V2.5a2 2 0 114 0V4" stroke="#6B7280" strokeWidth="1" fill="none"/>
            </svg>
            <span className="browser-url-text">
              {url}
            </span>
          </div>
        </div>

        {/* Spacer to balance traffic lights */}
        <div className="browser-spacer" />
      </div>

      {/* Screenshot content */}
      <div className="browser-content">
        {children}
      </div>
    </div>
  );
}
