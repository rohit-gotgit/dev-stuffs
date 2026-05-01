import { useState } from "react";

export default function CurrencyConverter() {
  const [usd, setUsd] = useState("");

  return (
    <div>
      <input onChange={(e) => setUsd(e.target.value)} />
      <p>INR: {usd * 83}</p>
    </div>
  );
}
