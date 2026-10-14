import { useRef, useState } from "react";
import ScrollReveal from "../components/ScrollReveal.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

const  companyAlbumImages = [
   "/images/INDIA MART/001.jpg",
    "/images/INDIA MART/002.jpg",
   "/images/INDIA MART/IMG-20180516-WA0010.jpg",
   "/images/INDIA MART/IMG-20180708-WA0078.jpg",
   "/images/INDIA MART/IMG-20180804-WA0064.jpg",
   "/images/INDIA MART/leaflet-texro.jpg",
   "/images//INDIA MART/IMG-20190221-WA0051.jpg",
   "/images/INDIA MART/IMG-20190221-WA0053.jpg",
   "/images/INDIA MART/IMG-20180708-WA0072.jpg",
];

function renderValue(value) {
  if (Array.isArray(value)) {
    return (
      <div className="flex flex-col">
        {value.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    );
  }

  return <span>{value}</span>;
}

function FactsheetSection({ title, rows, bordered = true }) {
  return (
    <div className={bordered ? "border-t border-slate-200" : ""}>
      <div className="px-5 py-4 sm:px-6">
        <h3 className="text-[1.65rem] font-medium text-slate-900">{title}</h3>
        <div className="mt-4">
          {rows.map((row, index) => (
            <div
              key={`${row.label}-${index}`}
              className={`motion-row grid gap-2 rounded-md px-2 py-3 text-[1.02rem] leading-7 text-slate-900 md:grid-cols-[260px_minmax(0,1fr)] ${
                index > 0 ? "border-t border-slate-100" : ""
              }`}
            >
              <p className="text-slate-500">{row.label}</p>
              <div>{renderValue(row.value)}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ContentSection({ title, children }) {
  return (
    <ScrollReveal as="section" className="flex flex-col gap-3" delay={40}>
      <h2 className="text-[1.95rem] font-semibold tracking-tight text-slate-900">{title}</h2>
      <div className="text-[1.06rem] leading-9 text-slate-700">{children}</div>
    </ScrollReveal>
  );
}

export default function About() {
  const { translations } = useLanguage();
  const aboutTranslations = translations.about;
  const albumRef = useRef(null);
  const [activeAlbumImage, setActiveAlbumImage] = useState(companyAlbumImages[0] ?? "");

  const scrollAlbum = (direction) => {
    if (!albumRef.current) {
      return;
    }

    albumRef.current.scrollBy({
      left: direction * 240,
      behavior: "smooth"
    });
  };

  return (
    <section className="bg-white">
      <div className="container-pad max-w-7xl mx-auto py-10 text-slate-900">
        <div className="flex flex-col gap-10">
          <ScrollReveal as="section" className="flex flex-col gap-3">
            <h1 className="text-[2.15rem] font-semibold tracking-tight">Texro Automation</h1>
            <p className="max-w-6xl text-[1.08rem] leading-9 text-slate-700">
              {aboutTranslations.intro}
            </p>
          </ScrollReveal>

          <ScrollReveal as="section" className="flex flex-col gap-4" delay={30}>
            <h2 className="text-[1.95rem] font-semibold tracking-tight text-slate-900">{aboutTranslations.album}</h2>
            <div className="relative">
              <button
                type="button"
                onClick={() => scrollAlbum(-1)}
                className="absolute left-0 top-1/2 z-10 hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-3xl leading-none text-[#2f438e] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:inline-flex"
                aria-label="Scroll company album left"
              >
                {"<"}
              </button>
              <div
                ref={albumRef}
                className="flex gap-3 overflow-x-auto scroll-smooth pb-2 no-scrollbar"
              >
                {companyAlbumImages.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => setActiveAlbumImage(image)}
                    className={`motion-card h-44 min-w-[11.2rem] overflow-hidden rounded-md border bg-white transition-all duration-300 ${
                      activeAlbumImage === image
                        ? "border-[#1F6FA5] ring-2 ring-[#1F6FA5]/20"
                        : "border-slate-200 hover:border-slate-300"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`Texro Automation company album ${index + 1}`}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
              <button
                type="button"
                onClick={() => scrollAlbum(1)}
                className="absolute right-0 top-1/2 z-10 hidden h-12 w-12 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-slate-200 bg-white text-3xl leading-none text-[#2f438e] shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl sm:inline-flex"
                aria-label="Scroll company album right"
              >
                {">"}
              </button>
            </div>
            {activeAlbumImage ? (
              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-center justify-center rounded-xl bg-slate-50 p-3">
                  <img
                    src={activeAlbumImage}
                    alt="Selected Texro Automation album"
                    decoding="async"
                    className="max-h-[30rem] w-full rounded-lg object-contain"
                  />
                </div>
              </div>
            ) : null}
          </ScrollReveal>

          <ScrollReveal
            as="section"
            className="motion-panel overflow-hidden rounded-md border border-slate-200 bg-white hover:border-slate-300 hover:shadow-lg"
            delay={50}
          >
            {aboutTranslations.factsheet.map((section, index) => (
              <FactsheetSection
                key={section.title}
                title={section.title}
                rows={section.rows}
                bordered={index > 0}
              />
            ))}
          </ScrollReveal>

          <ContentSection title={aboutTranslations.infrastructureTitle}>
            <p>
              {aboutTranslations.infrastructureText}
            </p>
          </ContentSection>

          <ContentSection title={aboutTranslations.teamTitle}>
            <p>
              {aboutTranslations.teamText}
            </p>
          </ContentSection>

          <ContentSection title={aboutTranslations.qualityTitle}>
            <p>
              {aboutTranslations.qualityText}
            </p>
          </ContentSection>

          <ContentSection title={aboutTranslations.visionTitle}>
            <p>
              {aboutTranslations.visionText}
            </p>
          </ContentSection>

          <ContentSection title={aboutTranslations.missionTitle}>
            <ul className="list-disc space-y-1 pl-6">
              {aboutTranslations.missionPoints.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </ContentSection>

          <ContentSection title={aboutTranslations.brandsTitle}>
            <p>
              {aboutTranslations.brandsText.split("Maxbe")[0]}<strong>Maxbe</strong>{aboutTranslations.brandsText.split("Maxbe")[1] ?? ""}
            </p>
          </ContentSection>

          <ContentSection title={aboutTranslations.whyUsTitle}>
            <div className="flex flex-col gap-3">
              <p>
                {aboutTranslations.whyUsIntro}
              </p>
              <p className="font-semibold text-slate-900">
                {aboutTranslations.whyUsLead}
              </p>
              <ul className="list-disc space-y-1 pl-6">
                {aboutTranslations.whyUsPoints.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </ContentSection>
        </div>
      </div>
    </section>
  );
}
