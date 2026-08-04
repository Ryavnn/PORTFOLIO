import { useState, useEffect } from 'react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import SEO from '../components/Shared/SEO';
import ProjectCard from '../components/Cards/ProjectCard';
import { getProjects } from '../utils/api';
import { motion } from 'framer-motion';

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
      className="min-h-screen bg-bg text-text"
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

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[80px]">
        <div className="flex flex-col gap-[20px]">
          <p className="hero-label">CASE STUDIES</p>
          <h1 className="section-hero-title">
            ARCHITECTING<br />
            THE <span className="accent-text">DIGITAL</span><br />
            LANDSCAPE.
          </h1>
          <p className="font-sans text-sm md:text-[16px] leading-[1.6] m-0 opacity-90">
            A selection of platforms, SaaS MVPs, and automated<br />
            systems built from the ground up.
          </p>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[40px] flex flex-col gap-[60px] md:gap-[80px]">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.slug} 
            project={project} 
            isReverse={project.layout === 'right' || index % 2 !== 0} 
          />
        ))}
      </section>

      <CTASection />
      <Footer />
    </motion.div>
  );
}
