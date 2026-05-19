import { useRef } from "react";

export default function AutoFocusInputs() {
  const refs = useRef([]);

  const next = (e, i) => {
    if (e.target.value.length === 1) {
      refs.current[i + 1]?.focus();
    }
  };

  return (
    <>
      {[0,1,2].map(i => (
        <input
          key={i}
          maxLength="1"
          ref={el => refs.current[i] = el}
          onChange={(e) => next(e, i)}
        />
      ))}
    </>
  );
}
