import React from "react";

export default function Accordion({ question, answer }) {
  return (
    <div>
      <div className="w-full mt-5 space-y-2 rounded-sm shadow-md cursor-pointer">
        <details className="p-4 rounded-lg">
          <summary className="font-montserrat">{question}</summary>
          <div className="mt-3">
            <p className="font-light font-montserrat leading-6 text-gray-600">
              {answer}
            </p>
          </div>
        </details>
      </div>
    </div>
  );
}
