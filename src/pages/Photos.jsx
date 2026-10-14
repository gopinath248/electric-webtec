import { useState } from "react";
import { PhoneContactList } from "../components/ContactLinks.jsx";
import { photos } from "../data/photos.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const photoTitleOverrides = {
  "/images/INDIA MART/img_2027.jpg": "Three Phase Mobile Starter",
  "/images/INDIA MART/1 HP Electric Control panel.png": "1 HP Electric Control Panel",
  "/images/INDIA MART/Star-Delta Starter.jpg": "Star Delta Starter Control Panel",
  "/images/INDIA MART/Submerrisiblepump.jpg": "Submersible Pump Control Panel",
  "/images/INDIA MART/open weLL Submerisible Mo.jpg": "Open Well Submersible Control Panel",
  "/images/INDIA MART/MCBControll.jpg": "MCB Control Panel",
  "/images/INDIA MART/IMG dry run preventer .jpg": "TEX-7DR Dry Run Preventer",
  "/images/INDIA MART/IMG-20180806-WA0009.jpg": "Microcontroller Based Dry Run Preventer",
  "/images/INDIA MART/IMG-20190221-WA0073.jpg": "Auto Start ASPU Single Phase Preventer",
  "/images/INDIA MART/IMG-20180809-WA0017.jpg": "Single Phase Preventer-3 CT",
  "/images/INDIA MART/Digital Single Phase Starter.jpg": "Digital Single Phase Electronic Starter",
  "/images/INDIA MART/ThreePhaseDOLStarter.jpg": "Three Phase DOL Starter",
  "/images/INDIA MART/GSM Mobile Preventer.jpg": "GSM Mobile Preventer",
  "/images/INDIA MART/Digital-Motor Protection Meter.jpg": "Digital Motor Protection Meter"
};

export default function Photos() {
  const { t, getPhotoTitle } = useLanguage();
  const [openCard, setOpenCard] = useState(null);

  const formatTitle = (src) => {
    if (photoTitleOverrides[src]) {
      return getPhotoTitle(src, photoTitleOverrides[src]);
    }

    const file = src.split("/").pop() || "";
    const name = file.replace(/\.[^/.]+$/, "").replace(/[-_]/g, " ").trim();
    return name ? name.replace(/\b\w/g, (c) => c.toUpperCase()) : `Texro Automation ${t("common.product")}`;
  };

  return (
    <section className="bg-white">
      <div className="container-pad max-w-7xl mx-auto py-12 flex flex-col gap-6 text-secondary">
        <div>
          <h1 className="section-title">{t("photos.title")}</h1>
          <p className="section-subtitle">{t("photos.subtitle")}</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {photos.map((src) => {
            const title = formatTitle(src);
            const isOpen = openCard === src;
            const toggleContact = () => {
              setOpenCard((prev) => (prev === src ? null : src));
            };
            return (
              <div
                key={src}
                className="bg-white rounded-xl shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg flex flex-col overflow-hidden text-secondary"
              >
                <div className="h-48 bg-primary/10 flex items-center justify-center">
                  <img src={src} alt={title} loading="lazy" decoding="async" className="h-full w-full object-contain p-4" />
                </div>
                <div className="p-4 flex flex-col gap-3 flex-1">
                  <p className="font-semibold text-base">{title}</p>
                  <button
                    type="button"
                    onClick={toggleContact}
                    className="mt-auto w-full rounded-md bg-[#F5E400] py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d4c300]"
                  >
                    {t("photos.quoteButton")}
                  </button>
                  <div className={`contact-box ${isOpen ? "" : "hidden"}`}>
                    <p className="text-sm font-semibold text-secondary">{t("photos.contactCompany")}</p>
                    <p className="text-sm text-secondary">
                      {t("common.phone")}:{" "}
                      <PhoneContactList linkClassName="text-[#1F6FA5] font-medium" />
                    </p>
                    <p className="text-sm text-secondary">
                      {t("common.email")}:{" "}
                      <a href="mailto:texroelectronics@gmail.com" className="text-[#1F6FA5] font-medium">
                        texroelectronics@gmail.com
                      </a>
                    </p>
                    <p className="text-sm text-secondary">{t("common.location")}: {t("photos.locationValue")}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
