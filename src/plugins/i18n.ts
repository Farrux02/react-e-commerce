import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "../locales/ru.json";
import uz from "../locales/uz.json";

const resources = {
  ru: {
    translation: ru,
  },
  uz: {
    translation: uz,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem("lang") || "ru",
  fallbackLng: "ru",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
