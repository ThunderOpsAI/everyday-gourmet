import ScrollReveal from "@/components/ScrollReveal";
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

export default function FreezerPacksPage() {
  return (
    <div className="py-16">
      <ScrollReveal>
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full border border-amber-300">
                Inflation-Busting Value
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-stone-950 tracking-tight mt-2">
                Freezer Packs & Meat Bundles
              </h2>
              <p className="text-sm sm:text-base text-stone-600 mt-1 max-w-2xl">
                Freshly sliced, packed to order, and vacuum-sealed for your fridge or freezer. Call to reserve your pack for retail pick-up or scheduled home delivery.
              </p>
            </div>

            <div className="bg-stone-900 text-white px-5 py-3 rounded-2xl border border-stone-800 text-xs sm:text-sm shrink-0">
              <div className="font-bold text-amber-400 flex items-center gap-1.5">
                <span>🚚 Free Delivery Over $100</span>
              </div>
              <p className="text-stone-300 text-xs mt-0.5">Wangaratta & Friday Yarrawonga/Mulwala run</p>
            </div>
          </div>

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

            <div className="bg-gradient-to-br from-stone-900 to-stone-950 text-white rounded-2xl p-6 flex flex-col justify-between border border-stone-800 shadow-lg">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30">
                  Tailored Butchery
                </span>
                <h3 className="text-xl font-black text-white mt-4">
                  Want a Custom Meat Box?
                </h3>
                <p className="text-xs text-stone-300 mt-2 leading-relaxed">
                  Have specific dietary requirements, bulk BBQ cuts, or a big camping weekend coming up? Dan & Brodie can build and cryovac any combination to your exact specifications.
                </p>
                <ul className="space-y-2 mt-4 text-xs text-stone-300">
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Custom thickness & weight portioning
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Cryovac vacuum packaging for long freezing
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-amber-400">✓</span> Specialty house marinades & BBQ rubs
                  </li>
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-800">
                <a
                  href="/custom-cuts"
                  className="w-full py-2.5 px-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2 hover:scale-[1.03] active:scale-[0.97]"
                >
                  <span>Use Custom Cut Wizard ↓</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}