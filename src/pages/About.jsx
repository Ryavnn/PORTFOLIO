import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import SEO from '../components/Shared/SEO';
import { motion } from 'framer-motion';
import '../About.css';

export default function About() {
  const stats = [
    { value: '3+', label: 'YEARS EXPERIENCE' },
    { value: '20+', label: 'PROJECTS BUILT' }
  ];

  const values = [
    {
      icon: '🛡️',
      title: 'HONESTY FIRST',
      description: 'I don\'t sugarcoat technical debt or timeline risks. Building great software requires radical transparency between builder and stakeholder.'
    },
    {
      icon: '⚡',
      title: 'SPEED TO MARKET',
      description: 'Perfect is the enemy of shipped. I focus on high-velocity development that gets a functional V1 into users\' hands as weeks, not months.'
    },
    {
      icon: '</>',
      title: 'MAINTAINABLE CODE',
      description: 'I build for the "future you." My code is structured, documented, and follows architectural patterns that any engineer can pick up.'
    }
  ];

  const tools = [
    'REACT',
    'TAILWIND',
    'NODE.JS',
    'POSTGRES',
    'MAKE.COM'
  ];

  const hobbies = [
    { icon: '⛰️', text: 'HIKING THE GREAT RIFT VALLEY' },
    { icon: '🎵', text: 'COLLECTING RETRO ELECTRONICS' },
    { icon: '☕', text: 'ETHICAL COFFEE ROASTING' }
  ];

  return (
    <motion.div 
      className="about-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="About Ryan Njoroge — Digital Product Builder, Nairobi"
        description="Learn about Ryan Njoroge — a Nairobi-based developer and designer with 3+ years building high-performance web products, SaaS platforms, and automated digital systems."
        canonical="/about"
      />
      <Navbar />

      <section className="about-hero">
        <div className="about-hero-content">
          <p className="hero-label">WHO IS RYAN</p>
          <h1 className="section-hero-title">
            BUILDING THE<br />
            <span className="accent-text">DIGITAL</span><br />
            FRONTIER.
          </h1>
          <p className="about-hero-description">
            Nairobi-based developer and designer crafting high-<br />
            performance digital systems for the next generation of<br />
            builders.
          </p>
        </div>
      </section>

      <section className="about-story">
        <div className="about-story-content">
          <div className="story-left">
            <h2 className="story-heading">
              THE MAN BEHIND<br />
              THE BUILD
            </h2>
          </div>
          <div className="story-right">
            <p className="story-text">
              My journey didn't start with code, but with components. Coming from a background in 
              mechanical engineering, I was obsessed with how things fit together—the structural 
              integrity of systems. When I transitioned into the digital realm, that obsession followed.
            </p>
            <p className="story-text">
              Today, I operate as a Digital Product Builder, bridging the gap between raw backend 
              logic and refined frontend aesthetics. Based in Nairobi, I work with global teams to 
              architect solutions that aren't just "functional" but fundamentally robust and scalable.
            </p>
            
            <div className="stats-grid">
              {stats.map((stat, index) => (
                <div key={index} className="stat-box">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="values-grid">
          {values.map((value, index) => (
            <div key={index} className="value-card">
              <div className="value-icon">{value.icon}</div>
              <h3 className="value-title">{value.title}</h3>
              <p className="value-description">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="about-tools">
        <div className="about-tools-content">
          <h2 className="tools-heading">TOOLS OF THE TRADE</h2>
          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div key={index} className="tool-box">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-beyond">
        <div className="beyond-box">
          <div className="beyond-left">
            <h2 className="beyond-heading">
              BEYOND THE<br />
              <span className="accent-text">TERMINAL</span>
            </h2>
            <p className="beyond-description">
              When I'm not pushing pixels or architecting APIs,<br />
              I'm usually disconnecting to reconnect.
            </p>
            <div className="hobbies-list">
              {hobbies.map((hobby, index) => (
                <div key={index} className="hobby-item">
                  <span className="hobby-icon">{hobby.icon}</span>
                  <span className="hobby-text">{hobby.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="beyond-right">
            <div className="beyond-image">
              <span style={{ fontSize: '64px', opacity: 0.3 }}>🏔️</span>
            </div>
          </div>
        </div>
      </section>

      <section className="about-cta">
        <div className="about-cta-content">
          <h2 className="cta-heading">
            GOT A PROJECT<br />
            IN MIND?
          </h2>
          <p className="cta-description">
            I'm currently accepting new projects for {(() => {
              const now = new Date();
              const currentQuarter = Math.floor(now.getMonth() / 3) + 1;
              const year = now.getFullYear();
              return `Q${currentQuarter} ${year}`;
            })()}. Let's<br />
            discuss how we can build something monumental<br />
            together.
          </p>
          <div className="cta-buttons">
            <Link to="/contact"><button className="btn-primary">START A CONVERSATION</button></Link>
            <Link to="/projects"><button className="btn-secondary">VIEW PORTFOLIO</button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
