import "./Pricing.css";

function Pricing() {
  return (
    <section className="pricing">
      <h2>Simple Pricing</h2>
      <p className="pricing-subtitle">
        Choose the plan that fits your business.
      </p>

      <div className="pricing-container">

        <div className="price-card">
          <h3>Starter</h3>
          <h1>₹999</h1>
          <p>/month</p>

          <ul>
            <li>✔ Customer Management</li>
            <li>✔ Appointment Booking</li>
            <li>✔ Basic Reports</li>
            <li>✔ Email Support</li>
          </ul>

          <button>Get Started</button>
        </div>

        <div className="price-card featured">
          <h3>Professional</h3>
          <h1>₹1999</h1>
          <p>/month</p>

          <ul>
            <li>✔ Everything in Starter</li>
            <li>✔ Billing System</li>
            <li>✔ Staff Management</li>
            <li>✔ WhatsApp Integration</li>
          </ul>

          <button>Most Popular</button>
        </div>

        <div className="price-card">
          <h3>Enterprise</h3>
          <h1>Custom</h1>

          <ul>
            <li>✔ Unlimited Customers</li>
            <li>✔ Analytics Dashboard</li>
            <li>✔ API Access</li>
            <li>✔ Priority Support</li>
          </ul>

          <button>Contact Us</button>
        </div>

      </div>
    </section>
  );
}

export default Pricing;