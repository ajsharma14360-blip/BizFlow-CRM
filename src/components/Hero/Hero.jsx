import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Manage Your Business Like a Pro</h1>

        <p>
          One CRM for Clinics, Salons, Repair Shops, Gyms, Restaurants and
          Local Businesses. Manage customers, appointments, payments and
          reports easily.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Live Demo</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;