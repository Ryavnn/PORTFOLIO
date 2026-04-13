import { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import SEO from '../components/Shared/SEO';
import ProjectCard from '../components/Cards/ProjectCard';
import { getProjects } from '../utils/api';
import { motion } from 'framer-motion';
import '../Work.css'; // existing styles

export default function Work() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects(data);
    };
    fetchProjects();
  }, []);

  return (
    <motion.div 
      className="work-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Projects & Case Studies — Web & Platform Builds"
        description="Browse Ryan Njoroge's project portfolio. Case studies covering booking platforms, SaaS dashboards, enterprise workforce tools, and personal portfolio sites built from scratch."
        canonical="/projects"
      />
      <Navbar />

      <section className="work-hero">
        <div className="work-hero-content">
          <p className="hero-label">CASE STUDIES</p>
          <h1 className="section-hero-title">
            ARCHITECTING<br />
            THE <span className="accent-text">DIGITAL</span><br />
            LANDSCAPE.
          </h1>
          <p className="work-hero-subtitle">
            A selection of platforms, SaaS MVPs, and automated<br />
            systems built from the ground up.
          </p>
        </div>
      </section>

      <section className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            isReverse={project.layout === 'right' || index % 2 !== 0} 
          />
        ))}
      </section>

      {/* Replaced WorkCTA with shared CTASection */}
      <CTASection />
      <Footer />
    </motion.div>
  );
}
