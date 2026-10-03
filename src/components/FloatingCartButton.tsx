"use client";

import React from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, ArrowRight } from "lucide-react";

export function FloatingCartButton() {
  const { itemsCount, totalEstimated, isOpen, setIsOpen } = useCart();

  if (isOpen || itemsCount === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <button
        onClick={() => setIsOpen(true)}
        className="group flex items-center gap-3 bg-[#0C1B33] hover:bg-red-700 text-white pl-4 pr-5 py-3.5 rounded-full shadow-2xl border border-white/20 transition-all hover:scale-105 active:scale-95"
        aria-label={`View order with ${itemsCount} items`}
      >
        <div className="relative">
          <div className="w-9 h-9 rounded-full bg-red-600 flex items-center justify-center text-white shadow-sm group-hover:bg-white group-hover:text-red-700 transition-colors">
            <ShoppingBag className="w-5 h-5" />
          </div>
          <span className="absolute -top-1.5 -right-1.5 bg-amber-400 text-stone-950 text-[11px] font-black w-5 h-5 rounded-full flex items-center justify-center shadow-md animate-pulse">
            {itemsCount}
          </span>
        </div>

        <div className="text-left flex flex-col">
          <span className="text-[11px] font-medium text-stone-300 leading-tight">View Order</span>
          <span className="text-sm font-black text-amber-300 tabular-nums leading-tight">
            ${totalEstimated.toFixed(2)}
          </span>
        </div>

        <ArrowRight className="w-4 h-4 text-stone-300 group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default FloatingCartButton;
