"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Check, Phone } from "lucide-react";

interface MeatPackCardProps {
  name: string;
  price: string;
  tag: string;
  description: string;
  items: string[];
  phoneNumber?: string;
}

export default function MeatPackCard({
  name,
  price,
  tag,
  description,
  items,
  phoneNumber = "0357213444",
}: MeatPackCardProps) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  // Extract numeric price from strings like "~$99", "$45", "~$85–$90"
  const priceMatch = price.match(/\$?(\d+)/);
  const numericPrice = priceMatch ? parseFloat(priceMatch[1]) : 75;

  const handleAddPack = () => {
    addItem({
      name,
      category: "Value Packs",
      price: numericPrice,
      priceFormatted: price,
      quantity: "1 Pack",
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 1500);
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group">
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
            {tag}
          </span>
          <span className="text-2xl font-black text-amber-900 bg-amber-50 px-3 py-0.5 rounded-xl border border-amber-200 tabular-nums">
            {price}
          </span>
        </div>

        <h3 className="text-xl font-black text-stone-950 mt-3 group-hover:text-red-700 transition-colors">
          {name}
        </h3>
        <p className="text-xs text-stone-600 mt-1.5 leading-relaxed mb-4">{description}</p>

        <div className="border-t border-stone-100 pt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">
            What&apos;s Inside:
          </h4>
          <ul className="space-y-1.5 text-xs text-stone-700">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-600 font-bold text-xs mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="p-5 bg-stone-50/80 border-t border-stone-100 space-y-2">
        <button
          onClick={handleAddPack}
          className={`w-full py-2.5 px-4 font-bold text-xs rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 active:scale-[0.98] ${
            justAdded
              ? "bg-emerald-600 text-white"
              : "bg-[#0C1B33] hover:bg-stone-800 text-white"
          }`}
        >
          {justAdded ? (
            <>
              <Check className="w-4 h-4" />
              <span>Pack Added to Order Bag!</span>
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>Add {name} to Bag</span>
            </>
          )}
        </button>

        <a
          href={`tel:${phoneNumber}`}
          className="w-full py-2 px-4 bg-transparent hover:bg-stone-100 text-stone-600 hover:text-stone-900 font-semibold text-xs rounded-xl transition-all flex items-center justify-center gap-1.5"
        >
          <Phone className="w-3.5 h-3.5 text-stone-400" />
          <span>Call to Reserve: (03) 5721 3444</span>
        </a>
      </div>
    </div>
  );
}
