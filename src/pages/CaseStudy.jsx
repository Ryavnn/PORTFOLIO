import { useState, useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { BrowserMockup } from '../components/Mockups/BrowserMockup';
import { PhoneMockup } from '../components/Mockups/PhoneMockup';
import SEO from '../components/Shared/SEO';
import Icon from '../components/Shared/Icon';
import { getProjectBySlug } from '../utils/api';
import { motion } from 'framer-motion';

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

  if (loading) return <div className="min-h-screen bg-bg text-text"><Navbar /><div style={{padding: '100px', textAlign: 'center'}}>Loading...</div><Footer /></div>;
  if (error || !project) return <Navigate to="/projects" replace />;

  return (
    <motion.div 
      className="min-h-screen bg-bg text-text"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title={`${project.title} — Case Study`}
        description={`${project.description.slice(0, 155).trim()}…`}
        canonical={`/projects/${project.slug}`}
        image={project.images?.featured || project.images?.hero || undefined}
        type="article"
      />
      <Navbar />

      <section className="max-w-grid-max mx-auto px-grid-margin py-[40px] md:py-[60px] border-b-2 border-border">
        <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[60px] lg:items-start">
          <div className="flex flex-col gap-[20px]">
            <p className="font-sans text-[12px] tracking-[1px] m-0 opacity-70">{project.label}</p>
            <h1 className="font-heading text-4xl lg:text-5xl font-bold leading-none m-0 tracking-[-1.5px]">{project.title}</h1>
            <p className="font-sans text-base leading-[1.7] m-0">{project.description}</p>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden">
              {project.images?.hero ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
                  <img src={project.images.hero} alt={project.title} className="w-full h-auto" />
                </BrowserMockup>
              ) : (
                <span style={{ opacity: 0.3 }}><Icon name="Tent" size={64} /></span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin border-b-2 border-border">
        <div className="w-full bg-text flex items-center justify-center overflow-hidden">
          {project.images?.featured ? (
            <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
              <img src={project.images.featured} alt="Featured project visual" className="w-full h-auto" />
            </BrowserMockup>
          ) : (
            <span style={{ opacity: 0.5, padding: '100px 0' }}><Icon name="Globe" size={80} /></span>
          )}
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin border-b-2 border-border">
        <div className="flex flex-col md:grid md:grid-cols-3">
          <div className="py-[24px] border-b border-solid border-border md:p-[30px_20px] md:border-b-0 md:border-r-2 md:border-border lg:p-[40px_30px]">
            <h3 className="font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px]">{project.role}</h3>
          </div>
          <div className="py-[24px] border-b border-solid border-border md:p-[30px_20px] md:border-b-0 md:border-r-2 md:border-border lg:p-[40px_30px]">
            <h3 className="font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px]">{project.tech}</h3>
          </div>
          <div className="py-[24px] md:p-[30px_20px] lg:p-[40px_30px]">
            <h3 className="font-sans text-sm font-bold m-0 leading-[1.5] tracking-[0.3px] whitespace-pre-line">{project.timeline}</h3>
          </div>
        </div>
      </section>

      {project.challenge && (
        <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[80px]">
          <div className="flex flex-col gap-[32px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]">
            <div>
              <h2 className="font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]">{project.challenge.heading}</h2>
            </div>
            <div className="flex flex-col gap-[20px]">
              <p className="font-sans text-[16px] leading-[1.7] m-0">{project.challenge.text}</p>
              <p className="font-sans text-[14px] leading-[1.7] m-0 opacity-[0.85]">{project.challenge.subtext}</p>
            </div>
          </div>
        </section>
      )}

      {project.strategy && (
        <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
          <div className="bg-text text-bg p-[40px_24px] md:p-[60px]">
            <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[60px]">
              <div>
                <h2 className="font-heading text-2xl font-bold leading-[1.1] m-[0_0_32px_0] md:m-[0_0_40px_0] tracking-[-1px]">STRATEGY<br />& SOLUTION</h2>
                <div className="flex flex-col gap-[32px]">
                  {project.strategy.map((item, index) => (
                    <div key={index} className="flex gap-[16px] items-start">
                      <span className="font-heading text-[24px] font-bold text-accent shrink-0">{item.number}</span>
                      <div className="flex flex-col gap-[8px]">
                        <h4 className="font-sans text-[16px] font-bold m-0 tracking-[0.5px]">{item.title}</h4>
                        <p className="font-sans text-[13px] leading-[1.6] m-0 opacity-90">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="w-full p-[40px_20px] min-h-[500px] border-2 border-solid border-[rgba(242,237,228,0.3)] bg-[rgba(15,15,15,0.5)] flex items-center justify-center">
                  <div className="flex items-center justify-center w-full max-w-[280px] aspect-[9/19.5] overflow-hidden">
                    {project.images?.strategy ? (
                      <PhoneMockup>
                        <img src={project.images.strategy} alt="Project strategy visual" className="w-full h-auto" />
                      </PhoneMockup>
                    ) : (
                      <span style={{ opacity: 0.3 }}><Icon name="Smartphone" size={48} /></span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
        <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2">
          <div className="w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              {project.images?.gallery1 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
                  <img src={project.images.gallery1} alt="Project gallery visual 1" loading="lazy" className="w-full h-auto" />
                </BrowserMockup>
              ) : (
                <span style={{ opacity: 0.3, padding: '100px 0' }}><Icon name="User" size={48} /></span>
              )}
            </div>
          </div>
          <div className="w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden">
            <div className="w-full h-full flex items-center justify-center">
              {project.images?.gallery2 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
                  <img src={project.images.gallery2} alt="Project gallery visual 2" loading="lazy" className="w-full h-auto" />
                </BrowserMockup>
              ) : (
                <span style={{ opacity: 0.3, padding: '100px 0' }}><Icon name="Laptop" size={48} /></span>
              )}
            </div>
          </div>
          <div className="w-full border-2 border-border bg-card-bg flex items-center justify-center overflow-hidden md:col-span-2">
            <div className="w-full h-full flex items-center justify-center">
              {project.images?.gallery3 ? (
                <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
                  <img src={project.images.gallery3} alt="Project gallery visual 3" loading="lazy" className="w-full h-auto" />
                </BrowserMockup>
              ) : (
                <span style={{ opacity: 0.3, padding: '100px 0' }}><Icon name="Palette" size={64} /></span>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.results && (
        <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
          <div className="flex flex-col gap-[20px] md:grid md:grid-cols-3">
            {project.results.map((result, index) => (
              <div 
                key={index} 
                className={`border-2 border-border p-[32px_24px] md:p-[40px_30px] flex flex-col gap-[12px] ${result.highlighted ? 'bg-accent text-bg border-accent' : ''}`}
              >
                <h3 className="font-heading text-3xl font-bold m-0 leading-none tracking-[-1.5px]">{result.metric}</h3>
                <p className="font-sans text-[12px] font-bold m-0 tracking-[0.5px] uppercase">{result.label}</p>
                <p className={`font-sans text-[12px] leading-[1.5] m-0 ${result.highlighted ? 'opacity-100' : 'opacity-[0.85]'}`}>{result.description}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
        <div className="p-[40px_24px] md:p-[80px_60px] flex flex-col items-center gap-[32px] text-center">
          <h2 className="font-heading text-[clamp(28px,8vw,48px)] font-bold leading-[1.2] m-0 tracking-[-1px]">
            INTERESTED IN A<br />
            SIMILAR TRANSFORMATION?
          </h2>
          <div className="flex flex-col md:flex-row gap-[16px] w-full md:w-auto">
            <Link to="/contact" className="w-full md:w-auto"><button className="btn-primary w-full md:w-auto">LET'S TALK PROJECT →</button></Link>
            <Link to="/projects" className="w-full md:w-auto"><button className="btn-secondary w-full md:w-auto">VIEW PORTFOLIO</button></Link>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
