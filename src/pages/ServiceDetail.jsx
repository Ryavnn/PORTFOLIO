import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import { getServiceBySlug } from '../utils/api';
import { motion } from 'framer-motion';
import '../styles/ServiceDetail.css';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await getServiceBySlug(slug);
        setService(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchService();
  }, [slug]);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  if (loading) return <div className="sd-page"><Navbar /><div style={{padding: '100px', textAlign: 'center'}}>Loading...</div><Footer /></div>;
  if (error || !service) return <Navigate to="/services" replace />;

  const detail = service.detail;

  return (
    <motion.div 
      className="sd-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      {/* Hero Section */}
      <section className="sd-hero">
        <div className="sd-hero-content">
          <div className="sd-hero-left">
            <div className="sd-hero-meta">
              <span className="sd-number">{service.number}</span>
              <div className="sd-tags">
                <span className="sd-category-tag">{service.category}</span>
                {service.tags && service.tags.map((tag, i) => (
                  <span key={i} className="sd-tag">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="sd-title">{service.title}</h1>
            <p className="sd-description">{service.description}</p>
            <div className="sd-hero-actions">
              <Link to="/contact"><button className="btn-primary">START THIS PROJECT →</button></Link>
              <Link to="/services"><button className="btn-secondary">← ALL SERVICES</button></Link>
            </div>
          </div>
          <div className="sd-hero-right">
            <div className="sd-hero-card">
              <div className="sd-hero-icon-box">
                <span className="sd-hero-icon">{service.iconCard?.icon || '📦'}</span>
              </div>
              <div className="sd-hero-card-details">
                <div className="sd-hero-stat">
                  <span className="sd-stat-label">TIMELINE</span>
                  <span className="sd-stat-value">{detail.timeline}</span>
                </div>
                <div className="sd-hero-stat">
                  <span className="sd-stat-label">STARTING AT</span>
                  <span className="sd-stat-value">{detail.startingAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Section */}
      <section className="sd-headline">
        <div className="sd-headline-content">
          <h2 className="sd-headline-text">{detail.headline}</h2>
        </div>
      </section>

      {/* Long Description */}
      <section className="sd-about">
        <div className="sd-about-content">
          <div className="sd-about-left">
            <h3 className="sd-section-heading">WHAT THIS<br />LOOKS LIKE</h3>
          </div>
          <div className="sd-about-right">
            <p className="sd-about-text">{detail.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Approach / Strategy Section */}
      {detail.approach && (
        <section className="sd-approach">
          <div className="sd-approach-box">
            <div className="sd-approach-content">
              <div className="sd-approach-left">
                <h2 className="sd-approach-heading">MY<br />APPROACH</h2>
                <div className="sd-approach-list">
                  {detail.approach.map((item, index) => (
                    <div key={index} className="sd-approach-item">
                      <span className="sd-approach-number">{item.number}</span>
                      <div className="sd-approach-text">
                        <h4 className="sd-approach-title">{item.title}</h4>
                        <p className="sd-approach-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="sd-approach-right">
                <div className="sd-approach-visual">
                  <span className="sd-approach-icon">{service.iconCard?.icon || '📦'}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      {detail.deliverables && (
        <section className="sd-deliverables">
          <div className="sd-deliverables-content">
            <div className="sd-deliverables-left">
              <h3 className="sd-section-heading">WHAT YOU<br />GET</h3>
            </div>
            <div className="sd-deliverables-right">
              <div className="sd-deliverables-grid">
                {detail.deliverables.map((item, index) => (
                  <div key={index} className="sd-deliverable-item">
                    <span className="sd-deliverable-number">{String(index + 1).padStart(2, '0')}</span>
                    <p className="sd-deliverable-text">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ideal For Section */}
      {detail.idealFor && (
        <section className="sd-ideal">
          <div className="sd-ideal-content">
            <h3 className="sd-ideal-heading">IDEAL FOR</h3>
            <div className="sd-ideal-grid">
              {detail.idealFor.map((item, index) => (
                <div key={index} className="sd-ideal-card">
                  <span className="sd-ideal-icon">→</span>
                  <p className="sd-ideal-text">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {detail.faq && (
        <section className="sd-faq">
          <div className="sd-faq-content">
            <div className="sd-faq-left">
              <h3 className="sd-section-heading">COMMON<br />QUESTIONS</h3>
            </div>
            <div className="sd-faq-right">
              <div className="sd-faq-list">
                {detail.faq.map((item, index) => (
                  <div 
                    key={index} 
                    className={`sd-faq-item ${openFaq === index ? 'sd-faq-open' : ''}`}
                    onClick={() => toggleFaq(index)}
                  >
                    <div className="sd-faq-question">
                      <span className="sd-faq-q-text">{item.question}</span>
                      <span className="sd-faq-toggle">{openFaq === index ? '−' : '+'}</span>
                    </div>
                    <div className="sd-faq-answer">
                      <p>{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="sd-cta">
        <div className="sd-cta-content">
          <h2 className="sd-cta-heading">
            READY TO GET<br />
            <span className="accent-text">STARTED</span>?
          </h2>
          <p className="sd-cta-description">
            Let's talk about your project. I'll scope the work, give you<br />
            a clear timeline, and we'll get moving.
          </p>
          <div className="sd-cta-buttons">
            <Link to="/contact"><button className="btn-primary">LET'S TALK PROJECT →</button></Link>
            <Link to="/projects"><button className="btn-secondary">VIEW PORTFOLIO</button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
