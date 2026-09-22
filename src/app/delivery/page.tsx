import ScrollReveal from "@/components/ScrollReveal";

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

export default function DeliveryPage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Our Story · Est. 2018
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-stone-950 tracking-tight">
                Grounded in Wangaratta & Community
              </h3>
              <p className="text-sm text-stone-600 leading-relaxed">
                Founded by Dan & Brodie Wallace in 2018, Your Everyday Gourmet was born with a single mission: to unite traditional whole-carcass craft butchery with restaurant-standard kitchen preparation. Rather than settling for supermarket pre-packs, Dan and his team cut fresh daily from whole grass-fed Victorian carcases.
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
                  Serviced Towns & Regions:
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
                <p>Dedicated morning run to Yarrawonga & Mulwala. Order by Thursday 2pm for guaranteed Friday refrigerated delivery.</p>
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