import ScrollReveal from "@/components/ScrollReveal";
import HeroParallax from "@/components/HeroParallax";

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      {/* Hero Section */}
      <ScrollReveal>
        <HeroParallax imageUrl="https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=1920&q=80">
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 text-white w-full">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 text-amber-300 font-bold text-xs sm:text-sm border border-amber-500/40 backdrop-blur-md mb-4">
              <span>🏆 2025 AMIC Sausage King &amp; Best Butchers Burger Champion</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-white mb-4 drop-shadow-lg">
              Your Everyday Gourmet
            </h1>

            <p className="text-base sm:text-xl font-medium text-stone-200 max-w-2xl mb-8 leading-relaxed drop-shadow">
              Wangaratta&apos;s award-winning butcher meets culinary chef kitchen. From 100% grass-fed Victorian cuts and gold-medal sausages to ready-to-bake family chef trays and bulk freezer packs.
            </p>

            {/* Real Operational Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 text-xs sm:text-sm">
              <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
                <span>📍</span>
                <span className="font-semibold text-stone-200">25 Rowan Street, Wangaratta</span>
              </div>
              <a
                href="tel:0357213444"
                className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold px-4 py-2 rounded-xl transition-all shadow hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>📞</span>
                <span>(03) 5721 3444</span>
              </a>
              <div className="flex items-center gap-2 bg-stone-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-stone-700/80">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="font-semibold text-stone-200">Thu–Sat In-Store · Mon–Wed Prep &amp; Delivery</span>
              </div>
            </div>

            {/* Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/freezer-packs"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Explore Freezer Packs
              </a>
              <a
                href="/custom-cuts"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Custom Cut Order Wizard ↓
              </a>
              <a
                href="/heat-eat"
                className="px-6 py-3 bg-stone-900/90 hover:bg-stone-800 text-amber-300 font-bold text-sm rounded-xl border border-amber-500/30 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Heat &amp; Eat Chef Meals ↓
              </a>
            </div>
          </div>
        </HeroParallax>
      </ScrollReveal>

      {/* Value Pillars Banner */}
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-2xl shrink-0">
                🔪
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">Butcher Meets Chef</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Raw cuts prepared with master butchery precision alongside scratch-made chef dinners, gourmet pies, and ready-to-bake trays.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-2xl shrink-0">
                🌱
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">Regional Farm-To-Table</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Grass-fed Victorian beef, local pasture-raised lamb, and free-range Australian poultry direct from trusted regional producers.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-stone-200/80 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center font-black text-2xl shrink-0">
                🚚
              </div>
              <div>
                <h3 className="font-bold text-stone-900 text-base mb-1">Refrigerated Home Delivery</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Dedicated temperature-controlled vans. <strong>Free delivery on orders $100+</strong> across Wangaratta, Yarrawonga, Mulwala and NE Victoria.
                </p>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
