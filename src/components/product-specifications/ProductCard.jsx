import { useState } from "react";
import { Link } from "react-router-dom";
import productSpecifications from "../../data/productSpecifications.json";
import { EmailLink, PhoneContactList } from "../ContactLinks.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";
import { buildProductSpecRecord, findProductSpecOverride, normalizeSpecRows } from "./specUtils.js";

const FALLBACK_DESCRIPTION = "Reliable industrial control panel solution.";

function getCardDescription(description) {
  if (Array.isArray(description)) {
    return description
      .map((entry) => (typeof entry === "string" ? entry.trim() : ""))
      .filter(Boolean)
      .join(" ");
  }

  return typeof description === "string" ? description.trim() : "";
}

function getCategoryBadge(product, categoryLabel) {
  if (categoryLabel) {
    return categoryLabel;
  }

  if (product?.category === "service") {
    return "Service";
  }

  if (product?.category === "product") {
    return "Product";
  }

  return product?.categoryLabel || product?.categoryName || "Product";
}

export default function ProductCard({
  product,
  detailHref,
  categoryLabel,
  className = ""
}) {
  const { t, getProductContent, getSpecLabel } = useLanguage();
  const specOverride = findProductSpecOverride(productSpecifications, product);
  const resolvedProduct = buildProductSpecRecord(product, specOverride ?? {});
  const [showContact, setShowContact] = useState(false);
  const previewSpecs = normalizeSpecRows(product?.specs ?? product?.specifications).slice(0, 2);
  const image = resolvedProduct.images?.[0] || product?.image || "/images/pic texro/product-jpeg-500x500.webp";
  const showCTA = resolvedProduct.conditions?.showContactCTA !== false;
  const badgeLabel = getCategoryBadge(resolvedProduct, categoryLabel);
  const translatedProduct = getProductContent(resolvedProduct);
  const cardDescription = getCardDescription(translatedProduct.description) || FALLBACK_DESCRIPTION;

  return (
    <article
      className={`group flex h-full w-full flex-col overflow-hidden rounded-xl border border-primary/20 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:bg-primary/5 ${className}`}
    >
      <div className="aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={image}
          alt={resolvedProduct.name}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="flex items-center justify-between gap-3">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-secondary">
            {badgeLabel}
          </span>
        </div>

        <div className="flex-1">
          <h3 className="text-sm font-semibold text-secondary line-clamp-2">
            {translatedProduct.name}
          </h3>
          <p className="mt-2 text-sm text-secondary/70 line-clamp-2">
            {cardDescription}
          </p>
        </div>

        {previewSpecs.length > 0 && resolvedProduct.category !== "service" && (
          <div className="flex flex-wrap gap-2">
            {previewSpecs.map((spec) => (
              <span
                key={`${spec.label}-${spec.value}`}
                className="rounded-full border border-primary/20 bg-white px-2.5 py-1 text-[11px] font-medium text-secondary/70"
              >
                {getSpecLabel(spec.label)}: {spec.value}
              </span>
            ))}
          </div>
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
          </div>
        )}

        <div className="mt-auto flex flex-wrap gap-2 pt-2">
          {detailHref ? (
            <Link
              to={detailHref}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#F5E400] px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-[#d4c300]"
            >
              {t("common.viewDetails")}
            </Link>
          ) : null}
          {showCTA && (
            <button
              type="button"
              onClick={() => setShowContact((prev) => !prev)}
              className="inline-flex min-h-10 items-center justify-center rounded-full bg-[#1F6FA5] px-4 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#175a86]"
            >
              {showContact ? t("common.hideContactUs") : t("common.askPrice")}
            </button>
          )}
        </div>
      </div>
    </article>
  );
}
