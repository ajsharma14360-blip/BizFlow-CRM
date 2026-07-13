import "./Features.css";

function Features() {
  return (
    <section className="features">

      <h2>Everything You Need To Run Your Business</h2>

      <p>
        Powerful tools designed to help local businesses manage everything
        from one place.
      </p>

      <div className="feature-container">

        <div className="feature-card">
          <h3>Customer Management</h3>
          <p>Add, edit and manage all customers easily.</p>
        </div>

        <div className="feature-card">
          <h3>Appointments</h3>
          <p>Book appointments and send reminders.</p>
        </div>

        <div className="feature-card">
          <h3>Invoices</h3>
          <p>Create invoices within seconds.</p>
        </div>

      </div>

    </section>
  );
}

export default Features;