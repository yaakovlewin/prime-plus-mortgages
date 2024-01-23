"use client";

import { useState } from "react";

export default function FaqItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="border-b">
            <button
                className="w-full text-left text-lg text-zinc-700 font-light py-3 px-4 flex justify-between items-center"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h4 className="font-semibold">{question}</h4>
                <span>{isOpen ? "−" : "+"}</span>
            </button>
            {isOpen && <p className="py-2 px-4">{answer}</p>}
        </div>
    );
}
