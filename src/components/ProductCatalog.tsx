"use client";

import React, { useState, useMemo } from "react";
import { ALL_PRODUCTS, CATEGORIES, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";
import { Search, Plus, Check, ShoppingBag, Sparkles, Filter, Award } from "lucide-react";

export function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Items");
  const [searchQuery, setSearchQuery] = useState("");
  const { addItem, setIsOpen, items } = useCart();
  const [selectedPortions, setSelectedPortions] = useState<Record<string, string>>({});
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});

  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      const matchesCategory =
        selectedCategory === "All Items" || product.category === selectedCategory;
      const matchesSearch =
        searchQuery === "" ||
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handlePortionChange = (productId: string, portion: string) => {
    setSelectedPortions((prev) => ({ ...prev, [productId]: portion }));
  };

  const handleAddToCart = (product: Product) => {
    const chosenPortion = selectedPortions[product.id] || product.portionOptions[0] || "1kg";
    addItem({
      name: product.name,
      category: product.category,
      price: product.price,
      priceFormatted: product.priceFormatted,
      quantity: chosenPortion,
    });

    // Brief checkmark feedback on button
    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="store-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-stone-200 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 uppercase tracking-widest mb-1.5">
            <span>Fresh Butchery &amp; Kitchen Catalog</span>
            <span>·</span>
            <span>100+ Real In-Store Items</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight">
            Order Real Cuts &amp; Gourmet Meals Online
          </h2>
          <p className="text-stone-600 text-sm sm:text-base mt-1 max-w-2xl">
            Sourced direct from Victorian grass-fed cattle, pasture lamb, and free-range poultry. Hand-sliced fresh in our Wangaratta shop.
          </p>
        </div>

        {/* Live Cart Status Bar */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-2.5 bg-[#0C1B33] hover:bg-stone-800 text-white rounded-xl shadow-md transition-all text-xs font-bold active:scale-[0.98]"
          >
            <ShoppingBag className="w-4 h-4 text-amber-400" />
            <span>View Bag ({items.length})</span>
          </button>
        </div>
      </div>

      {/* Special Highlights Bar for Family Pies & Free Delivery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
        <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
              🥧 In-House Family Pie Special
            </span>
            <p className="text-xs text-stone-700 mt-0.5">
              Grab <strong>any 2 Family Pies for $18.00</strong> (Normal $12.00 each). Flaky puff pastry &amp; slow-cooked fillings.
            </p>
          </div>
          <button
            onClick={() => setSelectedCategory("Family Pies")}
            className="text-xs font-bold text-amber-900 underline hover:text-amber-700 shrink-0 ml-3"
          >
            View Pies →
          </button>
        </div>

        <div className="p-4 rounded-2xl bg-stone-900 text-white border border-stone-800 flex items-center justify-between">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-400 block">
              🚚 Refrigerated Cold-Chain Delivery
            </span>
            <p className="text-xs text-stone-300 mt-0.5">
              <strong>FREE local Wangaratta delivery</strong> on $100+. Weekly Friday refrigerated run to Yarrawonga &amp; Mulwala.
            </p>
          </div>
          <a
            href="/delivery"
            className="text-xs font-bold text-amber-400 underline hover:text-amber-300 shrink-0 ml-3"
          >
            Delivery Map →
          </a>
        </div>
      </div>

      {/* Search and Category Filters */}
      <div className="space-y-4 mb-8">
        {/* Search Bar */}
        <div className="relative max-w-md">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search steaks, snags, kievs, brisket, lamb racks, pies..."
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#0C1B33] focus:border-transparent transition-all shadow-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-stone-400 hover:text-stone-700"
            >
              Clear
            </button>
          )}
        </div>

        {/* Category Pill Tabs (Functional segmented filter controls) */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-thin">
          {CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-semibold rounded-xl whitespace-nowrap transition-all ${
                  isActive
                    ? "bg-[#0C1B33] text-white shadow-sm"
                    : "bg-white text-stone-600 hover:bg-stone-100 border border-stone-200"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-stone-500 mb-6">
        <span>
          Showing <strong>{filteredProducts.length}</strong> items in{" "}
          <strong>{selectedCategory}</strong>
        </span>
        {searchQuery && (
          <span>
            Filtered by keyword &quot;<strong>{searchQuery}</strong>&quot;
          </span>
        )}
      </div>

      {/* Product Cards Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-stone-200">
          <div className="text-4xl mb-2">🔍</div>
          <h3 className="text-base font-bold text-stone-900">No matching cuts or meals found</h3>
          <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
            Try a different search keyword or select &quot;All Items&quot; to view our full butcher counter inventory.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All Items");
            }}
            className="mt-4 px-4 py-2 bg-stone-900 text-white rounded-xl text-xs font-bold"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredProducts.map((product) => {
            const currentPortion =
              selectedPortions[product.id] || product.portionOptions[0] || "1kg";
            const isJustAdded = addedItemIds[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div className="p-5">
                  {/* Top Category & Badge Row */}
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 border border-amber-300">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Product Title */}
                  <h3 className="font-bold text-stone-950 text-base leading-snug group-hover:text-red-700 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="mt-2 flex items-baseline gap-1.5">
                    <span className="text-xl font-black text-stone-900 tabular-nums">
                      {product.priceFormatted}
                    </span>
                    <span className="text-xs text-stone-500">
                      {product.unit === "kg" ? "/ kg" : `/${product.unit}`}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-stone-600 mt-2 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Portion Selector & Add Button */}
                <div className="p-4 bg-stone-50/80 border-t border-stone-100 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[11px] font-medium text-stone-500">Select portion:</span>
                    <select
                      value={currentPortion}
                      onChange={(e) => handlePortionChange(product.id, e.target.value)}
                      className="text-xs font-bold text-stone-800 bg-white border border-stone-200 rounded-lg px-2.5 py-1 focus:outline-none focus:border-[#0C1B33]"
                    >
                      {product.portionOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-2.5 px-3 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm ${
                      isJustAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-[#0C1B33] hover:bg-stone-800 text-white active:scale-[0.98]"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added to Bag!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5 text-amber-400" />
                        <span>Add {currentPortion} to Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
}
export default ProductCatalog;
