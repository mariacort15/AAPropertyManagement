import { Link } from "react-router-dom";
import React from 'react';
import './HeroBanner.css';

const HeroBanner = () => (
  <div style={{ backgroundColor: '#eee', padding: '50px', textAlign: 'center' }}>
    <h1>Welcome to AA Property Management</h1>
    <p>Reliable. Professional. Local expertise you can trust.</p>
    <button onClick={() => window.scrollTo(0, 700)}>View Available Rentals</button>
  </div>
);

<Link to="/apply" className="apply-btn">APPLY ONLINE →</Link>

export default HeroBanner;

