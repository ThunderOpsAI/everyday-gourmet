import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import ProductCatalog from "@/components/ProductCatalog";
import Link from "next/link";
import { Sparkles, UtensilsCrossed, Clock, CheckCircle2, Phone } from "lucide-react";

export const metadata = {
  title: "Family Pies & Ready-to-Bake Meals | Your Everyday Gourmet Wangaratta",
  description: "Scratch-made family pies with flaky puff pastry ($12 each or 2 for $18), rich beef lasagna, and shepherd's pies made fresh in our chef kitchen.",
};

export default function HeatEatPage() {
  return (
    <div className="py-6 space-y-8">
      {/* Top Banner with Promo Callout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Chef Kitchen &amp; Artisan Bakery
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Family Pies &amp; Ready-to-Bake Meals
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Real scratch-made food prepared by chefs at 25 Rowan Street, Wangaratta. Flaky golden puff pastry, slow-braised Victorian meats, and rich béchamel. Pop straight into your oven for effortless gourmet dinners.
            </p>
          </div>

          {/* Promotion Card */}
          <div className="bg-gradient-to-br from-amber-500/20 to-red-500/10 border border-amber-500/40 p-5 rounded-2xl text-xs text-amber-200 shrink-0 space-y-1.5 shadow-md">
            <div className="flex items-center gap-2">
              <span className="text-xl">🥧</span>
              <strong className="text-white text-sm font-black">Family Pie Multi-Buy Special</strong>
            </div>
            <p className="text-stone-200">
              $12.00 each or grab any <strong className="text-amber-300">2 for $18.00!</strong>
            </p>
            <p className="text-[11px] text-stone-400">Mix &amp; match any beef, chicken, or lamb variety.</p>
          </div>
        </div>
      </section>

      {/* Unified Product Catalog pre-filtered to Pies & Prepared Meals */}
      <ProductCatalog
        initialCategory="pies-meals"
        title="Family Pies &amp; Chef Trays"
        subtitle="Scratch-made family pies with flaky golden puff pastry and oven-ready family dinner trays."
      />

      {/* Chef Reheating & Oven Tips */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <ScrollReveal>
          <div className="bg-white rounded-3xl p-8 border border-stone-200 shadow-sm grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg shrink-0">
                🔥
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Simple Oven Baking</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Bake pies from chilled at 180°C for 25–30 mins until the pastry is crisp and internal gravy is piping hot.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold text-lg shrink-0">
                ❄️
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Freezer Friendly</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  All pies and meal trays freeze exceptionally well up to 3 months. Thaw overnight in fridge before baking.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold text-lg shrink-0">
                📞
              </div>
              <div>
                <h4 className="font-bold text-stone-900 text-sm mb-1">Need Catering or Trays?</h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Need large catering trays for events or sports club nights? Call Dan &amp; Brodie on <a href="tel:0357213444" className="font-bold text-stone-900 underline">(03) 5721 3444</a>.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
