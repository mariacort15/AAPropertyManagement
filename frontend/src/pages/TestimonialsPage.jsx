import useFetch from "../lib/useFetch";

export default function TestimonialsPage() {
  const { data: testimonials, loading } = useFetch("testimonials/");

  if (loading) return <p>Loading testimonials...</p>;

  return (
    <section>
      <h2>What Our Clients Say</h2>
      {testimonials.length > 0 ? (
        testimonials.map(t => (
          <blockquote key={t.id} className="blockquote mt-4">
            <p>"{t.text}"</p>
            <footer className="blockquote-footer">
              {t.name} — Rated {t.rating}/5
            </footer>
          </blockquote>
        ))
      ) : (
        <p>No testimonials yet.</p>
      )}
    </section>
  );
}