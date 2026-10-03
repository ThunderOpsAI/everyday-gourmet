"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function CartToast() {
  const { toastMessage, setIsOpen, items } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
      <div className="bg-[#0C1B33] text-white px-4 py-3 rounded-2xl shadow-2xl border border-amber-500/30 flex items-center gap-3 text-xs max-w-sm">
        <div className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center shrink-0">
          <ShoppingBag className="w-4 h-4 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-white truncate">{toastMessage}</p>
          <p className="text-[11px] text-stone-300">Bag contains {items.length} items</p>
        </div>
        <button
          onClick={() => setIsOpen(true)}
          className="px-2.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg shrink-0 flex items-center gap-1 transition-colors"
        >
          <span>View</span>
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
