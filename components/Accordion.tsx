"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

interface AccordionItem {
  title: string;
  body: string;
}

export default function Accordion({
  items,
}: {
  items: AccordionItem[];
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="corporate-accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div
            key={item.title}
            className={`corporate-accordion__item${
              open ? " is-open" : ""
            }`}
          >
            <button
              type="button"
              aria-expanded={open}
              aria-controls={`corporate-panel-${i + 1}`}
              onClick={() => setOpenIndex(open ? null : i)}
            >
              <Plus size={14} /> {item.title}
            </button>
            <div
              className="corporate-accordion__panel"
              id={`corporate-panel-${i + 1}`}
              aria-hidden={!open}
            >
              <div className="corporate-accordion__panel-inner">
                {item.body}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}