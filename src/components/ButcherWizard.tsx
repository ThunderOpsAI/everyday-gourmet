"use client";

import { useState } from "react";

export type MeatCategory = "Beef" | "Lamb" | "Pork" | "Chicken" | "Award Sausages & Burgers";

export interface CutOption {
  id: string;
  name: string;
  priceDesc: string;
  badge?: string;
  notesPrompt?: string;
}

export const CUTS_DATA: Record<MeatCategory, CutOption[]> = {
  "Beef": [
    { id: "b1", name: "Porterhouse Steak", priceDesc: "$38.99/kg", badge: "Grass-Fed" },
    { id: "b2", name: "Scotch Fillet (Ribeye)", priceDesc: "$44.99/kg", badge: "Best Seller" },
    { id: "b3", name: "Eye Fillet (Tenderloin)", priceDesc: "$54.99/kg", badge: "Prime Cut" },
    { id: "b4", name: "Tomahawk Steak", priceDesc: "$42.99/kg", badge: "Showstopper" },
    { id: "b5", name: "T-Bone Steak", priceDesc: "$36.99/kg" },
    { id: "b6", name: "Wagyu Steak (Marble Score 6+)", priceDesc: "$65.00/kg", badge: "Premium" },
    { id: "b7", name: "Whole Beef Brisket", priceDesc: "$24.99/kg", badge: "Smoker Choice" },
    { id: "b8", name: "BBQ Minute Steaks", priceDesc: "$26.99/kg" },
    { id: "b9", name: "Premium Lean Beef Mince", priceDesc: "$18.99/kg", badge: "Daily Fresh" },
    { id: "b10", name: "Diced Casserole Beef", priceDesc: "$21.99/kg" },
    { id: "b11", name: "Rolled Beef Roast (Bolar/Topside)", priceDesc: "$25.99/kg" },
  ],
  "Lamb": [
    { id: "l1", name: "Lamb Loin Chops", priceDesc: "$34.99/kg", badge: "Local Pasture" },
    { id: "l2", name: "French-Trimmed Cutlets", priceDesc: "$46.99/kg", badge: "Dinner Party Favourite" },
    { id: "l3", name: "Lamb Shanks (Hind)", priceDesc: "$22.99/kg", badge: "Slow Cook" },
    { id: "l4", name: "Butterflied Lamb Leg (Garlic & Rosemary)", priceDesc: "$28.99/kg", badge: "House Marinated" },
    { id: "l5", name: "Butterflied Lamb Leg (Greek Souvlaki Marinade)", priceDesc: "$28.99/kg" },
    { id: "l6", name: "Rolled Boneless Leg of Lamb", priceDesc: "$27.99/kg" },
    { id: "l7", name: "Diced Lamb Shoulder", priceDesc: "$26.99/kg" },
    { id: "l8", name: "Lean Lamb Mince", priceDesc: "$22.99/kg" },
  ],
  "Pork": [
    { id: "p1", name: "Crispy Crackling Pork Belly", priceDesc: "$23.99/kg", badge: "Scored Skin" },
    { id: "p2", name: "American-Style Pork Ribs", priceDesc: "$24.99/kg", badge: "Smoker Ready" },
    { id: "p3", name: "Pork Loin Steaks", priceDesc: "$22.99/kg" },
    { id: "p4", name: "Rolled Pork Loin with Crackling", priceDesc: "$23.99/kg" },
    { id: "p5", name: "Pork Tenderloin Fillets", priceDesc: "$26.99/kg" },
  ],
  "Chicken": [
    { id: "c1", name: "Whole Free-Range Roaster", priceDesc: "$14.99/ea", badge: "Family Size" },
    { id: "c2", name: "Chicken Breast Fillets", priceDesc: "$16.99/kg" },
    { id: "c3", name: "Free-Range Chicken Thighs (Skin-on or skinless)", priceDesc: "$17.99/kg" },
    { id: "c4", name: "Chicken Tenderloins", priceDesc: "$18.99/kg" },
    { id: "c5", name: "Chicken Drumsticks", priceDesc: "$9.99/kg" },
    { id: "c6", name: "Marinated Chicken Wings (Smoky BBQ or Honey Soy)", priceDesc: "$11.99/kg", badge: "Glazed & Ready" },
    { id: "c7", name: "House Hand-Crumbed Schnitzels", priceDesc: "$19.99/kg", badge: "Chef Made" },
    { id: "c8", name: "Garlic Butter Chicken Kievs", priceDesc: "$6.50/ea", badge: "Signature" },
  ],
  "Award Sausages & Burgers": [
    { id: "s1", name: "Lamb Fetta, Basil & Sun-Dried Tomato Sausage", priceDesc: "$21.99/kg", badge: "🏆 2025 AMIC Gold" },
    { id: "s2", name: "Chicken Sweet & Sour Sausage", priceDesc: "$20.99/kg", badge: "🏆 2025 AMIC Gold" },
    { id: "s3", name: "Classic Beef BBQ Sausages", priceDesc: "$17.99/kg", badge: "Family Favourite" },
    { id: "s4", name: "Pork & Cheese Kransky", priceDesc: "$22.99/kg", badge: "Smoked In-House" },
    { id: "s5", name: "Brisket Jalapeño & Cheese Sausage", priceDesc: "$22.99/kg", badge: "BBQ Champion" },
    { id: "s6", name: "Korma Curry Beef Sausage", priceDesc: "$20.99/kg" },
    { id: "s7", name: "Southern Chicken Burger Patties", priceDesc: "$4.50/ea", badge: "🏆 2025 AMIC Gold" },
    { id: "s8", name: "Lamb Fetta & Mint Jelly Burger Patties", priceDesc: "$4.50/ea", badge: "🏆 2025 AMIC Gold" },
  ]
};

const PRESET_QUANTITIES = ["500g", "1kg", "1.5kg", "2kg", "4 Pieces", "6 Pieces", "Custom"];

interface OrderItem {
  id: string;
  category: MeatCategory;
  cutName: string;
  priceDesc: string;
  quantity: string;
  instructions?: string;
}

export function ButcherWizard() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [selectedCategory, setSelectedCategory] = useState<MeatCategory>("Beef");
  const [selectedCut, setSelectedCut] = useState<CutOption | null>(null);
  const [quantity, setQuantity] = useState("1kg");
  const [customQty, setCustomQty] = useState("");
  const [instructions, setInstructions] = useState("");

  const [quoteList, setQuoteList] = useState<OrderItem[]>([]);
  const [orderFinalized, setOrderFinalized] = useState(false);

  const handleCategorySelect = (cat: MeatCategory) => {
    setSelectedCategory(cat);
    setSelectedCut(null);
    setStep(2);
  };

  const handleCutSelect = (cut: CutOption) => {
    setSelectedCut(cut);
    setStep(3);
  };

  const handleAddToQuote = () => {
    if (selectedCategory && selectedCut) {
      const finalQty = quantity === "Custom" ? customQty.trim() || "1 portion" : quantity;
      setQuoteList((prev) => [
        ...prev,
        {
          id: Math.random().toString(36).substring(2, 9),
          category: selectedCategory,
          cutName: selectedCut.name,
          priceDesc: selectedCut.priceDesc,
          quantity: finalQty,
          instructions: instructions.trim() || undefined,
        },
      ]);

      // Reset step for next item
      setStep(1);
      setSelectedCut(null);
      setQuantity("1kg");
      setCustomQty("");
      setInstructions("");
    }
  };

  const handleRemoveItem = (id: string) => {
    setQuoteList((prev) => prev.filter((item) => item.id !== id));
  };

  const generateMailtoLink = () => {
    const subject = encodeURIComponent("Custom Meat Order Request - Everyday Gourmet");
    const bodyText = `Hi Dan & Brodie,\n\nI would like to place an order / request a quote for the following items:\n\n` +
      quoteList.map((item, idx) => `${idx + 1}. ${item.cutName} (${item.category}) - ${item.quantity}${item.instructions ? ` [Notes: ${item.instructions}]` : ""}`).join("\n") +
      `\n\nPreferred Collection/Delivery Date:\nMy Contact Name:\nMy Phone:\nDelivery Address (if applicable):\n\nThank you!`;
    return `mailto:General_youreverydaygourmet@yahoo.com?subject=${subject}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-stone-200/80 overflow-hidden">
      {/* Wizard Header Bar */}
      <div className="bg-stone-900 text-white p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="inline-block px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs uppercase tracking-wider mb-2 border border-amber-500/30">
            Interactive Cut Builder
          </span>
          <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
            Custom Butcher Order &amp; Quote Builder
          </h3>
          <p className="text-stone-300 text-sm mt-1 max-w-2xl">
            Select your premium grass-fed Victorian cuts, specify exact portion sizes or weights, and submit directly to Dan &amp; Brodie for retail collection or refrigerated delivery.
          </p>
        </div>

        <div className="flex items-center gap-2 bg-stone-800/80 px-4 py-2.5 rounded-xl border border-stone-700 text-xs sm:text-sm text-stone-200">
          <span>Items in Quote:</span>
          <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 font-black flex items-center justify-center">
            {quoteList.length}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Interactive Wizard Steps */}
        <div className="lg:col-span-8">
          {/* Step Progress Bar */}
          <div className="grid grid-cols-3 gap-2 mb-8 pb-4 border-b border-stone-200">
            <button
              onClick={() => setStep(1)}
              className={`flex items-center gap-2 text-left p-2 rounded-lg transition-colors ${
                step === 1 ? "bg-amber-50 text-amber-900 font-bold" : "text-stone-500 hover:bg-stone-100"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                step === 1 ? "bg-amber-500 text-stone-950" : "bg-stone-200 text-stone-700"
              }`}>1</span>
              <span className="text-xs sm:text-sm">1. Category</span>
            </button>

            <button
              onClick={() => setStep(2)}
              className={`flex items-center gap-2 text-left p-2 rounded-lg transition-colors ${
                step === 2 ? "bg-amber-50 text-amber-900 font-bold" : "text-stone-500 hover:bg-stone-100"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                step === 2 ? "bg-amber-500 text-stone-950" : "bg-stone-200 text-stone-700"
              }`}>2</span>
              <span className="text-xs sm:text-sm">2. Choose Cut</span>
            </button>

            <button
              onClick={() => selectedCut && setStep(3)}
              disabled={!selectedCut}
              className={`flex items-center gap-2 text-left p-2 rounded-lg transition-colors ${
                step === 3 ? "bg-amber-50 text-amber-900 font-bold" : "text-stone-500 hover:bg-stone-100 disabled:opacity-40"
              }`}
            >
              <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-black ${
                step === 3 ? "bg-amber-500 text-stone-950" : "bg-stone-200 text-stone-700"
              }`}>3</span>
              <span className="text-xs sm:text-sm">3. Weight &amp; Notes</span>
            </button>
          </div>

          {/* STEP 1: Categories */}
          {step === 1 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-stone-900 text-lg">Select Meat Category</h4>
                <span className="text-xs text-stone-500">Step 1 of 3</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {(Object.keys(CUTS_DATA) as MeatCategory[]).map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategorySelect(cat)}
                    className={`p-4 rounded-xl border-2 text-left transition-all hover:border-amber-500 hover:shadow-md ${
                      selectedCategory === cat
                        ? "border-amber-500 bg-amber-50/50 shadow-sm"
                        : "border-stone-200 bg-white hover:bg-stone-50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-black text-stone-900 text-base">{cat}</span>
                      <span className="text-amber-600 font-bold text-sm">→</span>
                    </div>
                    <p className="text-xs text-stone-500">
                      {CUTS_DATA[cat].length} cuts available
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 2: Cuts */}
          {step === 2 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Select {selectedCategory} Cut</h4>
                  <p className="text-xs text-stone-500">Prices indicative per kg or unit (AUD)</p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-xs font-semibold text-amber-700 hover:underline"
                >
                  ← Change Category
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[460px] overflow-y-auto pr-1">
                {CUTS_DATA[selectedCategory].map((cut) => (
                  <button
                    key={cut.id}
                    onClick={() => handleCutSelect(cut)}
                    className="p-4 rounded-xl border border-stone-200 bg-white hover:border-amber-500 hover:bg-amber-50/30 hover:shadow-md transition-all text-left group"
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-bold text-stone-900 text-sm group-hover:text-amber-800 transition-colors">
                        {cut.name}
                      </span>
                      {cut.badge && (
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 shrink-0 border border-amber-300">
                          {cut.badge}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-stone-100">
                      <span className="text-xs font-black text-stone-800">{cut.priceDesc}</span>
                      <span className="text-xs font-semibold text-amber-600 group-hover:translate-x-0.5 transition-transform">
                        Select &amp; Customise →
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3: Weight & Notes */}
          {step === 3 && selectedCut && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-stone-900 text-lg">Specify Weight or Quantity</h4>
                  <p className="text-xs text-stone-500">
                    Selected: <strong className="text-stone-900">{selectedCut.name}</strong> ({selectedCut.priceDesc})
                  </p>
                </div>
                <button
                  onClick={() => setStep(2)}
                  className="text-xs font-semibold text-amber-700 hover:underline"
                >
                  ← Back to Cuts
                </button>
              </div>

              {/* Quantity Preset Pills */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-2">
                  Choose Portion or Weight
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {PRESET_QUANTITIES.map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setQuantity(q)}
                      className={`py-2.5 px-3 rounded-lg border text-xs font-bold transition-all ${
                        quantity === q
                          ? "border-stone-900 bg-stone-900 text-white shadow-sm"
                          : "border-stone-200 bg-white text-stone-700 hover:border-amber-400"
                      }`}
                    >
                      {q}
                    </button>
                  ))}
                </div>

                {quantity === "Custom" && (
                  <div className="mt-3">
                    <label className="block text-xs font-medium text-stone-600 mb-1">
                      Enter Custom Amount (e.g. 750g, 3 thick-cut steaks, 5kg whole)
                    </label>
                    <input
                      type="text"
                      value={customQty}
                      onChange={(e) => setCustomQty(e.target.value)}
                      placeholder="e.g. 800g thick cut or 2kg bagged in 500g lots"
                      className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                    />
                  </div>
                )}
              </div>

              {/* Cutting & Preparation Instructions */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-stone-700 mb-1">
                  Butcher Instructions (Optional)
                </label>
                <p className="text-xs text-stone-500 mb-2">
                  e.g., &quot;Cut 1.5 inches thick&quot;, &quot;Vacuum seal individually for freezer&quot;, &quot;Score crackling finely&quot;, &quot;Extra Greek marinade&quot;
                </p>
                <textarea
                  value={instructions}
                  onChange={(e) => setInstructions(e.target.value)}
                  rows={2}
                  placeholder="Any custom trim, thickness, or packaging requirements..."
                  className="w-full px-3 py-2 border border-stone-300 rounded-lg text-sm focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none"
                />
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleAddToQuote}
                  className="flex-1 py-3 px-6 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  <span>➕ Add {selectedCut.name} to Order List</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Quote Summary & Direct Order Trigger */}
        <div className="lg:col-span-4">
          <div className="bg-stone-50 rounded-xl p-5 border border-stone-200/80 sticky top-24">
            <div className="flex items-center justify-between pb-3 border-b border-stone-200 mb-4">
              <h4 className="font-black text-stone-950 text-base">Your Order Summary</h4>
              <span className="text-xs font-bold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full">
                {quoteList.length} items
              </span>
            </div>

            {quoteList.length === 0 ? (
              <div className="text-center py-8 text-stone-500 text-xs leading-relaxed">
                <div className="text-3xl mb-2">🥩</div>
                <p className="font-semibold text-stone-700">No items added yet</p>
                <p className="mt-1">Follow the 3 steps to build your custom cut order or request custom butcher packaging.</p>
              </div>
            ) : (
              <div className="space-y-4">
                <ul className="space-y-2.5 max-h-[320px] overflow-y-auto pr-1 text-xs">
                  {quoteList.map((item) => (
                    <li
                      key={item.id}
                      className="p-3 bg-white rounded-lg border border-stone-200 shadow-sm flex items-start justify-between gap-2"
                    >
                      <div className="flex-1">
                        <div className="flex items-center gap-1.5 font-bold text-stone-900">
                          <span>{item.cutName}</span>
                        </div>
                        <div className="text-stone-500 mt-0.5 flex items-center gap-2">
                          <span className="font-medium text-stone-700">{item.quantity}</span>
                          <span>•</span>
                          <span>{item.priceDesc}</span>
                        </div>
                        {item.instructions && (
                          <div className="text-[11px] text-amber-800 mt-1 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                            Note: {item.instructions}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-stone-400 hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        ✕
                      </button>
                    </li>
                  ))}
                </ul>

                <div className="pt-3 border-t border-stone-200 space-y-2">
                  <div className="text-[11px] text-stone-500 bg-amber-50/70 p-2.5 rounded-lg border border-amber-200/60 leading-tight">
                    💡 <strong>Ready to book?</strong> We cut &amp; pack fresh. Call to confirm ready time, or pre-send via email for our team to prepare.
                  </div>

                  <a
                    href="tel:0357213444"
                    className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2 transition-all"
                  >
                    <span>📞 Call (03) 5721 3444 to Order</span>
                  </a>

                  <a
                    href={generateMailtoLink()}
                    className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-amber-300 font-semibold text-xs rounded-xl shadow-sm flex items-center justify-center gap-2 transition-all border border-stone-700"
                  >
                    <span>✉️ Send Order via Email</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setQuoteList([])}
                    className="w-full text-center text-[11px] text-stone-500 hover:text-stone-800 hover:underline pt-1"
                  >
                    Clear All Items
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
