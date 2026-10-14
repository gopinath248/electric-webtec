import { EmailLink, PhoneContactList } from "./ContactLinks.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white text-secondary">
      <div className="h-1 w-full bg-gradient-to-r from-primary via-primary/80 to-secondary"></div>
      <div className="container-pad max-w-6xl mx-auto py-10 grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-secondary">Texro Automation</h3>
          <p className="mt-2 text-sm leading-6 text-secondary/70">
            {t("footer.description")}
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary/80">{t("footer.contact")}</h4>
          <p className="text-sm text-secondary/70 mt-2 leading-6">Senthil Bhuvana Towers, Sundaram Garden, VOC Nagar, Police Quarters Road, Ganapathy, Coimbatore - 641006</p>
          <p className="break-words text-sm leading-6 text-secondary/70">
            {t("footer.phone")}: <PhoneContactList linkClassName="text-secondary/70" />
          </p>
          <p className="break-words text-sm leading-6 text-secondary/70">
            {t("footer.email")}: <EmailLink email="texroelectronics@gmail.com" className="text-secondary/70">texroelectronics@gmail.com</EmailLink>
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wide text-secondary/80">{t("footer.businessHours")}</h4>
          <p className="text-sm text-secondary/70 mt-2">{t("footer.hours")}</p>
          <p className="text-sm text-secondary/70">{t("footer.sunday")}</p>
        </div>
      </div>
      <div className="border-t border-primary/20 py-4 text-center text-xs text-secondary/60">
        &copy; 2026 Texro Automation. {t("footer.rights")}
      </div>
    </footer>
  );
}
