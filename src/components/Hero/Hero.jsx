import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <p className="hero-eyebrow">Mobile Dog Grooming in Nicholasville, KY</p>
        <h1 className="hero-title">
          Stress-Free Mobile Dog Grooming Right at Your Door
        </h1>
        <p className="hero-description">
          We bring gentle, professional grooming to your driveway so your dog
          can look great without the salon stress.
        </p>
        <a href="#contact" className="hero-button">
          Book an Appointment
        </a>
      </div>
    </section>
  );
}

export default Hero;
