import ServiceCard from "./ServiceCard";
import "./Services.css";

const services = [
  {
    id: 1,
    title: "Full Grooming",
    description:
      "Complete grooming session including bath, haircut, and nail trim to keep your dog looking and feeling great.",
    price: "$100",
  },
  {
    id: 2,
    title: "Bath & Brush",
    description:
      "A refreshing wash and brush-out to keep your dog clean, soft, and comfortable between full grooms.",
    price: "$50",
  },
  {
    id: 3,
    title: "Nail Trim",
    description:
      "Quick and gentle nail trimming to keep your dog's paws healthy and comfortable.",
    price: "$20",
  },
];

function Services() {
  return (
    <section className="services">
      <div className="services-container">
        <div className="services-header">
          <p className="services-eyebrow">Services</p>
          <h2 className="services-title">Grooming packages for every pup</h2>
          <p className="services-description">
            We offer a variety of services to keep your dog looking and feeling
            great.
          </p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
