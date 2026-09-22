import ScrollReveal from "@/components/ScrollReveal";

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

export default function HeatEatPage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Heat & Eat Meals
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Family Pies & Prepared Meals
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

            <div className="grid grid-cols-1 gap-8">
              <div className="bg-stone-950/70 rounded-2xl p-6 border border-stone-800/80">
                <div className="flex items-center justify-between mb-4 border-b border-stone-800 pb-3">
                  <h3 className="text-lg font-black text-white flex items-center gap-2">
                    <span>🥧</span> In-House Gourmet Family Pies
                  </h3>
                  <span className="text-xs text-amber-400 font-bold">$12 ea / 2 for ~$18</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
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
    </div>
  );
}