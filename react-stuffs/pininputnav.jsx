import { useRef } from "react";

export default function PinInput() {
  const refs = useRef([]);

  const move = (e, i) => {
    if (e.target.value && refs.current[i + 1]) {
      refs.current[i + 1].focus();
    }
  };

  return (
    <div>
      {[0,1,2,3].map(i => (
        <input
          key={i}
          maxLength="1"
          ref={el => refs.current[i] = el}
          onChange={(e) => move(e, i)}
          style={{ width: 30 }}
        />
      ))}
    </div>
  );
}
