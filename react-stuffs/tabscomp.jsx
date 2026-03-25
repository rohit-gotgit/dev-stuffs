import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState(0);
  const tabs = ["Home", "Profile", "Settings"];

  return (
    <div>
      {tabs.map((tab, i) => (
        <button key={i} onClick={() => setActive(i)}>
          {tab}
        </button>
      ))}

      <h2>{tabs[active]}</h2>
    </div>
  );
}
