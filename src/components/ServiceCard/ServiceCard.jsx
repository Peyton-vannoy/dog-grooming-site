import "./ServiceCard.css";

function ServiceCard({ title, description, price }) {
  return (
    <div className="service-card">
      <h3 className="service-card-title">{title}</h3>
      <p className="service-card-description">{description}</p>
      <span className="service-card-price">{price}</span>
    </div>
  );
}

export default ServiceCard;
