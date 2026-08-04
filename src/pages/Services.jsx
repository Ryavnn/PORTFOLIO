import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import CTASection from '../components/Shared/CTASection';
import SEO from '../components/Shared/SEO';
import Icon from '../components/Shared/Icon';
import { getServices } from '../utils/api';
import { motion } from 'framer-motion';

export default function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    fetchServices();
  }, []);

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
    <motion.div 
      className="w-full min-h-screen bg-bg text-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Services — Web Design, Development, SaaS & Automation"
        description="Ryan Njoroge offers four specialist services: custom web design & development, platform & system development, SaaS MVP builds, and workflow automation. No filler — just what he's shipped."
        canonical="/services"
      />
      <Navbar />

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[80px] lg:pt-[80px] lg:pb-[60px]">
        <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-12 lg:gap-[5rem] lg:items-start">
          <div className="w-full lg:col-span-8">
            <p className="hero-label">WHAT I OFFER</p>
            <h1 className="font-heading text-3xl font-extrabold leading-[0.9] m-0 tracking-[-2px] uppercase lg:tracking-[-3px]">
              WHAT I<br />
              <span className="accent-text">ACTUALLY</span><br />
              BUILD.
            </h1>
          </div>
          <div className="w-full lg:col-span-4 lg:pt-[60px]">
            <p className="font-sans text-base leading-[1.7] mb-[30px] opacity-80">
              Four services. No filler. Each one is something I've shipped for a<br />
              real client — not something I listed to look impressive. <strong className="font-semibold opacity-100">If it's not<br />
                here, I don't offer it.</strong> That's how you get someone who knows what<br />
              they're doing, not someone who says yes to everything.
            </p>
            <div className="flex justify-center md:inline-flex md:w-auto items-center gap-[12px] py-[14px] px-[20px] border border-solid border-[rgba(0,0,0,0.1)] font-sans text-xs tracking-[1px] bg-[rgba(0,0,0,0.02)] w-full">
              <span className="w-[8px] h-[8px] bg-[#00D37E] rounded-full inline-block shadow-[0_0_10px_rgba(0,211,126,0.4)]"></span>
              CURRENTLY TAKING ON NEW PROJECTS
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[40px] pb-[60px] flex flex-col gap-[40px]">
        {services.map((service, index) => (
          <div key={index} className="border-2 border-border p-[24px] md:p-[40px]">
            <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-[1fr_280px] lg:gap-[60px] lg:items-start">
              <div className="flex flex-col gap-[20px]">
                <div className="flex items-center gap-[20px] mb-[10px]">
                  <span className="font-sans text-[16px] font-medium">{service.number}</span>
                  <div className="flex gap-[8px] flex-wrap">
                    <span className="font-sans text-[11px] py-[6px] px-[12px] bg-text text-bg tracking-[0.5px]">{service.category}</span>
                    {service.tags && service.tags.map((tag, i) => (
                      <span key={i} className="font-sans text-[11px] py-[6px] px-[12px] border border-solid border-border tracking-[0.5px]">{tag}</span>
                    ))}
                  </div>
                </div>

                <h2 className="font-heading text-xl font-bold leading-[1.1] m-0 tracking-[-0.5px]">{service.title}</h2>
                <p className="font-sans text-[14px] leading-[1.6] m-0 text-text">{service.description}</p>

                <div className="mt-0">
                  <ul className="list-none p-0 m-0 flex flex-col gap-[12px]">
                    {service.included && service.included.map((item, i) => (
                      <li key={i} className="font-sans text-[13px] leading-[1.4] pl-[24px] relative text-text before:content-[''] before:absolute before:left-0 before:top-[6px] before:w-[6px] before:h-[6px] before:rounded-full before:border-2 before:border-solid before:border-accent before:bg-transparent">{item}</li>
                    ))}
                  </ul>
                </div>

                <Link to={`/services/${service.slug}`} className="bg-text text-bg border-none py-[16px] px-[24px] font-sans text-[13px] cursor-pointer transition-opacity duration-200 font-medium tracking-[0.5px] self-stretch md:self-start mt-[12px] text-center no-underline inline-flex items-center justify-center hover:opacity-90">Learn More</Link>
              </div>

              {service.projectCard && (
                <div className="flex flex-col">
                  <div className="border-2 border-border p-[20px] flex flex-col gap-[16px]">
                    <p className="font-sans text-[11px] tracking-[1px] m-0 font-medium">SAMPLE PROJECT</p>
                    <div className="flex flex-col gap-[8px]">
                      <h4 className="font-heading text-[14px] font-bold m-0 tracking-[-0.3px]">{service.projectCard.title}</h4>
                      <p className="font-sans text-[11px] leading-[1.5] m-0 text-text opacity-[0.85]">{service.projectCard.description}</p>
                    </div>
                    <div className="w-full aspect-[4/3] border border-solid border-border flex items-center justify-center overflow-hidden mt-auto">
                      <div className="w-full h-full flex items-center justify-center bg-text" style={{ backgroundColor: service.iconCard?.bgColor || '#000' }}>
                        <span className="text-[40px]"><Icon name={service.iconCard?.icon || 'Package'} size={32} /></span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </section>

      <section className="bg-[#0F0F0F] text-[#FFFFFF] px-grid-margin py-[80px] md:py-[120px] text-left md:text-center">
        <div className="max-w-grid-max mx-auto mb-[40px] md:mb-[60px]">
          <p className="font-sans text-[12px] text-accent tracking-[2px] mb-[20px] uppercase font-bold">THE PROCESS</p>
          <h2 className="font-heading text-[clamp(32px,8vw,52px)] font-extrabold leading-[1.1] m-0 tracking-[-1px] md:tracking-[-1.5px] uppercase">
            HOW WORKING WITH<br />
            ME <span className="accent-text">ACTUALLY</span> GOES.
          </h2>
        </div>

        <div className="relative max-w-grid-max mx-auto py-[40px] before:content-[''] before:absolute before:top-0 before:bottom-0 before:left-[20px] md:before:left-[50%] md:before:-translate-x-1/2 before:w-[1px] before:bg-[rgba(255,255,255,0.1)]">
          <div className="flex flex-col gap-[60px] md:gap-[100px]">
            {processSteps.map((step, index) => {
              const isLeft = index % 2 === 0;
              return (
                <div key={index} className={`flex justify-start md:justify-center items-start w-full relative pl-[60px] md:pl-0`}>
                  <div className={`w-full relative text-left md:w-[45%] ${isLeft ? 'md:mr-[55%] md:text-right' : 'md:ml-[55%] md:text-left'}`}>
                    <p className="font-sans text-xs font-bold text-accent mb-[12px] uppercase tracking-[1px]">{step.weeks}</p>
                    <h3 className="font-heading text-xl font-extrabold mb-[15px] tracking-[-0.5px] uppercase">{step.title}</h3>
                    <p className={`font-sans text-base leading-[1.6] opacity-60 max-w-full m-0 md:max-w-[400px] ${isLeft ? 'md:ml-auto md:mr-0' : 'md:ml-0 md:mr-auto'}`}>{step.description}</p>
                  </div>
                  <div className="absolute left-[20px] md:left-[50%] top-0 -translate-x-1/2 w-[36px] h-[36px] md:w-[44px] md:h-[44px] bg-[#FFFFFF] text-[#0F0F0F] flex items-center justify-center font-extrabold text-[14px] z-[2] shadow-[0_0_0_10px_#0F0F0F] md:shadow-[0_0_0_15px_#0F0F0F]">
                    <span className="font-extrabold">{step.number}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </motion.div>
  );
}
