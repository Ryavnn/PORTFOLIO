const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-header">
        <span className="testimonial-company">{testimonial.company}</span>
        <span className="testimonial-id">{testimonial.id}</span>
      </div>
      <div className="quote-marks">❝</div>
      <p className="testimonial-text">{testimonial.text}</p>
      <div className="testimonial-author">
        <p className="author-name">{testimonial.author}</p>
        <p className="author-role">{testimonial.role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
