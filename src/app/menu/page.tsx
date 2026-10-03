import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { ProductCatalog } from "@/components/ProductCatalog";
import Link from "next/link";
import { Truck, Phone, Package, Award, ArrowRight } from "lucide-react";

export const metadata = {
  title: "Online Butcher Menu & Cuts | Your Everyday Gourmet Wangaratta",
  description: "Browse 100+ real Victorian craft butcher cuts, AMIC Gold medal sausages, free-range chicken, family pies, and ready-to-bake meals. Order for pickup or refrigerated delivery.",
};

export default function MenuPage() {
  return (
    <div className="py-8 space-y-8">
      {/* Top Banner with Quick Links */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-10 border border-stone-800 shadow-xl flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="max-w-2xl">
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Complete Butcher &amp; Kitchen Inventory
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
              Full Store Menu &amp; Fresh Cuts
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-2 leading-relaxed">
              Every item is weighed and packed fresh at 25 Rowan Street, Wangaratta. Select portions, add custom butcher trim notes, and choose between store pickup or refrigerated regional delivery.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/track-order"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Track Existing Order</span>
            </Link>
            <a
              href="tel:0357213444"
              style={{ backgroundColor: "#D71920" }}
              className="px-4 py-2.5 rounded-xl hover:bg-[#b8141a] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5 text-white" />
              <span>Call (03) 5721 3444</span>
            </a>
          </div>
        </div>
      </section>

      {/* Full Interactive Product Catalog (Filterable by all 9 categories) */}
      <ProductCatalog />
    </div>
  );
}
