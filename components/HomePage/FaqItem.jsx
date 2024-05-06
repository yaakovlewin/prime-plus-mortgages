"use client";

import { useState, useRef } from "react";

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div
      className={`border-b transition-colors duration-300 ease-in-out ${
        isOpen ? "bg-gray-200" : "bg-gray-100"
      } hover:bg-gray-50`}
    >
      <button
        className="flex w-full items-center justify-between px-4 py-2 text-left"
        onClick={toggleOpen}
        aria-expanded={isOpen}
      >
        <h4 className="text-md font-semibold text-zinc-800">{question}</h4>
        <span
          className={`transform text-xl font-semibold transition-transform duration-150 ${
            isOpen ? "-rotate-45" : "rotate-0"
          }`}
        >
          +
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-[max-height] duration-700 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
        aria-hidden={!isOpen}
      >
        <p className="px-4 pb-4 text-base text-slate-600">{answer}</p>
      </div>
    </div>
  );
}
