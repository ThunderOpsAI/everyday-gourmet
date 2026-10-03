import React from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { OrderStatusTracker } from "@/components/OrderStatusTracker";
import { Truck, ShieldCheck, Clock, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function TrackOrderPage() {
  return (
    <div className="py-12">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 pb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Customer Care &amp; Logistics
              </span>
              <h1 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
                Track Your Everyday Gourmet Order
              </h1>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
                Check the live stage of your meat pack, custom cut order, or refrigerated delivery run in Wangaratta and across North East Victoria.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <Link
                href="/menu"
                className="px-4 py-2.5 bg-stone-900 hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                ← Back to Menu Catalog
              </Link>
            </div>
          </div>

          {/* Visual Order Status Tracker */}
          <OrderStatusTracker />

          {/* Operational FAQ & Cold Chain Guarantees */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <Truck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Cold-Chain Van Fleet</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Our refrigerated vans maintain a strict 0°C–4°C temperature envelope so your meats arrive butcher-shop fresh.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Cut Daily to Order</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We do not pick old pre-packs off shelves. Every steak is sliced and packed on the morning of delivery or collection.
              </p>
            </div>

            <div className="p-6 bg-white rounded-3xl border border-stone-200 shadow-sm space-y-2">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-stone-900 text-sm">Direct Butcher Support</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Questions or last-minute additions? Dan &amp; Brodie Wallace are available on (03) 5721 3444 during shop hours.
              </p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
