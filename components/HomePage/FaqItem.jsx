"use client";

import { useState } from "react";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b text-slate-600">
      <button
        className="flex w-full items-center justify-between px-4 py-3 text-left text-lg font-light text-zinc-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h4 className="font-semibold ">{question}</h4>
        <span>{isOpen ? "−" : "+"}</span>
      </button>
      {isOpen && <p className="px-4 py-2">{answer}</p>}
    </div>
  );
}
