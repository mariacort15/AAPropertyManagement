import { Link } from "react-router-dom";

export default function PropertyCard({ property }) {
  return (
    <div className="card shadow-sm" style={{ width: "18rem" }}>
      {property.image && (
        <img
          src={property.image}
          alt={property.title}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}
      <div className="card-body">
        <h5 className="card-title">{property.title}</h5>
        <p className="card-text">
          {property.address}<br />
          <strong>${property.rent}</strong> / month
        </p>
        <Link to={`/properties/${property.id}`} className="btn btn-primary btn-sm">
          View Details
        </Link>
      </div>
    </div>
  );
}