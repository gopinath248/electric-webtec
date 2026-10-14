import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { catalog, defaultCategorySlug } from "../data/catalog.js";
import ProductSidebar from "../components/ProductSidebar.jsx";
import ProductGrid from "../components/ProductGrid.jsx";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function Products() {
  const { t, formatMessage, getCategoryText } = useLanguage();
  const navigate = useNavigate();
  const { categorySlug } = useParams();

  const activeSlug = categorySlug || defaultCategorySlug;

  const activeCategory = useMemo(
    () => catalog.find((item) => item.slug === activeSlug) || catalog[0],
    [activeSlug]
  );

  return (
    <section className="bg-white">
      <div className="container-pad max-w-7xl mx-auto py-10 flex flex-col gap-8 text-secondary">
        <div>
          <h1 className="section-title">{t("productsPage.title")}</h1>
          <p className="section-subtitle">{t("productsPage.subtitle")}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[280px_minmax(0,1fr)]">
          <ProductSidebar
            categories={catalog}
            activeCategory={activeSlug}
            onCategorySelect={(slug) => navigate(`/products/${slug}`)}
          />
          <div className="flex-1 flex flex-col gap-6">
            <div className="card p-5 sm:p-6">
              <div>
                <h2 className="text-xl font-semibold">{getCategoryText(activeCategory)}</h2>
                <p className="text-sm text-slate-600 mt-1">
                  {formatMessage(t("productsPage.productsAvailable"), { count: activeCategory.products.length })}
                </p>
              </div>
            </div>

            <ProductGrid
              categorySlug={activeCategory.slug}
              categoryName={getCategoryText(activeCategory)}
              products={activeCategory.products}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
