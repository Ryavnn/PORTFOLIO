import Link from 'next/link';
import { BrowserMockup } from '../Mockups/BrowserMockup';
import Icon from '../Shared/Icon';

const ProjectCard = ({ project, isReverse }) => {
  const imageUrl = project.images?.featured || project.images?.hero || project.image;

  const renderImage = () => {
    if (imageUrl) {
      return (
        <div className="h-[clamp(200px,50vw,300px)] w-full [&_.browser-mockup]:h-full">
          <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
            <img 
              src={imageUrl} 
              alt={project.title} 
              className="h-full w-full object-cover object-top" 
            />
          </BrowserMockup>
        </div>
      );
    }
    return <div className="w-full h-[clamp(200px,50vw,300px)] bg-[#2a2a2a] border border-solid border-border"></div>;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[32px] pb-[60px] border-b border-solid border-border last:border-none last:pb-0 md:items-center">
      {!isReverse ? (
        <>
          <div className="flex flex-col md:flex-row gap-[20px] md:items-start max-md:order-last">
            <span className="font-sans text-[16px] font-medium">{project.number}</span>
            <div className="flex flex-col gap-[16px] relative">
              <div className="flex justify-between items-start gap-[20px]">
                <h3 className="font-heading text-xl font-bold m-0 tracking-[-0.5px] leading-[1.2]">{project.title}</h3>
                <div className="text-accent"><Icon name="ArrowRight" size={24} /></div>
              </div>
              <p className="font-sans text-base leading-[1.6] m-0">{project.description}</p>
              <div className="font-sans text-xs tracking-[1px] m-0 leading-[1.6]">
                {Array.isArray(project.tags) ? project.tags.map(t => <span key={t} className="mr-2">{t}</span>) : <span>{project.tags}</span>}
              </div>
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
            </div>
          </div>
          <div className="flex items-center w-full max-md:order-first">
            {renderImage()}
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center w-full max-md:order-first md:order-first">
            {renderImage()}
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] md:items-start max-md:order-last md:order-last">
            <span className="font-sans text-[16px] font-medium">{project.number}</span>
            <div className="flex flex-col gap-[16px] relative">
              <div className="flex justify-between items-start gap-[20px]">
                <h3 className="font-heading text-xl font-bold m-0 tracking-[-0.5px] leading-[1.2]">{project.title}</h3>
                <div className="text-accent"><Icon name="ArrowRight" size={24} /></div>
              </div>
              <p className="font-sans text-base leading-[1.6] m-0">{project.description}</p>
              <div className="font-sans text-xs tracking-[1px] m-0 leading-[1.6]">
                {Array.isArray(project.tags) ? project.tags.map(t => <span key={t} className="mr-2">{t}</span>) : <span>{project.tags}</span>}
              </div>
              <Link href={`/projects/${project.slug}`} className="absolute inset-0 z-10" aria-label={`View ${project.title}`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
