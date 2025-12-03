// components/CopyButton.jsx
"use client";

import { useState } from "react";

export default function CopyButton({ text, className }) {
  const [ok, setOk] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setOk(true);
      setTimeout(() => setOk(false), 1500);
    } catch (e) {
      console.error("Copy failed", e);
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      className={className}
      aria-label="Copy address"
    >
      {ok ? "Copied!" : "Copy Address"}
    </button>
  );
}
