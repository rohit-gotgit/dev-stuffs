import { useEffect, useState } from "react";

export default function WindowSize() {
  const [size, setSize] = useState(window.innerWidth);

  useEffect(() => {
    const handle = () => setSize(window.innerWidth);
    window.addEventListener("resize", handle);
    return () => window.removeEventListener("resize", handle);
  }, []);

  return <p>Width: {size}</p>;
}
