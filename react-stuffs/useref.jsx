import { useRef } from "react";

export default function FocusInput() {
  const inputRef = useRef();

  return (
    <div>
      <input ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>
        Focus
      </button>
    </div>
  );
}
