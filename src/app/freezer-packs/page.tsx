import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCatalog from "@/components/ProductCatalog";
import Link from "next/link";
import { Truck, ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "Bulk Freezer Packs & Meat Bundles | Your Everyday Gourmet",
  description: "Stock your freezer with vacuum-sealed, inflation-busting butcher packs. Super Savors, Millsy's Mega, BBQ packs, and Freezer Filler bundles in Wangaratta.",
};

export default function FreezerPacksPage() {
  return (
    <div className="py-6 space-y-8">
      {/* Top Banner with Delivery Notice */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Bulk Value &amp; Freezer Savings
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Freezer Packs &amp; Meat Bundles
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Freshly sliced from 100% grass-fed Victorian carcases, packed to order, and vacuum-sealed for weeks of fresh preservation. Add directly to your cart or customize.
            </p>
          </div>

          <div className="bg-white/10 px-5 py-3.5 rounded-2xl border border-white/15 text-xs sm:text-sm shrink-0 shadow-sm space-y-1 text-center md:text-left">
            <div className="font-bold text-amber-300 flex items-center justify-center md:justify-start gap-1.5">
              <Truck className="w-4 h-4 text-amber-400" />
              <span>Free Delivery Over $100</span>
            </div>
            <p className="text-stone-300 text-xs">Refrigerated van run to Wangaratta, Yarrawonga &amp; NE Victoria</p>
          </div>
        </div>
      </section>

      {/* Unified Product Catalog pre-filtered to Freezer Packs */}
      <ProductCatalog
        initialCategory="packs"
        title="Browse All Value Packs & Bundles"
        subtitle="Generous multi-meal bundles portioned and cryovac-sealed for your fridge or freezer."
      />

      {/* Custom Meat Box Callout Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ScrollReveal>
          <div className="bg-gradient-to-r from-[#0C1B33] via-[#14284b] to-[#0C1B33] text-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 inline-block">
                Tailored Craft Butchery
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Want a Tailored Custom Meat Box?
              </h3>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed">
                Have specific dietary requirements, bulk whole beef rumps, briskets for your pellet smoker, or a big camping weekend? Dan &amp; Brodie can build and cryovac any combination to your exact specifications.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 text-xs text-stone-300">
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Custom thickness &amp; weight portioning
                </span>
                <span className="flex items-center gap-1.5 text-amber-300 font-semibold">
                  <CheckCircle2 className="w-4 h-4" /> Cryovac vacuum packaging
                </span>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto">
              <Link
                href="/custom-cuts"
                className="px-6 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all text-center flex items-center justify-center gap-2"
              >
                <span>Interactive Cut Builder</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:0357213444"
                className="px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-xs rounded-xl border border-white/20 transition-all text-center"
              >
                Call Butcher: (03) 5721 3444
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
