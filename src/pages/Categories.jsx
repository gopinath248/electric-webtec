import { catalog } from "../data/catalog.js";

export default function Categories() {
  return (
    <section className="bg-white">
      <div className="container-pad max-w-6xl mx-auto py-14 flex flex-col gap-6 text-secondary">
        <div>
          <h1 className="section-title">Product Categories</h1>
          <p className="section-subtitle">Hover over Categories in the menu to jump to products.</p>
        </div>
        <div className="flex flex-wrap gap-6">
          {catalog.map((item) => (
            <div key={item.category} className="card p-6 w-full md:w-1/2 lg:w-1/3">
              <h2 className="text-lg font-semibold">{item.category}</h2>
              <div className="mt-3 flex flex-col gap-2">
                {item.products.map((product) => (
                  <div key={product.slug} className="text-sm text-slate-600">
                    {product.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
