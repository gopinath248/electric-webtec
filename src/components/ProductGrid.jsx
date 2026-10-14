import ProductCard from "./ProductCard.jsx";

export default function ProductGrid({ categorySlug, categoryName, products }) {
  return (
    <div className="flex flex-col gap-6">
      <div className="grid grid-cols-1 items-stretch gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {products.map((product) => (
          <ProductCard
            key={product.slug}
            product={product}
            categoryLabel={categoryName}
            detailHref={`/products/${categorySlug}/${product.slug}`}
          />
        ))}
      </div>
    </div>
  );
}
