'use client';
import { useState } from 'react';
import Icon from '../Shared/Icon';

export default function ContactForm() {
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

  return (
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
  );
}
