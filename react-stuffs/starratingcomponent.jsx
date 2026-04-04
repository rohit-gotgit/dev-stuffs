import { useState } from "react";

export default function Rating() {
  const [rating, setRating] = useState(0);

  return (
    <div>
      {[1,2,3,4,5].map(i => (
        <span
          key={i}
          onClick={() => setRating(i)}
          style={{ cursor: "pointer", color: i <= rating ? "gold" : "gray" }}
        >
          ★
        </span>
      ))}
    </div>
  );
}
