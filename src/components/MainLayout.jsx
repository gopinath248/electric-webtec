import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

function MainContentFallback() {
  return (
    <div className="container-pad max-w-7xl mx-auto py-10">
      <div className="animate-pulse space-y-6">
        <div className="h-8 w-56 rounded-full bg-slate-200"></div>
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,0.85fr)]">
          <div className="space-y-4">
            <div className="h-14 w-full max-w-2xl rounded-2xl bg-slate-200"></div>
            <div className="h-5 w-full rounded-full bg-slate-100"></div>
            <div className="h-5 w-11/12 rounded-full bg-slate-100"></div>
            <div className="h-5 w-4/5 rounded-full bg-slate-100"></div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="h-40 rounded-2xl bg-slate-100 sm:h-48"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-white text-secondary">
        <Suspense fallback={<MainContentFallback />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
