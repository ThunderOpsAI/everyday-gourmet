"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import AwardBadge from "@/components/AwardBadge";
import { useCart } from "@/context/CartContext";
import { Plus, Check, ShoppingBag, Phone, Trophy, Star } from "lucide-react";
import Link from "next/link";

const AWARDS = [
  {
    title: "Lamb, Fetta & Sun-Dried Tomato",
    award: "2025 AMIC Gold Medal",
    category: "Gourmet Open Sausage Division",
    price: 21.99,
    priceFormatted: "$21.99/kg",
  },
  {
    title: "Chicken Sweet & Sour Sausage",
    award: "2025 AMIC Gold Medal",
    category: "Poultry Sausage Category",
    price: 20.99,
    priceFormatted: "$20.99/kg",
  },
  {
    title: "Southern Chicken Burger",
    award: "2025 AMIC Gold Medal",
    category: "Best Butchers Burger Category",
    price: 4.50,
    priceFormatted: "$4.50 ea",
  },
  {
    title: "Lamb Fetta & Mint Jelly Burger",
    award: "2025 AMIC Gold Medal",
    category: "Gourmet Burger Division",
    price: 4.50,
    priceFormatted: "$4.50 ea",
  }
];

export default function AwardsPage() {
  const { addItem, setIsOpen } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddAward = (award: typeof AWARDS[0]) => {
    addItem({
      name: award.title,
      category: "Award Wining Sausages",
      price: award.price,
      priceFormatted: award.priceFormatted,
      quantity: award.priceFormatted.includes("ea") ? "2 ea" : "1kg",
    });
    setAddedIds((prev) => ({ ...prev, [award.title]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [award.title]: false }));
    }, 1200);
  };

  return (
    <div className="py-12">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Main Gold Showcase */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-amber-500/30 shadow-md">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 border-b border-stone-100 pb-6">
              <div className="max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-900 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                  Australian Meat Industry Council (AMIC)
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-stone-950 tracking-tight mt-3">
                  Multi-Award-Winning 2025 AMIC Champion
                </h1>
                <p className="text-sm sm:text-base text-stone-600 mt-3 leading-relaxed">
                  Everyday Gourmet represents the gold standard of Victorian butchery. With <strong>over 16 medals</strong> across Victorian regional Sausage King &amp; Best Butchers Burger competitions, Dan Wallace and his team craft every recipe right here on the block at 25 Rowan Street.
                </p>
              </div>

              <div className="bg-[#0C1B33] text-white p-5 rounded-2xl border border-stone-800 shrink-0 text-center lg:text-left shadow-lg">
                <div className="flex items-center gap-2 text-amber-400 font-black text-2xl">
                  <Trophy className="w-6 h-6" />
                  <span>16+ Medals</span>
                </div>
                <p className="text-xs text-stone-300 mt-1">Victorian Regional Championships</p>
              </div>
            </div>

            {/* Awards Grid with Direct Add-to-Order */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {AWARDS.map((award, idx) => {
                const isAdded = addedIds[award.title];
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50/50 border border-amber-200/80 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-3xl mb-3 block">🥇</span>
                      <h3 className="font-bold text-stone-900 text-sm leading-snug">{award.title}</h3>
                      <p className="text-xs text-amber-800 font-bold mt-1.5">{award.award}</p>
                      <p className="text-[11px] text-stone-500 mt-0.5">{award.category}</p>
                      <p className="text-xs font-black text-stone-800 mt-2">{award.priceFormatted}</p>
                    </div>

                    <button
                      onClick={() => handleAddAward(award)}
                      className={`mt-4 w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 shadow-sm active:scale-[0.98] ${
                        isAdded
                          ? "bg-emerald-600 text-white"
                          : "bg-[#0C1B33] hover:bg-stone-800 text-white"
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>Added!</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5 text-amber-400" />
                          <span>Order This Medalist</span>
                        </>
                      )}
                    </button>
                  </div>
                );
              })}
            </div>

            {/* Story & Craftsmanship Quote */}
            <div className="mt-10 p-6 rounded-2xl bg-stone-50 border border-stone-200 text-stone-700 text-xs sm:text-sm leading-relaxed">
              <p className="italic">
                &ldquo;AMIC competitions test the true skill of the butcher — moisture balance, natural casings, fat-to-lean ratios, and pure flavor innovation. We don&apos;t make special competition batches; what won the gold medals is exactly what is in our counter every single day.&rdquo;
              </p>
              <p className="font-bold text-stone-900 mt-2">— Dan Wallace, Founder &amp; Head Butcher</p>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
