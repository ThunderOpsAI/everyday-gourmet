import React from "react";
import OrderHistory from "@/components/OrderHistory";
import Link from "next/link";
import { Receipt, ArrowLeft, Phone, Truck, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Order History & 1-Click Reorder | Your Everyday Gourmet Wangaratta",
  description: "View past butcher orders, track delivery and collection details, and 1-click reorder your household meat packs and chef meals.",
};

export default function OrdersPage() {
  return (
    <div className="py-6 space-y-6">
      {/* Top Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-8 border border-stone-800 shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-amber-300">
              <Link href="/menu" className="hover:underline flex items-center gap-1">
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Back to Store Menu</span>
              </Link>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight flex items-center gap-2.5">
              <Receipt className="w-7 h-7 text-amber-400" />
              <span>Past Orders &amp; Receipts</span>
            </h1>
            <p className="text-xs sm:text-sm text-stone-300 mt-1 max-w-xl leading-relaxed">
              Every order you place is stored locally on this device. Quickly reorder regular weekly family packs or review collection time windows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <Link
              href="/track-order"
              className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-amber-300 border border-amber-500/30 text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5"
            >
              <Truck className="w-3.5 h-3.5" />
              <span>Track Live Stages</span>
            </Link>
            <a
              href="tel:0357213444"
              style={{ backgroundColor: "#D71920" }}
              className="px-4 py-2.5 rounded-xl hover:bg-[#b8141a] text-white text-xs font-bold transition-all text-center flex items-center justify-center gap-1.5 shadow"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>(03) 5721 3444</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Order History Section */}
      <OrderHistory />
    </div>
  );
}
