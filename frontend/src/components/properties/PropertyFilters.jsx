import { useState } from "react";

export default function PropertyFilters({ onChange }) {
  const [q, setQ] = useState("");
  const [beds, setBeds] = useState("");
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");


  // Whenever a field changes, this runs and notifies parent
  const handleChange = (setter, field) => (e) => {
    const value = e.target.value;
    setter(value);
    onChange({
      q: field === "q" ? value : q,
      beds: field === "beds" ? value : beds,
      min: field === "min" ? value : min,
      max: field === "max" ? value : max,
    });
  };

  return (
    <form className="filters" onSubmit={(e) => e.preventDefault()}>
      <input
        name="q"
        placeholder="City, neighborhood, or keyword"
        value={q}
        onChange={handleChange(setQ, "q")}
      />

      <input
        name="beds"
        placeholder="Bedrooms"
        value={beds}
        onChange={handleChange(setBeds, "beds")}
      />

      <input
        name="min"
        placeholder="Min Price"
        type="number"
        value={min}
        onChange={handleChange(setMin, "min")}
      />

      <input
        name="max"
        placeholder="Max Price"
        type="number"
        value={max}
        onChange={handleChange(setMax, "max")}
      />
    </form>
  );
}