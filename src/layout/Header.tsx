import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function Header() {
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "vi" ? "en" : "vi";
    i18n.changeLanguage(newLang);
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-green-100 shadow">
      <Link to="/" className="text-2xl font-bold text-green-700">STAR-FARM</Link>
      <nav className="space-x-4">
        <Link to="/kms">{t("nav.kms")}</Link>
        <Link to="/datasets">{t("nav.datasets")}</Link>
        <Link to="/about">{t("nav.about")}</Link>
        <button onClick={toggleLanguage} className="ml-4 bg-white px-2 py-1 rounded border">{i18n.language.toUpperCase()}</button>
      </nav>
    </header>
  );
}
