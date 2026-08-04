import Link from 'next/link';
import Icon from '../../components/Shared/Icon';

export const metadata = {
  title: "About Ryan Njoroge — Digital Product Builder, Nairobi",
  description: "Learn about Ryan Njoroge — a Nairobi-based developer and designer with 3+ years building high-performance web products, SaaS platforms, and automated digital systems.",
};

export default function About() {
  const stats = [
    { value: '3+', label: 'YEARS EXPERIENCE' },
    { value: '20+', label: 'PROJECTS BUILT' }
  ];

  const values = [
    {
      icon: <Icon name="Shield" size={24} />,
      title: 'HONESTY FIRST',
      description: 'I don\'t sugarcoat technical debt or timeline risks. Building great software requires radical transparency between builder and stakeholder.'
    },
    {
      icon: <Icon name="Zap" size={24} />,
      title: 'SPEED TO MARKET',
      description: 'Perfect is the enemy of shipped. I focus on high-velocity development that gets a functional V1 into users\' hands as weeks, not months.'
    },
    {
      icon: '</>',
      title: 'MAINTAINABLE CODE',
      description: 'I build for the "future you." My code is structured, documented, and follows architectural patterns that any engineer can pick up.'
    }
  ];

  const tools = [
    'REACT',
    'TAILWIND',
    'NODE.JS',
    'POSTGRES',
    'MAKE.COM'
  ];

  const hobbies = [
    { icon: <Icon name="Mountain" size={16} />, text: 'HIKING THE GREAT RIFT VALLEY' },
    { icon: <Icon name="Music" size={16} />, text: 'COLLECTING RETRO ELECTRONICS' },
    { icon: <Icon name="Coffee" size={16} />, text: 'ETHICAL COFFEE ROASTING' }
  ];

  return (
    <div className="w-full">
      <section className="max-w-grid-max mx-auto px-grid-margin py-[40px] md:py-[60px] lg:pt-[80px] lg:pb-[60px] border-b-2 border-border">
        <div className="flex flex-col gap-[24px]">
          <p className="hero-label">WHO IS RYAN</p>
          <h1 className="section-hero-title">
            BUILDING THE<br />
            <span className="accent-text">DIGITAL</span><br />
            FRONTIER.
          </h1>
          <p className="font-sans text-lg leading-[1.7] m-0">
            Nairobi-based developer and designer crafting high-<br />
            performance digital systems for the next generation of<br />
            builders.
          </p>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] md:py-[80px] border-b-2 border-border">
        <div className="flex flex-col gap-[40px] lg:grid lg:grid-cols-[1fr_2fr] lg:gap-[80px]">
          <div>
            <h2 className="font-heading text-xl font-bold leading-[1.2] m-0 tracking-[-0.5px]">
              THE MAN BEHIND<br />
              THE BUILD
            </h2>
          </div>
          <div className="flex flex-col gap-[24px]">
            <p className="font-sans text-base leading-[1.7] m-0">
              My journey didn't start with code, but with components. Coming from a background in 
              mechanical engineering, I was obsessed with how things fit together—the structural 
              integrity of systems. When I transitioned into the digital realm, that obsession followed.
            </p>
            <p className="font-sans text-base leading-[1.7] m-0">
              Today, I operate as a Digital Product Builder, bridging the gap between raw backend 
              logic and refined frontend aesthetics. Based in Nairobi, I work with global teams to 
              architect solutions that aren't just "functional" but fundamentally robust and scalable.
            </p>
            
            <div className="flex flex-col gap-[16px] mt-[16px] md:grid md:grid-cols-2 md:flex-row">
              {stats.map((stat, index) => (
                <div key={index} className="border-2 border-border py-[24px] px-[20px] flex flex-col gap-[8px]">
                  <h3 className="font-heading text-2xl md:text-[48px] font-bold m-0 leading-none tracking-[-1px]">{stat.value}</h3>
                  <p className="font-sans text-xs font-bold m-0 tracking-[0.5px] uppercase opacity-70">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
        <div className="flex flex-col gap-[20px] md:grid md:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="border-2 border-border py-[30px] px-[24px] flex flex-col gap-[16px]">
              <div className="w-[48px] h-[48px] border-2 border-accent flex items-center justify-center text-xl">{value.icon}</div>
              <h3 className="font-sans text-sm font-bold m-0 tracking-[0.5px]">{value.title}</h3>
              <p className="font-sans text-xs leading-[1.6] m-0 opacity-[0.85]">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[60px] border-b-2 border-border">
        <div className="flex flex-col items-center gap-[40px]">
          <h2 className="font-heading text-[clamp(24px,5vw,32px)] font-bold m-0 tracking-[-0.5px] text-center">TOOLS OF THE TRADE</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-[16px] w-full">
            {tools.map((tool, index) => (
              <div key={index} className="border-2 border-border py-[24px] px-[12px] font-sans text-[13px] font-bold text-center tracking-[0.5px] transition-all duration-200 cursor-default hover:bg-text hover:text-bg hover:border-text">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin pb-[60px]">
        <div className="bg-text text-bg py-[40px] px-[24px] md:p-[60px] flex flex-col gap-[40px] items-center lg:grid lg:grid-cols-2 lg:gap-[60px]">
          <div>
            <h2 className="font-heading text-2xl font-bold leading-[1.1] m-0 mb-[20px] tracking-[-1px]">
              BEYOND THE<br />
              <span className="accent-text">TERMINAL</span>
            </h2>
            <p className="font-sans text-base leading-[1.7] m-0 mb-[30px] opacity-90">
              When I'm not pushing pixels or architecting APIs,<br />
              I'm usually disconnecting to reconnect.
            </p>
            <div className="flex flex-col gap-[16px]">
              {hobbies.map((hobby, index) => (
                <div key={index} className="flex items-center gap-[12px] font-sans text-[13px] font-medium tracking-[0.3px]">
                  <span className="text-[18px]">{hobby.icon}</span>
                  <span>{hobby.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full">
            <div className="w-full aspect-[16/10] bg-gradient-to-b from-[#4A90E2] to-[#F5A623] flex items-center justify-center border-2 border-[rgba(242,237,228,0.2)]">
              <span style={{ opacity: 0.3 }}><Icon name="Mountain" size={64} /></span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-grid-max mx-auto px-grid-margin py-[40px] md:py-[80px]">
        <div className="flex flex-col items-center text-center gap-[32px]">
          <h2 className="font-heading text-[clamp(32px,8vw,56px)] font-bold leading-[1.1] m-0 tracking-[-1.5px]">
            GOT A PROJECT<br />
            IN MIND?
          </h2>
          <p className="font-sans text-[14px] leading-[1.7] m-0 opacity-90">
            I'm currently accepting new projects for Q3 2026. Let's<br />
            discuss how we can build something monumental<br />
            together.
          </p>
          <div className="flex flex-col md:flex-row gap-[16px] w-full md:w-auto">
            <Link href="/contact" className="w-full md:w-auto"><button className="btn-primary w-full md:w-auto">START A CONVERSATION</button></Link>
            <Link href="/projects" className="w-full md:w-auto"><button className="btn-secondary w-full md:w-auto">VIEW PORTFOLIO</button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
