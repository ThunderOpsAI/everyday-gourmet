import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Everyday Gourmet | Multi-Award-Winning Butcher & Gourmet Kitchen Wangaratta",
  description: "Wangaratta's premier gourmet butcher and chef kitchen. AMIC Gold medal sausages & burgers, grass-fed beef, local lamb, freezer filler packs, and refrigerated home delivery.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#faf8f5] text-stone-900 selection:bg-amber-500 selection:text-white">
        {/* Sticky Brand Header */}
        <header className="sticky top-0 z-50 bg-[#1c1c1c]/95 backdrop-blur-md border-b border-amber-500/20 text-white shadow-xl">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
            <div className="flex items-center justify-between">
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 flex items-center justify-center font-black text-xl text-stone-950 shadow-md shadow-amber-600/30 group-hover:scale-105 transition-transform">
                  EG
                </div>
                <div>
                  <span className="text-xl sm:text-2xl font-black tracking-tight text-white flex items-center gap-2">
                    Your Everyday Gourmet
                  </span>
                  <p className="text-xs text-amber-400/90 font-medium">
                    Multi-Award-Winning Butcher &amp; Gourmet Kitchen · Wangaratta
                  </p>
                </div>
              </a>

              {/* Mobile Call Button */}
              <a
                href="tel:0357213444"
                className="md:hidden flex items-center gap-1.5 px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-full shadow transition-colors"
              >
                <span>📞 Call</span>
              </a>
            </div>

            {/* Desktop Navigation & Actions */}
            <div className="flex items-center justify-between md:justify-end gap-3 sm:gap-6 pt-2 md:pt-0 border-t border-stone-800 md:border-none text-xs sm:text-sm font-semibold">
              <nav className="flex items-center gap-3 sm:gap-5 text-stone-300">
                <a href="#meat-packs" className="hover:text-amber-400 transition-colors">Freezer Packs</a>
                <a href="#custom-cuts" className="hover:text-amber-400 transition-colors">Custom Cuts</a>
                <a href="#heat-eat" className="hover:text-amber-400 transition-colors">Heat &amp; Eat</a>
                <a href="#awards" className="hover:text-amber-400 transition-colors">Awards</a>
                <a href="#delivery" className="hover:text-amber-400 transition-colors">Delivery</a>
              </nav>

              <div className="hidden lg:flex items-center gap-2 bg-stone-900 border border-stone-800 px-3 py-1 rounded-full text-xs text-amber-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Thu–Sat In-Store · Mon–Wed Wholesale/Prep</span>
              </div>

              <a
                href="tel:0357213444"
                className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-sm rounded-full shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <span>📞 (03) 5721 3444</span>
              </a>
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        {/* Brand Footer */}
        <footer className="bg-[#141414] text-stone-300 border-t border-stone-800 pt-16 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-9 h-9 rounded-lg bg-amber-500 flex items-center justify-center font-black text-lg text-stone-950">
                    EG
                  </div>
                  <span className="text-xl font-black text-white">Your Everyday Gourmet</span>
                </div>
                <p className="text-sm text-stone-400 leading-relaxed mb-4">
                  Butcher meets chef. Multi-award-winning smallgoods, local grass-fed beef, ready-to-bake chef meals, and refrigerated regional delivery. Founded by Dan &amp; Brodie Wallace in 2018.
                </p>
                <div className="flex items-center gap-2 text-xs text-amber-400 font-semibold">
                  <span>🏆 2025 AMIC Sausage King Gold Medalist</span>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Shop &amp; Hours</h3>
                <div className="space-y-2 text-sm text-stone-400">
                  <p className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">📍</span>
                    <span>25 Rowan Street, Wangaratta, VIC 3677</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">🏪</span>
                    <span><strong>Thu – Sat:</strong> Retail Storefront Open</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">🔪</span>
                    <span><strong>Mon – Wed:</strong> Kitchen Prep, Wholesale &amp; Deliveries</span>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Orders &amp; Enquiries</h3>
                <div className="space-y-2 text-sm text-stone-400">
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">📞</span>
                    <a href="tel:0357213444" className="text-amber-300 hover:underline font-semibold">(03) 5721 3444</a>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">✉️</span>
                    <a href="mailto:General_youreverydaygourmet@yahoo.com" className="hover:text-white break-all">
                      General_youreverydaygourmet@yahoo.com
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">🌐</span>
                    <a href="https://youreverydaygourmet.aceorder.com.au" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                      AceOrder Online Portal
                    </a>
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-400 font-bold">👍</span>
                    <a href="https://www.facebook.com/YourEverydayGourmetWangaratta" target="_blank" rel="noopener noreferrer" className="hover:text-white underline">
                      Facebook Page
                    </a>
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Refrigerated Delivery</h3>
                <p className="text-sm text-stone-400 mb-3">
                  Delivering across a 150km radius in dedicated temperature-controlled vans.
                </p>
                <div className="p-3 rounded-lg bg-stone-900 border border-amber-500/30 text-xs text-amber-200">
                  <p className="font-bold text-amber-400 mb-1">🚚 Free Delivery on $100+</p>
                  <p>Wangaratta local runs + weekly Friday run to Yarrawonga and Mulwala.</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
              <p>&copy; 2026 Your Everyday Gourmet (Wallace Developments Pty Ltd). All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span>Wangaratta Carevan Partner</span>
                <span>•</span>
                <span>The Personnel Group Partner</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
