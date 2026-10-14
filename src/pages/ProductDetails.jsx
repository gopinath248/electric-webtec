import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { catalog } from "../data/catalog.js";
import productSpecifications from "../data/productSpecifications.json";
import {
  buildProductSpecRecord,
  findProductSpecOverride,
  ProductDetails as ProductDetailsModule
} from "../components/product-specifications/index.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function ProductDetails() {
  const { t, getCategoryText } = useLanguage();
  const { categorySlug, productSlug } = useParams();

  const category = useMemo(
    () => catalog.find((item) => item.slug === categorySlug) || null,
    [categorySlug]
  );

  const product = useMemo(() => {
    if (!category) {
      return null;
    }

    return category.products.find((item) => item.slug === productSlug) || null;
  }, [category, productSlug]);

  const specProduct = useMemo(() => {
    if (!product) {
      return null;
    }

    const override = findProductSpecOverride(productSpecifications, product);
    return buildProductSpecRecord(
      {
        ...product,
        category: "product",
        categoryLabel: getCategoryText(category),
        categorySlug: category?.slug ?? ""
      },
      override ?? {}
    );
  }, [category, getCategoryText, product]);

  if (!category || !product || !specProduct) {
    return (
      <section className="bg-white">
        <div className="container-pad max-w-5xl mx-auto py-14">
          <p className="text-secondary/70">{t("productDetails.notFound")}</p>
          <Link to="/products" className="text-[#1F6FA5] text-sm font-semibold hover:text-[#175a86]">
            {t("common.backToProducts")}
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="container-pad max-w-7xl mx-auto py-10 flex flex-col gap-6 text-secondary">
        <Link
          to="/products"
          className="inline-flex w-fit items-center gap-2 rounded-full bg-[#F5E400] px-4 py-2 text-sm font-semibold text-black transition-all duration-300 hover:bg-[#d4c300]"
        >
          {t("common.backToProducts")}
        </Link>

        <ProductDetailsModule
          product={specProduct}
          contactHref="/contact"
        />
      </div>
    </section>
  );
}
