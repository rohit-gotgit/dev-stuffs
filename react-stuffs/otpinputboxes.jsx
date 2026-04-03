import { useRef } from "react";

export default function OTP() {
  const inputs = useRef([]);

  const handleChange = (e, i) => {
    if (e.target.value && inputs.current[i + 1]) {
      inputs.current[i + 1].focus();
    }
  };

  return (
    <div>
      {[...Array(4)].map((_, i) => (
        <input
          key={i}
          maxLength="1"
          ref={(el) => (inputs.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          style={{ width: 30, margin: 5 }}
        />
      ))}
    </div>
  );
}
