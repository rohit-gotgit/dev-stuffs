import { useState } from "react";

export default function NotificationBadge() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Notifications ({count})
      </button>
    </div>
  );
}
