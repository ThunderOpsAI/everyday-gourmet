import ScrollReveal from "@/components/ScrollReveal";

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

export default function ChefGuidePage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-stone-900 text-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-stone-800 shadow-xl">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-10">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/20 px-3 py-1 rounded-full border border-amber-500/30">
                  Scratch-Made Chef Kitchen
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-3">
                  Chef Guide & Pantry
                </h2>
                <p className="text-stone-300 text-sm sm:text-base mt-2 max-w-2xl">
                  Ready-to-bake chef trays and artisan pantry items to elevate your next cook.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-6">
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
              </div>

              <div className="space-y-6">
                <div className="p-5 rounded-2xl bg-amber-500/10 border border-amber-500/30">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5">
                    <span>🧂</span> Specialty BBQ Rubs & Regional Pantry
                  </h4>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    We stock international competition seasonings including <strong>Hardcore Carnivore</strong>, <strong>Lanes BBQ</strong>, and <strong>Lillie's Q Sauces</strong>, paired with award-winning cold-pressed <strong>Rich Glen Olive Oils</strong> from Yarrawonga.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}