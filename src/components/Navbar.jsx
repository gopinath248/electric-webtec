import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { phoneContacts } from "./ContactLinks.jsx";
import { catalog } from "../data/catalog.js";
import { useLanguage } from "../context/LanguageContext.jsx";

const navItemClass = ({ isActive }) =>
  `inline-flex shrink-0 items-center whitespace-nowrap text-sm font-semibold leading-none transition-colors ${isActive ? "text-[#175a86]" : "text-[#1F6FA5] hover:text-[#175a86]"}`;

export default function Navbar() {
  const { language, toggleLanguage, t, getCategoryText, getProductContent } = useLanguage();
  const isTamil = language === "ta";
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [language]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-primary/20 shadow-card">
      <div className="container-pad max-w-7xl mx-auto flex flex-wrap items-start justify-between gap-x-3 gap-y-3 py-3 sm:py-4 lg:flex-nowrap lg:items-center">
        <div className="flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
          <img
            src="/images/logo/1534f502-31b6-43cd-9f0e-a4777b72ff99%20(1).png"
            alt="Texro Automation logo"
            decoding="async"
            fetchPriority="high"
            className="h-10 w-16 object-contain sm:h-12 sm:w-20"
          />
          <div className="min-w-0">
            <p className="text-base font-semibold text-secondary sm:text-lg">Texro Automation</p>
            <p className="max-w-[12rem] text-[11px] leading-4 text-secondary/70 sm:max-w-[18rem] sm:text-xs lg:max-w-none lg:whitespace-nowrap">{t("nav.tagline")}</p>
          </div>
        </div>

        <nav
          className={`hidden lg:flex min-w-0 whitespace-nowrap ${
            isTamil
              ? "order-3 basis-full flex-wrap items-center justify-center gap-x-6 gap-y-3 pt-1 whitespace-normal"
              : "items-center gap-6"
          }`}
        >
          <NavLink to="/" className={navItemClass}>{t("nav.home")}</NavLink>
          <div className="relative group">
            <NavLink to="/products" className={navItemClass}>{t("nav.products")}</NavLink>
            <div className="absolute left-0 top-full mt-3 w-[860px] rounded-2xl border border-primary/20 bg-white shadow-glow p-6 opacity-0 pointer-events-none transform translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 ease-out">
              <div className="h-1 w-24 rounded-full bg-gradient-to-r from-primary via-primary/80 to-secondary"></div>
              <div className="flex flex-wrap gap-6">
                {catalog.map((item) => (
                  <div key={item.category} className="flex flex-col gap-2 w-56">
                    <p className="text-sm font-semibold text-secondary">{getCategoryText(item)}</p>
                    <div className="flex flex-col gap-1">
                      {item.products.map((product) => (
                        <NavLink
                          key={product.slug}
                          to={`/products/${item.slug}/${product.slug}`}
                          className="text-xs text-[#1F6FA5] hover:text-[#175a86]"
                        >
                          {getProductContent(product).name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <NavLink to="/products" className="btn-outline">{t("nav.viewAllCategories")}</NavLink>
              </div>
            </div>
          </div>
          <NavLink to="/about" className={navItemClass}>{t("nav.about")}</NavLink>
          <NavLink to="/photos" className={navItemClass}>{t("nav.photos")}</NavLink>
          <NavLink to="/contact" className={navItemClass}>{t("nav.contact")}</NavLink>
        </nav>

        <div className="flex w-full items-center justify-between gap-2 sm:gap-3 lg:w-auto lg:shrink-0 lg:justify-end">
          <button
            type="button"
            onClick={toggleLanguage}
            className="inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap rounded-full border border-primary/20 bg-[#1F6FA5] px-3 py-2 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#175a86] hover:shadow-sm sm:px-4 sm:text-sm"
          >
            {t("meta.toggleLabel")}
          </button>
          {phoneContacts.map((contact) => (
            <a
              key={contact.number}
              href={`tel:${contact.number}`}
              className={`btn-primary hidden lg:inline-flex min-h-10 shrink-0 items-center justify-center whitespace-nowrap leading-none tabular-nums ${
                isTamil ? "min-w-[8.5rem] px-2.5 text-[0.84rem] tracking-tight" : "px-4 text-sm"
              }`}
            >
              {contact.label}
            </a>
          ))}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-expanded={isMobileMenuOpen}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white text-secondary transition hover:border-primary/40 hover:bg-slate-50 lg:hidden"
          >
            <span className="text-lg leading-none">{isMobileMenuOpen ? "×" : "☰"}</span>
          </button>
        </div>
      </div>
      {isMobileMenuOpen ? (
        <div className="border-t border-primary/10 bg-white/95 lg:hidden">
          <div className="container-pad mx-auto flex max-w-7xl flex-col gap-3 py-4">
            <NavLink to="/" onClick={closeMobileMenu} className={({ isActive }) => `${navItemClass({ isActive })} w-full rounded-2xl border border-primary/10 px-4 py-3`}>
              {t("nav.home")}
            </NavLink>
            <NavLink to="/products" onClick={closeMobileMenu} className={({ isActive }) => `${navItemClass({ isActive })} w-full rounded-2xl border border-primary/10 px-4 py-3`}>
              {t("nav.products")}
            </NavLink>
            <div className="rounded-2xl border border-primary/10 p-4">
              <p className="text-sm font-semibold text-secondary">{t("nav.viewAllCategories")}</p>
              <div className="mt-3 grid gap-2">
                {catalog.map((item) => (
                  <NavLink
                    key={item.category}
                    to={`/products/${item.slug}`}
                    onClick={closeMobileMenu}
                    className="text-sm text-[#1F6FA5] transition-colors hover:text-[#175a86]"
                  >
                    {getCategoryText(item)}
                  </NavLink>
                ))}
              </div>
            </div>
            <NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => `${navItemClass({ isActive })} w-full rounded-2xl border border-primary/10 px-4 py-3`}>
              {t("nav.about")}
            </NavLink>
            <NavLink to="/photos" onClick={closeMobileMenu} className={({ isActive }) => `${navItemClass({ isActive })} w-full rounded-2xl border border-primary/10 px-4 py-3`}>
              {t("nav.photos")}
            </NavLink>
            <NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => `${navItemClass({ isActive })} w-full rounded-2xl border border-primary/10 px-4 py-3`}>
              {t("nav.contact")}
            </NavLink>
            <div className="grid gap-2 sm:grid-cols-2">
              {phoneContacts.map((contact) => (
                <a
                  key={contact.number}
                  href={`tel:${contact.number}`}
                  className="btn-primary w-full justify-center text-sm"
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
