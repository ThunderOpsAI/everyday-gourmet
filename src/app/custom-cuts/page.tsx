import ScrollReveal from "@/components/ScrollReveal";
import { ButcherWizard } from "@/components/ButcherWizard";

export default function CustomCutsPage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
    </div>
  );
}