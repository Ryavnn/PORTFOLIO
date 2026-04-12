import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@njorogeryan.tech", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  const socialLinks = [
    { name: 'TWITTER (X)', url: 'https://x.com/techbuildske' },
    { name: 'GITHUB', url: 'https://github.com/Ryavnn' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/ryanbuilds.ke/' }
  ];

  const processSteps = [
    {
      number: '01',
      title: 'DISCOVERY CALL',
      description: 'A 15-minute high-level alignment session to discuss objectives, major constraints, and technological stack feasibility.'
    },
    {
      number: '02',
      title: 'STRATEGIC PROPOSAL',
      description: 'I deliver a granular breakdown of the architectural approach, timeline milestones, and exact investment requirements.'
    },
    {
      number: '03',
      title: 'KICK-OFF',
      description: 'Once the contract is signed, we begin the sprint cycles. Regular updates via asynchronous tools ensure complete transparency.'
    }
  ];

  return (
    <motion.div 
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <section className="contact-hero">
        <div className="contact-hero-content">
          <p className="hero-label">GET IN TOUCH</p>
          <h1 className="section-hero-title">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="accent-text">MONUMENTAL.</span>
          </h1>
        </div>
      </section>

      <section className="contact-main">
        <div className="container">
          <div className="contact-main-content">
            <div className="contact-info">
              <div className="info-section">
                <h3 className="info-heading">GET IN TOUCH</h3>
                <div className="info-block">
                  <p className="info-label">E-MAIL</p>
                  <a href="mailto:info@njorogeryan.tech" className="info-value">info@njorogeryan.tech</a>
                </div>
                <div className="info-block">
                  <p className="info-label">LOCATION</p>
                  <p className="info-value">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="info-section">
                <h3 className="info-heading">SOCIALS</h3>
                <div className="socials-list">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
                      {link.name} <span className="arrow">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper">
              <form className="contact-form" onSubmit={handleSubmit}>
                {/* FormSubmit specific hidden fields */}
                <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="form-group">
                  <label className="form-label">NAME</label>
                  <input type="text" name="name" className="form-input" placeholder="John Doe" required />
                </div>
                <div className="form-group">
                  <label className="form-label">EMAIL ADDRESS</label>
                  <input type="email" name="email" className="form-input" placeholder="john@example.com" required />
                </div>

                <div className="form-group form-group-full">
                  <label className="form-label">PROJECT TYPE</label>
                  <select name="project_type" className="form-select" required>
                    <option value="">Select a category</option>
                    <option value="Web Design & Development">Web Design & Development</option>
                    <option value="Platform & System Development">Platform & System Development</option>
                    <option value="SaaS MVP Development">SaaS MVP Development</option>
                    <option value="Workflow Automation">Workflow Automation</option>
                  </select>
                </div>

                <div className="form-group form-group-full">
                  <label className="form-label">MESSAGE</label>
                  <textarea name="message" className="form-textarea" rows="5" placeholder="Tell me about your vision..." required></textarea>
                </div>

                <button type="submit" className="form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? 'SENDING...' : (
                    <>SEND INQUIRY <span className="arrow">➤</span></>
                  )}
                </button>

                {status === 'success' && (
                  <p style={{ color: 'var(--accent)', marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#E83B1F', marginTop: '20px', fontSize: '14px', lineHeight: '1.6' }}>
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="expect-section">
        <div className="container">
          <div className="expect-header">
            <p className="section-label">— WHAT TO EXPECT —</p>
            <h2 className="expect-heading">
              A <span className="accent-text">STANDARD</span> PROCEDURE<br />
              FOR EXTRAORDINARY RESULTS.
            </h2>
            <p className="expect-description">
              Our first interaction sets the blueprint for the entire build. I prioritize<br />
              clarity, feasibility, and technical alignment from day zero.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-card-header">
                  <span className="process-number">{step.number}</span>
                  <div className="process-line"></div>
                </div>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
