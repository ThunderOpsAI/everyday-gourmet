import ScrollReveal from "@/components/ScrollReveal";
import Link from "next/link";
import { Truck, MapPin, Phone, Clock, Heart, ShieldCheck, CheckCircle2 } from "lucide-react";

const DELIVERY_TOWNS = [
  { name: "Wangaratta", schedule: "Daily Local Delivery", fee: "FREE over $100" },
  { name: "Yarrawonga", schedule: "Every Friday Morning Run", fee: "Dedicated cold-chain van" },
  { name: "Mulwala", schedule: "Every Friday Morning Run", fee: "Dedicated cold-chain van" },
  { name: "Benalla", schedule: "Scheduled Weekly Runs", fee: "Cold-chain compliant" },
  { name: "Glenrowan", schedule: "Scheduled Weekly Runs", fee: "Direct to door" },
  { name: "Oxley & Milawa", schedule: "Local King Valley Runs", fee: "Direct to door" },
  { name: "Moyhu", schedule: "Local King Valley Runs", fee: "Direct to door" },
  { name: "Beechworth", schedule: "Scheduled Weekly Runs", fee: "Refrigerated van" },
  { name: "Chiltern", schedule: "Scheduled Weekly Runs", fee: "Refrigerated van" },
];

export default function DeliveryPage() {
  return (
    <div className="py-12">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Story & Community */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 sm:p-10 border border-stone-200/90 shadow-sm space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Our Story · Est. 2018
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight">
                Grounded in Wangaratta Craftsmanship &amp; Community Care
              </h1>
              <p className="text-sm text-stone-600 leading-relaxed">
                Founded by Dan &amp; Brodie Wallace in 2018, Your Everyday Gourmet was born with a single mission: to unite traditional whole-carcass craft butchery with restaurant-standard kitchen preparation. Rather than settling for supermarket pre-packs, Dan and his team cut fresh daily from whole grass-fed Victorian carcases.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Beyond the butcher block, Everyday Gourmet is proud to support our local community. We are active supply partners with the <strong>Wangaratta Carevan</strong>, ensuring disadvantaged locals receive nourishing meals, and we partner with <strong>The Personnel Group</strong> to provide inclusive employment pathways.
              </p>

              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-700">
                <div className="flex items-center gap-1.5 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>100% Australian Carcase Meats</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Independent Family Owned</span>
                </div>
                <div className="flex items-center gap-1.5 text-stone-800">
                  <Heart className="w-4 h-4 text-red-600" />
                  <span>Wangaratta Carevan Donor</span>
                </div>
              </div>

              {/* Retail Location Box */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200 space-y-2 text-xs">
                <h3 className="font-bold text-stone-900 text-sm flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span>Visit Our Retail Butcher Shop:</span>
                </h3>
                <p className="text-stone-600">
                  25 Rowan Street, Wangaratta VIC 3677
                </p>
                <div className="flex items-center gap-4 pt-1 font-semibold text-stone-700">
                  <span>🏪 Thu – Sat: 6:00am – 6:00pm (Retail)</span>
                  <span>🔪 Mon – Wed: Prep &amp; Wholesale</span>
                </div>
              </div>
            </div>

            {/* Delivery Map & Van Info */}
            <div className="lg:col-span-5 bg-[#0C1B33] text-white rounded-3xl p-8 border border-stone-800 shadow-xl space-y-5">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <Truck className="w-4 h-4" />
                <span>150km Refrigerated Radius</span>
              </div>
              <h2 className="text-2xl font-black text-white">
                Refrigerated Van Delivery
              </h2>
              <p className="text-xs text-stone-300 leading-relaxed">
                We operate two dedicated temperature-controlled refrigerated delivery vans maintaining strict cold-chain compliance right to your doorstep.
              </p>

              {/* Serviced Towns */}
              <div className="bg-stone-950/80 p-4 rounded-2xl border border-stone-800 space-y-2">
                <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400">
                  Serviced Towns &amp; Regions:
                </h3>
                <div className="space-y-1.5 text-xs text-stone-300">
                  {DELIVERY_TOWNS.map((town, idx) => (
                    <div key={idx} className="flex items-center justify-between py-1 border-b border-stone-800/60 last:border-none">
                      <span className="font-semibold text-white">{town.name}</span>
                      <span className="text-[11px] text-amber-300">{town.schedule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Friday Run Special Notice */}
              <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-200 space-y-1">
                <p className="font-bold text-white flex items-center gap-1.5">
                  <span>⭐ Weekly Friday Dedicated Run:</span>
                </p>
                <p className="text-[11px] text-stone-300">
                  Morning delivery run to Yarrawonga &amp; Mulwala. Order by Thursday 2:00 PM for guaranteed Friday delivery in our refrigerated vans.
                </p>
              </div>

              <div className="pt-2 space-y-2">
                <a
                  href="tel:0357213444"
                  style={{ backgroundColor: "#D71920" }}
                  className="w-full py-3 hover:bg-[#b8141a] text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>Call to Book Delivery: (03) 5721 3444</span>
                </a>
                <Link
                  href="/#store-catalog"
                  className="w-full py-2.5 text-center text-xs text-stone-300 hover:text-white block border border-stone-700 rounded-xl"
                >
                  Or Order Online Now →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
