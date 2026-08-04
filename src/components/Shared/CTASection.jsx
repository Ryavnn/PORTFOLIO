import Link from 'next/link';

const CTASection = () => {
  return (
    <section className="max-w-grid-max mx-auto pt-[100px] px-grid-margin pb-[60px]">
      <div>
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] lg:gap-[80px]">
          <div className="flex-1 max-w-full md:max-w-[50%]">
            <p className="font-sans text-xs mb-[20px] tracking-[1px] text-text opacity-80">OPEN FOR WORK</p>
            <h2 className="font-heading text-3xl font-extrabold leading-none m-0 mb-[30px] tracking-[-1px]">
              LET'S BUILD<br />
              <span className="text-accent">SOMETHING</span><br />
              GREAT
            </h2>
            <p className="font-sans text-base leading-[1.6] opacity-90">
              Whether you need a product built from scratch, a<br />
              new website or an idea brought to life – I'm ready.<br />
              Let's talk scope, timeline, and vision.
            </p>
          </div>
          <div className="flex-1 max-w-full md:max-w-[50%]">
            <div className="flex flex-col">
              <p className="font-sans text-xs mb-[20px] tracking-[1px] text-text opacity-80">GET IN TOUCH</p>
              <a href="mailto:info@njorogeryan.tech" className="font-sans text-xl my-[10px] mb-[30px] font-medium text-text no-underline inline-block hover:underline">info@njorogeryan.tech</a>
              <div className="flex flex-col max-[480px]:flex-col min-[481px]:flex-row gap-[15px] mb-[40px]">
                <Link href="/contact" className="w-full md:w-auto"><button className="btn-primary w-full md:w-auto">START A PROJECT →</button></Link>
                <Link href="/services" className="w-full md:w-auto"><button className="btn-secondary w-full md:w-auto">VIEW MY SERVICES</button></Link>
                <a href="/Ryan_Njoroge_CV.pdf" download target="_blank" rel="noopener noreferrer"><button className="btn-outline">Download CV ↓</button></a>
              </div>
              <div className="flex flex-wrap max-[480px]:gap-[30px] gap-[40px] mt-[20px] pt-[40px] border-t border-border">
                <div className="stat">
                  <p className="font-heading text-xl font-bold mb-[5px]">20+</p>
                  <p className="font-sans text-xs leading-[1.4] uppercase tracking-[0.5px] opacity-70">Projects<br />completed</p>
                </div>
                <div className="stat">
                  <p className="font-heading text-xl font-bold mb-[5px]">3+ yrs</p>
                  <p className="font-sans text-xs leading-[1.4] uppercase tracking-[0.5px] opacity-70">Of hands-on<br />experience</p>
                </div>
                <div className="stat">
                  <p className="font-heading text-xl font-bold mb-[5px]">100%</p>
                  <p className="font-sans text-xs leading-[1.4] uppercase tracking-[0.5px] opacity-70">Client<br />satisfaction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

