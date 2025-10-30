import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Properties from "./pages/Properties";
import PropertyDetail from "./pages/PropertyDetail";
import Owners from "./pages/Owners";
import Tenants from "./pages/Tenants";
import Pricing from "./pages/Pricing";
import Testimonials from "./pages/TestimonialsPage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Register from './pages/Register';
import React from 'react';

function App() {
  return (
    <>
      <header>
        <h1>AA Property Management</h1>
        <nav>
          <Link href="/">Home</Link> | <Link href="/properties">Properties</Link> | <Link href="/contact">Contact</Link>
        </nav>
      </header>

      <main className="container mt-4 mb-5">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/properties/:id" element={<PropertyDetail />} />
          <Route path="/owners" element={<Owners />} />
          <Route path="/tenants" element={<Tenants />} />
          <Route path="/register" element={<Register />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer>
        <p>&copy; 2025 AA Property Management</p>
      </footer>
    </>
  );
}

export default App;