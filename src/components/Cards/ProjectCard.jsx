import { Link } from 'react-router-dom';
import { BrowserMockup } from '../Mockups/BrowserMockup';

const ProjectCard = ({ project, isReverse }) => {
  const imageUrl = project.images?.featured || project.images?.hero || project.image;

  const renderImage = () => {
    if (imageUrl) {
      return (
        <BrowserMockup url={`${project.title.toLowerCase().replace(/\s+/g, '')}.com`}>
          <img 
            src={imageUrl} 
            alt={project.title} 
            className="mockup-image" 
          />
        </BrowserMockup>
      );
    }
    return <div className="placeholder-image"></div>;
  };

  return (
    <div className={`project-item ${isReverse ? 'project-item-reverse' : ''}`}>
      {!isReverse ? (
        <>
          <div className="project-content">
            <span className="project-number">{project.number}</span>
            <div className="project-info">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-arrow">→</div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {Array.isArray(project.tags) ? project.tags.map(t => <span key={t} className="project-tag">{t}</span>) : <span className="project-tag">{project.tags}</span>}
              </div>
              <Link to={`/projects/${project.slug}`} className="project-link-overlay" aria-label={`View ${project.title}`} />
            </div>
          </div>
          <div className="project-image">
            {renderImage()}
          </div>
        </>
      ) : (
        <>
          <div className="project-image">
            {renderImage()}
          </div>
          <div className="project-content">
            <span className="project-number">{project.number}</span>
            <div className="project-info">
              <div className="project-title-row">
                <h3 className="project-title">{project.title}</h3>
                <div className="project-arrow">→</div>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tags">
                {Array.isArray(project.tags) ? project.tags.map(t => <span key={t} className="project-tag">{t}</span>) : <span className="project-tag">{project.tags}</span>}
              </div>
              <Link to={`/projects/${project.slug}`} className="project-link-overlay" aria-label={`View ${project.title}`} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;
