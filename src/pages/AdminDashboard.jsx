import { useEffect, useState } from "react";
import api, { setAuthToken } from "../api.js";

export default function AdminDashboard() {
  const [tab, setTab] = useState("products");
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [inquiries, setInquiries] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [categoryForm, setCategoryForm] = useState({ name: "", description: "" });
  const [productForm, setProductForm] = useState({
    name: "",
    category: "",
    price: "Get Best Price",
    description: "",
    application: "",
    specifications: {
      voltage: "",
      current: "",
      frequency: "",
      mountingType: "",
      material: "",
      powerRating: ""
    },
    imageUrl: ""
  });
  const [file, setFile] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("texro_token");
    setAuthToken(token);

    api.get("/categories").then((res) => setCategories(res.data)).catch(() => {});
    api.get("/products?limit=50").then((res) => setProducts(res.data.items)).catch(() => {});
    api.get("/inquiries").then((res) => setInquiries(res.data)).catch(() => {});
  }, []);

  const refreshProducts = async () => {
    const res = await api.get("/products?limit=50");
    setProducts(res.data.items);
  };

  const createCategory = async (event) => {
    event.preventDefault();
    const res = await api.post("/categories", categoryForm);
    setCategories((prev) => [...prev, res.data]);
    setCategoryForm({ name: "", description: "" });
  };

  const uploadImage = async () => {
    if (!file) return productForm.imageUrl;
    const formData = new FormData();
    formData.append("image", file);
    const res = await api.post("/uploads", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return res.data.url;
  };

  const saveProduct = async (event) => {
    event.preventDefault();
    const image = await uploadImage();
    const payload = {
      name: productForm.name,
      category: productForm.category,
      price: productForm.price,
      description: productForm.description,
      application: productForm.application,
      specifications: productForm.specifications,
      images: image ? [image] : []
    };

    if (editingId) {
      await api.put(`/products/${editingId}`, payload);
      setEditingId(null);
    } else {
      await api.post("/products", payload);
    }

    setProductForm({
      name: "",
      category: "",
      price: "Get Best Price",
      description: "",
      application: "",
      specifications: {
        voltage: "",
        current: "",
        frequency: "",
        mountingType: "",
        material: "",
        powerRating: ""
      },
      imageUrl: ""
    });
    setFile(null);
    await refreshProducts();
  };

  const editProduct = (product) => {
    setEditingId(product._id);
    setProductForm({
      name: product.name,
      category: product.category?._id || "",
      price: product.price,
      description: product.description,
      application: product.application,
      specifications: product.specifications || {},
      imageUrl: product.images?.[0] || ""
    });
  };

  const deleteProduct = async (id) => {
    await api.delete(`/products/${id}`);
    await refreshProducts();
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="container-pad max-w-6xl mx-auto py-10">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
            <p className="text-sm text-slate-500">Manage Texro catalogue and inquiries.</p>
          </div>
          <button
            className="btn-outline"
            onClick={() => {
              localStorage.removeItem("texro_token");
              window.location.href = "/login";
            }}
          >
            Logout
          </button>
        </div>

        <div className="mt-6 flex gap-3">
          {[
            { id: "products", label: "Products" },
            { id: "categories", label: "Categories" },
            { id: "inquiries", label: "Inquiries" }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setTab(item.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold ${tab === item.id ? "bg-[#1F6FA5] text-white" : "bg-[#F5E400] text-black border border-gray-200"}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        {tab === "categories" && (
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.5fr]">
            <form className="card p-6 space-y-4" onSubmit={createCategory}>
              <h2 className="text-lg font-semibold">Add Category</h2>
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Category name"
                value={categoryForm.name}
                onChange={(event) => setCategoryForm((prev) => ({ ...prev, name: event.target.value }))}
                required
              />
              <textarea
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Description"
                value={categoryForm.description}
                onChange={(event) => setCategoryForm((prev) => ({ ...prev, description: event.target.value }))}
              />
              <button className="btn-primary w-full" type="submit">Save Category</button>
            </form>
            <div className="card p-6">
              <h2 className="text-lg font-semibold">Existing Categories</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {categories.map((cat) => (
                  <li key={cat._id} className="flex items-center justify-between border-b border-slate-100 pb-2">
                    <span>{cat.name}</span>
                    <span className="text-xs text-slate-400">{cat.slug}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {tab === "products" && (
          <div className="mt-8 grid gap-6 md:grid-cols-[1fr_1.6fr]">
            <form className="card p-6 space-y-4" onSubmit={saveProduct}>
              <h2 className="text-lg font-semibold">{editingId ? "Edit Product" : "Add Product"}</h2>
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Product name"
                value={productForm.name}
                onChange={(event) => setProductForm((prev) => ({ ...prev, name: event.target.value }))}
                required
              />
              <select
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                value={productForm.category}
                onChange={(event) => setProductForm((prev) => ({ ...prev, category: event.target.value }))}
                required
              >
                <option value="">Select category</option>
                {categories.map((cat) => (
                  <option key={cat._id} value={cat._id}>{cat.name}</option>
                ))}
              </select>
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Price"
                value={productForm.price}
                onChange={(event) => setProductForm((prev) => ({ ...prev, price: event.target.value }))}
              />
              <textarea
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Description"
                value={productForm.description}
                onChange={(event) => setProductForm((prev) => ({ ...prev, description: event.target.value }))}
              />
              <textarea
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Application"
                value={productForm.application}
                onChange={(event) => setProductForm((prev) => ({ ...prev, application: event.target.value }))}
              />
              <div className="grid gap-3 md:grid-cols-2">
                {Object.keys(productForm.specifications).map((key) => (
                  <input
                    key={key}
                    className="w-full rounded-xl border border-slate-200 px-3 py-2"
                    placeholder={key}
                    value={productForm.specifications[key] || ""}
                    onChange={(event) =>
                      setProductForm((prev) => ({
                        ...prev,
                        specifications: { ...prev.specifications, [key]: event.target.value }
                      }))
                    }
                  />
                ))}
              </div>
              <input
                className="w-full rounded-xl border border-slate-200 px-3 py-2"
                placeholder="Image URL"
                value={productForm.imageUrl}
                onChange={(event) => setProductForm((prev) => ({ ...prev, imageUrl: event.target.value }))}
              />
              <input type="file" onChange={(event) => setFile(event.target.files?.[0] || null)} />
              <button className="btn-primary w-full" type="submit">{editingId ? "Update" : "Save"}</button>
            </form>
            <div className="card p-6">
              <h2 className="text-lg font-semibold">Products</h2>
              <div className="mt-4 space-y-4">
                {products.map((product) => (
                  <div key={product._id} className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div>
                      <p className="font-semibold">{product.name}</p>
                      <p className="text-xs text-slate-500">{product.category?.name}</p>
                    </div>
                    <div className="flex gap-2">
                      <button className="btn-outline text-xs" onClick={() => editProduct(product)}>Edit</button>
                      <button className="btn-primary text-xs" onClick={() => deleteProduct(product._id)}>Delete</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "inquiries" && (
          <div className="mt-8 card p-6">
            <h2 className="text-lg font-semibold">Customer Inquiries</h2>
            <div className="mt-4 space-y-4">
              {inquiries.map((inquiry) => (
                <div key={inquiry._id} className="border-b border-slate-100 pb-3">
                  <p className="font-semibold">{inquiry.name} - {inquiry.phone}</p>
                  <p className="text-sm text-slate-500">{inquiry.email}</p>
                  <p className="text-sm text-slate-600 mt-1">Product: {inquiry.product?.name || inquiry.productName || "General"}</p>
                  <p className="text-sm text-slate-600">Quantity: {inquiry.quantity || "N/A"}</p>
                  <p className="text-sm text-slate-500 mt-1">{inquiry.message}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
