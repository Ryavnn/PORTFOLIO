import Icon from '../Shared/Icon';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-bg border border-solid border-accent p-[30px] text-left flex flex-col gap-[20px]">
      <div className="flex justify-between items-center">
        <span className="font-sans text-xs tracking-[0.5px]">{testimonial.company}</span>
        <span className="font-sans text-xs text-accent">{testimonial.id}</span>
      </div>
      <div className="text-2xl text-accent leading-none"><Icon name="Quote" size={32} /></div>
      <p className="font-sans text-sm leading-[1.6] flex-1">{testimonial.text}</p>
      <div className="border-t border-border pt-[20px]">
        <p className="font-sans text-sm font-medium mb-[5px]">{testimonial.author}</p>
        <p className="font-sans text-xs opacity-70">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
