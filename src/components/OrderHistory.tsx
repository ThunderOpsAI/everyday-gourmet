"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useCart, SavedOrder } from "@/context/CartContext";
import {
  ShoppingBag,
  RotateCcw,
  Truck,
  MapPin,
  Calendar,
  Clock,
  CheckCircle2,
  Trash2,
  ArrowRight,
  Receipt,
  Phone,
  Package,
} from "lucide-react";

export function OrderHistory() {
  const [orders, setOrders] = useState<SavedOrder[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [reorderedId, setReorderedId] = useState<string | null>(null);
  const { addItem, setIsOpen } = useCart();

  useEffect(() => {
    try {
      const stored = localStorage.getItem("eg_order_history");
      if (stored) {
        const parsed: SavedOrder[] = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          // Sort newest first
          parsed.sort(
            (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          );
          setOrders(parsed);
        }
      }
    } catch (e) {
      console.error("Failed to parse orders from localStorage", e);
    } finally {
      setIsLoaded(true);
    }
  }, []);

  const handleReorder = (order: SavedOrder) => {
    // Add all items from the past order into the active cart
    order.items.forEach((item) => {
      addItem({
        name: item.name,
        category: item.category,
        price: item.price,
        priceFormatted: item.priceFormatted,
        quantity: item.quantity,
        count: item.count || 1,
        notes: item.notes,
      });
    });

    setReorderedId(order.id);
    setTimeout(() => {
      setReorderedId(null);
      setIsOpen(true);
    }, 600);
  };

  const handleRemoveOrder = (orderId: string) => {
    const updated = orders.filter((o) => o.id !== orderId);
    setOrders(updated);
    try {
      localStorage.setItem("eg_order_history", JSON.stringify(updated));
    } catch (e) {
      console.error("Failed to update orders in localStorage", e);
    }
  };

  const handleClearAllHistory = () => {
    if (window.confirm("Are you sure you want to clear your local order history?")) {
      setOrders([]);
      try {
        localStorage.removeItem("eg_order_history");
      } catch (e) {
        console.error("Failed to clear order history", e);
      }
    }
  };

  const formatDate = (isoString: string) => {
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat("en-AU", {
        day: "numeric",
        month: "short",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }).format(date);
    } catch {
      return isoString;
    }
  };

  if (!isLoaded) {
    return (
      <div className="py-20 text-center text-stone-500">
        <div className="w-8 h-8 border-2 border-stone-300 border-t-red-600 rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs font-semibold">Loading your order history...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm space-y-5">
          <div className="w-16 h-16 bg-amber-50 text-amber-700 rounded-2xl mx-auto flex items-center justify-center text-3xl shadow-inner">
            <Receipt className="w-8 h-8 text-amber-600" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-black text-stone-900 tracking-tight">
              No Past Orders Recorded Yet
            </h2>
            <p className="text-xs sm:text-sm text-stone-500 max-w-md mx-auto leading-relaxed">
              When you place orders for our AMIC Gold medal sausages, grass-fed steaks, freezer bundles, or chef-made pies, your order receipts will be stored here on your device for instant 1-click reordering.
            </p>
          </div>

          <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/menu"
              className="px-6 py-3 bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center gap-2 active:scale-95"
            >
              <span>Browse Full 100+ Menu</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/freezer-packs"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all active:scale-95"
            >
              Explore Value Freezer Packs
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 pb-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-black text-stone-900 tracking-tight">
            Your Previous Butcher Orders ({orders.length})
          </h2>
          <p className="text-xs text-stone-500 mt-0.5">
            Saved on your device. Click &ldquo;Reorder All Items&rdquo; to load the items straight into your current cart.
          </p>
        </div>

        <button
          onClick={handleClearAllHistory}
          className="text-xs font-semibold text-stone-400 hover:text-red-600 transition-colors self-start sm:self-auto py-1"
        >
          Clear History
        </button>
      </div>

      {/* Orders List */}
      <div className="space-y-6">
        {orders.map((order) => {
          const isReordered = reorderedId === order.id;

          return (
            <div
              key={order.id}
              className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
            >
              {/* Order Card Header */}
              <div className="bg-[#0C1B33] text-white p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-black bg-red-600 px-2.5 py-1 rounded-lg text-white">
                      {order.id}
                    </span>
                    <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>{order.status || "Confirmed"}</span>
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-stone-300 pt-0.5">
                    <Calendar className="w-3.5 h-3.5 text-stone-400" />
                    <span>{formatDate(order.createdAt)}</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-start sm:self-auto">
                  <button
                    onClick={() => handleReorder(order)}
                    disabled={isReordered}
                    className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 shadow-sm transition-all active:scale-95 ${
                      isReordered
                        ? "bg-emerald-600 text-white"
                        : "bg-amber-500 hover:bg-amber-400 text-stone-950"
                    }`}
                  >
                    <RotateCcw className={`w-3.5 h-3.5 ${isReordered ? "animate-spin" : ""}`} />
                    <span>{isReordered ? "Loading Cart..." : "Reorder All Items"}</span>
                  </button>

                  <button
                    onClick={() => handleRemoveOrder(order.id)}
                    className="p-2 text-stone-400 hover:text-red-400 rounded-lg transition-colors"
                    title="Remove from history"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Order Body Details */}
              <div className="p-5 sm:p-6 space-y-5">
                {/* Fulfilment & Customer Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-stone-100 text-xs text-stone-600">
                  <div className="space-y-2 p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      Fulfilment Method
                    </span>
                    {order.fulfillment.type === "delivery" ? (
                      <div className="space-y-1">
                        <div className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                          <Truck className="w-4 h-4 text-blue-600" />
                          <span>Refrigerated Regional Delivery</span>
                        </div>
                        <p className="text-stone-700">
                          <strong>Address:</strong> {order.fulfillment.address || "Local Delivery"}
                        </p>
                        {order.fulfillment.deliveryDay && (
                          <p className="text-stone-500">
                            <strong>Run:</strong> {order.fulfillment.deliveryDay}
                          </p>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-1">
                        <div className="font-bold text-stone-900 flex items-center gap-1.5 text-xs">
                          <MapPin className="w-4 h-4 text-red-600" />
                          <span>Storefront Pick Up (25 Rowan St, Wangaratta)</span>
                        </div>
                        {order.fulfillment.pickupSlot && (
                          <p className="text-stone-700">
                            <strong>Slot:</strong> {order.fulfillment.pickupSlot}
                          </p>
                        )}
                      </div>
                    )}
                  </div>

                  <div className="space-y-2 p-3.5 bg-stone-50 rounded-2xl border border-stone-200/70">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-stone-400 block">
                      Customer &amp; Contact
                    </span>
                    <p className="font-bold text-stone-900">{order.customer.name}</p>
                    <p className="text-stone-600">
                      <strong>Phone:</strong> {order.customer.phone} · <strong>Email:</strong> {order.customer.email}
                    </p>
                    {order.customer.notes && (
                      <p className="text-amber-900 bg-amber-50/80 px-2 py-1 rounded border border-amber-200/60 mt-1">
                        <strong>Notes:</strong> {order.customer.notes}
                      </p>
                    )}
                  </div>
                </div>

                {/* Items Breakdown Table */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2.5">
                    Ordered Cuts &amp; Meals ({order.items.length})
                  </h4>
                  <div className="divide-y divide-stone-100 border border-stone-200/80 rounded-2xl overflow-hidden bg-white">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-3 sm:px-4 flex items-center justify-between text-xs hover:bg-stone-50 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="w-6 h-6 rounded-lg bg-stone-100 text-stone-800 font-bold flex items-center justify-center text-[11px] shrink-0">
                            {item.count || 1}x
                          </span>
                          <div>
                            <span className="font-bold text-stone-900 block">{item.name}</span>
                            <div className="flex items-center gap-2 text-[11px] text-stone-500">
                              <span>{item.category}</span>
                              <span>·</span>
                              <span>{item.quantity}</span>
                              {item.notes && <span className="text-amber-800 font-medium">({item.notes})</span>}
                            </div>
                          </div>
                        </div>

                        <span className="font-black text-stone-900 tabular-nums shrink-0">
                          ${(item.price * (item.count || 1)).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Order Totals Line */}
                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs bg-stone-50/80 p-4 rounded-2xl border border-stone-200/60">
                  <div className="flex items-center gap-4 text-stone-500">
                    <span>
                      Subtotal: <strong className="text-stone-900">${order.subtotal.toFixed(2)}</strong>
                    </span>
                    <span>·</span>
                    <span>
                      Delivery:{" "}
                      <strong className={order.deliveryFee === 0 ? "text-emerald-600" : "text-stone-900"}>
                        {order.deliveryFee === 0 ? "FREE" : `$${order.deliveryFee.toFixed(2)}`}
                      </strong>
                    </span>
                  </div>

                  <div className="text-right flex items-baseline justify-between sm:justify-end gap-2">
                    <span className="font-bold text-stone-600">Order Total:</span>
                    <span className="text-lg font-black text-red-700 tabular-nums">
                      ${order.total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OrderHistory;
