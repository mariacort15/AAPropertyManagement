import HeroBanner from "../components/HeroBanner";
import React from 'react';
import PropertyList from '../components/PropertyList';

export default function Home() {
  return (
      <div className="text-center">
        <h1>Welcome to AA Property Management</h1>
        <p>Your trusted partner in rental management and tenant satisfaction since 2021.</p>
        <img src="https://images.unsplash.com/photo-1572120360610-d971b9b78825" alt="Property" className="img-fluid rounded shadow mt-3" style={{ maxWidth: "80%" }}/>
      </div>
    );
  }