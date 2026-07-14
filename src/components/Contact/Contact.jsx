import "./Contact.css";

function Contact() {
  return (
    <section className="contact">
      <h2>Get In Touch</h2>
      <p>Have questions? We'd love to hear from you.</p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="text" placeholder="Business Name" />
        <textarea placeholder="Your Message"></textarea>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;