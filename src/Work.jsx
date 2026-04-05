import WorkCTA from './WorkCTA'
import Footer from './Footer'
import Navbar from './Navbar'
import './Work.css'

function Work({ navigateTo }) {
  const projects = [
    {
      number: '01',
      tags: ['SAAS', 'PORTFOLIO'],
      title: 'NJOROGERYAN.TECH',
      description: 'High-performance digital identity for developers, optimized for lighthouse scores and brutalist aesthetics.',
      image: 'project1.jpg',
      layout: 'left' // image on left
    },
    {
      number: '02',
      tags: ['TRAVEL', 'MARKETPLACE'],
      title: 'BNB SAFARI',
      description: 'A curated booking engine for luxury safari stays across East Africa.',
      image: 'project2.jpg',
      layout: 'right' // image on right
    },
    {
      number: '03',
      tags: ['SAAS', 'FREELANCE'],
      title: 'FREELANCEBOARD',
      description: 'Workflow orchestration for independent creative contractors.',
      image: 'project3.jpg',
      layout: 'left'
    },
    {
      number: '04',
      tags: ['AUTOMATION', 'PYTHON'],
      title: 'LEAD SCRAPPER TOOL',
      description: 'Highly efficient lead generation engine utilizing headless browsers and proxy rotation.',
      image: 'project4.jpg',
      layout: 'right'
    }
  ]

  return (
    <div className="work-page">
      <Navbar navigateTo={navigateTo} activePage="work" />

      {/* Hero Section */}
      <section className="work-hero">
        <div className="work-hero-content">
          <h1 className="work-hero-title">
            ARCHITECTING THE <span className="accent-text">DIGITAL</span><br />
            LANDSCAPE.
          </h1>
          <p className="work-hero-subtitle">
            A selection of platforms, SaaS MVPs, and automated<br />
            systems built from the ground up.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card project-${project.layout}`}>
            <div className="project-image">
              <div className="placeholder-image">
                {/* Placeholder for project image */}
                <span style={{ fontSize: '48px', opacity: 0.3 }}>📱</span>
              </div>
            </div>
            <div className="project-info">
              <span className="project-number">{project.number}</span>
              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-tag">{tag}</span>
                ))}
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a 
                href="#case-study" 
                className="case-study-link"
                onClick={(e) => { e.preventDefault(); navigateTo('case-study'); }}
              >
                View Case Study <span className="arrow">→</span>
              </a>
            </div>
          </div>
        ))}
      </section>

      <WorkCTA />
      <Footer />
    </div>
  )
}

export default Work
