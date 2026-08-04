import { Link } from 'react-router-dom';
import Icon from '../Shared/Icon';

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-card-bg p-[30px] border border-solid border-border flex flex-col gap-[20px]">
      <div className="text-xl">
        <Icon name={service.icon} size="1em" strokeWidth={1.5} />
      </div>
      <p className="font-sans text-sm leading-[1.5] flex-1">{service.title}</p>
      <Link to={`/services/${service.slug}`} className="font-sans text-xs text-text no-underline font-medium tracking-[0.5px] py-[10px]">LEARN MORE →</Link>
    </div>
  );
};

export default ServiceCard;
