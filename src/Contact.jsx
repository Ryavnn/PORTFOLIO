import Footer from './Footer'
import Navbar from './Navbar'
import './Contact.css'

function Contact({ navigateTo }) {
  const socialLinks = [
    { name: 'TWITTER (X)', url: 'https://x.com/techbuildske' },
    { name: 'GITHUB', url: 'https://github.com/Ryavnn' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/ryanbuilds.ke/' }
  ]

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
  ]

  return (
    <div className="contact-page">
      <Navbar navigateTo={navigateTo} activePage="contact" />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero-content">
          <h1 className="contact-hero-title">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="accent-text">MONUMENTAL.</span>
          </h1>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main">
        <div className="contact-main-content container grid">
          {/* Left Column - Contact Info */}
          <div className="contact-info col-5 col-md-8 col-sm-4">
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
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className="social-link">
                  {link.name} <span className="arrow">↗</span>
                </a>
              ))}
            </div>

          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-form-wrapper col-7 col-md-8 col-sm-4">
            <form className="contact-form">
              <div className="form-group">
                <label className="form-label">NAME</label>
                <input
                  type="text"
                  className="form-input"
                  placeholder="John Doe"
                />
              </div>

              <div className="form-group">
                <label className="form-label">EMAIL ADDRESS</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="john@example.com"
                />
              </div>

              <div className="form-group form-group-full">
                <label className="form-label">PROJECT TYPE</label>
                <select className="form-select">
                  <option>Select a category</option>
                  <option>Web Design & Development</option>
                  <option>Platform & System Development</option>
                  <option>SaaS MVP Development</option>
                  <option>Workflow Automation</option>
                </select>
              </div>

              <div className="form-group form-group-full">
                <label className="form-label">MESSAGE</label>
                <textarea
                  className="form-textarea"
                  rows="5"
                  placeholder="Tell me about your vision..."
                ></textarea>
              </div>

              <button type="submit" className="form-submit">
                SEND INQUIRY <span className="arrow">➤</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="expect-section">
        <div className="expect-content container">
          <div className="expect-header grid">
            <h2 className="expect-heading col-8 col-md-8 col-sm-4">
              WHAT TO <span className="accent-text">EXPECT.</span>
            </h2>
            <p className="expect-description col-4 col-md-8 col-sm-4">
              A standard procedure for extraordinary results. Our first interaction<br />
              sets the blueprint for the entire build.
            </p>
          </div>

          <div className="process-grid grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card col-4 col-md-4 col-sm-4">
                <h3 className="process-number">{step.number}</h3>
                <h4 className="process-title">{step.title}</h4>
                <p className="process-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Contact
