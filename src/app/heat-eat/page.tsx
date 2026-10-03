"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";
import { Plus, Check, ShoppingBag, Phone, Sparkles } from "lucide-react";

const PIES = [
  { name: "Chunky Beef Steak Pie", desc: "Tender slow-braised beef steak chunks in rich gravy" },
  { name: "Beef Stockman Pie", desc: "Hearty beef, smoky bacon, caramelized onion & cracked black pepper" },
  { name: "Beef Tomato & Cheese Pie", desc: "Aussie classic with rich savoury tomato relish & melted cheese" },
  { name: "Beef Bacon & Mushroom Pie", desc: "Savory beef steak with sautéed mushrooms & crisp bacon" },
  { name: "Chicken Scallopini Pie", desc: "White wine, tender chicken breast, mushrooms & cream" },
  { name: "Chicken Korma Pie", desc: "Mild, fragrant Indian spiced chicken in aromatic golden gravy" },
  { name: "Chicken Thai Green Curry Pie", desc: "Zesty coconut, fresh coriander, kaffir lime & tender chicken" },
  { name: "Butter Chicken Pie", desc: "Rich spiced tomato butter chicken in flaky golden pastry" },
  { name: "Lamb Mint Jelly Pie", desc: "Tender pasture lamb slow-simmered with sweet mint jelly gravy" },
  { name: "Lamb Honey & Rosemary Pie", desc: "Pasture lamb slow-simmered with local honey & fragrant rosemary" },
  { name: "Footy Beef Mince Pie", desc: "Traditional Australian minced steak pie with rich brown gravy" },
];

const PREPARED_MEALS = [
  {
    name: "Family Beef Lasagna",
    desc: "Slow-simmered Victorian beef bolognese, layered tender pasta, and creamy golden béchamel.",
    price: 24.99,
    priceFormatted: "$24.99",
    portion: "Bake at 180°C (Serves 4-6)",
  },
  {
    name: "Traditional Shepherd's Pie",
    desc: "Savoury minced lamb & beef cooked with garden vegetables, crowned with golden piped potatoes.",
    price: 22.99,
    priceFormatted: "$22.99",
    portion: "Family Size Tray",
  },
  {
    name: "Chicken, Bacon & Leek Pasta Bake",
    desc: "Tender chicken fillets, diced bacon, and sweet sautéed leeks tossed through rigatoni in creamy cheese sauce.",
    price: 22.99,
    priceFormatted: "$22.99",
    portion: "Kid-Approved Tray",
  },
  {
    name: "Handmade House Dumplings (12pk)",
    desc: "Fresh pork & chive or chicken dumplings made in-house. Steam or pan-fry crispy in 6 minutes.",
    price: 16.99,
    priceFormatted: "$16.99",
    portion: "12 Pack Tray",
  },
  {
    name: "Creamy Scallop Potatoes Tray",
    desc: "Thinly sliced potatoes baked in rich garlic cream, crowned with melted golden cheese.",
    price: 18.99,
    priceFormatted: "$18.99",
    portion: "Bake & Serve Side",
  },
];

export default function HeatEatPage() {
  const { addItem, setIsOpen, items } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddPie = (pieName: string) => {
    addItem({
      name: pieName,
      category: "Family Pies",
      price: 12.0,
      priceFormatted: "$12.00 (2 for $18)",
      quantity: "1 ea",
    });
    setAddedIds((prev) => ({ ...prev, [pieName]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [pieName]: false }));
    }, 1200);
  };

  const handleAddMeal = (meal: typeof PREPARED_MEALS[0]) => {
    addItem({
      name: meal.name,
      category: "Heat & Eat Meals",
      price: meal.price,
      priceFormatted: meal.priceFormatted,
      quantity: meal.portion,
    });
    setAddedIds((prev) => ({ ...prev, [meal.name]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [meal.name]: false }));
    }, 1200);
  };

  return (
    <div className="py-12">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
            {/* Page Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-stone-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Chef Kitchen &amp; Bakery
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Family Pies &amp; Ready-to-Bake Meals
                </h1>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
                  Real scratch-made food prepared by chefs in our Wangaratta kitchen. Pop straight into your oven for effortless gourmet weeknight dinners.
                </p>
              </div>

              {/* Special Promotion Badge */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="bg-amber-500/10 border border-amber-500/30 px-5 py-3 rounded-2xl text-xs text-amber-300">
                  <span className="font-bold text-white block text-sm">🥧 Family Pie Special</span>
                  <span>$12.00 each or grab any <strong>2 for $18.00!</strong></span>
                </div>

                <button
                  onClick={() => setIsOpen(true)}
                  className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  <ShoppingBag className="w-4 h-4 text-amber-400" />
                  <span>View Order ({items.length})</span>
                </button>
              </div>
            </div>

            {/* Section 1: In-House Family Pies */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>🥧</span> In-House Gourmet Family Pies
                </h2>
                <span className="text-xs text-amber-400 font-bold bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                  Flaky Golden Puff Pastry
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PIES.map((pie, idx) => {
                  const isAdded = addedIds[pie.name];
                  return (
                    <div
                      key={idx}
                      className="p-4 bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-amber-300 text-sm">{pie.name}</h3>
                          <span className="text-xs font-bold text-white shrink-0 tabular-nums">
                            $12.00
                          </span>
                        </div>
                        <p className="text-xs text-stone-400 mt-1 leading-snug">{pie.desc}</p>
                      </div>

                      <div className="mt-4 pt-3 border-t border-stone-800/80 flex items-center justify-between">
                        <span className="text-[10px] text-stone-500">2 for $18 promo</span>
                        <button
                          onClick={() => handleAddPie(pie.name)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 active:scale-[0.98] ${
                            isAdded
                              ? "bg-emerald-600 text-white"
                              : "bg-amber-500 hover:bg-amber-400 text-stone-950"
                          }`}
                        >
                          {isAdded ? (
                            <>
                              <Check className="w-3.5 h-3.5" />
                              <span>Added!</span>
                            </>
                          ) : (
                            <>
                              <Plus className="w-3.5 h-3.5" />
                              <span>Add to Bag</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section 2: Ready-to-Bake Chef Trays */}
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-stone-800 pb-3">
                <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
                  <span>🍲</span> Ready-to-Bake Chef Dinner Trays
                </h2>
                <span className="text-xs text-stone-400">Generous Family Servings</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {PREPARED_MEALS.map((meal, idx) => {
                  const isAdded = addedIds[meal.name];
                  return (
                    <div
                      key={idx}
                      className="p-5 bg-stone-900/90 rounded-2xl border border-stone-800 hover:border-amber-500/40 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-bold text-white text-sm">{meal.name}</h3>
                          <span className="text-sm font-black text-amber-400 tabular-nums">
                            {meal.priceFormatted}
                          </span>
                        </div>
                        <span className="inline-block mt-1 text-[10px] font-semibold px-2 py-0.5 rounded bg-white/10 text-stone-300">
                          {meal.portion}
                        </span>
                        <p className="text-xs text-stone-400 mt-2 leading-relaxed">{meal.desc}</p>
                      </div>

                      <button
                        onClick={() => handleAddMeal(meal)}
                        className={`mt-4 w-full py-2 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 active:scale-[0.98] ${
                          isAdded
                            ? "bg-emerald-600 text-white"
                            : "bg-[#1E293B] hover:bg-stone-800 text-amber-300 border border-amber-500/30"
                        }`}
                      >
                        {isAdded ? (
                          <>
                            <Check className="w-3.5 h-3.5" />
                            <span>Added to Bag!</span>
                          </>
                        ) : (
                          <>
                            <Plus className="w-3.5 h-3.5" />
                            <span>Add Tray to Order</span>
                          </>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom In-Store Hours & Delivery Footnote */}
            <div className="mt-12 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
              <p>Available Thursday to Saturday in-store at 25 Rowan Street, or order for Friday refrigerated delivery.</p>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="px-5 py-2.5 hover:bg-[#b8141a] text-white font-bold rounded-xl shadow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Kitchen: (03) 5721 3444</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
