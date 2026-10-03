"use client";

import React, { useState } from "react";
import Link from "next/link";
import { EverydayGourmetLogo } from "@/components/EverydayGourmetLogo";
import { useCart } from "@/context/CartContext";
import { ShoppingBag, Phone, Menu, X, Truck, Award } from "lucide-react";

export function Navbar() {
  const { items, setIsOpen } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Lighter, Refined Top Announcement Bar (Lightened slate-navy) */}
      <div
        style={{ backgroundColor: "#152A4A" }}
        className="text-slate-100 text-xs py-2 px-4 border-b border-[#223E68] shadow-sm select-none"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-[11px] sm:text-xs">
            <span className="font-black text-amber-300 shrink-0 flex items-center gap-1">
              <span>🏆</span>
              <span>2025 AMIC Gold Medalist</span>
            </span>
            <span className="text-slate-400 hidden md:inline">·</span>
            <span className="hidden md:inline text-slate-200 truncate font-medium">
              Victorian Regional Sausage King &amp; Best Butchers Burger Champion
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-[11px] sm:text-xs shrink-0 font-medium">
            <span className="hidden sm:flex items-center gap-1.5 text-slate-100 font-semibold">
              <Truck className="w-3.5 h-3.5 text-amber-300" />
              <span>Free Wangaratta Delivery on $100+</span>
            </span>
            <span className="text-slate-400 hidden sm:inline">·</span>
            <span className="flex items-center gap-1.5 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Thu–Sat In-Store · Mon–Wed Prep &amp; Delivery</span>
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header with Guaranteed Solid Deep Midnight Navy Background */}
      <header
        style={{ backgroundColor: "#0A1729" }}
        className="sticky top-0 z-40 border-b border-[#1E3250] text-white shadow-2xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between gap-4">
          {/* Zone 1: Authentic Brand Logo Lockup */}
          <Link href="/" className="flex items-center group transition-transform shrink-0">
            <EverydayGourmetLogo variant="horizontal" theme="dark" />
          </Link>

          {/* Zone 2: Navigation Links (High-contrast pure white with gold hover) */}
          <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-bold text-white tracking-wide">
            <Link
              href="/menu"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Full Menu
            </Link>
            <Link
              href="/freezer-packs"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Value Packs
            </Link>
            <Link
              href="/custom-cuts"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Custom Cuts
            </Link>
            <Link
              href="/heat-eat"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Pies &amp; Meals
            </Link>
            <Link
              href="/track-order"
              className="text-amber-300 hover:text-amber-200 transition-colors py-1 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-amber-400/10 border border-amber-400/20 font-bold"
            >
              <Truck className="w-3.5 h-3.5 text-amber-300" />
              <span>Track Order</span>
            </Link>
            <Link
              href="/awards"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Awards
            </Link>
            <Link
              href="/delivery"
              className="text-white hover:text-amber-300 transition-colors py-1 hover:underline underline-offset-4 decoration-amber-400 decoration-2"
            >
              Delivery
            </Link>
          </nav>

          {/* Zone 3: Actions (Bag Button + New Craft Butcher Crimson Red Call Button) */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* Shopping Bag Trigger Button */}
            <button
              onClick={() => setIsOpen(true)}
              className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/25 transition-all text-xs font-bold active:scale-[0.98] shadow-sm"
              aria-label={`Open shopping bag with ${items.length} items`}
            >
              <div className="relative">
                <ShoppingBag className="w-4 h-4 text-amber-300" />
                {items.length > 0 && (
                  <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-red-600 text-[10px] font-black flex items-center justify-center text-white shadow">
                    {items.length}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline">Bag</span>
              {items.length > 0 && (
                <span className="hidden sm:inline text-amber-300 font-extrabold">
                  ({items.length})
                </span>
              )}
            </button>

            {/* Redesigned Call Button: Signature Butcher Crimson Red (Matching the Rooster Emblem) */}
            <a
              href="tel:0357213444"
              style={{ backgroundColor: "#D71920" }}
              className="inline-flex items-center gap-2 px-4 py-2.5 hover:bg-[#b8141a] text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-lg shadow-red-950/40 border border-red-400/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>(03) 5721 3444</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-xl text-white hover:bg-white/10 border border-white/20"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu (Solid Deep Navy) */}
        {mobileMenuOpen && (
          <div
            style={{ backgroundColor: "#071222" }}
            className="lg:hidden border-t border-[#1E3250] px-5 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200"
          >
            <Link
              href="/menu"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              🥩 Full 100+ Cut Menu
            </Link>
            <Link
              href="/freezer-packs"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              📦 Value Packs &amp; Meat Bundles
            </Link>
            <Link
              href="/custom-cuts"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              🔪 Custom Cut Butcher Wizard
            </Link>
            <Link
              href="/heat-eat"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              🥧 Family Pies &amp; Heat &amp; Eat Meals
            </Link>
            <Link
              href="/track-order"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-extrabold text-amber-300 hover:text-amber-200 py-1.5 border-b border-white/5"
            >
              🚚 Track Live Order Status
            </Link>
            <Link
              href="/chef-guide"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              🍲 Chef Guide &amp; BBQ Rubs
            </Link>
            <Link
              href="/awards"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5 border-b border-white/5"
            >
              🥇 2025 AMIC Awards
            </Link>
            <Link
              href="/delivery"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm font-bold text-white hover:text-amber-300 py-1.5"
            >
              📍 Refrigerated Delivery &amp; Story
            </Link>

            <div className="pt-3 border-t border-[#1E3250] flex items-center justify-between text-xs text-slate-300">
              <span>25 Rowan St, Wangaratta</span>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="px-3 py-1.5 rounded-lg text-white font-bold flex items-center gap-1 shadow"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>5721 3444</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
export default Navbar;
