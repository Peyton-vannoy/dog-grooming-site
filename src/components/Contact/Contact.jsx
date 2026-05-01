import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIsSubmitted(false);

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      console.log(formData);

      setIsSubmitting(false);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }, 1500);
  };

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

        {isSubmitted ? (
          <p className="success-message">
            Thank you for your message! We will get back to you as soon as
            possible.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                className="form-input"
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                value={formData.name}
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
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                className="form-input"
                id="message"
                placeholder="Tell us about your dog..."
                rows="4"
                onChange={handleChange}
                value={formData.message}
                required
              />
            </div>
            <button
              type="submit"
              className="contact-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request Booking"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
