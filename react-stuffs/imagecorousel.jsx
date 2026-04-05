import { useState } from "react";

const images = [
  "https://via.placeholder.com/200",
  "https://via.placeholder.com/201",
  "https://via.placeholder.com/202"
];

export default function Carousel() {
  const [i, setI] = useState(0);

  return (
    <div>
      <img src={images[i]} alt="" />
      <button onClick={() => setI((i - 1 + images.length) % images.length)}>
        Prev
      </button>
      <button onClick={() => setI((i + 1) % images.length)}>
        Next
      </button>
    </div>
  );
}
