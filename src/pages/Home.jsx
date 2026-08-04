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
      className="w-full"
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

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:pt-[80px] md:pb-[100px] text-center">
        <p className="font-sans text-sm mb-[24px] tracking-[0.5px]">— Digital Product Builder – Nairobi, Kenya —</p>
        <h1 className="font-heading text-3xl font-extrabold leading-[1.05] mx-auto mb-[32px] tracking-[-1.5px] max-w-[900px]">
          I BUILD DIGITAL EXPERIENCES THROUGH<br/>
          <span className={`text-accent inline-block transition-all duration-500 ease-in-out ${isAnimating ? 'opacity-0 -translate-y-[20px]' : 'opacity-100 translate-y-0 animate-[slideIn_0.5s_ease-in-out]'}`}>
            {rotatingWords[currentWordIndex]}
          </span>
        </h1>
        <p className="font-sans text-base leading-[1.6] mb-[40px]">
          I help businesses grow online – through sharp web design, custom<br />
          development, smart automations, and SEO that actually moves the<br />
          needle.
        </p>
        <div className="flex flex-col md:flex-row gap-[16px] justify-center">
          <Link to="/contact"><button className="btn-primary">START A PROJECT</button></Link>
          <Link to="/projects"><button className="btn-secondary">VIEW MY WORK</button></Link>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-grid-max mx-auto px-grid-margin py-[60px] flex flex-col gap-[40px] md:grid md:grid-cols-8 lg:grid-cols-12 md:gap-grid-gutter">
          <div className="md:col-span-4 lg:col-span-5">
            <p className="font-sans text-[12px] mb-[16px] tracking-[1px]">MY SERVICES</p>
            <h2 className="font-heading text-2xl font-bold leading-[1.1] m-0 mb-[24px] tracking-[-1px]">CUSTOM & SCALABLE<br />DIGITAL SOLUTIONS</h2>
            <p className="font-sans text-base leading-[1.6] mb-[30px]">
              I create digital products that blend design and<br />
              functionality. By combining intuitive design with<br />
              clean, modern code, I build high-performing<br />
              websites and apps that look well, sell well, and<br />
              automate your workflow.
            </p>
            <Link to="/services"><button className="btn-outline">ALL SERVICES</button></Link>
          </div>
          <div className="md:col-span-4 lg:col-span-7">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-grid-max mx-auto px-grid-margin py-[60px]">
          <div className="mb-[40px]">
            <div className="flex flex-col md:flex-row md:justify-between gap-[16px] mb-[20px]">
              <div>
                <p className="font-sans text-[12px] mb-[16px] tracking-[1px]">MY PAST</p>
                <h2 className="font-heading text-2xl font-bold leading-[1.1] m-0 tracking-[-1px]">PROJECT SHOWCASE.</h2>
              </div>
              <p className="font-sans text-[14px] border-b-2 border-text pb-[2px] self-start md:self-auto">20+ projects</p>
            </div>
            <p className="font-sans text-[14px] leading-[1.6]">
              Strategic web solutions that help businesses attract<br />
              customers, automate processes, and grow online.
            </p>
          </div>

          <div className="flex flex-col md:flex-row gap-[40px]">
            <div className="md:shrink-0">
              <Link to="/projects"><button className="btn-primary">SEE ALL PROJECT</button></Link>
            </div>

            <div className="flex-1 border-t border-border pt-[40px] md:pt-[60px]">
              <div className="flex flex-col gap-[60px]">
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

      <section className="w-full">
        <div className="max-w-grid-max mx-auto px-grid-margin py-[60px] text-left md:text-center">
          <p className="font-sans text-[12px] mb-[16px] tracking-[1px]">TESTIMONIALS</p>
          <h2 className="font-heading text-2xl font-bold leading-[1.1] m-0 mb-[24px] tracking-[-1px]">WHAT OUR CLIENTS SAY</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-[40px] md:mt-[60px]">
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
