import useFetch from "../lib/useFetch";

export default function TestimonialsPage() {
  const { data: testimonials, loading } = useFetch("testimonials/");

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <section>
      <h2>What Our Clients Say</h2>
      <blockquote className="blockquote">
        “AA Property Management has taken the stress out of owning rental property. They communicate clearly and treat tenants with respect.”
      </blockquote>
      <footer className="blockquote-footer">Mark & Jenna R., Bakersfield, CA</footer>

      <blockquote className="blockquote mt-4">
        “Their owner portal makes tracking payments and repairs effortless. Highly recommend their team.”
      </blockquote>
      <footer className="blockquote-footer">Carlos M., Property Owner</footer>
    </section>
  );
}