import ServicesCTA from './ServicesCTA'
import Footer from './Footer'
import Navbar from './Navbar'
import './Services.css'

function Services({ navigateTo }) {
  const services = [
    {
      number: '01',
      category: 'CORE OFFER',
      tags: ['DESIGN', 'DEVELOPMENT'],
      title: 'WEB DESIGN & DEVELOPMENT',
      description: 'I design and code custom websites that help you grow your business, capture more leads, and convert visitors into customers. From one-page sites to full web apps—designed with clarity and developed swiftly and fully responsive. No teams why. One person fully does code.',
      included: [
        'Custom design — no themes or builders used',
        'Mobile-first, responsive layout designs',
        'Performance optimization for fast load times',
        'Contact forms, integrations, and basic SEO',
        'Interactive UIs with smooth animations'
      ],
      iconCard: {
        icon: '🌐',
        bgColor: '#000'
      },
      projectCard: {
        title: 'Example/Melek',
        description: 'Designed and built a bespoke landing page for a SaaS product that converts visitors into qualified leads.',
        tags: ['DESIGN', 'WEBFLOW']
      }
    },
    {
      number: '02',
      category: 'CORE OFFER',
      tags: ['WEB', 'API'],
      title: 'PLATFORM & SYSTEM DEVELOPMENT',
      description: 'Need something more complex than a website? I build full-stack web platforms that handle real workflows — whether it\'s a client portal, booking system, membership area, or custom tool for your team to use. Built to be scalable, manageable, and actually work — built on a tech stack your business can scale with.',
      included: [
        'Custom dashboards and real-time data handling',
        'API development and third-party integrations',
        'User authentication, role management, and security',
        'Responsive, documentation, and UI feedback'
      ],
      iconCard: {
        icon: '⚙️',
        bgColor: '#000'
      },
      projectCard: {
        title: 'Job Portal',
        description: 'Developed a fully functional job board platform with employer & job seeker roles, custom filters, and notifications.',
        tags: ['NEXTJS', 'TAILWIND']
      }
    },
    {
      number: '03',
      category: 'CORE OFFER',
      tags: ['WEB', 'SaaS'],
      title: 'SAAS MVP DEVELOPMENT',
      description: 'You have a product idea. I\'ll take it from concept to a working, functional service that you can show investors or launch to early users. SaaS development focused on the features that matter most—no bloat, just core functionality.',
      included: [
        'Product scoping and feature prioritization',
        'UI design and interactive prototype',
        'Payment integration (Stripe, Lemon Squeezy, etc.)',
        'User dashboards, subscriptions, and user management',
        'Deployment and hosting on live servers'
      ],
      iconCard: {
        icon: '🚀',
        bgColor: '#000'
      },
      projectCard: {
        title: 'Freelance Board',
        description: 'Built a two-sided SaaS marketplace for freelancers and clients with real-time messaging and payment escrow.',
        tags: ['REACT', 'NODE.JS']
      }
    },
    {
      number: '04',
      category: 'ADD-ON',
      tags: ['AUTOMATION'],
      title: 'WORKFLOW AUTOMATION',
      description: 'I connect the tools you already use—like Notion, Airtable, Google Sheets, your CRM, email marketing tools — so your team focuses on work, not admin. Maybe you need new leads to auto-populate into a spreadsheet, or orders to instantly trigger fulfillment emails. I\'ll set it up.',
      included: [
        'Audit your current tools and manual processes',
        'Automate workflows with Zapier, Make, or APIs',
        'Notion databases, Airtable, CRM, email automation integrations',
        'Notifications'
      ],
      iconCard: {
        icon: '🔄',
        bgColor: '#000'
      },
      projectCard: {
        title: 'Lead Scrapper Tool',
        description: 'Automated lead collection from multiple sources into a central database with auto-enrichment and notifications.',
        tags: ['PYTHON', 'API']
      }
    }
  ];

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
    <div className="services-page">
      <Navbar navigateTo={navigateTo} activePage="services" />

      {/* Hero Section */}
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

      {/* Services List */}
      <section className="services-list-section">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="service-card-content">
              <div className="service-card-left">
                <div className="service-meta">
                  <span className="service-number">{service.number}</span>
                  <div className="service-tags">
                    <span className="category-tag">{service.category}</span>
                    {service.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <h2 className="service-card-title">{service.title}</h2>
                <p className="service-card-description">{service.description}</p>

                <div className="service-included">
                  <ul className="included-list">
                    {service.included.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>

                <button className="btn-service-detail">{service.buttonText}</button>
              </div>

              <div className="service-card-right">
                <div className="sample-project-card">
                  <p className="sample-label">SAMPLE PROJECT</p>
                  <div className="project-details">
                    <h4 className="project-name">{service.projectCard.title}</h4>
                    <p className="project-desc">{service.projectCard.description}</p>
                  </div>
                  <div className="project-preview">
                    <div className="project-icon-box" style={{ backgroundColor: service.projectCard.bgColor }}>
                      <span className="project-icon">{service.projectCard.icon}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Process Section */}
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

      <ServicesCTA />
      <Footer />
    </div>
  )
}

export default Services
