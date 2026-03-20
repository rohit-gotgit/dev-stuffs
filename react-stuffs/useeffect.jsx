import { useEffect } from "react";

export default function Logger() {
  useEffect(() => {
    console.log("Component mounted");
  }, []);

  return <h2>Check console</h2>;
}
