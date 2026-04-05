import { useState, useEffect } from 'react'
import ContactSection from './ContactSection'
import Footer from './Footer'
import Navbar from './Navbar'
import './App.css'

export default function App({ navigateTo }) {
  // Rotating text animation for hero section
  const rotatingWords = ['WEB DESIGN', 'AUTOMATION', 'DEVELOPMENT', 'REDESIGN', 'SEO'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500); // Half of the animation duration
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      title: 'Designing user-focused interfaces that turn visitors into loyal clients.',
      icon: '🎨'
    },
    {
      title: 'Designing user-focused interfaces that turn visitors into loyal clients.',
      icon: '💻'
    },
    {
      title: 'Designing user-focused interfaces that turn visitors into loyal clients.',
      icon: '📱'
    },
    {
      title: 'Designing user-focused interfaces that turn visitors into loyal clients.',
      icon: '🚀'
    }
  ];

  const projects = [
    {
      number: '01',
      title: 'FREELANCEBOARD',
      description: 'A two-sided SaaS platform built for freelancers and clients — featuring milestone approvals, design file versioning, staging URL management, and a visual client feedback portal.',
      tags: 'SAAS & WEB APP',
      image: '/project-placeholder.jpg'
    },
    {
      number: '02',
      title: 'BNB BOOKING PLATFORM',
      description: 'A two-sided SaaS platform built for freelancers and clients — featuring milestone approvals, design file versioning, staging URL management, and a visual client feedback portal.',
      tags: 'INTERFACE & WEBSITE',
      image: '/project-placeholder.jpg'
    }
  ];

  const testimonials = [
    {
      id: '01',
      company: 'Construction',
      text: 'The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.',
      author: 'John Ngenga',
      role: 'CEO Gwella Store'
    },
    {
      id: '02',
      company: 'Construction',
      text: 'The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.',
      author: 'John Ngenga',
      role: 'CEO Gwella Store'
    },
    {
      id: '03',
      company: 'Construction',
      text: 'The employee management system Ryano Built is the backbone of our operations. He took time to understand our needs before we finished explaining them.',
      author: 'John Ngenga',
      role: 'CEO Gwella Store'
    }
  ];

  return (
    <div className="app">
      <Navbar navigateTo={navigateTo} activePage="home" />

      <section className="hero">
        <p className="subtitle">— Digital Product Builder – Nairobi, Kenya —</p>
        <h1 className="hero-title">
          I BUILD DIGITAL<br />
          EXPERIENCES<br />
          THROUGH<br />
          <span className={`accent-text rotating-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {rotatingWords[currentWordIndex]}
          </span>
        </h1>
        <p className="hero-description">
          I help businesses grow online – through sharp web design, custom<br />
          development, smart automations, and SEO that actually moves the<br />
          needle.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">START A PROJECT</button>
          <button className="btn-secondary">VIEW MY WORK</button>
        </div>
      </section>

      <section className="services">
        <div className="services-content">
          <div className="services-intro">
            <p className="section-label">MY SERVICES</p>
            <h2 className="section-title">CUSTOM & SCALABLE<br />DIGITAL SOLUTIONS</h2>
            <p className="services-description">
              I create digital products that blend design and<br />
              functionality. By combining intuitive design with<br />
              clean, modern code, I build high-performing<br />
              websites and apps that look well, sell well, and<br />
              automate your workflow.
            </p>
            <button className="btn-outline">ALL SERVICES</button>
          </div>
          <div className="services-grid-wrapper">
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-card">
                  <div className="service-icon">{service.icon}</div>
                  <p className="service-title">{service.title}</p>
                  <a href="#" className="service-link">LEARN MORE →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="projects-wrapper">
          {/* Header Block */}
          <div className="projects-header">
            <div className="projects-header-top">
              <div className="projects-heading">
                <p className="section-label">MY PAST</p>
                <h2 className="section-title">PROJECT SHOWCASE.</h2>
              </div>
              <p className="projects-count">10+ projects</p>
            </div>
            <p className="projects-description">
              Strategic web solutions that help businesses attract<br />
              customers, automate processes, and grow online.
            </p>
          </div>

          {/* Main Row Container */}
          <div className="projects-main-row">
            {/* Left: CTA Button */}
            <div className="projects-cta-wrapper">
              <button className="btn-primary projects-cta">SEE ALL PROJECT</button>
            </div>

            {/* Right: Projects List Container */}
            <div className="projects-list-container">
              <div className="projects-list">
                {/* Project 01 - Text Left, Image Right */}
                <div className="project-item">
                  <div className="project-content">
                    <span className="project-number">01</span>
                    <div className="project-info">
                      <div className="project-title-row">
                        <h3 className="project-title">FREELANCEBOARD</h3>
                        <div className="project-arrow">→</div>
                      </div>
                      <p className="project-description">A two-sided SaaS platform built for freelance operations — featuring milestone approvals, design file versioning, staging URL management, and a visual client feedback portal.</p>
                      <p className="project-tags">SAAS & WEB APP</p>
                    </div>
                  </div>
                  <div className="project-image">
                    <div className="placeholder-image"></div>
                  </div>
                </div>

                {/* Project 02 - Image Left, Text Right */}
                <div className="project-item project-item-reverse">
                  <div className="project-image">
                    <div className="placeholder-image"></div>
                  </div>
                  <div className="project-content">
                    <span className="project-number">02</span>
                    <div className="project-info">
                      <div className="project-title-row">
                        <h3 className="project-title">BNB BOOKING<br />PLATFORM</h3>
                        <div className="project-arrow">→</div>
                      </div>
                      <p className="project-description">A two-sided SaaS platform built for freelance operations — featuring milestone approvals, design file versioning, staging URL management, and a visual client feedback portal.</p>
                      <p className="project-tags">INTERFACE & WEBSITE</p>
                    </div>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="testimonials-content">
          <p className="section-label">TESTIMONIALS</p>
          <h2 className="section-title">WHAT OUR CLIENTS SAY</h2>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-header">
                  <span className="testimonial-company">{testimonial.company}</span>
                  <span className="testimonial-id">{testimonial.id}</span>
                </div>
                <div className="quote-marks">❝</div>
                <p className="testimonial-text">{testimonial.text}</p>
                <div className="testimonial-author">
                  <p className="author-name">{testimonial.author}</p>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </div>
  )
}


