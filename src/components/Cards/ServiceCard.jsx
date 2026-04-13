import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <p className="service-title">{service.title}</p>
      <Link to={`/services/${service.slug}`} className="service-link">LEARN MORE →</Link>
    </div>
  );
};

export default ServiceCard;
