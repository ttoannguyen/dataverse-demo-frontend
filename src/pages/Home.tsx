import Header from "../components/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className=" min-h-screen flex flex-col">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        CTU
      </div>
    </div>
  );
}
