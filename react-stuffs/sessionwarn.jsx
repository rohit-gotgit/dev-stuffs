import { useEffect, useState } from "react";

export default function SessionTimeout() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return show ? <p>Session expiring soon...</p> : <p>Active session</p>;
}
