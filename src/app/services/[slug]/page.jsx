import { notFound } from 'next/navigation';
import Link from 'next/link';
import CTASection from '../../../components/Shared/CTASection';
import Icon from '../../../components/Shared/Icon';
import FaqList from '../../../components/Services/FaqList';
import { getServiceBySlug } from '../../../utils/api';

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  try {
    const service = await getServiceBySlug(resolvedParams.slug);
    return {
      title: `${service.title} — Ryan Njoroge`,
      description: `${service.description.slice(0, 155).trim()}…`,
    };
  } catch (error) {
    return { title: 'Service Not Found' };
  }
}

export default async function ServiceDetail({ params }) {
  const resolvedParams = await params;
  let service;
  
  try {
    service = await getServiceBySlug(resolvedParams.slug);
  } catch (err) {
    notFound();
  }

  const detail = service.detail;

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="max-w-grid-max mx-auto px-grid-margin pt-[40px] pb-[60px] md:pt-[60px] md:pb-[80px] border-b-2 border-border">
        <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-[1fr_340px] lg:gap-[60px] lg:items-start">
          <div className="flex flex-col gap-[20px]">
            <div className="flex items-center gap-[16px] flex-wrap">
              <span className="font-sans text-[16px] font-medium">{service.number}</span>
              <div className="flex gap-[8px] flex-wrap">
                <span className="font-sans text-[11px] py-[6px] px-[12px] bg-text text-bg tracking-[0.5px]">{service.category}</span>
                {service.tags && service.tags.map((tag, i) => (
                  <span key={i} className="font-sans text-[11px] py-[6px] px-[12px] border border-border tracking-[0.5px]">{tag}</span>
                ))}
              </div>
            </div>
            <h1 className="font-heading text-3xl font-bold leading-none m-0 tracking-[-1.5px]">{service.title}</h1>
            <p className="font-sans text-base leading-[1.7] m-0">{service.description}</p>
            <div className="flex flex-col gap-[12px] mt-[8px] md:flex-row">
              <Link href="/contact" className="w-full md:w-auto"><button className="btn-primary w-full md:w-auto">START THIS PROJECT →</button></Link>
              <Link href="/services" className="w-full md:w-auto"><button className="btn-secondary w-full md:w-auto">← ALL SERVICES</button></Link>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-full border-2 border-border flex flex-col">
              <div className="bg-text flex items-center justify-center p-[40px] aspect-video">
                <span className="text-[64px] text-bg"><Icon name={service.iconCard?.icon || 'Package'} size={64} /></span>
              </div>
              <div className="flex border-t-2 border-border">
                <div className="flex-1 p-[20px] flex flex-col gap-[6px] border-r-2 border-border">
                  <span className="font-sans text-[11px] tracking-[1px] opacity-60">TIMELINE</span>
                  <span className="font-heading text-lg font-bold tracking-[-0.5px]">{detail.timeline}</span>
                </div>
                <div className="flex-1 p-[20px] flex flex-col gap-[6px]">
                  <span className="font-sans text-[11px] tracking-[1px] opacity-60">STARTING AT</span>
                  <span className="font-heading text-lg font-bold tracking-[-0.5px]">{detail.startingAt}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Headline Section */}
      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
        <div>
          <h2 className="font-heading text-[clamp(24px,5vw,42px)] font-bold leading-[1.15] m-0 tracking-[-1px] max-w-[800px]">{detail.headline}</h2>
        </div>
      </section>

      {/* Long Description */}
      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
        <div className="flex flex-col gap-[32px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]">
          <div>
            <h3 className="font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]">WHAT THIS<br />LOOKS LIKE</h3>
          </div>
          <div>
            <p className="font-sans text-base leading-[1.7] m-0">{detail.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Approach / Strategy Section */}
      {detail.approach && (
        <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
          <div className="bg-text text-bg p-[40px_24px] md:p-[60px]">
            <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-2 lg:gap-[60px]">
              <div>
                <h2 className="font-heading text-2xl font-bold leading-[1.1] m-[0_0_32px_0] md:m-[0_0_40px_0] tracking-[-1px]">MY<br />APPROACH</h2>
                <div className="flex flex-col gap-[32px]">
                  {detail.approach.map((item, index) => (
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
              <div className="flex items-center justify-center">
                <div className="w-full aspect-square max-w-[280px] border-2 border-solid border-[rgba(242,237,228,0.15)] bg-[rgba(15,15,15,0.5)] flex items-center justify-center">
                  <span className="text-[80px] opacity-40"><Icon name={service.iconCard?.icon || 'Package'} size={80} /></span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Deliverables Section */}
      {detail.deliverables && (
        <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
          <div className="flex flex-col gap-[32px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]">
            <div>
              <h3 className="font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]">WHAT YOU<br />GET</h3>
            </div>
            <div>
              <div className="flex flex-col gap-0">
                {detail.deliverables.map((item, index) => (
                  <div key={index} className="flex items-start gap-[16px] py-[20px] border-b border-border first:pt-0 last:border-b-0 last:pb-0">
                    <span className="font-sans text-[12px] font-bold text-accent shrink-0 pt-[2px]">{String(index + 1).padStart(2, '0')}</span>
                    <p className="font-sans text-base leading-[1.5] m-0">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Ideal For Section */}
      {detail.idealFor && (
        <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
          <div className="bg-card-bg p-[40px_24px] md:p-[40px] border-2 border-border">
            <h3 className="font-heading text-xl font-bold m-[0_0_24px_0] tracking-[-0.5px]">IDEAL FOR</h3>
            <div className="flex flex-col gap-[16px] md:grid md:grid-cols-3 md:gap-0">
              {detail.idealFor.map((item, index) => (
                <div key={index} className="flex items-start gap-[16px] py-[16px] border-b border-border last:border-b-0 last:pb-0 md:border-b-0 md:border-r md:border-border md:p-[0_24px] md:flex-col md:gap-[12px] md:first:pl-0 md:last:border-r-0 md:last:pr-0">
                  <span className="text-[18px] text-accent shrink-0 font-bold">→</span>
                  <p className="font-sans text-base leading-[1.5] m-0">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {detail.faq && (
        <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
          <div className="flex flex-col gap-[32px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]">
            <div>
              <h3 className="font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]">COMMON<br />QUESTIONS</h3>
            </div>
            <div>
              <FaqList faqs={detail.faq} />
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px]">
        <div className="p-[40px_24px] md:p-[80px_60px] flex flex-col items-center gap-[24px] text-center">
          <h2 className="font-heading text-[clamp(28px,8vw,48px)] font-bold leading-[1.1] m-0 tracking-[-1px]">
            READY TO GET<br />
            <span className="accent-text">STARTED</span>?
          </h2>
          <p className="font-sans text-base leading-[1.7] m-0 opacity-80">
            Let's talk about your project. I'll scope the work, give you<br />
            a clear timeline, and we'll get moving.
          </p>
          <div className="flex flex-col md:flex-row gap-[16px] w-full md:w-auto">
            <Link href="/contact" className="w-full md:w-auto"><button className="btn-primary w-full md:w-auto">LET'S TALK PROJECT →</button></Link>
            <Link href="/projects" className="w-full md:w-auto"><button className="btn-secondary w-full md:w-auto">VIEW PORTFOLIO</button></Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
