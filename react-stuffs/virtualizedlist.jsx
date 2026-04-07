import { useState } from "react";

export default function VirtualList() {
  const items = Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
  const [visible, setVisible] = useState(20);

  return (
    <div>
      {items.slice(0, visible).map(i => <div key={i}>{i}</div>)}
      <button onClick={() => setVisible(v => v + 20)}>Load More</button>
    </div>
  );
}
