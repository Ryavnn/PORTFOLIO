import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import SEO from '../components/Shared/SEO';
import ProjectCard from '../components/Cards/ProjectCard';
import ServiceCard from '../components/Cards/ServiceCard';
import TestimonialCard from '../components/Cards/TestimonialCard';
import { getProjects, getServices, getTestimonials } from '../utils/api';
import { motion } from 'framer-motion';
import '../App.css'; // Keep existing CSS for Home page styling

const rotatingWords = ['WEB DESIGN', 'AUTOMATION', 'DEVELOPMENT', 'REDESIGN', 'SEO'];

export default function Home() {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  useEffect(() => {
    // Fetch data asynchronously
    const fetchData = async () => {
      const [projData, servData, testData] = await Promise.all([
        getProjects(),
        getServices(),
        getTestimonials()
      ]);
      setProjects(projData);
      setServices(servData);
      setTestimonials(testData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prevIndex) => (prevIndex + 1) % rotatingWords.length);
        setIsAnimating(false);
      }, 500);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      className="app"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Ryan Njoroge — Web Design, Development & Automation | Nairobi, Kenya"
        description="Nairobi-based digital product builder specialising in custom web design, full-stack development, SaaS MVPs, and workflow automation. Let's build something that works."
        canonical="/"
      />
      <Navbar />

      <section className="hero">
        <p className="subtitle">— Digital Product Builder – Nairobi, Kenya —</p>
        <h1 className="hero-title">
          I BUILD DIGITAL EXPERIENCES THROUGH
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
          <Link to="/contact"><button className="btn-primary">START A PROJECT</button></Link>
          <Link to="/projects"><button className="btn-secondary">VIEW MY WORK</button></Link>
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
            <Link to="/services"><button className="btn-outline">ALL SERVICES</button></Link>
          </div>
          <div className="services-grid-wrapper">
            <div className="services-grid">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="projects">
        <div className="projects-wrapper">
          <div className="projects-header">
            <div className="projects-header-top">
              <div className="projects-heading">
                <p className="section-label">MY PAST</p>
                <h2 className="section-title">PROJECT SHOWCASE.</h2>
              </div>
              <p className="projects-count">20+ projects</p>
            </div>
            <p className="projects-description">
              Strategic web solutions that help businesses attract<br />
              customers, automate processes, and grow online.
            </p>
          </div>

          <div className="projects-main-row">
            <div className="projects-cta-wrapper">
              <Link to="/projects"><button className="btn-primary projects-cta">SEE ALL PROJECT</button></Link>
            </div>

            <div className="projects-list-container">
              <div className="projects-list">
                {projects.map((project, index) => (
                  <ProjectCard 
                    key={project.slug} 
                    project={project} 
                    isReverse={index % 2 !== 0} 
                  />
                ))}
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
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </motion.div>
  );
}
