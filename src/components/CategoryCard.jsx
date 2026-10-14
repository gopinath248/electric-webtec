import { Link } from "react-router-dom";

export default function CategoryCard({ category }) {
  return (
    <Link to={`/products?category=${category.slug}`} className="card p-4 hover:shadow-glow transition">
      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary via-primary/80 to-secondary text-secondary flex items-center justify-center font-semibold">
        {category.name.split(" ").map((word) => word[0]).slice(0, 2).join("")}
      </div>
      <h3 className="mt-3 font-semibold text-sm">{category.name}</h3>
      <p className="text-xs text-secondary/60 mt-1">Browse products</p>
    </Link>
  );
}
