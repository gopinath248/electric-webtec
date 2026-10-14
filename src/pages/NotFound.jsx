import { Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-pad max-w-4xl mx-auto py-20 text-center text-secondary">
        <h1 className="text-3xl font-semibold">{t("notFound.title")}</h1>
        <p className="text-secondary/70 mt-3">{t("notFound.subtitle")}</p>
        <Link to="/" className="btn-primary mt-6 inline-flex">{t("notFound.backHome")}</Link>
      </div>
    </section>
  );
}
