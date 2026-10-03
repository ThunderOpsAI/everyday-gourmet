"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useCart, CartItem, SavedOrder } from "@/context/CartContext";
import {
  ShoppingBag,
  X,
  Phone,
  Mail,
  Trash2,
  CheckCircle2,
  Clock,
  MapPin,
  Truck,
  Plus,
  Minus,
  AlertCircle,
  ArrowRight,
  ShieldCheck,
  Calendar,
} from "lucide-react";

export function OrderDrawer() {
  const {
    items,
    itemsCount,
    removeItem,
    incrementCount,
    decrementCount,
    updateQuantity,
    clearCart,
    totalEstimated,
    isOpen,
    setIsOpen,
  } = useCart();

  // Fulfilment state
  const [fulfillmentType, setFulfillmentType] = useState<"pickup" | "delivery">("delivery");

  // Contact & Fulfilment form fields
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [pickupSlot, setPickupSlot] = useState("Thursday Morning (8:00 AM – 12:00 PM)");
  const [deliveryDay, setDeliveryDay] = useState("Friday Dedicated Run (Yarrawonga / Mulwala / NE Vic)");
  const [customerNotes, setCustomerNotes] = useState("");

  // Validation & Submission state
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [completedOrder, setCompletedOrder] = useState<SavedOrder | null>(null);

  // Delivery Calculations
  const freeDeliveryThreshold = 100;
  const deliveryFee =
    fulfillmentType === "delivery" && totalEstimated < freeDeliveryThreshold ? 10 : 0;
  const finalTotal = totalEstimated + deliveryFee;
  const progressToFree = Math.min(
    100,
    Math.round((totalEstimated / freeDeliveryThreshold) * 100)
  );
  const amountToFree = Math.max(0, freeDeliveryThreshold - totalEstimated);

  if (!isOpen) return null;

  const validateForm = (): boolean => {
    const errs: Record<string, string> = {};

    if (!customerName.trim()) {
      errs.name = "Full name is required";
    }

    if (!customerPhone.trim()) {
      errs.phone = "Mobile phone number is required";
    } else if (customerPhone.trim().length < 8) {
      errs.phone = "Please enter a valid phone number";
    }

    if (!customerEmail.trim()) {
      errs.email = "Email address is required";
    } else if (!customerEmail.includes("@") || !customerEmail.includes(".")) {
      errs.email = "Please enter a valid email address";
    }

    if (fulfillmentType === "delivery") {
      if (!customerAddress.trim()) {
        errs.address = "Delivery address is required for regional delivery";
      }
    } else {
      if (!pickupSlot) {
        errs.pickupSlot = "Please choose a pickup time window";
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const uniqueId = `EG-${Math.floor(100000 + Math.random() * 900000)}`;
    const newOrder: SavedOrder = {
      id: uniqueId,
      createdAt: new Date().toISOString(),
      items: [...items],
      fulfillment: {
        type: fulfillmentType,
        address: fulfillmentType === "delivery" ? customerAddress : undefined,
        pickupSlot: fulfillmentType === "pickup" ? pickupSlot : undefined,
        deliveryDay: fulfillmentType === "delivery" ? deliveryDay : undefined,
        fee: deliveryFee,
      },
      customer: {
        name: customerName.trim(),
        phone: customerPhone.trim(),
        email: customerEmail.trim(),
        notes: customerNotes.trim() || undefined,
      },
      subtotal: totalEstimated,
      deliveryFee,
      total: finalTotal,
      status: "Confirmed",
    };

    // Save to localStorage under 'eg_order_history'
    try {
      const existingHistoryStr = localStorage.getItem("eg_order_history");
      const existingHistory: SavedOrder[] = existingHistoryStr
        ? JSON.parse(existingHistoryStr)
        : [];
      const updatedHistory = [newOrder, ...existingHistory];
      localStorage.setItem("eg_order_history", JSON.stringify(updatedHistory));
    } catch (err) {
      console.error("Failed to save order to localStorage:", err);
    }

    // Set completed confirmation and empty active cart
    setCompletedOrder(newOrder);
    clearCart();
  };

  const handleResetForNewOrder = () => {
    setCompletedOrder(null);
    setErrors({});
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/65 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-[#FAF8F5] text-stone-900 h-full flex flex-col shadow-2xl border-l border-stone-200 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Your Order Bag"
      >
        {/* Drawer Header */}
        <div className="bg-[#0C1B33] text-white p-5 flex items-center justify-between shrink-0 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
                <span>Your Order Bag</span>
                {!completedOrder && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-amber-300">
                    {itemsCount} {itemsCount === 1 ? "item" : "items"}
                  </span>
                )}
              </h2>
              <p className="text-[11px] text-stone-300">
                Fresh cut &amp; packed to order at 25 Rowan Street, Wangaratta
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Close order drawer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ORDER CONFIRMATION SCREEN */}
        {completedOrder ? (
          <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-6 text-center pt-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full mx-auto flex items-center justify-center text-3xl shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <div>
                <span className="text-xs font-black uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-300">
                  Order Successfully Placed!
                </span>
                <h3 className="text-2xl font-black text-stone-900 mt-3">
                  Thank You, {completedOrder.customer.name}!
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-sm mx-auto">
                  Your order has been recorded and received by Dan &amp; Brodie in our Wangaratta butcher kitchen.
                </p>
              </div>

              {/* Order Reference Badge */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-sm text-left space-y-3">
                <div className="flex items-center justify-between pb-3 border-b border-stone-100">
                  <span className="text-xs text-stone-500 font-semibold">Order Reference:</span>
                  <span className="text-sm font-black text-red-700 bg-red-50 px-2.5 py-1 rounded-lg border border-red-200">
                    {completedOrder.id}
                  </span>
                </div>

                <div className="text-xs space-y-1.5 text-stone-600">
                  <div className="flex justify-between">
                    <span>Fulfilment Method:</span>
                    <strong className="text-stone-900 capitalize">
                      {completedOrder.fulfillment.type === "delivery"
                        ? "🚚 Refrigerated Van Delivery"
                        : "🏬 Storefront Click & Collect"}
                    </strong>
                  </div>

                  {completedOrder.fulfillment.type === "delivery" ? (
                    <>
                      <div className="flex justify-between">
                        <span>Delivery Address:</span>
                        <span className="font-semibold text-stone-800 text-right max-w-[200px]">
                          {completedOrder.fulfillment.address}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scheduled Run:</span>
                        <span className="text-stone-800 font-medium text-right">
                          {completedOrder.fulfillment.deliveryDay}
                        </span>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex justify-between">
                        <span>Pickup Location:</span>
                        <span className="font-semibold text-stone-800">25 Rowan St, Wangaratta</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pickup Time Window:</span>
                        <span className="text-stone-800 font-medium text-right">
                          {completedOrder.fulfillment.pickupSlot}
                        </span>
                      </div>
                    </>
                  )}

                  <div className="flex justify-between pt-2 border-t border-stone-100 text-sm font-bold text-stone-900">
                    <span>Total Placed:</span>
                    <span className="text-red-700 tabular-nums">
                      ${completedOrder.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Itemized Snapshot */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200/90 shadow-sm text-left">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Items Breakdown ({completedOrder.items.length})
                </h4>
                <ul className="divide-y divide-stone-100 text-xs text-stone-700">
                  {completedOrder.items.map((it, idx) => (
                    <li key={idx} className="py-2 flex items-center justify-between">
                      <div>
                        <span className="font-semibold">{it.count}x {it.name}</span>
                        <span className="block text-[11px] text-stone-500">{it.quantity}</span>
                      </div>
                      <span className="font-bold tabular-nums">
                        ${(it.price * (it.count || 1)).toFixed(2)}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Notice */}
              <p className="text-[11px] text-stone-500 leading-relaxed">
                A confirmation has been logged to your local order history. Cuts are hand-prepared fresh before dispatch. Questions? Call us on{" "}
                <a href="tel:0357213444" className="font-bold text-red-700 underline">
                  (03) 5721 3444
                </a>.
              </p>
            </div>

            <div className="space-y-2 pt-4">
              <Link
                href="/orders"
                onClick={() => setIsOpen(false)}
                className="w-full py-3 px-4 bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
              >
                <span>View Full Order History &amp; Reorder →</span>
              </Link>
              <button
                onClick={handleResetForNewOrder}
                className="w-full py-2.5 px-4 bg-stone-200/80 hover:bg-stone-300 text-stone-800 font-bold text-xs rounded-xl transition-all"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        ) : (
          /* ACTIVE CART & CHECKOUT FORM */
          <>
            {/* Free Delivery Bar (if delivery is selected) */}
            {fulfillmentType === "delivery" && items.length > 0 && (
              <div className="bg-amber-500/10 border-b border-amber-500/20 px-5 py-2.5 shrink-0">
                <div className="flex items-center justify-between text-xs font-semibold text-stone-800 mb-1">
                  <span className="flex items-center gap-1.5 text-amber-900">
                    <Truck className="w-3.5 h-3.5 text-amber-700" />
                    {amountToFree === 0
                      ? "🎉 Qualified for Free Refrigerated Delivery!"
                      : `Add $${amountToFree.toFixed(2)} more for Free Delivery`}
                  </span>
                  <span className="font-bold text-amber-900 tabular-nums">{progressToFree}%</span>
                </div>
                <div className="w-full bg-stone-200 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-amber-600 h-full rounded-full transition-all duration-300"
                    style={{ width: `${progressToFree}%` }}
                  />
                </div>
              </div>
            )}

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto p-5 space-y-5">
              {items.length === 0 ? (
                <div className="text-center py-16 px-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-3xl">
                    🥩
                  </div>
                  <h3 className="text-base font-bold text-stone-800">Your bag is currently empty</h3>
                  <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1 leading-relaxed">
                    Explore our award-winning sausages, grass-fed steaks, freezer bundles, or scratch-made pies to start your order.
                  </p>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="mt-6 px-5 py-2.5 bg-[#0C1B33] text-white text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-sm"
                  >
                    Browse Catalog
                  </button>
                </div>
              ) : (
                <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-5">
                  {/* Itemized Order List */}
                  <div className="space-y-2.5">
                    <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-semibold">
                      <span>Selected Products ({itemsCount})</span>
                      <button
                        type="button"
                        onClick={clearCart}
                        className="text-stone-400 hover:text-red-600 transition-colors"
                      >
                        Clear All
                      </button>
                    </div>

                    {items.map((item) => (
                      <div
                        key={item.id}
                        className="p-3.5 bg-white rounded-2xl border border-stone-200/80 shadow-sm flex items-start justify-between gap-3 group"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                              {item.name}
                            </h4>
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="text-stone-400 hover:text-red-600 p-1 transition-colors"
                              title="Remove item"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>

                          <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                            <span className="text-[10px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-semibold">
                              {item.category}
                            </span>
                            <span className="font-semibold text-amber-900 tabular-nums">
                              {item.priceFormatted}
                            </span>
                          </div>

                          {/* Controls Row: Portion Selector & Increment/Decrement */}
                          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-stone-100">
                            {/* Portion Size */}
                            <div className="flex items-center gap-1.5">
                              <span className="text-[11px] text-stone-500">Portion:</span>
                              <select
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, e.target.value)}
                                className="text-xs bg-stone-50 border border-stone-200 rounded px-2 py-0.5 font-bold text-stone-800"
                              >
                                <option value="500g">500g</option>
                                <option value="1kg">1kg</option>
                                <option value="1.5kg">1.5kg</option>
                                <option value="2kg">2kg</option>
                                <option value="1 each">1 each</option>
                                <option value="1 pack">1 pack</option>
                              </select>
                            </div>

                            {/* Count Stepper */}
                            <div className="flex items-center gap-1.5 bg-stone-100 p-1 rounded-xl border border-stone-200">
                              <button
                                type="button"
                                onClick={() => decrementCount(item.id)}
                                className="w-6 h-6 rounded-lg bg-white hover:bg-stone-200 flex items-center justify-center text-stone-800 font-bold text-xs shadow-xs transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="text-xs font-bold text-stone-900 px-2 tabular-nums">
                                {item.count || 1}
                              </span>
                              <button
                                type="button"
                                onClick={() => incrementCount(item.id)}
                                className="w-6 h-6 rounded-lg bg-white hover:bg-stone-200 flex items-center justify-center text-stone-800 font-bold text-xs shadow-xs transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* FULFILMENT SWITCHER */}
                  <div className="bg-white p-4 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-700">
                      Step 1: Choose Fulfilment Method
                    </label>

                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => setFulfillmentType("delivery")}
                        className={`p-3 rounded-2xl border text-left text-xs transition-all flex flex-col justify-between ${
                          fulfillmentType === "delivery"
                            ? "border-[#0C1B33] bg-[#0C1B33] text-white shadow-md ring-2 ring-amber-500/40"
                            : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
                        }`}
                      >
                        <span className="font-black flex items-center gap-1.5 text-sm">
                          <Truck className="w-4 h-4 text-amber-400" />
                          Refrigerated Delivery
                        </span>
                        <span className="text-[10px] opacity-80 mt-1">
                          150km Radius · Free on $100+
                        </span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setFulfillmentType("pickup")}
                        className={`p-3 rounded-2xl border text-left text-xs transition-all flex flex-col justify-between ${
                          fulfillmentType === "pickup"
                            ? "border-[#0C1B33] bg-[#0C1B33] text-white shadow-md ring-2 ring-amber-500/40"
                            : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
                        }`}
                      >
                        <span className="font-black flex items-center gap-1.5 text-sm">
                          <MapPin className="w-4 h-4 text-amber-400" />
                          Storefront Pick Up
                        </span>
                        <span className="text-[10px] opacity-80 mt-1">
                          25 Rowan St, Wangaratta · Free
                        </span>
                      </button>
                    </div>

                    {/* Fulfilment Details View */}
                    {fulfillmentType === "delivery" ? (
                      <div className="p-3 bg-blue-50/80 rounded-2xl border border-blue-200/80 text-xs space-y-2">
                        <div className="flex items-start gap-2 text-blue-950 font-semibold">
                          <Truck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                          <div>
                            <p className="leading-snug">
                              Refrigerated cold-chain delivery across 150km regional radius.
                            </p>
                            <span className="text-[11px] text-blue-800 font-normal">
                              Delivery fee is <strong>FREE</strong> for orders $100+, or $10.00 for smaller orders.
                            </span>
                          </div>
                        </div>

                        {/* Delivery Day Selector */}
                        <div className="pt-2 border-t border-blue-200/60">
                          <label className="block text-[11px] font-bold text-blue-900 mb-1">
                            Select Delivery Run:
                          </label>
                          <select
                            value={deliveryDay}
                            onChange={(e) => setDeliveryDay(e.target.value)}
                            className="w-full text-xs font-semibold bg-white border border-blue-200 rounded-xl px-2.5 py-1.5 text-stone-900 focus:outline-none focus:ring-1 focus:ring-blue-500"
                          >
                            <option value="Friday Dedicated Run (Yarrawonga / Mulwala / NE Vic)">
                              Friday Dedicated Run (Yarrawonga / Mulwala / NE Vic)
                            </option>
                            <option value="Thursday Wangaratta Local Run">
                              Thursday Wangaratta Local Run
                            </option>
                            <option value="Saturday Morning Weekend Run">
                              Saturday Morning Weekend Run
                            </option>
                          </select>
                        </div>
                      </div>
                    ) : (
                      <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200/80 text-xs space-y-2">
                        <div className="flex items-start gap-2 text-amber-950 font-semibold">
                          <MapPin className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
                          <div>
                            <p className="leading-snug">
                              Storefront: <strong>25 Rowan Street, Wangaratta VIC 3677</strong>
                            </p>
                            <span className="text-[11px] text-amber-900 font-normal">
                              Retail Hours: Thursday – Saturday, 6:00 AM – 6:00 PM (No Fee).
                            </span>
                          </div>
                        </div>

                        {/* Pickup Slot Selector */}
                        <div className="pt-2 border-t border-amber-200/60">
                          <label className="block text-[11px] font-bold text-amber-950 mb-1">
                            Choose Pickup Time Slot:
                          </label>
                          <select
                            value={pickupSlot}
                            onChange={(e) => setPickupSlot(e.target.value)}
                            className="w-full text-xs font-semibold bg-white border border-amber-200 rounded-xl px-2.5 py-1.5 text-stone-900 focus:outline-none focus:ring-1 focus:ring-amber-500"
                          >
                            <option value="Thursday Morning (8:00 AM – 12:00 PM)">
                              Thursday Morning (8:00 AM – 12:00 PM)
                            </option>
                            <option value="Thursday Afternoon (12:00 PM – 5:30 PM)">
                              Thursday Afternoon (12:00 PM – 5:30 PM)
                            </option>
                            <option value="Friday Morning (8:00 AM – 12:00 PM)">
                              Friday Morning (8:00 AM – 12:00 PM)
                            </option>
                            <option value="Friday Afternoon (12:00 PM – 5:30 PM)">
                              Friday Afternoon (12:00 PM – 5:30 PM)
                            </option>
                            <option value="Saturday Morning (8:00 AM – 1:00 PM)">
                              Saturday Morning (8:00 AM – 1:00 PM)
                            </option>
                            <option value="Saturday Afternoon (1:00 PM – 4:00 PM)">
                              Saturday Afternoon (1:00 PM – 4:00 PM)
                            </option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* CHECKOUT CONTACT & ADDRESS FORM */}
                  <div className="bg-white p-4 rounded-3xl border border-stone-200/90 shadow-sm space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                      Step 2: Contact &amp; Checkout Details
                    </h4>

                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Mitchell"
                        value={customerName}
                        onChange={(e) => {
                          setCustomerName(e.target.value);
                          if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
                        }}
                        className={`w-full text-xs px-3.5 py-2.5 border rounded-xl outline-none transition-all ${
                          errors.name
                            ? "border-red-500 bg-red-50/50"
                            : "border-stone-200 bg-stone-50 focus:bg-white focus:border-[#0C1B33]"
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[10px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Phone & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold text-stone-700 mb-1">
                          Mobile Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          placeholder="e.g. 0412 345 678"
                          value={customerPhone}
                          onChange={(e) => {
                            setCustomerPhone(e.target.value);
                            if (errors.phone) setErrors((prev) => ({ ...prev, phone: "" }));
                          }}
                          className={`w-full text-xs px-3.5 py-2.5 border rounded-xl outline-none transition-all ${
                            errors.phone
                              ? "border-red-500 bg-red-50/50"
                              : "border-stone-200 bg-stone-50 focus:bg-white focus:border-[#0C1B33]"
                          }`}
                        />
                        {errors.phone && (
                          <p className="text-[10px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.phone}</span>
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold text-stone-700 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          placeholder="e.g. sarah@example.com"
                          value={customerEmail}
                          onChange={(e) => {
                            setCustomerEmail(e.target.value);
                            if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
                          }}
                          className={`w-full text-xs px-3.5 py-2.5 border rounded-xl outline-none transition-all ${
                            errors.email
                              ? "border-red-500 bg-red-50/50"
                              : "border-stone-200 bg-stone-50 focus:bg-white focus:border-[#0C1B33]"
                          }`}
                        />
                        {errors.email && (
                          <p className="text-[10px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Delivery Address (only if delivery) */}
                    {fulfillmentType === "delivery" && (
                      <div>
                        <label className="block text-[11px] font-bold text-stone-700 mb-1">
                          Delivery Street Address &amp; Suburb <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 14 Murphy Street, Wangaratta VIC 3677"
                          value={customerAddress}
                          onChange={(e) => {
                            setCustomerAddress(e.target.value);
                            if (errors.address) setErrors((prev) => ({ ...prev, address: "" }));
                          }}
                          className={`w-full text-xs px-3.5 py-2.5 border rounded-xl outline-none transition-all ${
                            errors.address
                              ? "border-red-500 bg-red-50/50"
                              : "border-stone-200 bg-stone-50 focus:bg-white focus:border-[#0C1B33]"
                          }`}
                        />
                        {errors.address && (
                          <p className="text-[10px] text-red-600 mt-1 font-semibold flex items-center gap-1">
                            <AlertCircle className="w-3 h-3" />
                            <span>{errors.address}</span>
                          </p>
                        )}
                      </div>
                    )}

                    {/* Notes */}
                    <div>
                      <label className="block text-[11px] font-bold text-stone-700 mb-1">
                        Butcher Preparation Notes / Packaging Requests (Optional)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Vacuum seal individually, leave skin on pork roast"
                        value={customerNotes}
                        onChange={(e) => setCustomerNotes(e.target.value)}
                        className="w-full text-xs px-3.5 py-2.5 border border-stone-200 bg-stone-50 rounded-xl outline-none focus:bg-white focus:border-[#0C1B33]"
                      />
                    </div>
                  </div>
                </form>
              )}
            </div>

            {/* Footer Summary & Place Order Action */}
            {items.length > 0 && (
              <div className="bg-white border-t border-stone-200 p-5 shrink-0 shadow-xl space-y-3">
                <div className="space-y-1.5 text-xs text-stone-600">
                  <div className="flex justify-between">
                    <span>Items Subtotal:</span>
                    <span className="font-bold text-stone-900 tabular-nums">
                      ${totalEstimated.toFixed(2)}
                    </span>
                  </div>

                  {fulfillmentType === "delivery" && (
                    <div className="flex justify-between">
                      <span>Refrigerated Delivery:</span>
                      <span
                        className={`font-bold tabular-nums ${
                          deliveryFee === 0 ? "text-emerald-600" : "text-stone-900"
                        }`}
                      >
                        {deliveryFee === 0 ? "FREE ($100+ Order)" : "$10.00"}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-base font-black text-stone-950 pt-2 border-t border-stone-100">
                    <span>Total To Pay:</span>
                    <span className="text-xl tabular-nums text-red-700">
                      ${finalTotal.toFixed(2)}
                    </span>
                  </div>

                  <p className="text-[10px] text-stone-400">
                    *Exact weight confirmed at butcher scales. Pay on collection or delivery (cash, card, EFT).
                  </p>
                </div>

                {/* Submit Order Button */}
                <button
                  type="submit"
                  form="checkout-form"
                  className="w-full py-3.5 px-4 rounded-2xl bg-red-600 hover:bg-red-700 text-white font-black text-sm flex items-center justify-center gap-2 shadow-lg shadow-red-600/30 transition-all hover:scale-[1.01] active:scale-[0.98]"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>Place Butcher Order (${finalTotal.toFixed(2)})</span>
                </button>

                {/* Direct Phone Assistance */}
                <div className="pt-1 flex items-center justify-between text-[11px] text-stone-500">
                  <span>Need help ordering?</span>
                  <a
                    href="tel:0357213444"
                    className="font-bold text-red-700 hover:underline flex items-center gap-1"
                  >
                    <Phone className="w-3 h-3" />
                    <span>(03) 5721 3444</span>
                  </a>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OrderDrawer;
