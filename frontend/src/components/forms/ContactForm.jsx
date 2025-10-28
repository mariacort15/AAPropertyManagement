import { useState } from "react";
import { api } from "../../lib/api";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.post("contact/", form);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      alert("There was a problem sending your message.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="p-3 border rounded bg-light">
      {success && <div className="alert alert-success">Message sent! We’ll get back to you soon.</div>}
      <div className="mb-3">
        <label>Name</label>
        <input className="form-control" name="name" value={form.name} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Email</label>
        <input className="form-control" name="email" value={form.email} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Subject</label>
        <input className="form-control" name="subject" value={form.subject} onChange={handleChange} required />
      </div>
      <div className="mb-3">
        <label>Message</label>
        <textarea className="form-control" name="message" rows="4" value={form.message} onChange={handleChange} required />
      </div>
      <button className="btn btn-success">Send Message</button>
    </form>
  );
}