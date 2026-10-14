import { useState } from "react";
import api from "../api.js";
import { useLanguage } from "../context/LanguageContext.jsx";

export default function InquiryForm({ productId, productName, onSubmitted }) {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    quantity: "",
    message: ""
  });
  const [status, setStatus] = useState({ type: "", message: "" });

  const update = (key) => (event) => {
    setForm((prev) => ({ ...prev, [key]: event.target.value }));
  };

  const submit = async (event) => {
    event.preventDefault();
    setStatus({ type: "", message: "" });

    try {
      await api.post("/inquiries", {
        ...form,
        productId,
        productName
      });
      setStatus({ type: "success", message: t("inquiry.success") });
      setForm({ name: "", phone: "", email: "", quantity: "", message: "" });
      onSubmitted?.();
    } catch (error) {
      setStatus({ type: "error", message: error.response?.data?.message || t("inquiry.failure") });
    }
  };

  return (
    <form onSubmit={submit} className="card p-6 space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold">{t("inquiry.name")}</label>
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.name} onChange={update("name")} required />
        </div>
        <div>
          <label className="text-sm font-semibold">{t("inquiry.phone")}</label>
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.phone} onChange={update("phone")} required />
        </div>
        <div>
          <label className="text-sm font-semibold">{t("inquiry.email")}</label>
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.email} onChange={update("email")} required />
        </div>
        <div>
          <label className="text-sm font-semibold">{t("inquiry.quantity")}</label>
          <input className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" value={form.quantity} onChange={update("quantity")} />
        </div>
      </div>
      <div>
        <label className="text-sm font-semibold">{t("inquiry.message")}</label>
        <textarea className="mt-1 w-full rounded-xl border border-slate-200 px-3 py-2" rows="4" value={form.message} onChange={update("message")} />
      </div>
      {status.message && (
        <p className={`text-sm ${status.type === "success" ? "text-[#1F6FA5]" : "text-[#d4c300]"}`}>{status.message}</p>
      )}
      <button className="btn-primary w-full" type="submit">{t("inquiry.submit")}</button>
    </form>
  );
}
