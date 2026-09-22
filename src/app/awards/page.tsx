import ScrollReveal from "@/components/ScrollReveal";
import AwardBadge from "@/components/AwardBadge";

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

export default function AwardsPage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}