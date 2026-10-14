import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout.jsx";
import Home from "./pages/Home.jsx";
import { LanguageProvider } from "./context/LanguageContext.jsx";

const About = lazy(() => import("./pages/About.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));
const Photos = lazy(() => import("./pages/Photos.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const Inquiry = lazy(() => import("./pages/Inquiry.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));

export default function App() {
  return (
    <LanguageProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:categorySlug" element={<Products />} />
          <Route path="/products/:categorySlug/:productSlug" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/photos" element={<Photos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/inquiry" element={<Inquiry />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </LanguageProvider>
  );
}
