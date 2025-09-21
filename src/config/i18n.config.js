import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ru from "../locales/ru/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    ru: {
      translation: ru,
    },
  },
  lng: "ru",
  fallbackLng: "ru",
  pluralSeparator: "_",
  interpolation: {
    escapeValue: false,
  },
});

const t = i18n.t;

export { t, i18n };
