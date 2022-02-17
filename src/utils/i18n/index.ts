import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translations from "./translations";

const i18nConfig = {
  resources: translations,
  fallbackLng: "en-US",
  detection: {
    order: ["localStorage"],
  },
};

i18n.use(initReactI18next).use(LanguageDetector).init(i18nConfig);

export default i18n;
