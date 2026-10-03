"use client";

import React, { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { useCart } from "@/context/CartContext";
import { Plus, Check, ShoppingBag, Phone, Sparkles } from "lucide-react";

const PANTRY_ITEMS = [
  {
    name: "Hardcore Carnivore 'Black' Seasoning",
    desc: "Activated charcoal & spices engineered for supreme dark crust on beef steaks, briskets, and ribs.",
    price: 24.95,
    priceFormatted: "$24.95",
    tag: "BBQ Master Choice",
  },
  {
    name: "Hardcore Carnivore 'Red' Pork & Poultry Rub",
    desc: "Sweet, savoury, and zesty rub formulated for pulled pork, chicken wings, and pork belly crackling.",
    price: 24.95,
    priceFormatted: "$24.95",
    tag: "Pork & Poultry",
  },
  {
    name: "Lanes BBQ Signature Rub",
    desc: "All-purpose Southern competition seasoning that elevates pork chops, chicken, steaks, and roasted vegetables.",
    price: 22.95,
    priceFormatted: "$22.95",
    tag: "Competition Blend",
  },
  {
    name: "Lillie's Q Carolina Gourmet BBQ Sauce",
    desc: "Authentic Western Carolina vinegar-based sauce with tomato and apple cider tang. Perfect on smoked brisket.",
    price: 16.95,
    priceFormatted: "$16.95",
    tag: "Small Batch Sauce",
  },
  {
    name: "Rich Glen Yarrawonga Cold-Pressed Olive Oil (500ml)",
    desc: "Single-estate extra virgin olive oil grown and cold-pressed locally on the banks of Lake Mulwala.",
    price: 18.95,
    priceFormatted: "$18.95",
    tag: "Regional Victorian",
  },
  {
    name: "House Garlic & Herb Meat Marinade (350ml)",
    desc: "Our butcher's secret garlic, rosemary, and olive oil blend used on our award-winning butterflied lamb legs.",
    price: 12.50,
    priceFormatted: "$12.50",
    tag: "Butcher Made",
  },
];

const CHEF_TRAYS = [
  {
    title: "Family Beef Lasagna",
    desc: "Slow-simmered rich Victorian beef bolognese, layered pasta sheets, and creamy golden béchamel.",
    badge: "Bake at 180°C",
    price: 24.99,
  },
  {
    title: "Traditional Shepherd's Pie",
    desc: "Savoury minced lamb & beef cooked with garden vegetables, crowned with golden piped mashed potatoes.",
    badge: "Family Size",
    price: 22.99,
  },
  {
    title: "Chicken, Bacon & Leek Pasta Bake",
    desc: "Tender chicken fillets, diced bacon, and sweet sautéed leeks tossed through rigatoni in creamy cheese sauce.",
    badge: "Kid-Approved",
    price: 22.99,
  },
  {
    title: "Handmade House Dumplings (12pk)",
    desc: "Fresh pork & chive or chicken dumplings made in-house. Steam or pan-fry crispy in minutes.",
    badge: "Pan-Fry or Steam",
    price: 16.99,
  },
];

export default function ChefGuidePage() {
  const { addItem, setIsOpen, items } = useCart();
  const [addedIds, setAddedIds] = useState<Record<string, boolean>>({});

  const handleAddPantry = (item: typeof PANTRY_ITEMS[0]) => {
    addItem({
      name: item.name,
      category: "Pantry Items",
      price: item.price,
      priceFormatted: item.priceFormatted,
      quantity: "1 ea",
    });
    setAddedIds((prev) => ({ ...prev, [item.name]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [item.name]: false }));
    }, 1200);
  };

  const handleAddTray = (tray: typeof CHEF_TRAYS[0]) => {
    addItem({
      name: tray.title,
      category: "Heat & Eat Meals",
      price: tray.price,
      priceFormatted: `$${tray.price.toFixed(2)}`,
      quantity: tray.badge,
    });
    setAddedIds((prev) => ({ ...prev, [tray.title]: true }));
    setTimeout(() => {
      setAddedIds((prev) => ({ ...prev, [tray.title]: false }));
    }, 1200);
  };

  return (
    <div className="py-12">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0C1B33] text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10 pb-8 border-b border-stone-800">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Scratch-Made Chef Kitchen &amp; BBQ Pantry
                </span>
                <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Chef Guide &amp; Artisan BBQ Pantry
                </h1>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
                  Ready-to-bake chef trays and world-class championship BBQ rubs to elevate every home cookout.
                </p>
              </div>

              <button
                onClick={() => setIsOpen(true)}
                className="px-4 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl text-xs font-bold flex items-center justify-center gap-2 border border-white/20 transition-all self-start lg:self-auto"
              >
                <ShoppingBag className="w-4 h-4 text-amber-400" />
                <span>View Order Bag ({items.length})</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Ready to Bake Chef Trays */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-stone-950/70 rounded-2xl p-6 border border-stone-800/80">
                  <h2 className="text-lg font-black text-white mb-4 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <span>🍲</span> Ready-to-Bake Chef Trays
                  </h2>
                  <div className="space-y-3">
                    {CHEF_TRAYS.map((tray, idx) => {
                      const isAdded = addedIds[tray.title];
                      return (
                        <div
                          key={idx}
                          className="p-3.5 bg-stone-900/80 rounded-xl border border-stone-800 flex flex-col justify-between gap-2"
                        >
                          <div>
                            <div className="flex items-center justify-between gap-2">
                              <h3 className="font-bold text-white text-xs sm:text-sm">{tray.title}</h3>
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                                {tray.badge}
                              </span>
                            </div>
                            <p className="text-[11px] text-stone-400 mt-1 leading-snug">{tray.desc}</p>
                          </div>

                          <div className="flex items-center justify-between pt-2 border-t border-stone-800/60">
                            <span className="text-xs font-black text-amber-400">${tray.price.toFixed(2)}</span>
                            <button
                              onClick={() => handleAddTray(tray)}
                              className={`px-3 py-1 rounded text-xs font-bold transition-all flex items-center gap-1 ${
                                isAdded
                                  ? "bg-emerald-600 text-white"
                                  : "bg-white/10 hover:bg-white/20 text-white"
                              }`}
                            >
                              {isAdded ? <Check className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                              <span>{isAdded ? "Added" : "Add Tray"}</span>
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Specialty BBQ Rubs & Pantry */}
              <div className="lg:col-span-7 space-y-6">
                <div className="p-6 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <div className="flex items-center justify-between mb-4 border-b border-amber-500/20 pb-3">
                    <div>
                      <h2 className="text-lg font-black text-amber-300 flex items-center gap-2">
                        <span>🧂</span> Specialty BBQ Rubs &amp; Regional Pantry
                      </h2>
                      <p className="text-xs text-stone-300 mt-1">
                        International competition seasonings alongside cold-pressed Rich Glen olive oils from Yarrawonga.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {PANTRY_ITEMS.map((item, idx) => {
                      const isAdded = addedIds[item.name];
                      return (
                        <div
                          key={idx}
                          className="p-4 bg-stone-900/90 rounded-xl border border-stone-800 flex flex-col justify-between gap-3"
                        >
                          <div>
                            <div className="flex items-start justify-between gap-2">
                              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                                {item.tag}
                              </span>
                              <span className="text-xs font-black text-white tabular-nums">
                                {item.priceFormatted}
                              </span>
                            </div>
                            <h3 className="font-bold text-white text-xs mt-2 leading-snug">{item.name}</h3>
                            <p className="text-[11px] text-stone-400 mt-1 leading-snug line-clamp-2">
                              {item.desc}
                            </p>
                          </div>

                          <button
                            onClick={() => handleAddPantry(item)}
                            className={`w-full py-1.5 px-3 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1 ${
                              isAdded
                                ? "bg-emerald-600 text-white"
                                : "bg-amber-500 hover:bg-amber-400 text-stone-950"
                            }`}
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>Added to Bag</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>Add to Order</span>
                              </>
                            )}
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* In-Store Callout */}
            <div className="mt-10 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
              <p>Pick up in-store at 25 Rowan Street, Wangaratta, or order for Friday regional delivery.</p>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="px-5 py-2.5 hover:bg-[#b8141a] text-white font-bold rounded-xl shadow transition-all flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-white" />
                <span>Call Butcher &amp; Chef: (03) 5721 3444</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
