import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { EmailLink, PhoneContactList } from "../components/ContactLinks.jsx";
import { catalog } from "../data/catalog.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const fallbackTileImage = "/images/pic texro/product-jpeg-500x500.webp";

function getTileImage(category) {
  const productImage = category?.products
    ?.flatMap((product) => (Array.isArray(product?.images) ? product.images : []))
    .find((entry) => typeof entry === "string" && entry.trim());

  if (productImage) {
    return productImage.trim();
  }

  if (typeof category?.image === "string" && category.image.trim()) {
    return category.image.trim();
  }

  return fallbackTileImage;
}

function getCategoryImages(category) {
  const images = category?.products?.flatMap((product) =>
    Array.isArray(product?.images)
      ? product.images.filter((entry) => typeof entry === "string" && entry.trim())
      : []
  ) ?? [];

  const uniqueImages = Array.from(new Set(images.map((image) => image.trim())));

  if (uniqueImages.length > 0) {
    return uniqueImages;
  }

  if (typeof category?.image === "string" && category.image.trim()) {
    return [category.image.trim()];
  }

  return [fallbackTileImage];
}

function getCategorySummary(category, homeTranslations, formatMessage) {
  const productCount = category?.products?.length ?? 0;

  if (productCount <= 1) {
    return homeTranslations.categorySummarySingle;
  }

  return formatMessage(homeTranslations.categorySummaryMany, { count: productCount });
}

export default function Home() {
  const { t, translations, formatMessage, getCategoryText } = useLanguage();
  const [categoryImageIndexes, setCategoryImageIndexes] = useState({});
  const homeTranslations = translations.home;

  const showcaseCategories = useMemo(
    () =>
      catalog.map((category) => ({
        title: getCategoryText(category),
        slug: category.slug,
        summary: getCategorySummary(category, homeTranslations, formatMessage),
        productCount: category.products.length,
        images: getCategoryImages(category)
      })),
    [formatMessage, getCategoryText, homeTranslations]
  );
  const heroShowcaseProducts = useMemo(
    () =>
      catalog.map((category) => {
        const images = getCategoryImages(category);

        return {
          title: getCategoryText(category),
          subtitle: `${category.products.length} product${category.products.length === 1 ? "" : "s"} available`,
          images: [images[0] || fallbackTileImage, images[1] || images[0] || fallbackTileImage],
          to: `/products/${category.slug}`
        };
      }),
    [getCategoryText]
  );

  useEffect(() => {
    const rotatingCategories = showcaseCategories.filter((category) => category.images.length > 1);
    if (rotatingCategories.length === 0) return;

    const interval = setInterval(() => {
      setCategoryImageIndexes((prev) => {
        const next = { ...prev };

        rotatingCategories.forEach((category) => {
          const currentIndex = prev[category.slug] ?? 0;
          next[category.slug] = (currentIndex + 1) % category.images.length;
        });

        return next;
      });
    }, 8000);

    return () => clearInterval(interval);
  }, [showcaseCategories]);

  return (
    <div className="bg-white text-secondary">
      <section className="relative overflow-hidden bg-slate-50/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(31,111,165,0.12),_transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(31,111,165,0.08),_transparent_38%)]"></div>
        <div className="relative container-pad max-w-7xl mx-auto py-14 sm:py-16 lg:py-28">
          <div className="flex items-center justify-center">
            <div className="flex w-full max-w-6xl flex-col items-start gap-5 sm:gap-6">
              <span className="inline-flex items-center rounded-full border border-primary/15 bg-white px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-primary shadow-sm sm:px-4 sm:text-xs sm:tracking-[0.22em]">
                Texro Automation
              </span>
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary"></div>
              <div className="flex w-full flex-col gap-4 sm:gap-5">
                <h1 className="max-w-5xl text-3xl font-bold tracking-tight text-primary sm:text-4xl md:text-5xl lg:text-6xl">
                  {homeTranslations.heroTitle}
                </h1>
                <p className="w-full max-w-none text-base font-bold leading-[1.5] text-secondary/75 sm:text-lg">
                  {homeTranslations.heroParagraphOne}
                </p>
                <p className="w-full max-w-none text-sm font-bold leading-[1.6] text-secondary/70 sm:text-base">
                  {homeTranslations.heroParagraphTwo}
                </p>
              </div>
              <div className="relative z-10 w-full">
                <div className="pointer-events-none absolute -inset-x-4 top-1/2 hidden h-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(250,204,21,0.16),_transparent_68%)] blur-2xl lg:block"></div>
                <div className="-mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-4 pt-2 no-scrollbar md:gap-4 lg:mx-0">
                  {heroShowcaseProducts.map((product, index) => (
                    <Link
                      key={product.title}
                      to={product.to}
                      className={`group relative min-w-[230px] max-w-[260px] snap-start overflow-hidden rounded-[1.5rem] border border-white/60 bg-white/55 p-3.5 shadow-[0_18px_40px_rgba(23,90,134,0.12)] backdrop-blur-xl transition duration-500 ease-out hover:-translate-y-3 hover:shadow-[0_24px_50px_rgba(23,90,134,0.18)] sm:min-w-[250px] sm:max-w-[280px] sm:p-4 lg:min-w-[260px] lg:max-w-[300px] ${
                        index % 2 === 0 ? "lg:translate-y-2" : ""
                      }`}
                    >
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.72),rgba(255,255,255,0.32))]"></div>
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-primary/12 blur-2xl transition duration-500 group-hover:scale-125"></div>
                      <div className="absolute -bottom-8 -left-6 h-20 w-20 rounded-full bg-amber-300/20 blur-2xl transition duration-500 group-hover:scale-125"></div>
                      <div className="absolute right-4 top-4 h-2.5 w-2.5 rounded-full bg-amber-400/80 shadow-[0_0_16px_rgba(250,204,21,0.8)] motion-safe:animate-pulse"></div>
                      <div className="relative flex flex-col gap-3 sm:gap-4">
                        <div className="relative h-28 sm:h-32">
                          <div className="flex h-24 w-[72%] items-center justify-center rounded-[1.2rem] border border-primary/10 bg-white/85 p-3 shadow-[0_16px_30px_rgba(15,23,42,0.12)] transition duration-500 group-hover:-translate-y-1 group-hover:rotate-[-2deg] sm:h-28 sm:rounded-[1.4rem]">
                            <img
                              src={product.images[0]}
                              alt={product.title}
                              loading={index === 0 ? "eager" : "lazy"}
                              decoding="async"
                              fetchPriority={index === 0 ? "high" : "auto"}
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = fallbackTileImage;
                              }}
                              className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                            />
                          </div>
                          <div className="absolute bottom-0 right-0 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/10 bg-white/90 p-2 shadow-[0_12px_24px_rgba(15,23,42,0.10)] transition duration-500 group-hover:translate-y-1 group-hover:rotate-[5deg] sm:h-20 sm:w-20 sm:rounded-2xl sm:p-2.5">
                            <img
                              src={product.images[1]}
                              alt={`${product.title} detail`}
                              loading="lazy"
                              decoding="async"
                              onError={(event) => {
                                event.currentTarget.onerror = null;
                                event.currentTarget.src = fallbackTileImage;
                              }}
                              className="h-full w-full object-contain transition duration-500 group-hover:scale-105"
                            />
                          </div>
                        </div>
                        <div className="flex items-start gap-3 sm:gap-4">
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-[11px] font-bold text-primary transition duration-500 group-hover:bg-primary group-hover:text-white sm:h-10 sm:w-10 sm:text-xs">
                            0{index + 1}
                          </div>
                          <div className="min-w-0">
                            <p className="text-sm font-semibold text-secondary transition duration-300 group-hover:text-primary sm:text-[0.95rem]">{product.title}</p>
                            <p className="mt-1 text-[11px] leading-5 text-secondary/65 sm:text-xs">{product.subtitle}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link className="btn-primary w-full sm:w-auto" to="/products">{homeTranslations.exploreSolutions}</Link>
                <Link className="btn-outline w-full sm:w-auto" to="/contact">{homeTranslations.talkToTeam}</Link>
              </div>
              <div className="grid w-full gap-3 text-sm text-secondary/75 sm:grid-cols-2">
                {homeTranslations.heroBullets.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-2xl border border-primary/10 bg-white px-4 py-3 shadow-sm sm:rounded-full">
                    <span className="h-2 w-2 shrink-0 rounded-full bg-primary"></span>
                    <span className="min-w-0">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad max-w-7xl mx-auto py-14 flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h2 className="section-title">{homeTranslations.categoryShowcaseTitle}</h2>
            <p className="section-subtitle">{homeTranslations.categoryShowcaseSubtitle}</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:gap-6 lg:grid-cols-3 xl:grid-cols-4">
            {showcaseCategories.map((category) => {
              const activeImageIndex = categoryImageIndexes[category.slug] ?? 0;
              const activeImage = category.images[activeImageIndex] || fallbackTileImage;

              return (
              <div
                key={category.slug}
                className="card p-4 sm:p-5 flex flex-col gap-4 group transition duration-300 ease-out hover:-translate-y-1 hover:shadow-glow"
              >
                <div className="overflow-hidden rounded-xl border border-primary/20">
                  <img
                    src={activeImage}
                    alt={category.title}
                    loading="lazy"
                    decoding="async"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = fallbackTileImage;
                    }}
                    className="h-44 w-full object-cover transition duration-300 ease-out group-hover:scale-105 sm:h-40"
                  />
                </div>
                <div>
                  <p className="text-xs text-secondary/50">{t("common.category")}</p>
                  <h3 className="mt-1 text-base font-semibold">{category.title}</h3>
                  <p className="mt-2 text-sm text-secondary/70">{category.summary}</p>
                </div>
                <div className="mt-auto flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center">
                  <Link to={`/products/${category.slug}`} className="btn-outline w-full justify-center text-xs px-4 py-2 sm:w-auto">
                    {homeTranslations.viewCategory}
                  </Link>
                  <Link to={`/inquiry?category=${category.slug}`} className="btn-primary w-full justify-center text-xs px-4 py-2 sm:w-auto">
                    {homeTranslations.getQuote}
                  </Link>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad max-w-7xl mx-auto py-14 flex flex-col gap-6">
          <h2 className="section-title">{homeTranslations.whyChooseTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {homeTranslations.whyChooseItems.map((item) => (
              <div key={item.title} className="card p-5 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-glow">
                <p className="font-semibold">{item.title}</p>
                <p className="text-sm text-secondary/60 mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad max-w-5xl mx-auto py-14 text-center flex flex-col gap-4">
          <h2 className="section-title">{homeTranslations.aboutTitle}</h2>
          <p className="text-sm text-secondary/70">
            {homeTranslations.aboutText}
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="container-pad max-w-6xl mx-auto py-14 flex flex-col gap-6">
          <h2 className="section-title">{homeTranslations.contactTitle}</h2>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <div className="card p-5">
              <p className="text-sm text-secondary/50">{t("common.phone")}</p>
              <p className="mt-2 text-base font-semibold text-secondary sm:text-lg break-words">
                <PhoneContactList linkClassName="text-secondary" separator=" / " />
              </p>
            </div>
            <div className="card p-5">
              <p className="text-sm text-secondary/50">{t("common.email")}</p>
              <p className="mt-2 text-base font-semibold text-secondary sm:text-lg break-words">
                <EmailLink email="texroelectronics@gmail.com" className="text-secondary">texroelectronics@gmail.com</EmailLink>
              </p>
            </div>
            <div className="card p-5">
              <p className="text-sm text-secondary/50">{homeTranslations.address}</p>
              <p className="text-sm text-secondary/70 mt-2 leading-6">Senthil Bhuvana Towers, Sundaram Garden, VOC Nagar, Police Quarters Road, Ganapathy, Coimbatore - 641006</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
