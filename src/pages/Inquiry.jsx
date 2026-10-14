import { useSearchParams } from "react-router-dom";
import InquiryForm from "../components/InquiryForm.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Inquiry() {
  const { t } = useLanguage();
  const [params] = useSearchParams();
  const productId = params.get("product") || "";

  return (
    <section className="container-pad max-w-5xl mx-auto py-14">
      <h1 className="section-title">{t("inquiry.title")}</h1>
      <p className="section-subtitle">{t("inquiry.subtitle")}</p>
      <div className="mt-6">
        <InquiryForm productId={productId} />
      </div>
    </section>
  );
}
