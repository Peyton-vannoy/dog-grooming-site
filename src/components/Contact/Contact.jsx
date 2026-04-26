import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <p className="contact-eyebrow">Contact Us</p>
          <h2 className="contact-title">Book your appointment today</h2>
          <p className="contact-description">
            We're here to help you and your pup look and feel their best.
          </p>
        </div>

        <form action="" className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              className="form-input"
              type="text"
              id="name"
              name="name"
              placeholder="Name"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              className="form-input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-input"
              id="message"
              name="message"
              placeholder="Tell us about your dog..."
              rows="4"
              required
            />
          </div>
          <button type="submit" className="contact-button">
            Request Booking
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
