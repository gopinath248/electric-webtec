import { useDeferredValue, useEffect, useMemo, useState } from "react";
import { EmailLink, PhoneContactList } from "../ContactLinks.jsx";
import SpecificationTable from "./SpecificationTable.jsx";
import { buildProductSpecRecord } from "./specUtils.js";
import { useLanguage } from "../../context/LanguageContext.jsx";

function normalizeImages(product) {
  if (Array.isArray(product?.images) && product.images.length > 0) {
    return product.images;
  }

  if (typeof product?.image === "string" && product.image) {
    return [product.image];
  }

  return [];
}

export default function ProductDetails({ product, contactHref, className = "" }) {
  const { t, getProductContent } = useLanguage();
  const resolvedProduct = useMemo(() => buildProductSpecRecord(product), [product]);
  const [activeImage, setActiveImage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [expanded, setExpanded] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const deferredSearchTerm = useDeferredValue(searchTerm);

  const images = useMemo(() => normalizeImages(resolvedProduct), [resolvedProduct]);
  const canShowSpecs =
    resolvedProduct.category === "product" &&
    resolvedProduct.conditions?.showSpecs === true &&
    resolvedProduct.specs.length > 0;

  useEffect(() => {
    setActiveImage(images[0] || "");
    setSearchTerm("");
    setExpanded(false);
    setShowContact(false);
  }, [images, resolvedProduct.id]);

  const filteredSpecs = useMemo(() => {
    if (!canShowSpecs) {
      return [];
    }

    const query = deferredSearchTerm.trim().toLowerCase();
    if (!query) {
      return resolvedProduct.specs;
    }

    return resolvedProduct.specs.filter((spec) =>
      `${spec.label} ${spec.value}`.toLowerCase().includes(query)
    );
  }, [canShowSpecs, deferredSearchTerm, resolvedProduct.specs]);

  const visibleSpecs = expanded ? filteredSpecs : filteredSpecs.slice(0, 5);
  const showMoreToggle = filteredSpecs.length > 5;
  const showCTA = resolvedProduct.conditions?.showContactCTA !== false;
  const translatedProduct = getProductContent(resolvedProduct);

  return (
    <div className={`grid gap-8 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.95fr)] ${className}`}>
      <div className="flex flex-col gap-4">
        <div className="overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-sm">
          <div className="relative aspect-[4/3] bg-primary/5">
            {activeImage ? (
              <img
                src={activeImage}
                alt={translatedProduct.name}
                decoding="async"
                fetchPriority="high"
                className="h-full w-full object-cover transition-all duration-300"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-white to-primary/5 text-sm font-semibold text-secondary/50">
                {t("productDetails.imageComingSoon")}
              </div>
            )}
          </div>

          {images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto border-t border-primary/20 p-4">
              {images.map((image) => (
                <button
                  key={image}
                  type="button"
                  onClick={() => setActiveImage(image)}
                  className={`h-20 w-24 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 ${
                    activeImage === image
                      ? "border-primary ring-2 ring-primary/30"
                      : "border-primary/20 hover:border-primary"
                  }`}
                >
                  <img src={image} alt={translatedProduct.name} loading="lazy" decoding="async" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {translatedProduct.description && (
          <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-secondary/50">{t("productDetails.overview")}</p>
            <p className="mt-3 text-sm leading-6 text-secondary/70">{translatedProduct.description}</p>
          </div>
        )}
      </div>

      <aside className="flex flex-col gap-4">
        <div className="rounded-2xl border border-primary/20 bg-white p-6 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
              {resolvedProduct.category === "service" ? t("common.service") : t("common.product")}
            </span>
            {resolvedProduct.categoryLabel ? (
              <span className="rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-secondary/70">
                {resolvedProduct.categoryLabel}
              </span>
            ) : null}
          </div>

          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-secondary">
            {translatedProduct.name}
          </h2>

          {translatedProduct.description ? (
            <p className="mt-3 text-sm leading-6 text-secondary/70">
              {translatedProduct.description}
            </p>
          ) : null}

          <div className="mt-5 flex flex-col gap-3">
            {showCTA && (
              <button
                type="button"
                onClick={() => setShowContact((prev) => !prev)}
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#1F6FA5] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#175a86]"
              >
                {showContact ? t("common.hideContactUs") : t("common.askPrice")}
              </button>
            )}

            {showContact && (
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm">
                <p className="text-sm font-semibold text-secondary">{t("common.contactUs")}</p>
                <p className="mt-2 text-sm text-secondary/70">Texro Automation</p>
                <p className="text-sm text-secondary/70">
                  {t("common.phone")}: <PhoneContactList linkClassName="text-secondary/70" />
                </p>
                <p className="text-sm text-secondary/70">
                  {t("common.email")}: <EmailLink email="texroelectronics@gmail.com" className="text-secondary/70">texroelectronics@gmail.com</EmailLink>
                </p>
                <p className="text-sm text-secondary/70">{t("common.location")}: {t("productDetails.locationValue")}</p>
              </div>
            )}
          </div>
        </div>

        {canShowSpecs && (
          <div className="rounded-2xl border border-primary/20 bg-white shadow-sm">
            <div className="border-b border-primary/20 p-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-secondary">{t("productDetails.specifications")}</p>
                  <h3 className="mt-1 text-lg font-semibold text-secondary">{t("productDetails.productSpecifications")}</h3>
                  <p className="mt-1 text-sm font-semibold text-secondary/80">
                    {t("productDetails.searchHelp")}
                  </p>
                </div>

                <div className="relative w-full sm:max-w-sm">
                  <label className="sr-only" htmlFor={`spec-search-${resolvedProduct.id}`}>
                    {t("productDetails.searchSpecifications")}
                  </label>
                  <input
                    id={`spec-search-${resolvedProduct.id}`}
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder={t("productDetails.searchSpecsPlaceholder")}
                    className="w-full rounded-xl border border-primary/20 bg-white px-4 py-3 pr-10 text-sm font-semibold text-secondary shadow-sm transition-all duration-300 placeholder:font-semibold placeholder:text-secondary/40 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                  {searchTerm ? (
                    <button
                      type="button"
                      onClick={() => setSearchTerm("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-xs font-semibold text-secondary/60 transition hover:bg-primary/10 hover:text-secondary"
                    >
                      {t("productDetails.clear")}
                    </button>
                  ) : null}
                </div>
              </div>
            </div>

            <div className="p-0">
              <SpecificationTable
                specs={visibleSpecs}
                emptyMessage={
                  deferredSearchTerm
                    ? t("productDetails.noSearchMatch")
                    : t("productDetails.availableOnRequest")
                }
              />
            </div>

            {showMoreToggle && (
              <div className="border-t border-primary/20 p-4">
                <button
                  type="button"
                  onClick={() => setExpanded((prev) => !prev)}
                  className="inline-flex items-center justify-center rounded-full border border-primary/20 bg-[#F5E400] px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:border-[#d4c300] hover:bg-[#d4c300]"
                >
                  {expanded ? t("productDetails.viewLess") : t("productDetails.viewMore")}
                </button>
              </div>
            )}
          </div>
        )}

        {!canShowSpecs && (
          <div className="rounded-2xl border border-primary/20 bg-white p-5 shadow-sm">
            <p className="text-sm font-semibold text-secondary">{t("productDetails.specifications")}</p>
            <p className="mt-2 text-sm leading-6 text-secondary/70">
              {t("productDetails.hiddenForServices")}
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
