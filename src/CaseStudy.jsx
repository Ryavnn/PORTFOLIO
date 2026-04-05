import Footer from './Footer'
import Navbar from './Navbar'
import './CaseStudy.css'

function CaseStudy({ navigateTo }) {
  // This would normally come from props or route params
  const project = {
    label: 'CASE STUDY | 2025',
    title: 'BNB SAFARI',
    description: 'Revolutionizing the digital booking landscape for East African hospitality. We transformed a fragmented WhatsApp-based manual booking system into a seamless, high-conversion direct reservation engine.',
    role: 'LEAD DEVELOPER & DESIGNER',
    tech: 'REACT, NODE.JS, POSTGRESQL',
    timeline: '10 WEEKS\nQ2 2024',
    challenge: {
      heading: 'THE CHALLENGE',
      text: 'The client was drowning in administrative friction. Every single booking inquiry required a manual 52-minute conversation on WhatsApp, leading to a 32% dropout rate during peak seasons.',
      subtext: 'The objective was to digitize the inventory of 12 partner safari sites across Kenya and Tanzania, providing real-time availability while maintaining the "premium, personalized" feeling that ultra high-net-worth travelers expect.'
    },
    strategy: [
      {
        number: '01',
        title: 'INVENTORY SYNC',
        description: 'Built a two-way API integration that aggregated availability across diverse legacy booking systems into a single unified calendar.'
      },
      {
        number: '02',
        title: 'IMMERSIVE UX',
        description: 'Designed cinematic landing pages complete full-bleed photography paired by high-res slideshows with 360° virtual tours.'
      },
      {
        number: '03',
        title: 'ONE-TAP CHECKOUT',
        description: 'Stripe-powered reservation workflow that finalized safaris bookings completions less than 15 seconds (3 clicks or fewer).'
      }
    ],
    results: [
      {
        metric: '40%',
        label: 'Efficiency Increase',
        description: 'Reduction in manual WhatsApp conversations after rollout.'
      },
      {
        metric: '1.2M',
        label: 'Revenue Forecast',
        description: 'Total volume of direct bookings processed in the first quarter.'
      },
      {
        metric: '98%',
        label: 'Customer Satisfaction',
        description: 'Net Promoter rating of the new reservation experience.',
        highlighted: true
      }
    ]
  }

  return (
    <div className="case-study-page">
      <Navbar navigateTo={navigateTo} activePage="work" />

      {/* Hero Section */}
      <section className="cs-hero">
        <div className="cs-hero-content">
          <div className="cs-hero-left">
            <p className="cs-label">{project.label}</p>
            <h1 className="cs-title">{project.title}</h1>
            <p className="cs-description">{project.description}</p>
          </div>
          <div className="cs-hero-right">
            <div className="cs-hero-image">
              <span style={{ fontSize: '64px', opacity: 0.3 }}>🏕️</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="cs-featured-image">
        <div className="cs-featured-placeholder">
          <span style={{ fontSize: '80px', opacity: 0.5 }}>🌍</span>
        </div>
      </section>

      {/* Project Meta */}
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

      {/* Challenge Section */}
      <section className="cs-challenge">
        <div className="cs-challenge-content">
          <div className="cs-challenge-left">
            <h2 className="cs-section-heading">{project.challenge.heading}</h2>
          </div>
          <div className="cs-challenge-right">
            <p className="cs-challenge-text">
              The client was drowning in administrative friction. Every single booking inquiry required a manual <span className="highlight">52-minute conversation</span> on WhatsApp, leading to a <span className="highlight">32% dropout rate</span> during peak seasons.
            </p>
            <p className="cs-challenge-subtext">{project.challenge.subtext}</p>
          </div>
        </div>
      </section>

      {/* Strategy & Solution */}
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
                  <span style={{ fontSize: '48px', opacity: 0.3 }}>📱</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="cs-gallery">
        <div className="cs-gallery-grid">
          <div className="cs-gallery-item">
            <div className="gallery-placeholder">
              <span style={{ fontSize: '48px', opacity: 0.3 }}>👤</span>
            </div>
          </div>
          <div className="cs-gallery-item">
            <div className="gallery-placeholder">
              <span style={{ fontSize: '48px', opacity: 0.3 }}>💻</span>
            </div>
          </div>
          <div className="cs-gallery-item cs-gallery-wide">
            <div className="gallery-placeholder">
              <span style={{ fontSize: '64px', opacity: 0.3 }}>🎨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
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

      {/* CTA Section */}
      <section className="cs-cta">
        <div className="cs-cta-content">
          <h2 className="cs-cta-heading">
            INTERESTED IN A<br />
            SIMILAR TRANSFORMATION?
          </h2>
          <div className="cs-cta-buttons">
            <button className="btn-primary">LET'S TALK PROJECT →</button>
            <button className="btn-secondary">VIEW PORTFOLIO</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CaseStudy
