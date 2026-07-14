import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-container">

        <div className="testimonial-card">
          <p>
            BizFlow CRM has completely changed how we manage our customers.
            It's simple, fast, and easy to use.
          </p>
          <h4>Rahul Sharma</h4>
          <span>Electronics Store Owner</span>
        </div>

        <div className="testimonial-card">
          <p>
            Our appointments and customer records are now organized perfectly.
            Highly recommended.
          </p>
          <h4>Priya Verma</h4>
          <span>Salon Owner</span>
        </div>

        <div className="testimonial-card">
          <p>
            We increased customer satisfaction after using BizFlow CRM.
            Great experience.
          </p>
          <h4>Amit Kumar</h4>
          <span>Gym Owner</span>
        </div>

      </div>
    </section>
  );
}

export default Testimonials;