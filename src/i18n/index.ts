import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  vi: {
    translation: {
      nav: { kms: "Hệ thống KMS", datasets: "Dữ liệu", about: "Giới thiệu" },
      home: {
        title: "Chào mừng đến với STAR-FARM",
        description: "Nền tảng quản lý dữ liệu nông nghiệp Mekong",
      },
    },
  },
  en: {
    translation: {
      nav: { kms: "KMS System", datasets: "Datasets", about: "About" },
      home: {
        title: "Welcome to STAR-FARM",
        description: "Agricultural data platform for the Mekong Delta",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "vi",
  fallbackLng: "vi",
  interpolation: { escapeValue: false },
});

export default i18n;
