"use client";

import React, { useState } from "react";
import { CheckCircle2, Clock, Truck, ChefHat, Package, MapPin, Phone, Search, AlertCircle, ThermometerSnowflake, ShieldCheck } from "lucide-react";

export type OrderStage = "confirmed" | "preparing" | "in_transit" | "delivered";

export interface DemoOrder {
  orderId: string;
  customerName: string;
  stage: OrderStage;
  fulfillmentType: "delivery" | "pickup";
  address: string;
  orderDate: string;
  estimatedTime: string;
  vanTemp?: string;
  items: { name: string; quantity: string; price: string }[];
  total: string;
  notes?: string;
}

export const DEMO_ORDERS: Record<string, DemoOrder> = {
  "EG-8142": {
    orderId: "EG-8142",
    customerName: "Sarah M.",
    stage: "in_transit",
    fulfillmentType: "delivery",
    address: "28 Tone Road, Wangaratta VIC",
    orderDate: "Today, 8:30 AM",
    estimatedTime: "Today between 1:30 PM – 2:30 PM",
    vanTemp: "2.4°C (Compliant Cold-Chain)",
    items: [
      { name: "Super Savors Pack (Vacuum Sealed)", quantity: "1 Pack", price: "$99.00" },
      { name: "Lamb, Fetta & Sun-Dried Tomato Sausages", quantity: "1.5kg", price: "$32.99" },
      { name: "Family Beef Lasagna Tray", quantity: "1 Tray", price: "$24.99" },
    ],
    total: "$156.98",
    notes: "Please leave in shaded veranda if not home.",
  },
  "EG-9310": {
    orderId: "EG-9310",
    customerName: "David L.",
    stage: "preparing",
    fulfillmentType: "pickup",
    address: "Store Pickup: 25 Rowan Street, Wangaratta",
    orderDate: "Today, 9:15 AM",
    estimatedTime: "Ready for Pickup today at 3:00 PM",
    items: [
      { name: "Grass-Fed Porterhouse Steaks (1.5 inch thick)", quantity: "1.2kg", price: "$46.79" },
      { name: "Hand-Crumbed Chicken Schnitzels", quantity: "1kg", price: "$19.99" },
      { name: "Hardcore Carnivore 'Black' BBQ Rub", quantity: "1 Jar", price: "$24.95" },
    ],
    total: "$91.73",
    notes: "Vacuum seal steaks in pairs for the freezer.",
  },
  "EG-4201": {
    orderId: "EG-4201",
    customerName: "Mark & Julie K.",
    stage: "confirmed",
    fulfillmentType: "delivery",
    address: "Belmore Street, Yarrawonga VIC",
    orderDate: "Yesterday, 3:45 PM",
    estimatedTime: "Friday Morning Refrigerated Run (9:00 AM – 11:30 AM)",
    vanTemp: "Scheduled Van #2",
    items: [
      { name: "The Freezer Filler Pack", quantity: "15kg+ Bulk", price: "$200.00" },
      { name: "Chicken Thai Green Curry Pies (Pack of 2)", quantity: "2 Pies", price: "$18.00" },
      { name: "Rich Glen Yarrawonga Olive Oil (500ml)", quantity: "1 Bottle", price: "$18.95" },
    ],
    total: "$236.95",
    notes: "Friday Yarrawonga scheduled delivery.",
  },
  "EG-7719": {
    orderId: "EG-7719",
    customerName: "Geoff P.",
    stage: "delivered",
    fulfillmentType: "delivery",
    address: "Greta Road, Wangaratta VIC",
    orderDate: "Today, 7:00 AM",
    estimatedTime: "Delivered at 11:45 AM",
    vanTemp: "Delivered chilled",
    items: [
      { name: "Standard BBQ Pack", quantity: "1 Pack", price: "$45.00" },
      { name: "Brisket Jalapeño & Cheese Sausages", quantity: "1kg", price: "$22.99" },
    ],
    total: "$67.99",
    notes: "Handed directly to customer at front door.",
  },
};

export function OrderStatusTracker() {
  const [activeOrderId, setActiveOrderId] = useState<string>("EG-8142");
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchError, setSearchError] = useState<string | null>(null);

  const order = DEMO_ORDERS[activeOrderId] || DEMO_ORDERS["EG-8142"];

  const stages = [
    {
      id: "confirmed",
      label: "Order Confirmed",
      desc: "Order received & verified by butcher block at 25 Rowan St.",
      icon: Package,
    },
    {
      id: "preparing",
      label: "Chef & Butcher Prep",
      desc: "Fresh carcass slicing, hand-crumbing schnitzels & cryovac sealing.",
      icon: ChefHat,
    },
    {
      id: "in_transit",
      label: order.fulfillmentType === "delivery" ? "In Delivery Van" : "Ready at Counter",
      desc:
        order.fulfillmentType === "delivery"
          ? "Loaded into refrigerated cold-chain van (2.4°C). Driver en route."
          : "Chilled in retail display fridge ready for pickup at 25 Rowan St.",
      icon: Truck,
    },
    {
      id: "delivered",
      label: order.fulfillmentType === "delivery" ? "Delivered" : "Order Completed",
      desc:
        order.fulfillmentType === "delivery"
          ? "Delivered chilled directly to your doorstep in thermal packaging."
          : "Collected in-store at 25 Rowan Street.",
      icon: CheckCircle2,
    },
  ];

  const getStageIndex = (stage: OrderStage) => {
    switch (stage) {
      case "confirmed":
        return 0;
      case "preparing":
        return 1;
      case "in_transit":
        return 2;
      case "delivered":
        return 3;
      default:
        return 0;
    }
  };

  const currentStageIndex = getStageIndex(order.stage);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = searchInput.trim().toUpperCase();
    if (DEMO_ORDERS[clean]) {
      setActiveOrderId(clean);
      setSearchError(null);
    } else {
      setSearchError(`Order "${searchInput}" not found. Try demo IDs: EG-8142, EG-9310, EG-4201, or EG-7719.`);
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-stone-200 shadow-xl overflow-hidden">
      {/* Header Bar */}
      <div className="bg-[#0C1B33] text-white p-6 sm:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
            Real-Time Butcher Fulfillment Tracker
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 flex items-center gap-2">
            <span>Live Order Status:</span>
            <span className="text-amber-400 font-mono">{order.orderId}</span>
          </h2>
          <p className="text-xs sm:text-sm text-stone-300 mt-1">
            Tracking customer <strong>{order.customerName}</strong> · Ordered {order.orderDate}
          </p>
        </div>

        {/* Quick Demo Order Switcher */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-xs">
          <span className="text-stone-400 text-[11px]">Quick Demo Orders:</span>
          <div className="flex flex-wrap gap-1.5">
            {Object.keys(DEMO_ORDERS).map((id) => (
              <button
                key={id}
                onClick={() => {
                  setActiveOrderId(id);
                  setSearchError(null);
                  setSearchInput("");
                }}
                className={`px-2.5 py-1 rounded-lg font-mono font-bold text-[11px] transition-all ${
                  activeOrderId === id
                    ? "bg-amber-500 text-stone-950 shadow-sm"
                    : "bg-white/10 text-stone-300 hover:bg-white/20"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8 space-y-8">
        {/* Search Order Bar */}
        <form onSubmit={handleSearch} className="max-w-md flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Search Order # (e.g. EG-8142)..."
              className="w-full pl-9 pr-3 py-2 text-xs sm:text-sm bg-stone-50 border border-stone-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0C1B33]"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-sm transition-all"
          >
            Track
          </button>
        </form>

        {searchError && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-xs text-amber-800 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{searchError}</span>
          </div>
        )}

        {/* Visual Stepper Bar */}
        <div className="relative">
          {/* Connector Line */}
          <div className="hidden md:block absolute top-7 left-[5%] right-[5%] h-1 bg-stone-200 -z-0">
            <div
              className="h-full bg-emerald-500 transition-all duration-500"
              style={{
                width: `${(currentStageIndex / (stages.length - 1)) * 100}%`,
              }}
            />
          </div>

          {/* Stepper Nodes */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 relative z-10">
            {stages.map((st, idx) => {
              const isPassed = idx < currentStageIndex;
              const isCurrent = idx === currentStageIndex;
              const isUpcoming = idx > currentStageIndex;
              const Icon = st.icon;

              return (
                <div
                  key={st.id}
                  className={`flex flex-col md:items-center md:text-center p-4 rounded-2xl transition-all ${
                    isCurrent
                      ? "bg-amber-500/10 border-2 border-amber-500 shadow-sm"
                      : isPassed
                      ? "bg-emerald-50/60 border border-emerald-200"
                      : "bg-stone-50 border border-stone-200/80 opacity-60"
                  }`}
                >
                  {/* Step Icon Badge */}
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-3 shadow-md transition-all ${
                      isCurrent
                        ? "bg-amber-500 text-stone-950 scale-105 animate-pulse"
                        : isPassed
                        ? "bg-emerald-600 text-white"
                        : "bg-stone-200 text-stone-500"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <span
                    className={`text-xs font-bold uppercase tracking-wider ${
                      isCurrent
                        ? "text-amber-900 font-black"
                        : isPassed
                        ? "text-emerald-700"
                        : "text-stone-500"
                    }`}
                  >
                    Step {idx + 1}
                  </span>

                  <h3
                    className={`font-black text-sm mt-0.5 ${
                      isCurrent
                        ? "text-stone-950 text-base"
                        : isPassed
                        ? "text-stone-900"
                        : "text-stone-600"
                    }`}
                  >
                    {st.label}
                  </h3>

                  <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                    {st.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Live Delivery / Order Metadata Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-4 border-t border-stone-200">
          {/* Left Column: Real-time Destination & Cold Chain */}
          <div className="lg:col-span-6 space-y-4">
            <div className="bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/90 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-red-600" />
                <span>Destination &amp; Timing</span>
              </h4>

              <div className="space-y-2 text-xs">
                <div>
                  <span className="text-stone-500 block">Delivery Address:</span>
                  <strong className="text-stone-900 text-sm">{order.address}</strong>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-stone-200/60">
                  <div>
                    <span className="text-stone-500 block">Estimated Arrival:</span>
                    <strong className="text-emerald-700">{order.estimatedTime}</strong>
                  </div>
                  {order.vanTemp && (
                    <div>
                      <span className="text-stone-500 block">Refrigeration Metric:</span>
                      <span className="text-blue-700 font-bold flex items-center gap-1">
                        <ThermometerSnowflake className="w-3.5 h-3.5" />
                        {order.vanTemp}
                      </span>
                    </div>
                  )}
                </div>

                {order.notes && (
                  <div className="p-2.5 rounded-lg bg-white border border-stone-200 text-stone-600 text-[11px]">
                    <strong>Driver Notes:</strong> {order.notes}
                  </div>
                )}
              </div>
            </div>

            {/* Assistance Contact Box */}
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-amber-950">Need to amend this order?</p>
                <p className="text-[11px] text-amber-800">
                  Direct line to Dan &amp; Brodie Wallace on the block.
                </p>
              </div>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="px-3.5 py-2 hover:bg-[#b8141a] text-white font-bold text-xs rounded-xl shadow-sm transition-all flex items-center gap-1.5 shrink-0"
              >
                <Phone className="w-3.5 h-3.5 text-white" />
                <span>(03) 5721 3444</span>
              </a>
            </div>
          </div>

          {/* Right Column: Itemized Butcher Receipt */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-5 rounded-2xl border border-stone-200/90 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-2 border-b border-stone-200 mb-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700">
                  Order Items ({order.items.length})
                </h4>
                <span className="text-xs font-mono font-bold text-stone-500">
                  Total: {order.total}
                </span>
              </div>

              <ul className="space-y-2.5">
                {order.items.map((it, i) => (
                  <li
                    key={i}
                    className="p-2.5 bg-white rounded-xl border border-stone-200 flex items-center justify-between text-xs"
                  >
                    <div>
                      <span className="font-bold text-stone-900 block">{it.name}</span>
                      <span className="text-stone-500 text-[11px]">{it.quantity}</span>
                    </div>
                    <span className="font-mono font-bold text-amber-900">{it.price}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-stone-200/80 mt-4 flex items-center justify-between text-[11px] text-stone-500">
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Victorian AMIC Quality Certified
              </span>
              <span>25 Rowan St, Wangaratta</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default OrderStatusTracker;
