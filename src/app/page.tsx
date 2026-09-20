import { ButcherWizard } from "@/components/ButcherWizard";
import ScrollReveal from "@/components/ScrollReveal";
import HeroParallax from "@/components/HeroParallax";
import AwardBadge from "@/components/AwardBadge";
import MeatPackCard from "@/components/MeatPackCard";

const MEAT_PACKS = [
  {
    id: "super-savors",
    name: "Super Savors Pack",
    price: "~$99",
    tag: "Most Popular Value",
    description: "The classic household staple pack. Generous weekly meals portioned and ready for the fridge or freezer.",
    items: [
      "1kg Tender Porterhouse Steaks",
      "1kg Hand-Crumbed Chicken Schnitzels",
      "1kg Premium Lean Beef Mince",
      "1kg Award-Winning Beef BBQ Sausages",
      "Choice of: House Chicken Kievs or Gourmet Kebabs",
      "Pork Loin Steaks (crackling or trimmed)"
    ]
  },
  {
    id: "standard-bbq",
    name: "Standard BBQ Pack",
    price: "$45",
    tag: "Weekend Sizzler",
    description: "Everything you need for a quick weekend cookout with friends or family.",
    items: [
      "1kg Classic Beef BBQ Sausages",
      "4 Handcrafted Gourmet Beef Burger Patties",
      "4 Marinated Chicken Kebabs",
      "Tender Minute Steaks"
    ]
  },
  {
    id: "deluxe-bbq",
    name: "Deluxe BBQ Pack",
    price: "~$85–$90",
    tag: "Entertainer's Choice",
    description: "Premium steakhouse cuts and gourmet marinated items designed for serious grill masters.",
    items: [
      "Prime Sirloin / Scotch Fillet Steaks",
      "Tender Local Lamb Loin Chops",
      "Gourmet Gold-Medal Sausages (Kransky / Herb & Fetta)",
      "Smoky Glazed Marinated Chicken Wings"
    ]
  },
  {
    id: "butchers-pack",
    name: "The Butchers Pack",
    price: "~$135",
    tag: "Family Bulk Saver",
    description: "Heavyweight 8kg meat bundle covering weeknight dinners, roasts, and grill days.",
    items: [
      "2kg Premium Lean Beef Mince",
      "2kg Award-Winning Sausages",
      "2kg Local Victorian Lamb Loin Chops",
      "2kg Marinated Chicken Wings (Honey Soy or BBQ)"
    ]
  },
  {
    id: "freezer-filler",
    name: "The Freezer Filler",
    price: "~$200",
    tag: "Complete 15kg+ Restock",
    description: "Our massive inflation-busting restock pack. Feeds a busy family for weeks with zero stress.",
    items: [
      "Full Rolled Victorian Beef Roast",
      "Whole Seasoned Roasting Chicken & Kievs",
      "Bulk Lean Beef Mince & Diced Casserole Beef",
      "Award-Winning Sausage Variety Pack",
      "Hand-Trimmed Pork Chops & Free-Range Bacon",
      "Lamb Shanks or Slow-Cook Cutlets"
    ]
  }
];

const PIES = [
  { name: "Chunky Beef", desc: "Tender slow-braised beef steak chunks in rich gravy" },
  { name: "Beef Stockman", desc: "Hearty beef, smoky bacon, caramelized onion & cracked black pepper" },
  { name: "Beef Tomato & Cheese", desc: "Aussie classic with rich savoury tomato relish & melted cheese" },
  { name: "Beef Bacon & Mushroom", desc: "Savory beef steak with sautéed mushrooms & crisp bacon" },
  { name: "Chicken Scallopini", desc: "White wine, tender chicken breast, mushrooms & cream" },
  { name: "Chicken Korma", desc: "Mild, fragrant Indian spiced chicken in aromatic golden gravy" },
  { name: "Chicken Thai Green Curry", desc: "Zesty coconut, fresh coriander, kaffir lime & tender chicken" },
  { name: "Lamb Honey & Rosemary", desc: "Pasture lamb slow-simmered with local honey & fragrant rosemary" }
];

const CHEF_TRAYS = [
  {
    title: "Family Beef Lasagna",
    desc: "Slow-simmered rich Victorian beef bolognese, layered pasta sheets, and creamy golden béchamel.",
    badge: "Bake at 180°C"
  },
  {
    title: "Traditional Shepherd's Pie",
    desc: "Savoury minced lamb & beef cooked with garden vegetables, crowned with golden piped mashed potatoes.",
    badge: "Family Size"
  },
  {
    title: "Chicken, Bacon & Leek Pasta Bake",
    desc: "Tender chicken fillets, diced bacon, and sweet sautéed leeks tossed through rigatoni in creamy cheese sauce.",
    badge: "Kid-Approved"
  },
  {
    title: "Handmade House Dumplings",
    desc: "Fresh pork & chive or chicken dumplings made in-house. Steam or pan-fry crispy in minutes.",
    badge: "Pan-Fry or Steam"
  }
];

const DELIVERY_TOWNS = [
  "Wangaratta (Local)",
  "Benalla",
  "Glenrowan",
  "Oxley",
  "Milawa",
  "Moyhu",
  "Beechworth",
  "Chiltern",
  "Yarrawonga (Fridays)",
  "Mulwala (Fridays)"
];

const AWARDS = [
  {
    title: "Lamb, Fetta & Sun-Dried Tomato",
    award: "2025 AMIC Gold Medal",
    category: "Gourmet Open Sausage Division"
  },
  {
    title: "Chicken Sweet & Sour Sausage",
    award: "2025 AMIC Gold Medal",
    category: "Poultry Sausage Category"
  },
  {
    title: "Southern Chicken Burger",
    award: "2025 AMIC Gold Medal",
    category: "Best Butchers Burger Category"
  },
  {
    title: "Lamb Fetta & Mint Jelly Burger",
    award: "2025 AMIC Gold Medal",
    category: "Gourmet Burger Division"
  }
];

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
                href="#meat-packs"
                className="px-6 py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-sm rounded-xl shadow-lg shadow-amber-500/30 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Explore Freezer Packs
              </a>
              <a
                href="#custom-cuts"
                className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white font-bold text-sm rounded-xl backdrop-blur-md border border-white/20 transition-all hover:scale-[1.03] active:scale-[0.97]"
              >
                Custom Cut Order Wizard ↓
              </a>
              <a
                href="#heat-eat"
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

      {/* Meat Packs Section */}
      <ScrollReveal>
        <section id="meat-packs" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Inflation-Busting Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
                Freezer Packs &amp; Meat Bundles
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
                Freshly sliced, packed to order, and vacuum-sealed for your fridge or freezer. Call to reserve your pack for retail pick-up or scheduled home delivery.
              </p>
            </div>

            <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl border border-stone-800 text-xs sm:text-sm shrink-0">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <span>🚚 Free Delivery Over $100</span>
              </div>
              <p className="text-stone-300 text-xs mt-0.5">Wangaratta &amp; Friday Yarrawonga/Mulwala run</p>
            </div>
          </div>

          {/* 5 Packs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MEAT_PACKS.map((pack) => (
              <MeatPackCard
                key={pack.id}
                name={pack.name}
                price={pack.price}
                tag={pack.tag}
                description={pack.description}
                items={pack.items}
                phoneNumber="0357213444"
              />
            ))}

            {/* Custom Pack Builder Card */}
            <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-2xl p-6 flex flex-col justify-between border border-stone-800 shadow-lg">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Tailored Butchery
                </span>
                <h3 className="text-xl font-black text-white mt-4">
                  Want a Custom Meat Box?
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Have specific dietary requirements, bulk BBQ cuts, or a big camping weekend coming up? Dan &amp; Brodie can build and cryovac any combination to your exact specifications.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Custom thickness &amp; weight portioning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Cryovac vacuum packaging for long freezing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Specialty house marinades &amp; BBQ rubs
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <a
                  href="#custom-cuts"
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span>Use Custom Cut Wizard ↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Custom Cut Wizard Section */}
      <ScrollReveal>
        <section id="custom-cuts" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="mb-6">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
              Precision Butchery
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
              Build Your Custom Order
            </h2>
            <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
              Choose from Victorian grass-fed steaks, pasture lamb, crackling pork, free-range chicken, or AMIC gold-medal sausages. Add your cuts, set portions, and submit.
            </p>
          </div>

          <ButcherWizard />
        </section>
      </ScrollReveal>

      {/* Heat & Eat & Chef Kitchen Section */}
      <ScrollReveal>
        <section id="heat-eat" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Scratch-Made Chef Kitchen
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Heat &amp; Eat Meals &amp; Family Pies
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
                  Real food made by chefs in our Wangaratta kitchen. Made fresh, ready to pop in the oven for quick gourmet family dinners.
                </p>
              </div>

              <div className="bg-stone-800/90 border border-stone-700 px-4 py-3 rounded-2xl text-xs text-amber-300">
                <span className="font-bold text-white block">🥧 Family Pie Special:</span>
                $12.00 each or grab 2 for ~$18.00!
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left: In-House Family Pies */}
              <div className="lg:col-span-6 bg-stone-950/70 rounded-2xl p-6 border border-stone-800/80">
                <div className="flex items-center justify-between mb-4 border-b border-stone-800 pb-3">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <span>🥧</span> In-House Gourmet Family Pies
                  </h3>
                  <span className="text-xs text-amber-400 font-bold">$12 ea / 2 for ~$18</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {PIES.map((pie, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-stone-900/80 rounded-xl border border-stone-800 hover:border-amber-500/40 transition-colors"
                    >
                      <h4 className="font-bold text-amber-300 text-xs sm:text-sm">{pie.name}</h4>
                      <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">{pie.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Chef Ready-to-Bake Trays & Pantry */}
              <div className="lg:col-span-6 space-y-6">
                <div className="bg-stone-950/70 rounded-2xl p-6 border border-stone-800/80">
                  <h3 className="text-lg font-black text-white mb-4 border-b border-stone-800 pb-3 flex items-center gap-2">
                    <span>🍲</span> Ready-to-Bake Chef Trays
                  </h3>
                  <div className="space-y-3">
                    {CHEF_TRAYS.map((tray, idx) => (
                      <div
                        key={idx}
                        className="p-3.5 bg-stone-900/80 rounded-xl border border-stone-800 flex items-start justify-between gap-3"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="font-bold text-white text-xs sm:text-sm">{tray.title}</h4>
                            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/30">
                              {tray.badge}
                            </span>
                          </div>
                          <p className="text-[11px] text-stone-400 mt-1 leading-snug">{tray.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Artisan Pantry & BBQ Rubs */}
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <span>🧂</span> Specialty BBQ Rubs &amp; Regional Pantry
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    We stock international competition seasonings including <strong>Hardcore Carnivore</strong>, <strong>Lanes BBQ</strong>, and <strong>Lillie&apos;s Q Sauces</strong>, paired with award-winning cold-pressed <strong>Rich Glen Olive Oils</strong> from Yarrawonga.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
              <p>Available Thursday to Saturday in-store at 25 Rowan Street, or pre-order for Friday delivery.</p>
              <a
                href="tel:0357213444"
                className="px-5 py-2.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-xl shadow transition-all flex items-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
              >
                <span>📞 Pre-Order Chef Meals: (03) 5721 3444</span>
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Awards & Smallgoods Champion Section */}
      <ScrollReveal>
        <section id="awards" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-amber-500/30 shadow-md animate-glow-pulse premium-glow">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Gold Medal Butchery
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
                Multi-Award-Winning 2025 AMIC Champion
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-2 leading-relaxed">
                Everyday Gourmet represents the benchmark of Australian Meat Industry Council (AMIC) craftsmanship. With <strong>over 16 medals</strong> across Victorian regional competitions, our recipes are perfected right here in Wangaratta.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {AWARDS.map((award, idx) => (
                <AwardBadge
                  key={idx}
                  title={award.title}
                  award={award.award}
                  category={award.category}
                />
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Delivery Zones & About Section */}
      <ScrollReveal>
        <section id="delivery" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: About Dan & Brodie Wallace */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Our Story · Est. 2018
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                Grounded in Wangaratta &amp; Community
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Founded by Dan &amp; Brodie Wallace in 2018, Your Everyday Gourmet was born with a single mission: to unite traditional whole-carcass craft butchery with restaurant-standard kitchen preparation. Rather than settling for supermarket pre-packs, Dan and his team cut fresh daily from whole grass-fed Victorian carcases.
              </p>
              <p className="text-sm text-stone-600 leading-relaxed">
                Beyond the butcher block, Everyday Gourmet is proud to support our local community. We are active supply partners with the <strong>Wangaratta Carevan</strong>, ensuring disadvantaged locals receive nourishing meals, and we partner with <strong>The Personnel Group</strong> to provide inclusive employment pathways.
              </p>

              <div className="pt-4 border-t border-stone-100 flex flex-wrap items-center gap-4 text-xs font-semibold text-stone-700">
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-600">✓</span> 100% Australian Meats
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-600">✓</span> Independent Family Owned
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-amber-600">✓</span> Wangaratta Carevan Donors
                </div>
              </div>
            </div>

            {/* Right: Delivery Zones Map & Van Fleet */}
            <div className="lg:col-span-5 bg-stone-900 text-white rounded-3xl p-8 border border-stone-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider">
                <span>🚚 150km Refrigerated Radius</span>
              </div>
              <h3 className="text-2xl font-black text-white">
                Where We Deliver
              </h3>
              <p className="text-xs text-stone-300 leading-relaxed">
                We operate dedicated temperature-controlled refrigerated delivery vans maintaining strict cold-chain compliance right to your doorstep.
              </p>

              <div className="bg-stone-950 p-4 rounded-xl border border-stone-800">
                <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Serviced Towns &amp; Regions:
                </h4>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300">
                  {DELIVERY_TOWNS.map((town, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <span className="text-amber-400">•</span>
                      <span>{town}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-amber-500/20 border border-amber-500/40 text-xs text-amber-200">
                <p className="font-bold text-white mb-1">Weekly Friday Run:</p>
                <p>Dedicated morning run to Yarrawonga &amp; Mulwala. Order by Thursday 2pm for guaranteed Friday refrigerated delivery.</p>
              </div>

              <div className="pt-2">
                <a
                  href="tel:0357213444"
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span>📞 Book Delivery: (03) 5721 3444</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
