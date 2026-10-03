"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, X, Phone, Mail, Trash2, CheckCircle2, Clock, MapPin, Truck } from "lucide-react";

export function OrderDrawer() {
  const { items, removeItem, updateQuantity, clearCart, totalEstimated, isOpen, setIsOpen } = useCart();
  const [fulfillmentType, setFulfillmentType] = useState<"pickup" | "delivery">("delivery");
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [customerNotes, setCustomerNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const freeDeliveryThreshold = 100;
  const deliveryFee = fulfillmentType === "delivery" && totalEstimated < freeDeliveryThreshold ? 10 : 0;
  const finalTotal = totalEstimated + deliveryFee;
  const progressToFree = Math.min(100, Math.round((totalEstimated / freeDeliveryThreshold) * 100));
  const amountToFree = Math.max(0, freeDeliveryThreshold - totalEstimated);

  if (!isOpen) return null;

  const generateMailto = () => {
    const subject = encodeURIComponent(`Butcher Order: ${customerName || "Customer Request"} - Everyday Gourmet`);
    const body = `Hi Dan & Brodie,\n\nI would like to place an order from Your Everyday Gourmet:\n\n` +
      `FULFILLMENT: ${fulfillmentType === "delivery" ? "Refrigerated Delivery" : "Click & Collect (25 Rowan St)"}\n` +
      `CONTACT NAME: ${customerName || "Not provided"}\n` +
      `PHONE: ${customerPhone || "Not provided"}\n` +
      (fulfillmentType === "delivery" ? `DELIVERY ADDRESS: ${customerAddress || "Not provided"}\n` : "") +
      `PREFERRED DATE / TIME: ${preferredDate || "Earliest available"}\n` +
      (customerNotes ? `NOTES / PACKAGING: ${customerNotes}\n` : "") +
      `\n--------------------------------------------\n` +
      `ORDER ITEMS (${items.length}):\n` +
      items.map((it, i) => `${i + 1}. ${it.name} [${it.category}] - ${it.quantity} @ ${it.priceFormatted}${it.notes ? ` (Note: ${it.notes})` : ""}`).join("\n") +
      `\n--------------------------------------------\n` +
      `Estimated Subtotal: $${totalEstimated.toFixed(2)}\n` +
      (fulfillmentType === "delivery" ? `Delivery Fee: ${deliveryFee === 0 ? "FREE (Orders over $100)" : "$10.00"}\n` : "") +
      `Estimated Total: $${finalTotal.toFixed(2)}\n\n` +
      `Please confirm my order ready time or delivery schedule. Thank you!`;

    return `mailto:General_youreverydaygourmet@yahoo.com?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const handlePhoneOrder = () => {
    window.location.href = "tel:0357213444";
  };

  return (
    <div className="fixed inset-0 z-[100] flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg bg-[#FAF8F5] text-stone-900 h-full flex flex-col shadow-2xl border-l border-stone-200 relative overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Your Order Bag"
      >
        {/* Drawer Header */}
        <div className="bg-[#0C1B33] text-white p-5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white shadow-sm">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight flex items-center gap-2">
                Your Order Bag
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-white/10 text-amber-300">
                  {items.length} {items.length === 1 ? "item" : "items"}
                </span>
              </h2>
              <p className="text-[11px] text-stone-300">Fresh cut &amp; packed to order in Wangaratta</p>
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

        {/* Free Delivery Bar */}
        {fulfillmentType === "delivery" && (
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

        {/* Items List / Empty State */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-stone-100 flex items-center justify-center text-3xl">
                🥩
              </div>
              <h3 className="text-base font-bold text-stone-800">Your bag is currently empty</h3>
              <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1 leading-relaxed">
                Explore our AMIC Gold medal sausages, grass-fed steaks, value packs, or scratch-made family pies to start your order.
              </p>
              <button
                onClick={() => setIsOpen(false)}
                className="mt-6 px-5 py-2.5 bg-[#0C1B33] text-white text-xs font-bold rounded-xl hover:bg-stone-800 transition-colors shadow-sm"
              >
                Browse Store Catalog
              </button>
            </div>
          ) : (
            <>
              {/* Fulfillment Method Selector */}
              <div className="bg-white p-3.5 rounded-2xl border border-stone-200/80 shadow-sm">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2">
                  Choose Collection or Delivery
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => setFulfillmentType("delivery")}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                      fulfillmentType === "delivery"
                        ? "border-[#0C1B33] bg-[#0C1B33] text-white shadow-sm"
                        : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5" />
                      Home Delivery
                    </span>
                    <span className="text-[10px] opacity-80 mt-1">Refrigerated Van</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFulfillmentType("pickup")}
                    className={`p-2.5 rounded-xl border text-left text-xs transition-all flex flex-col justify-between ${
                      fulfillmentType === "pickup"
                        ? "border-[#0C1B33] bg-[#0C1B33] text-white shadow-sm"
                        : "border-stone-200 bg-stone-50 text-stone-700 hover:bg-white"
                    }`}
                  >
                    <span className="font-bold flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5" />
                      Click &amp; Collect
                    </span>
                    <span className="text-[10px] opacity-80 mt-1">25 Rowan St, Wangaratta</span>
                  </button>
                </div>
              </div>

              {/* Itemized Order List */}
              <div className="space-y-2.5">
                <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-semibold">
                  <span>Selected Products</span>
                  <button
                    onClick={clearCart}
                    className="text-stone-400 hover:text-red-600 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.id}
                    className="p-3.5 bg-white rounded-xl border border-stone-200/80 shadow-sm flex items-start justify-between gap-3 group"
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h4 className="text-xs sm:text-sm font-bold text-stone-900 truncate">
                          {item.name}
                        </h4>
                      </div>
                      <div className="flex items-center gap-2 text-xs text-stone-500 mt-1">
                        <span className="text-[11px] px-1.5 py-0.5 rounded bg-stone-100 text-stone-700 font-medium">
                          {item.category}
                        </span>
                        <span className="font-semibold text-amber-900 tabular-nums">
                          {item.priceFormatted}
                        </span>
                      </div>

                      {/* Portion & Custom Notes */}
                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-stone-500 font-medium">Portion:</span>
                        <select
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, e.target.value)}
                          className="text-xs bg-stone-50 border border-stone-200 rounded px-2 py-0.5 font-bold text-stone-800"
                        >
                          <option value="500g">500g</option>
                          <option value="1kg">1kg</option>
                          <option value="1.5kg">1.5kg</option>
                          <option value="2kg">2kg</option>
                          <option value="3kg">3kg</option>
                          <option value="1 ea">1 ea</option>
                          <option value="2 ea">2 ea</option>
                          <option value="4 ea">4 ea</option>
                          <option value="1 Pack">1 Pack</option>
                        </select>
                      </div>

                      {item.notes && (
                        <p className="text-[11px] text-amber-800 bg-amber-50 rounded px-2 py-0.5 mt-1.5 border border-amber-200">
                          Note: {item.notes}
                        </p>
                      )}
                    </div>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-1.5 text-stone-400 hover:text-red-600 rounded-lg hover:bg-stone-50 transition-colors"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Customer Contact & Delivery Info */}
              <div className="bg-white p-4 rounded-2xl border border-stone-200/80 shadow-sm space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  {fulfillmentType === "delivery" ? "Delivery Details" : "Contact Information"}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Sarah Mitchell"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg outline-none focus:border-[#0C1B33]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Mobile Phone</label>
                    <input
                      type="tel"
                      placeholder="e.g. 0412 345 678"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg outline-none focus:border-[#0C1B33]"
                    />
                  </div>
                </div>

                {fulfillmentType === "delivery" && (
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">
                      Delivery Address (Wangaratta, Yarrawonga, Mulwala, etc.)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 14 Murphy Street, Wangaratta"
                      value={customerAddress}
                      onChange={(e) => setCustomerAddress(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg outline-none focus:border-[#0C1B33]"
                    />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Preferred Day</label>
                    <input
                      type="text"
                      placeholder="e.g. Friday Delivery or Thursday Pickup"
                      value={preferredDate}
                      onChange={(e) => setPreferredDate(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg outline-none focus:border-[#0C1B33]"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-600 mb-1">Packaging / Notes</label>
                    <input
                      type="text"
                      placeholder="e.g. Vacuum seal in 500g lots"
                      value={customerNotes}
                      onChange={(e) => setCustomerNotes(e.target.value)}
                      className="w-full text-xs px-3 py-2 border border-stone-200 rounded-lg outline-none focus:border-[#0C1B33]"
                    />
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Footer Checkout Summary */}
        {items.length > 0 && (
          <div className="bg-white border-t border-stone-200 p-5 shrink-0 shadow-lg space-y-3">
            <div className="space-y-1.5 text-xs text-stone-600">
              <div className="flex justify-between">
                <span>Items Subtotal:</span>
                <span className="font-bold text-stone-900 tabular-nums">${totalEstimated.toFixed(2)}</span>
              </div>
              {fulfillmentType === "delivery" && (
                <div className="flex justify-between">
                  <span>Refrigerated Delivery:</span>
                  <span className={`font-bold tabular-nums ${deliveryFee === 0 ? "text-emerald-600" : "text-stone-900"}`}>
                    {deliveryFee === 0 ? "FREE ($100+ Order)" : "$10.00"}
                  </span>
                </div>
              )}
              <div className="flex justify-between text-base font-black text-stone-950 pt-2 border-t border-stone-100">
                <span>Estimated Total:</span>
                <span className="text-xl tabular-nums text-red-700">${finalTotal.toFixed(2)}</span>
              </div>
              <p className="text-[10px] text-stone-400">
                *Final price weighed exactly at the butcher scale. No advance payment required online.
              </p>
            </div>

            {/* Ordering CTA Options */}
            <div className="pt-1 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <a
                  href={generateMailto()}
                  className="py-3 px-3 rounded-xl bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.98]"
                >
                  <Mail className="w-4 h-4 text-amber-400" />
                  <span>1-Click Email Order</span>
                </a>

                <a
                  href="tel:0357213444"
                  style={{ backgroundColor: "#D71920" }}
                  className="py-3 px-3 rounded-xl hover:bg-[#b8141a] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 text-white" />
                  <span>(03) 5721 3444</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = "/track-order";
                }}
                className="w-full py-2 text-center text-xs text-stone-500 hover:text-stone-800 flex items-center justify-center gap-1.5 transition-colors"
              >
                <Truck className="w-3.5 h-3.5 text-amber-600" />
                <span>Have an existing order? Track Live Stages →</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
