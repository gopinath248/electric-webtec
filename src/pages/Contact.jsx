import { EmailLink, PhoneContactList } from "../components/ContactLinks.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section className="bg-white">
      <div className="container-pad max-w-7xl mx-auto py-12 flex flex-col gap-6 text-secondary">
        <div>
          <h1 className="section-title">{t("contact.title")}</h1>
          <p className="section-subtitle">{t("contact.subtitle")}</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="card p-6 flex-1">
            <h2 className="text-lg font-semibold"><b>Texro Automation</b></h2>
            <p className="text-sm text-slate-600 mt-2 leading-6">Senthil Bhuvana Towers, Sundaram Garden, VOC Nagar, Police Quarters Road, Ganapathy, Coimbatore - 641006</p>
            <p className="text-sm text-slate-600">
              {t("common.phone")}: <PhoneContactList linkClassName="text-slate-600" />
            </p>
            <p className="text-sm text-slate-600">
              {t("footer.email")}: <EmailLink email="texroelectronics@gmail.com" className="text-slate-600">texroelectronics@gmail.com</EmailLink>
            </p>
            <div className="mt-4 rounded-xl overflow-hidden border border-primary/20">
              <iframe
                title="Texro Automation location map"
                className="w-full h-64"
                src="https://www.google.com/maps?q=Senthil+Bhuvana+Towers%2C+Sundaram+Garden%2C+VOC+Nagar%2C+Police+Quarters+Road%2C+Ganapathy%2C+Coimbatore+-+641006&output=embed"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
