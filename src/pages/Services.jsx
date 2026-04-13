import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import SEO from '../components/Shared/SEO';
import { getServices } from '../utils/api';
import { motion } from 'framer-motion';
import '../Services.css'; // Use existing css

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    fetchServices();
  }, []);

  const processSteps = [
    {
      number: '01',
      weeks: 'WEEKS 1-2',
      title: 'SCOPE IT',
      description: 'We talk through what you need, what done looks like, and what a realistic timeline and budget is. No vague proposals.'
    },
    {
      number: '02',
      weeks: 'WEEKS 3-6',
      title: 'DESIGN IT',
      description: 'Wireframes, flows, and visual direction before any code. You see what you\'re getting before we build it.'
    },
    {
      number: '03',
      weeks: 'WEEKS 7-10',
      title: 'BUILD IT',
      description: 'Fast, iterative development with regular check-ins and demos. You\'re never in the dark about where things are.'
    },
    {
      number: '04',
      weeks: 'WEEKS 11-12',
      title: 'SHIP IT',
      description: 'Deployed, tested, documented, and handed over. You own it completely — code, credentials, everything.'
    }
  ];

  return (
    <motion.div 
      className="services-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Services — Web Design, Development, SaaS & Automation"
        description="Ryan Njoroge offers four specialist services: custom web design & development, platform & system development, SaaS MVP builds, and workflow automation. No filler — just what he's shipped."
        canonical="/services"
      />
      <Navbar />

      <section className="services-hero">
        <div className="services-hero-content">
          <div className="hero-left">
            <p className="hero-label">WHAT I OFFER</p>
            <h1 className="services-hero-title">
              WHAT I<br />
              <span className="accent-text">ACTUALLY</span><br />
              BUILD.
            </h1>
          </div>
          <div className="hero-right">
            <p className="hero-description">
              Four services. No filler. Each one is something I've shipped for a<br />
              real client — not something I listed to look impressive. <strong>If it's not<br />
                here, I don't offer it.</strong> That's how you get someone who knows what<br />
              they're doing, not someone who says yes to everything.
            </p>
            <div className="availability-badge">
              <span className="dot"></span>
              CURRENTLY TAKING ON NEW PROJECTS
            </div>
          </div>
        </div>
      </section>

      <section className="services-list-section">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <div className="service-card-left">
                <div className="service-meta">
                  <span className="service-number">{service.number}</span>
                  <div className="service-tags">
                    <span className="category-tag">{service.category}</span>
                    {service.tags && service.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <h2 className="service-card-title">{service.title}</h2>
                <p className="service-card-description">{service.description}</p>

                <div className="service-included">
                  <ul className="included-list">
                    {service.included && service.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <Link to={`/services/${service.slug}`} className="btn-service-detail">Learn More</Link>
              </div>

              {service.projectCard && (
                <div className="service-card-right">
                  <div className="sample-project-card">
                    <p className="sample-label">SAMPLE PROJECT</p>
                    <div className="project-details">
                      <h4 className="project-name">{service.projectCard.title}</h4>
                      <p className="project-desc">{service.projectCard.description}</p>
                    </div>
                    <div className="project-preview">
                      <div className="project-icon-box" style={{ backgroundColor: service.iconCard?.bgColor || '#000' }}>
                        <span className="project-icon">{service.iconCard?.icon || '📦'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="process-section">
        <div className="process-header">
          <p className="process-subtitle">THE PROCESS</p>
          <h2 className="process-title">
            HOW WORKING WITH<br />
            ME <span className="accent-text">ACTUALLY</span> GOES.
          </h2>
        </div>

        <div className="timeline-container">
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className={`process-step ${index % 2 === 0 ? 'step-left' : 'step-right'}`}>
                <div className="step-content-box">
                  <p className="step-timeframe">{step.weeks}</p>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-description">{step.description}</p>
                </div>
                <div className="step-number-marker">
                  <span className="step-number">{step.number}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Merged ServicesCTA into Shared CTASection */}
      <CTASection />
      <Footer />
    </motion.div>
  );
}
