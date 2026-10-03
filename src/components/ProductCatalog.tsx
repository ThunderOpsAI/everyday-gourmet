"use client";

import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import { ALL_PRODUCTS, Product, ProductCategory, DietaryOption } from "@/data/products";
import { useCart } from "@/context/CartContext";
import {
  Search,
  X,
  Plus,
  Check,
  ShoppingBag,
  Sparkles,
  Filter,
  ArrowUpDown,
  Layers,
  ChefHat,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

interface ProductCatalogProps {
  initialCategory?: ProductCategory | "all";
  title?: string;
  subtitle?: string;
  hideHeader?: boolean;
}

const CATEGORY_TABS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "packs", label: "Freezer Packs" },
  { id: "pies-meals", label: "Pies & Prepared Meals" },
  { id: "poultry", label: "Chicken" },
  { id: "sausages", label: "Sausages" },
  { id: "custom-cuts", label: "Custom Cuts" },
];

const DIETARY_OPTIONS: DietaryOption[] = ["Gluten-Free", "Dairy-Free", "Keto-Friendly"];

type SortOption = "popularity" | "price-asc" | "price-desc";

export function ProductCatalog({
  initialCategory = "all",
  title = "Order Fresh Cuts & Kitchen Meals Online",
  subtitle = "Sourced directly from grass-fed Victorian cattle, pasture lamb, and free-range poultry. Hand-sliced fresh in Wangaratta.",
  hideHeader = false,
}: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<"all" | ProductCategory>(initialCategory);
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [selectedDietary, setSelectedDietary] = useState<DietaryOption[]>([]);
  const [sortBy, setSortBy] = useState<SortOption>("popularity");
  const [selectedPortions, setSelectedPortions] = useState<Record<string, string>>({});
  const [addedItemIds, setAddedItemIds] = useState<Record<string, boolean>>({});
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const { addItem, setIsOpen, items } = useCart();

  // Keep selectedCategory in sync if initialCategory prop changes
  useEffect(() => {
    if (initialCategory) {
      setSelectedCategory(initialCategory);
    }
  }, [initialCategory]);

  // Debounced search query (200ms)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(searchInput.trim().toLowerCase());
    }, 200);
    return () => clearTimeout(handler);
  }, [searchInput]);

  // Toggle dietary filter pill (multi-select)
  const toggleDietary = (option: DietaryOption) => {
    setSelectedDietary((prev) =>
      prev.includes(option) ? prev.filter((d) => d !== option) : [...prev, option]
    );
  };

  // Toggle items preview expansion for bundle packs
  const toggleExpand = (productId: string) => {
    setExpandedItems((prev) => ({ ...prev, [productId]: !prev[productId] }));
  };

  // Reset all filters
  const resetFilters = () => {
    setSelectedCategory("all");
    setSearchInput("");
    setDebouncedSearch("");
    setSelectedDietary([]);
    setSortBy("popularity");
  };

  // Filter & Sort Logic
  const filteredProducts = useMemo(() => {
    return ALL_PRODUCTS.filter((product) => {
      // 1. Category match
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      // 2. Search match (name, description, items)
      const matchesSearch =
        debouncedSearch === "" ||
        product.name.toLowerCase().includes(debouncedSearch) ||
        product.description.toLowerCase().includes(debouncedSearch) ||
        product.category.toLowerCase().includes(debouncedSearch) ||
        (product.items &&
          product.items.some((item) => item.toLowerCase().includes(debouncedSearch)));

      // 3. Dietary match (AND logic: must include all selected dietary options)
      const matchesDietary =
        selectedDietary.length === 0 ||
        selectedDietary.every((d) => product.dietary.includes(d));

      return matchesCategory && matchesSearch && matchesDietary;
    }).sort((a, b) => {
      if (sortBy === "price-asc") {
        return a.price - b.price;
      }
      if (sortBy === "price-desc") {
        return b.price - a.price;
      }
      // default: popularity descending
      return b.popularity - a.popularity;
    });
  }, [selectedCategory, debouncedSearch, selectedDietary, sortBy]);

  const handlePortionChange = (productId: string, portion: string) => {
    setSelectedPortions((prev) => ({ ...prev, [productId]: portion }));
  };

  const handleAddToCart = (product: Product) => {
    const chosenPortion =
      selectedPortions[product.id] ||
      product.portionOptions?.[0] ||
      (product.unit === "kg" ? "1kg" : `1 ${product.unit}`);

    addItem({
      name: product.name,
      category: CATEGORY_TABS.find((c) => c.id === product.category)?.label || product.category,
      price: product.price,
      priceFormatted: product.priceFormatted || `$${product.price.toFixed(2)}`,
      quantity: chosenPortion,
    });

    setAddedItemIds((prev) => ({ ...prev, [product.id]: true }));
    setTimeout(() => {
      setAddedItemIds((prev) => ({ ...prev, [product.id]: false }));
    }, 1200);
  };

  return (
    <section id="store-catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Bar */}
      {!hideHeader && (
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 border-b border-stone-200 pb-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-amber-800 uppercase tracking-widest mb-1.5">
              <span>Fresh Butcher &amp; Chef Kitchen Catalog</span>
              <span>·</span>
              <span>Victorian Farm Direct</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight">
              {title}
            </h2>
            <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-2xl leading-relaxed">
              {subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsOpen(true)}
              className="px-4 py-2.5 bg-[#0C1B33] hover:bg-stone-800 text-white rounded-xl text-xs font-bold flex items-center gap-2 shadow-sm transition-all shrink-0 active:scale-[0.98]"
            >
              <ShoppingBag className="w-4 h-4 text-amber-400" />
              <span>View Order ({items.length})</span>
            </button>
          </div>
        </div>
      )}

      {/* Control Panel: Category Navigation Tabs */}
      <div className="space-y-4 mb-8">
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
          {CATEGORY_TABS.map((tab) => {
            const isActive = selectedCategory === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2.5 text-xs font-bold rounded-2xl whitespace-nowrap transition-all shadow-sm flex items-center gap-1.5 ${
                  isActive
                    ? "bg-[#0C1B33] text-white ring-2 ring-amber-500/50 shadow-md"
                    : "bg-white text-stone-700 hover:bg-stone-100 hover:text-stone-900 border border-stone-200"
                }`}
              >
                <span>{tab.label}</span>
                {tab.id !== "all" && (
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive ? "bg-white/20 text-amber-300" : "bg-stone-100 text-stone-500"
                    }`}
                  >
                    {ALL_PRODUCTS.filter((p) => p.category === tab.id).length}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Search, Dietary Filters, and Sorting Controls */}
        <div className="p-4 sm:p-5 bg-white rounded-3xl border border-stone-200/90 shadow-sm space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Real-Time Search Bar */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search cuts, sausages, pies, schnitzels, or ingredients..."
                className="w-full pl-10 pr-9 py-2.5 text-xs sm:text-sm bg-stone-50 border border-stone-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-500 focus:bg-white text-stone-900 placeholder:text-stone-400 transition-all"
              />
              {searchInput && (
                <button
                  onClick={() => setSearchInput("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-0.5"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 shrink-0">
              <ArrowUpDown className="w-4 h-4 text-stone-400" />
              <label htmlFor="sort-select" className="text-xs font-semibold text-stone-500">
                Sort by:
              </label>
              <select
                id="sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="text-xs font-bold text-stone-800 bg-stone-50 border border-stone-200 rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500"
              >
                <option value="popularity">Most Popular</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Dietary Filter Toggles (Multi-select AND Logic) */}
          <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center gap-2">
            <span className="text-xs font-bold text-stone-500 flex items-center gap-1.5 mr-1">
              <Filter className="w-3.5 h-3.5 text-stone-400" />
              <span>Dietary:</span>
            </span>

            {DIETARY_OPTIONS.map((diet) => {
              const active = selectedDietary.includes(diet);
              return (
                <button
                  key={diet}
                  onClick={() => toggleDietary(diet)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    active
                      ? "bg-emerald-600 text-white shadow-sm ring-2 ring-emerald-500/40"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200/80"
                  }`}
                >
                  {active && <Check className="w-3 h-3 text-white" />}
                  <span>{diet}</span>
                </button>
              );
            })}

            {(selectedDietary.length > 0 || searchInput || selectedCategory !== "all") && (
              <button
                onClick={resetFilters}
                className="text-xs font-bold text-red-600 hover:text-red-700 ml-auto underline cursor-pointer py-1"
              >
                Reset Filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Results Counter & Active Criteria */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-stone-500 mb-6">
        <div>
          Showing <strong className="text-stone-900 font-bold">{filteredProducts.length}</strong> of{" "}
          <strong className="text-stone-900">{ALL_PRODUCTS.length}</strong> products
          {selectedCategory !== "all" && (
            <span> in <span className="text-amber-800 font-bold">{CATEGORY_TABS.find((c) => c.id === selectedCategory)?.label}</span></span>
          )}
          {debouncedSearch && (
            <span> matching &ldquo;<span className="text-stone-800 font-bold">{debouncedSearch}</span>&rdquo;</span>
          )}
        </div>

        {selectedDietary.length > 0 && (
          <div className="flex items-center gap-1 text-[11px]">
            <span>Active filters:</span>
            <span className="font-semibold text-emerald-700">{selectedDietary.join(" + ")}</span>
          </div>
        )}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-16 px-4 bg-white rounded-3xl border border-stone-200/90 shadow-sm space-y-4">
          <div className="w-14 h-14 bg-amber-50 text-amber-600 rounded-2xl mx-auto flex items-center justify-center text-2xl">
            🔍
          </div>
          <h3 className="text-lg font-bold text-stone-900">No Products Match Your Criteria</h3>
          <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto">
            We couldn&apos;t find any items matching your active search or dietary combination. Try clearing your filters or exploring another category.
          </p>
          <button
            onClick={resetFilters}
            className="px-5 py-2.5 bg-[#0C1B33] hover:bg-stone-800 text-white rounded-xl text-xs font-bold transition-all shadow-sm"
          >
            Clear All Filters &amp; Search
          </button>
        </div>
      ) : (
        /* Responsive Card Grid */
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => {
            const currentPortion =
              selectedPortions[product.id] ||
              product.portionOptions?.[0] ||
              (product.unit === "kg" ? "1kg" : `1 ${product.unit}`);
            const isJustAdded = addedItemIds[product.id];
            const isExpanded = expandedItems[product.id];

            return (
              <div
                key={product.id}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-stone-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />

                    {/* Merchandising Badge */}
                    {product.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="text-[11px] font-black uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-stone-950 shadow-md">
                          {product.badge}
                        </span>
                      </div>
                    )}

                    {/* Price Tag in Photo Corner */}
                    <div className="absolute bottom-3 right-3 bg-stone-950/85 backdrop-blur-md px-3 py-1 rounded-xl border border-white/10 text-white shadow-md">
                      <span className="text-base font-black text-amber-300 tabular-nums">
                        {product.priceFormatted || `$${product.price.toFixed(2)}`}
                      </span>
                      <span className="text-[11px] text-stone-300 ml-1">
                        /{product.unit}
                      </span>
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className="p-5 space-y-3">
                    {/* Category Label & Dietary Pills */}
                    <div className="flex flex-wrap items-center gap-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-stone-500 bg-stone-100 px-2 py-0.5 rounded-md">
                        {CATEGORY_TABS.find((c) => c.id === product.category)?.label || product.category}
                      </span>

                      {product.dietary.map((diet) => (
                        <span
                          key={diet}
                          className={`text-[10px] font-bold px-2 py-0.5 rounded-md border ${
                            diet === "Gluten-Free"
                              ? "bg-emerald-50 text-emerald-700 border-emerald-200"
                              : diet === "Dairy-Free"
                              ? "bg-blue-50 text-blue-700 border-blue-200"
                              : "bg-purple-50 text-purple-700 border-purple-200"
                          }`}
                        >
                          {diet}
                        </span>
                      ))}
                    </div>

                    {/* Product Title */}
                    <h3 className="font-black text-stone-950 text-lg leading-snug group-hover:text-red-700 transition-colors">
                      {product.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-stone-600 leading-relaxed line-clamp-2">
                      {product.description}
                    </p>

                    {/* Package Contents (For Bundles & Freezer Packs) */}
                    {product.items && product.items.length > 0 && (
                      <div className="pt-2 border-t border-stone-100">
                        <button
                          onClick={() => toggleExpand(product.id)}
                          className="w-full flex items-center justify-between text-xs font-bold text-amber-900 bg-amber-50/80 hover:bg-amber-100/80 px-2.5 py-1.5 rounded-xl border border-amber-200/60 transition-colors text-left"
                        >
                          <span className="flex items-center gap-1.5">
                            <Layers className="w-3.5 h-3.5 text-amber-700" />
                            <span>Package Contents ({product.items.length} items)</span>
                          </span>
                          {isExpanded ? (
                            <ChevronUp className="w-3.5 h-3.5 text-amber-700" />
                          ) : (
                            <ChevronDown className="w-3.5 h-3.5 text-amber-700" />
                          )}
                        </button>

                        {isExpanded && (
                          <ul className="mt-2 space-y-1 pl-2 text-[11px] text-stone-600 bg-stone-50 p-2.5 rounded-xl border border-stone-200/60">
                            {product.items.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-1.5">
                                <span className="text-amber-600 font-bold leading-tight">✓</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer Add-to-Cart Area */}
                <div className="p-4 bg-stone-50 border-t border-stone-100 space-y-2.5">
                  {/* Portion Selector if available */}
                  {product.portionOptions && product.portionOptions.length > 0 ? (
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[11px] font-semibold text-stone-500">Portion size:</span>
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
                  ) : (
                    <div className="flex items-center justify-between text-[11px] text-stone-500">
                      <span>Standard unit:</span>
                      <span className="font-bold text-stone-800 capitalize">1 {product.unit}</span>
                    </div>
                  )}

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => handleAddToCart(product)}
                    className={`w-full py-3 px-4 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-md active:scale-[0.98] ${
                      isJustAdded
                        ? "bg-emerald-600 text-white"
                        : "bg-[#0C1B33] hover:bg-red-700 text-white"
                    }`}
                  >
                    {isJustAdded ? (
                      <>
                        <Check className="w-4 h-4 text-white" />
                        <span>Added to Order!</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-4 h-4 text-amber-400" />
                        <span>Add to Cart ({currentPortion})</span>
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
