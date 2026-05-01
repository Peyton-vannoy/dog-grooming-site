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
  const [errors, setIsErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setIsSubmitted(false);

    setIsErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setIsErrors(validationErrors);
      return;
    }

    setIsErrors({});
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
              />
              {errors.name && <p className="error-message">{errors.name}</p>}
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
              />
              {errors.email && <p className="error-message">{errors.email}</p>}
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
              />
              {errors.message && (
                <p className="error-message">{errors.message}</p>
              )}
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
