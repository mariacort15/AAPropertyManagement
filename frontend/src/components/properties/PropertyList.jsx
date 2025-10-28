import { useState, useEffect } from "react";
import PropertyFilters from "./PropertyFilters";
import PropertyList from './components/propertyList';
import React from 'react';
import './PropertiesList.css';

export default function PropertyList() {
  const [properties, setProperties] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch properties from your Django backend
    fetch("http://127.0.0.1:8000/api/properties/")
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setFiltered(data);
      })
      .catch((error) => console.error("Error fetching properties:", error));
  }, []);

  // Function receives filters from PropertyFilters.jsx
  const handleFiltersChange = ({ q, beds, min, max }) => {
    const results = properties.filter((p) => {
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q.toLowerCase()) ||
        p.address.toLowerCase().includes(q.toLowerCase()) ||
        p.city?.toLowerCase().includes(q.toLowerCase());

      const matchesBeds = !beds || p.bedrooms === parseInt(beds);
      const matchesMin = !min || parseFloat(p.rent) >= parseFloat(min);
      const matchesMax = !max || parseFloat(p.rent) <= parseFloat(max);

      return matchesQuery && matchesBeds && matchesMin && matchesMax;
    });

    setFiltered(results);
  };

  return (
    <div className="property-list">
      <h2>Available Properties</h2>

      <PropertyFilters onChange={handleFiltersChange} />

      <div className="property-grid">
        {filtered.length > 0 ? (
          filtered.map((p) => (
            <div key={p.id} className="property-card">
              <img src={p.image_url} alt={p.title} />
              <h3>{p.title}</h3>
              <p>{p.address}</p>
              <p>
                {p.bedrooms} beds · ${p.rent}/month
              </p>
              <p>{p.city}</p>
            </div>
          ))
        ) : (
          <p>No matching properties found.</p>
        )}
      </div>
    </div>
  );
}