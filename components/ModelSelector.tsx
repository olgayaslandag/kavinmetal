"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";

export type AiModel = {
  value: string;
  label: string;
};

export const aiModels: AiModel[] = [
  { value: "deepseek-v4.1-flash", label: "DeepSeek v4.1 Flash" },
  { value: "deepseek-chat", label: "DeepSeek Chat" },
  { value: "deepseek-coder", label: "DeepSeek Coder" },
];

const STORAGE_KEY = "kavin:selected-ai-model";

export default function ModelSelector() {
  const [model, setModel] = useState<string>(aiModels[0].value);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && aiModels.some((m) => m.value === saved)) {
      setModel(saved);
    }
  }, []);

  const handleSelect = useCallback(
    (value: string) => {
      setModel(value);
      localStorage.setItem(STORAGE_KEY, value);
      setOpen(false);
    },
    []
  );

  const selected = aiModels.find((m) => m.value === model) ?? aiModels[0];

  return (
    <div className="model-select" onClick={(e) => e.stopPropagation()}>
      <button
        className="model-select-trigger"
        aria-label="AI model seçimi"
        type="button"
        onClick={() => setOpen((v) => !v)}
      >
        {selected.label} <ChevronDown size={14} />
      </button>
      {open && (
        <div className="model-select-menu" onClick={(e) => e.stopPropagation()}>
          {aiModels.map((m) => (
            <button
              key={m.value}
              className={`model-option${m.value === model ? " active" : ""}`}
              type="button"
              onClick={() => handleSelect(m.value)}
            >
              {m.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
