import { useState } from "react";

export default function CopyFeedback() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("Sample text");
    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <button onClick={handleCopy}>
      {copied ? "Copied!" : "Copy"}
    </button>
  );
}
