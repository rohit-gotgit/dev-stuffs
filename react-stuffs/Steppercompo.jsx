import { useState } from "react";

export default function Stepper() {
  const steps = ["Login", "Shipping", "Payment"];
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <h2>{steps[current]}</h2>

      <button disabled={current === 0} onClick={() => setCurrent(c => c - 1)}>
        Back
      </button>
      <button disabled={current === steps.length - 1} onClick={() => setCurrent(c => c + 1)}>
        Next
      </button>
    </div>
  );
}
