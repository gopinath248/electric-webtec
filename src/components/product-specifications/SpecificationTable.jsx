import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { isImportantSpecLabel } from "./specUtils.js";

function copyText(value) {
  if (navigator.clipboard?.writeText) {
    return navigator.clipboard.writeText(value);
  }

  const textarea = document.createElement("textarea");
  textarea.value = value;
  textarea.setAttribute("readonly", "true");
  textarea.style.position = "absolute";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand("copy");
  document.body.removeChild(textarea);
  return Promise.resolve();
}

export default function SpecificationTable({ specs = [], emptyMessage = "No matching specifications found." }) {
  const { t, getSpecLabel } = useLanguage();
  const [copiedKey, setCopiedKey] = useState("");
  const timeoutRef = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const handleCopy = async (spec) => {
    try {
      await copyText(String(spec.value ?? ""));
      const key = `${spec.label}-${spec.value}`;
      setCopiedKey(key);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopiedKey("");
      }, 1500);
    } catch {
      setCopiedKey("");
    }
  };

  if (!specs.length) {
    return (
      <div className="rounded-xl border border-dashed border-primary/20 bg-primary/5 p-5 text-sm font-semibold text-secondary/70">
        {emptyMessage}
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-primary/20 shadow-sm">
      <div className="hidden md:block">
        <table className="w-full border-collapse bg-white">
          <thead className="bg-primary/5">
            <tr>
              <th className="border-b border-primary/20 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
                {t("common.specification")}
              </th>
              <th className="border-b border-primary/20 px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.2em] text-secondary/60">
                {t("common.value")}
              </th>
            </tr>
          </thead>
          <tbody>
            {specs.map((spec) => {
              const isImportant = isImportantSpecLabel(spec.label);
              const copyKey = `${spec.label}-${spec.value}`;
              const copied = copiedKey === copyKey;

              return (
                <tr
                  key={copyKey}
                  className="border-b border-primary/20 transition-all duration-300 hover:bg-primary/5 last:border-b-0"
                >
                  <td className="px-4 py-4 align-top text-sm font-semibold text-secondary">
                    {getSpecLabel(spec.label)}
                  </td>
                  <td className="px-4 py-4 align-top text-sm font-semibold text-secondary">
                    <div className="flex items-start justify-between gap-3">
                      <span className="min-w-0 flex-1 font-semibold text-secondary">
                        {spec.value}
                      </span>
                      <button
                        type="button"
                        onClick={() => handleCopy(spec)}
                        className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                          copied
                            ? "border-primary/20 bg-primary/10 text-secondary"
                            : "border-primary/20 bg-white text-secondary/60 hover:border-primary hover:text-secondary"
                        }`}
                        aria-label={`${t("common.copy")} ${getSpecLabel(spec.label)} ${t("common.value")}`}
                      >
                        {copied ? t("common.copied") : t("common.copy")}
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-3 p-4 md:hidden">
        {specs.map((spec) => {
          const isImportant = isImportantSpecLabel(spec.label);
          const copyKey = `${spec.label}-${spec.value}`;
          const copied = copiedKey === copyKey;

          return (
            <div
              key={copyKey}
              className="rounded-xl border border-primary/20 bg-white p-4 shadow-sm transition-all duration-300 hover:bg-primary/5"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-secondary">
                    {getSpecLabel(spec.label)}
                  </p>
                  <p className="mt-2 break-words text-sm font-semibold text-secondary">
                    {spec.value}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => handleCopy(spec)}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all duration-300 ${
                    copied
                      ? "border-primary/20 bg-primary/10 text-secondary"
                      : "border-primary/20 bg-white text-secondary/60 hover:border-primary hover:text-secondary"
                  }`}
                  aria-label={`${t("common.copy")} ${getSpecLabel(spec.label)} ${t("common.value")}`}
                >
                  {copied ? t("common.copied") : t("common.copy")}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
