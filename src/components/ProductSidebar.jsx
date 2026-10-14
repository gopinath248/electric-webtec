import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProductSidebar({ categories, activeCategory, onCategorySelect }) {
  const { t, getCategoryText, getProductContent } = useLanguage();
  const [openCategory, setOpenCategory] = useState(activeCategory);

  useEffect(() => {
    setOpenCategory(activeCategory);
  }, [activeCategory]);

  const toggle = (slug) => {
    setOpenCategory((prev) => (prev === slug ? "" : slug));
  };

  return (
    <aside className="flex w-full flex-col gap-4 lg:gap-6">
      <div className="card p-5">
        <h2 className="text-base font-semibold text-secondary">{t("productsPage.categories")}</h2>
      </div>

      <div className="card p-5">
        <div className="flex flex-col divide-y divide-primary/15">
          {categories.map((category) => {
            const isOpen = openCategory === category.slug;
            return (
              <div key={category.slug} className="py-4 first:pt-0 last:pb-0">
                <button
                  type="button"
                  onClick={() => {
                    toggle(category.slug);
                    onCategorySelect(category.slug);
                  }}
                  className="flex w-full items-start justify-between gap-4 text-left text-sm font-semibold leading-6 text-[#1F6FA5] transition-colors duration-300 hover:text-[#175a86]"
                >
                  <span className="min-w-0">{getCategoryText(category)}</span>
                  <span
                    className={`mt-1 shrink-0 text-xs ${isOpen ? "text-[#1F6FA5]" : "text-[#1F6FA5]/40"}`}
                  >
                    {isOpen ? "-" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="mt-3 flex flex-col gap-2.5 pl-3">
                    {category.products.map((product) => (
                      <NavLink
                        key={product.slug}
                        to={`/products/${category.slug}/${product.slug}`}
                        className="text-sm leading-6 text-[#1F6FA5] transition-colors duration-300 hover:text-[#175a86]"
                      >
                        {getProductContent(product).name}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
