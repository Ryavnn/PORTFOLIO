import CTASection from '../../components/Shared/CTASection';
import ProjectCard from '../../components/Cards/ProjectCard';
import { getProjects } from '../../utils/api';

export const metadata = {
  title: "Projects & Case Studies — Web & Platform Builds",
  description: "Browse Ryan Njoroge's project portfolio. Case studies covering booking platforms, SaaS dashboards, enterprise workforce tools, and personal portfolio sites built from scratch.",
};

export default async function Work() {
  const projects = await getProjects();

  return (
    <div className="min-h-screen">
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
    </div>
  );
}
