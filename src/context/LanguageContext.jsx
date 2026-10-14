import { createContext, useContext, useMemo, useState } from "react";
import {
  formatMessage,
  getCategoryText,
  getPhotoTitle,
  getProductContent,
  getSpecLabel,
  getText,
  getTranslations
} from "../i18n/translations.js";

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const value = useMemo(() => {
    const translations = getTranslations(language);

    return {
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === "en" ? "ta" : "en")),
      translations,
      t: (path, fallback = "") => getText(language, path, fallback),
      formatMessage,
      getCategoryText: (category) => getCategoryText(language, category),
      getProductContent: (product) => getProductContent(language, product),
      getPhotoTitle: (src, fallback) => getPhotoTitle(language, src, fallback),
      getSpecLabel: (label) => getSpecLabel(language, label)
    };
  }, [language]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider.");
  }

  return context;
}

