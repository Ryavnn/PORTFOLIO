import projectsData from '../data/projects.json';
import servicesData from '../data/services.json';
import testimonialsData from '../data/testimonials.json';
import caseStudiesData from '../data/caseStudies.json';

// Simulate network delay for realistic mock API
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProjects = async () => {
  await delay(500);
  return projectsData;
};

export const getProjectBySlug = async (slug) => {
  await delay(500);
  const projectList = projectsData;
  const overview = projectList.find(p => p.slug === slug);
  const details = caseStudiesData[slug];
  
  if (!overview || !details) {
    throw new Error('Project not found');
  }
  
  return { ...overview, ...details };
};

export const getServices = async () => {
  await delay(300);
  return servicesData;
};

export const getTestimonials = async () => {
  await delay(300);
  return testimonialsData;
};
