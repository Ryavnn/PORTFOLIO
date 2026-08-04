import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/Shared/SEO';
import Icon from '../components/Shared/Icon';

export default function Contact() {
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/info@njorogeryan.tech", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if (response.ok) {
        setStatus('success');
        e.target.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error(error);
      setStatus('error');
    }
  };
  const socialLinks = [
    { name: 'TWITTER (X)', url: 'https://x.com/techbuildske' },
    { name: 'GITHUB', url: 'https://github.com/Ryavnn' },
    { name: 'INSTAGRAM', url: 'https://www.instagram.com/ryanbuilds.ke/' }
  ];

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
  ];

  return (
    <motion.div 
      className="min-h-screen bg-bg text-text"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        title="Contact — Start a Project with Ryan Njoroge"
        description="Ready to build something? Get in touch with Ryan Njoroge for web design, development, SaaS builds, and automation projects. Based in Nairobi, working globally."
        canonical="/contact"
      />
      <Navbar />

      <section className="max-w-grid-max mx-auto px-grid-margin pt-[60px] pb-[40px] md:pt-[80px] md:pb-[60px] lg:pt-[100px] lg:pb-[80px] border-b-2 border-border">
        <div className="flex flex-col gap-[20px]">
          <p className="hero-label">GET IN TOUCH</p>
          <h1 className="section-hero-title">
            LET'S BUILD<br />
            SOMETHING<br />
            <span className="accent-text">MONUMENTAL.</span>
          </h1>
        </div>
      </section>

      <section className="w-full border-b-2 border-border py-[40px] md:py-[60px] min-[900px]:py-[80px]">
        <div className="container">
          <div className="flex flex-col-reverse gap-[60px] min-[900px]:grid min-[900px]:grid-cols-[1fr_1.5fr] min-[900px]:gap-[100px] min-[900px]:items-start">
            <div className="flex flex-col gap-[40px] min-[900px]:col-start-1">
              <div className="flex flex-col gap-[20px]">
                <h3 className="font-heading text-xs font-extrabold tracking-[1px] text-text opacity-60 uppercase mb-[10px]">GET IN TOUCH</h3>
                <div className="flex flex-col gap-[8px] pb-[20px] border-b border-solid border-[rgba(15,15,15,0.1)]">
                  <p className="font-sans text-[10px] font-bold tracking-[1px] opacity-50 m-0">E-MAIL</p>
                  <a href="mailto:info@njorogeryan.tech" className="font-sans text-base text-text no-underline font-medium transition-colors duration-200 hover:text-accent">info@njorogeryan.tech</a>
                </div>
                <div className="flex flex-col gap-[8px] pb-[20px] border-b border-solid border-[rgba(15,15,15,0.1)]">
                  <p className="font-sans text-[10px] font-bold tracking-[1px] opacity-50 m-0">LOCATION</p>
                  <p className="font-sans text-base text-text font-medium m-0">Nairobi, Kenya</p>
                </div>
              </div>

              <div className="flex flex-col gap-[20px]">
                <h3 className="font-heading text-xs font-extrabold tracking-[1px] text-text opacity-60 uppercase mb-[10px]">SOCIALS</h3>
                <div className="flex flex-col">
                  {socialLinks.map((link, index) => (
                    <a key={index} href={link.url} className="font-sans text-[14px] text-text no-underline flex items-center justify-between font-medium py-[16px] border-b border-solid border-[rgba(15,15,15,0.1)] transition-all duration-300 hover:text-accent hover:pl-[8px] group" target="_blank" rel="noopener noreferrer">
                      {link.name} <span className="text-[18px] opacity-50 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">↗</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-card-bg p-[32px_20px] md:p-[48px_40px] border border-solid border-border min-[900px]:col-start-2">
              <form className="flex flex-col gap-[24px] md:grid md:grid-cols-2 md:gap-[32px]" onSubmit={handleSubmit}>
                {/* FormSubmit specific hidden fields */}
                <input type="hidden" name="_subject" value="New Inquiry from Portfolio!" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_captcha" value="false" />

                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[11px] font-bold tracking-[1px] uppercase opacity-80">NAME</label>
                  <input type="text" name="name" className="w-full bg-transparent border border-solid border-[rgba(15,15,15,0.2)] p-[14px_16px] font-sans text-base md:text-[14px] text-text rounded-none transition-colors duration-200 focus:outline-none focus:border-accent" placeholder="John Doe" required />
                </div>
                <div className="flex flex-col gap-[8px]">
                  <label className="font-sans text-[11px] font-bold tracking-[1px] uppercase opacity-80">EMAIL ADDRESS</label>
                  <input type="email" name="email" className="w-full bg-transparent border border-solid border-[rgba(15,15,15,0.2)] p-[14px_16px] font-sans text-base md:text-[14px] text-text rounded-none transition-colors duration-200 focus:outline-none focus:border-accent" placeholder="john@example.com" required />
                </div>

                <div className="flex flex-col gap-[8px] md:col-span-2">
                  <label className="font-sans text-[11px] font-bold tracking-[1px] uppercase opacity-80">PROJECT TYPE</label>
                  <select name="project_type" className="w-full bg-transparent border border-solid border-[rgba(15,15,15,0.2)] p-[14px_16px] font-sans text-base md:text-[14px] text-text rounded-none transition-colors duration-200 focus:outline-none focus:border-accent appearance-none" required>
                    <option value="" className="text-bg">Select a category</option>
                    <option value="Web Design & Development" className="text-bg">Web Design & Development</option>
                    <option value="Platform & System Development" className="text-bg">Platform & System Development</option>
                    <option value="SaaS MVP Development" className="text-bg">SaaS MVP Development</option>
                    <option value="Workflow Automation" className="text-bg">Workflow Automation</option>
                  </select>
                </div>

                <div className="flex flex-col gap-[8px] md:col-span-2">
                  <label className="font-sans text-[11px] font-bold tracking-[1px] uppercase opacity-80">MESSAGE</label>
                  <textarea name="message" className="w-full bg-transparent border border-solid border-[rgba(15,15,15,0.2)] p-[14px_16px] font-sans text-base md:text-[14px] text-text rounded-none transition-colors duration-200 focus:outline-none focus:border-accent resize-y min-h-[120px]" rows="5" placeholder="Tell me about your vision..." required></textarea>
                </div>

                <button type="submit" className="col-span-1 md:col-span-2 bg-text text-bg border-none py-[16px] px-[32px] font-sans text-[14px] font-bold tracking-[0.5px] cursor-pointer transition-opacity duration-200 flex items-center justify-center gap-[10px] w-full hover:opacity-90" disabled={status === 'sending'}>
                  {status === 'sending' ? 'SENDING...' : (
                    <>SEND INQUIRY <Icon name="ArrowRight" size={16} className="arrow" /></>
                  )}
                </button>

                {status === 'success' && (
                  <p className="md:col-span-2 text-accent mt-[20px] text-[14px] leading-[1.6]">
                    Message sent successfully!
                  </p>
                )}
                {status === 'error' && (
                  <p className="md:col-span-2 text-[#E83B1F] mt-[20px] text-[14px] leading-[1.6]">
                    Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-[60px] md:py-[80px]">
        <div className="container">
          <div className="mb-[40px] md:mb-[60px] min-[900px]:mb-[80px]">
            <p className="font-sans text-[12px] mb-[20px] tracking-[1px] opacity-70 m-0">— WHAT TO EXPECT —</p>
            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold leading-[1.05] m-[0_0_24px] tracking-[-1.5px]">
              A <span className="accent-text">STANDARD</span> PROCEDURE<br />
              FOR EXTRAORDINARY RESULTS.
            </h2>
            <p className="font-sans text-[14px] leading-[1.7] m-0 opacity-80 max-w-full min-[900px]:max-w-[600px]">
              Our first interaction sets the blueprint for the entire build. I prioritize<br />
              clarity, feasibility, and technical alignment from day zero.
            </p>
          </div>

          <div className="flex flex-col gap-[16px] md:grid md:grid-cols-2 md:gap-[24px] min-[900px]:grid-cols-3">
            {processSteps.map((step, index) => (
              <div key={index} className="bg-card-bg border border-solid border-border p-[32px_24px] flex flex-col gap-[20px] transition-transform duration-300 min-[900px]:hover:-translate-y-[5px]">
                <div className="flex items-center gap-[16px]">
                  <span className="font-sans text-xs font-bold text-accent tracking-[1px]">{step.number}</span>
                  <div className="flex-1 h-[1px] bg-border opacity-20"></div>
                </div>
                <h4 className="font-heading text-lg font-bold m-0 tracking-[-0.5px] uppercase">{step.title}</h4>
                <p className="font-sans text-xs leading-[1.7] m-0 opacity-70">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
}
