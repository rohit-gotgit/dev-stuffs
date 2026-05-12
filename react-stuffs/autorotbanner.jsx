import { useEffect, useState } from "react";

const banners = ["Banner 1", "Banner 2", "Banner 3"];

export default function AutoBanner() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex(i => (i + 1) % banners.length);
    }, 2000);

    return () => clearInterval(id);
  }, []);

  return <h2>{banners[index]}</h2>;
}
