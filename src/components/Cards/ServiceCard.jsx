import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{service.icon}</div>
      <p className="service-title">{service.title}</p>
      <Link to="/contact" className="service-link">LEARN MORE →</Link>
    </div>
  );
};

export default ServiceCard;
