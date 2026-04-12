import React from 'react';
import './Mockups.css';

export function PhoneMockup({ children }) {
  return (
    <div className="phone-mockup">
      {/* Notch */}
      <div className="phone-notch-container">
        <div className="phone-notch" />
      </div>

      {/* Screen content */}
      <div className="phone-content">
        {children}
      </div>

      {/* Home indicator */}
      <div className="phone-home-indicator-container">
        <div className="phone-home-indicator" />
      </div>
    </div>
  );
}
