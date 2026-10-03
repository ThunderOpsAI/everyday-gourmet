"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { EverydayGourmetLogo } from "@/components/EverydayGourmetLogo";
import HeroParallax from "@/components/HeroParallax";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Award,
  Truck,
  Phone,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Clock,
  MapPin,
  Package,
  ChefHat,
  Search,
  Sparkles,
} from "lucide-react";

export default function Home() {
  const CATEGORY_CARDS = [
    {
      title: "Value Packs & Meat Bundles",
      badge: "Save up to 25%",
      desc: "Super Savors, The Butchers Pack, and Freezer Filler bundles portioned and vacuum-sealed for weeks of dinners.",
      image: "https://images.unsplash.com/photo-1588168333986-5078d3ae3976?auto=format&fit=crop&w=800&q=80",
      href: "/freezer-packs",
      cta: "Explore Freezer Packs →",
    },
    {
      title: "2025 AMIC Gold Medal Sausages",
      badge: "16+ Regional Medals",
      desc: "Victorian championship sausages & burgers: Lamb Fetta Sun-Dried Tomato, Chicken Sweet & Sour, and Southern Chicken patties.",
      image: "https://images.unsplash.com/photo-1597393353415-b3730f3719fe?auto=format&fit=crop&w=800&q=80",
      href: "/awards",
      cta: "View Award Winners →",
    },
    {
      title: "Custom Cut Butcher Wizard",
      badge: "Precision Cutting",
      desc: "Grass-fed Victorian Porterhouse, Scotch Fillet, Wagyu, Lamb Racks, and Boston Butts cut to your exact thickness and portion.",
      image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
      href: "/custom-cuts",
      cta: "Build Custom Cut Order →",
    },
    {
      title: "Family Pies & Chef Trays",
      badge: "2 for $18 Special",
      desc: "Scratch-made family pies with flaky golden puff pastry, slow-cooked beef lasagna trays, and handmade dumplings.",
      image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=800&q=80",
      href: "/heat-eat",
      cta: "Explore Heat & Eat →",
    },
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section with Parallax Butcher Background Image */}
      <ScrollReveal>
        <HeroParallax imageUrl="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1920&q=80">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-10 md:py-16 text-center text-white w-full">
            {/* Authentic Brand Logo Extracted from Card */}
            <div className="inline-block p-5 sm:p-7 bg-[#0C1B33]/85 backdrop-blur-md rounded-3xl border border-white/15 shadow-2xl mb-6">
              <EverydayGourmetLogo variant="full" theme="dark" />
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white mb-3 drop-shadow-md font-serif">
              Wangaratta&apos;s Multi-Award-Winning Butcher Meets Culinary Chef Kitchen
            </h1>

            <p className="text-sm sm:text-lg font-medium text-stone-200 max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow">
              Hand-sliced daily from whole grass-fed Victorian carcases, AMIC gold-medal smallgoods, scratch-made family chef trays, and cold-chain refrigerated home delivery.
            </p>

            {/* Real Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8 text-xs font-semibold">
              <div className="flex items-center gap-2 bg-[#0C1B33]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
                <MapPin className="w-3.5 h-3.5 text-red-500" />
                <span className="text-stone-200">25 Rowan Street, Wangaratta</span>
              </div>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="flex items-center gap-2 hover:bg-[#b8141a] text-white font-bold px-4 py-2 rounded-xl transition-all shadow hover:scale-[1.02] active:scale-[0.98]"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>(03) 5721 3444</span>
              </a>
              <div className="flex items-center gap-2 bg-[#0C1B33]/90 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
                <Truck className="w-3.5 h-3.5 text-amber-400" />
                <span className="text-stone-200">Free Delivery on $100+</span>
              </div>
            </div>

            {/* Split Menu Jump Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/menu"
                className="px-6 py-3.5 bg-red-600 hover:bg-red-700 text-white font-black text-sm rounded-xl shadow-lg shadow-red-600/30 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                <span>Browse Full 100+ Menu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/freezer-packs"
                className="px-5 py-3.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-xl shadow transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Value Freezer Packs
              </Link>
              <Link
                href="/custom-cuts"
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Custom Cut Builder
              </Link>
            </div>
          </div>
        </HeroParallax>
      </ScrollReveal>

      {/* Visual Live Order Stage Tracker Card */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-[#0C1B33] via-[#112444] to-[#0C1B33] text-white rounded-3xl p-6 sm:p-8 border border-amber-500/30 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Live Purchase Stage Monitoring</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-white">
                Check Your Order Stage in Real Time
              </h2>
              <p className="text-xs sm:text-sm text-stone-300 max-w-xl">
                Track your butcher cutting progress: <strong>Confirmed</strong> → <strong>Butcher Prep</strong> → <strong>In Refrigerated Van</strong> → <strong>Delivered</strong>.
              </p>
            </div>

            {/* Stepper Preview */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-white/5 p-3 rounded-2xl border border-white/10 text-xs">
              <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>1. Confirmed</span>
              </div>
              <span className="text-stone-500">→</span>
              <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                <ChefHat className="w-4 h-4" />
                <span>2. Preparing</span>
              </div>
              <span className="text-stone-500">→</span>
              <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                <Truck className="w-4 h-4" />
                <span>3. In Van</span>
              </div>
              <span className="text-stone-500">→</span>
              <div className="flex items-center gap-1.5 text-stone-400">
                <Package className="w-4 h-4" />
                <span>4. Delivered</span>
              </div>
            </div>

            <Link
              href="/track-order"
              className="px-5 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-md transition-all shrink-0 flex items-center gap-2"
            >
              <span>View Order Tracker →</span>
            </Link>
          </div>
        </section>
      </ScrollReveal>

      {/* Split Menu Categories (Clean Curated Showcase with High-Quality Photography) */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 border-b border-stone-200 pb-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Curated Butchery Departments
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-stone-950 tracking-tight mt-2">
                Explore Our Split Menus
              </h2>
              <p className="text-stone-600 text-xs sm:text-sm mt-1 max-w-xl">
                Browse by specialized butcher departments to find exactly what you need without endless page scrolling.
              </p>
            </div>

            <Link
              href="/menu"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-red-700 hover:text-red-800 group"
            >
              <span>Or view all 100+ cuts in full menu catalog</span>
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          </div>

          {/* 4 Large Visual Department Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CATEGORY_CARDS.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl border border-stone-200/90 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-stone-100">
                  <Image
                    src={cat.image}
                    alt={cat.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-amber-500 text-stone-950 shadow-md">
                      {cat.badge}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl sm:text-2xl font-black text-white drop-shadow-md">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {cat.desc}
                  </p>

                  <div className="pt-2">
                    <Link
                      href={cat.href}
                      className="w-full py-2.5 px-4 bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2 group-hover:bg-red-600"
                    >
                      <span>{cat.cta}</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Department Banner for Pantry & Delivery */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            <div className="p-6 rounded-3xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-amber-900 block">
                  🧂 Specialty BBQ Rubs &amp; Oils
                </span>
                <p className="text-xs text-stone-700 mt-1">
                  Hardcore Carnivore, Lanes BBQ rubs, and Rich Glen cold-pressed olive oils.
                </p>
              </div>
              <Link
                href="/chef-guide"
                className="px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow-sm shrink-0"
              >
                Pantry →
              </Link>
            </div>

            <div className="p-6 rounded-3xl bg-blue-50 border border-blue-200 flex items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-blue-900 block">
                  🚚 150km Refrigerated Radius
                </span>
                <p className="text-xs text-stone-700 mt-1">
                  Dedicated Friday run to Yarrawonga &amp; Mulwala. Free delivery on orders $100+.
                </p>
              </div>
              <Link
                href="/delivery"
                className="px-4 py-2 bg-[#0C1B33] hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow-sm shrink-0"
              >
                Towns →
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Value Pillars Banner */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center text-2xl shrink-0 font-bold">
                🔪
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">
                  Butcher Meets Chef Kitchen
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Raw cuts prepared with master butchery precision alongside scratch-made chef dinners, artisan family pies, and ready-to-bake trays.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center text-2xl shrink-0 font-bold">
                🌱
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">
                  Victorian Grass-Fed Whole Carcases
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  100% grass-fed Victorian beef, pasture-raised regional lamb, and free-range poultry sourced directly from trusted Victorian farmers.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-stone-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 flex items-center justify-center text-2xl shrink-0 font-bold">
                🚚
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">
                  Refrigerated Cold-Chain Vans
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated temperature-controlled vans. <strong>Free delivery on orders $100+</strong> across Wangaratta, Yarrawonga, Mulwala and NE Victoria.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Community Story & AMIC Highlights */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0C1B33] text-white rounded-3xl p-8 sm:p-12 border border-stone-800 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <span>🏆 Australian Meat Industry Council (AMIC) Champion</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
                Crafted in Wangaratta with Passion &amp; Community Heart
              </h2>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                Founded by Dan &amp; Brodie Wallace in 2018, Your Everyday Gourmet was established to give local families access to true butcher craftsmanship. Today, with over 16 Victorian regional AMIC medals including the coveted Sausage King and Best Butchers Burger honors, every cut represents the gold standard of Victorian butchery.
              </p>
              <p className="text-stone-300 text-xs sm:text-sm leading-relaxed">
                We believe great food belongs to everyone. As proud donors to the <strong>Wangaratta Carevan</strong>, we supply nourishing meat meals for disadvantaged community members, and partner with <strong>The Personnel Group</strong> to foster inclusive employment.
              </p>

              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-stone-300">
                <span className="flex items-center gap-1.5 text-amber-300">
                  <CheckCircle2 className="w-4 h-4" /> 16+ Regional AMIC Medals
                </span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <CheckCircle2 className="w-4 h-4" /> 100% Australian Carcase Meat
                </span>
                <span className="flex items-center gap-1.5 text-amber-300">
                  <CheckCircle2 className="w-4 h-4" /> Wangaratta Carevan Supporter
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/5 border border-white/10 p-6 rounded-2xl space-y-4 text-center">
              <span className="text-3xl">🥇</span>
              <h4 className="text-lg font-bold text-white">Need a Custom Order or Bulk Run?</h4>
              <p className="text-xs text-stone-300 leading-relaxed">
                We cut steaks to any thickness, prepare whole rolled roasts, and vacuum seal freezer packs for long preservation.
              </p>
              <a
                href="tel:0357213444"
                style={{ backgroundColor: "#D71920" }}
                className="w-full py-3 px-4 hover:bg-[#b8141a] text-white font-bold text-xs rounded-xl shadow transition-all block text-center"
              >
                📞 Call Dan &amp; Brodie: (03) 5721 3444
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
