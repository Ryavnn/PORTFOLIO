import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { BrowserMockup } from '../components/Mockups/BrowserMockup';
import { PhoneMockup } from '../components/Mockups/PhoneMockup';
import { getProjectBySlug } from '../utils/api';
import { motion } from 'framer-motion';
import '../CaseStudy.css';

export default function CaseStudy() {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const data = await getProjectBySlug(slug);
        setProject(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [slug]);

  if (loading) return <div className="case-study-page"><Navbar /><div style={{padding: '100px', textAlign: 'center'}}>Loading...</div><Footer /></div>;
  if (error || !project) return <Navigate to="/projects" replace />;

  return (
    <motion.div 
      className="case-study-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />

      <section className="cs-hero">
        <div className="cs-hero-content">
          <div className="cs-hero-left">
            <p className="cs-label">{project.label}</p>
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-description">{project.description}</p>
          </div>
          <div className="cs-hero-right">
            <div className="cs-hero-image">
              {project.images?.hero ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\\s+/g, '')}.com`}>
                  <img src={project.images.hero} alt={project.title} className="mockup-image" />
                </BrowserMockup>
              ) : (
                <span style={{ fontSize: '64px', opacity: 0.3 }}>🏕️</span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="cs-featured-image">
        <div className="cs-featured-placeholder">
          {project.images?.featured ? (
            <BrowserMockup url={`${project.title.toLowerCase().replace(/\\s+/g, '')}.com`}>
              <img src={project.images.featured} alt="Featured project visual" className="mockup-image" />
            </BrowserMockup>
          ) : (
            <span style={{ fontSize: '80px', opacity: 0.5 }}>🌍</span>
          )}
        </div>
      </section>

      <section className="cs-meta">
        <div className="cs-meta-content">
          <div className="cs-meta-item">
            <h3 className="cs-meta-heading">{project.role}</h3>
          </div>
          <div className="cs-meta-item">
            <h3 className="cs-meta-heading">{project.tech}</h3>
          </div>
          <div className="cs-meta-item">
            <h3 className="cs-meta-heading" style={{ whiteSpace: 'pre-line' }}>{project.timeline}</h3>
          </div>
        </div>
      </section>

      {project.challenge && (
        <section className="cs-challenge">
          <div className="cs-challenge-content">
            <div className="cs-challenge-left">
              <h2 className="cs-section-heading">{project.challenge.heading}</h2>
            </div>
            <div className="cs-challenge-right">
              <p className="cs-challenge-text">{project.challenge.text}</p>
              <p className="cs-challenge-subtext">{project.challenge.subtext}</p>
            </div>
          </div>
        </section>
      )}

      {project.strategy && (
        <section className="cs-strategy">
          <div className="cs-strategy-box">
            <div className="cs-strategy-content">
              <div className="cs-strategy-left">
                <h2 className="cs-strategy-heading">STRATEGY<br />& SOLUTION</h2>
                <div className="cs-strategy-list">
                  {project.strategy.map((item, index) => (
                    <div key={index} className="cs-strategy-item">
                      <span className="cs-strategy-number">{item.number}</span>
                      <div className="cs-strategy-text">
                        <h4 className="cs-strategy-title">{item.title}</h4>
                        <p className="cs-strategy-desc">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="cs-strategy-right">
                <div className="cs-wireframe-preview">
                  <div className="wireframe-placeholder">
                    {project.images?.strategy ? (
                      <PhoneMockup>
                        <img src={project.images.strategy} alt="Project strategy visual" className="mockup-image" />
                      </PhoneMockup>
                    ) : (
                      <span style={{ fontSize: '48px', opacity: 0.3 }}>📱</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="cs-gallery">
        <div className="cs-gallery-grid">
          <div className="cs-gallery-item">
            <div className="gallery-placeholder">
              {project.images?.gallery1 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\\s+/g, '')}.com`}>
                  <img src={project.images.gallery1} alt="Project gallery visual 1" loading="lazy" className="mockup-image" />
                </BrowserMockup>
              ) : (
                <span style={{ fontSize: '48px', opacity: 0.3 }}>👤</span>
              )}
            </div>
          </div>
          <div className="cs-gallery-item">
            <div className="gallery-placeholder">
              {project.images?.gallery2 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\\s+/g, '')}.com`}>
                  <img src={project.images.gallery2} alt="Project gallery visual 2" loading="lazy" className="mockup-image" />
                </BrowserMockup>
              ) : (
                <span style={{ fontSize: '48px', opacity: 0.3 }}>💻</span>
              )}
            </div>
          </div>
          <div className="cs-gallery-item cs-gallery-wide">
            <div className="gallery-placeholder">
              {project.images?.gallery3 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\\s+/g, '')}.com`}>
                  <img src={project.images.gallery3} alt="Project gallery visual 3" loading="lazy" className="mockup-image" />
                </BrowserMockup>
              ) : (
                <span style={{ fontSize: '64px', opacity: 0.3 }}>🎨</span>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.results && (
        <section className="cs-results">
          <div className="cs-results-grid">
            {project.results.map((result, index) => (
              <div 
                key={index} 
                className={`cs-result-card ${result.highlighted ? 'highlighted' : ''}`}
              >
                <h3 className="cs-result-metric">{result.metric}</h3>
                <p className="cs-result-label">{result.label}</p>
                <p className="cs-result-desc">{result.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="cs-cta">
        <div className="cs-cta-content">
          <h2 className="cs-cta-heading">
            INTERESTED IN A<br />
            SIMILAR TRANSFORMATION?
          </h2>
          <div className="cs-cta-buttons">
            <button onClick={() => window.location.href='/contact'} className="btn-primary">LET'S TALK PROJECT →</button>
            <button onClick={() => window.location.href='/projects'} className="btn-secondary">VIEW PORTFOLIO</button>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
