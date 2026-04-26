import "./WhyChooseUs.css";

const why = [
  {
    id: 1,
    title: "We Come to You",
    description:
      "No stressful car rides—our mobile service brings grooming right to your doorstep.",
  },
  {
    id: 2,
    title: "Stress-Free Experience",
    description:
      "We create a calm, one-on-one environment so your dog stays relaxed and comfortable.",
  },
  {
    id: 3,
    title: "Experienced & Caring",
    description:
      "Professional grooming with gentle care to keep your dog looking and feeling their best.",
  },
];

function WhyChooseUs() {
  return (
    <section className="why" id="why-choose-us">
      <div className="why-container">
        <div className="why-header">
          <p className="why-eyebrow">Why Choose Us</p>
          <h2 className="why-title">
            A better experience for you and your pup
          </h2>
          <p className="why-description">
            We focus on convenience, comfort, and quality so your dog gets the
            best care possible.
          </p>
        </div>
        <div className="why-grid">
          {why.map((item) => (
            <div className="why-card" key={item.id}>
              <h3 className="why-card-title">{item.title}</h3>
              <p className="why-card-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
