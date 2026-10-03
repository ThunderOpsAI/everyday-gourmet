import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";
import { Navbar } from "@/components/Navbar";
import { OrderDrawer } from "@/components/OrderDrawer";
import { CartToast } from "@/components/CartToast";
import { EverydayGourmetLogo } from "@/components/EverydayGourmetLogo";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, Truck, ShieldCheck, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Your Everyday Gourmet | Multi-Award-Winning Butcher & Gourmet Kitchen Wangaratta",
  description: "Wangaratta's premier gourmet butcher & chef kitchen. AMIC Gold medal sausages & burgers, grass-fed Victorian beef, local pasture lamb, bulk freezer packs, family pies, and refrigerated regional delivery.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased min-h-screen bg-[#FAF8F5] text-stone-900 selection:bg-red-600 selection:text-white flex flex-col font-sans">
        <CartProvider>
          {/* Main Top Navigation */}
          <Navbar />

          {/* Main Page Content */}
          <main className="flex-1">{children}</main>

          {/* Persistent Order Drawer & Toasts */}
          <OrderDrawer />
          <CartToast />

          {/* Rich Gourmet Butcher Footer */}
          <footer className="bg-[#0C1B33] text-stone-300 border-t border-stone-800 pt-16 pb-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              {/* Top Logo & Credo */}
              <div className="pb-12 border-b border-stone-800/80 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <EverydayGourmetLogo variant="horizontal" theme="dark" />
                  <p className="text-xs text-stone-400 mt-3 max-w-md leading-relaxed">
                    Whole-carcass craft butchery meets restaurant-standard chef kitchen. Founded by Dan &amp; Brodie Wallace in 2018 at 25 Rowan Street, Wangaratta.
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-semibold">
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-amber-300">
                    <span>🥇</span>
                    <span>16+ Victorian AMIC Medals</span>
                  </div>
                  <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 flex items-center gap-2 text-stone-200">
                    <Truck className="w-4 h-4 text-amber-400" />
                    <span>Refrigerated Van Delivery</span>
                  </div>
                </div>
              </div>

              {/* Four Columns */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-12">
                {/* Col 1: Store & Trading Hours */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-amber-400" />
                    <span>Store Hours &amp; Location</span>
                  </h3>
                  <div className="space-y-3 text-xs text-stone-400">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block">25 Rowan Street</strong>
                        <span>Wangaratta, VIC 3677</span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Thursday – Saturday:</span>
                        <span className="text-emerald-400 font-bold">6:00 AM – 6:00 PM</span>
                      </div>
                      <p className="text-[11px] text-stone-400">Retail counter open to public</p>
                      <div className="pt-1.5 border-t border-white/10 flex items-center justify-between text-[11px]">
                        <span className="text-stone-300 font-medium">Monday – Wednesday:</span>
                        <span className="text-amber-300">Prep &amp; Wholesale</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Col 2: Quick Links */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4">
                    Explore &amp; Order
                  </h3>
                  <ul className="space-y-2 text-xs text-stone-400">
                    <li>
                      <Link href="/menu" className="hover:text-amber-400 transition-colors">
                        Browse Full 100+ Cut Store Menu
                      </Link>
                    </li>
                    <li>
                      <Link href="/track-order" className="text-amber-300 hover:text-amber-200 transition-colors font-semibold">
                        🚚 Track Live Order Status
                      </Link>
                    </li>
                    <li>
                      <Link href="/freezer-packs" className="hover:text-amber-400 transition-colors">
                        Freezer Packs &amp; Meat Bundles
                      </Link>
                    </li>
                    <li>
                      <Link href="/custom-cuts" className="hover:text-amber-400 transition-colors">
                        Interactive Custom Cut Builder
                      </Link>
                    </li>
                    <li>
                      <Link href="/heat-eat" className="hover:text-amber-400 transition-colors">
                        Scratch-Made Family Pies ($12 or 2 for $18)
                      </Link>
                    </li>
                    <li>
                      <Link href="/chef-guide" className="hover:text-amber-400 transition-colors">
                        Chef Trays &amp; BBQ Rubs (Hardcore Carnivore &amp; Lanes)
                      </Link>
                    </li>
                    <li>
                      <Link href="/awards" className="hover:text-amber-400 transition-colors">
                        2025 AMIC Gold Medal Honors
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Col 3: Direct Contacts */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-400" />
                    <span>Orders &amp; Direct Enquiries</span>
                  </h3>
                  <div className="space-y-3 text-xs text-stone-400">
                    <p className="leading-relaxed">
                      Questions about custom thicknesses, bulk whole rumps, or vacuum packing? Call Dan &amp; Brodie directly:
                    </p>
                    <a
                      href="tel:0357213444"
                      style={{ backgroundColor: "#D71920" }}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl hover:bg-[#b8141a] text-white font-bold text-xs shadow-md transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5 text-white" />
                      <span>(03) 5721 3444</span>
                    </a>
                    <div className="pt-1">
                      <span className="text-[11px] text-stone-500 block">Email Orders:</span>
                      <a
                        href="mailto:General_youreverydaygourmet@yahoo.com"
                        className="text-stone-300 hover:text-white underline break-all text-xs"
                      >
                        General_youreverydaygourmet@yahoo.com
                      </a>
                    </div>
                    <div>
                      <span className="text-[11px] text-stone-500 block">External Live Ordering:</span>
                      <a
                        href="https://youreverydaygourmet.aceorder.com.au"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-300 hover:underline text-xs"
                      >
                        AceOrder Online Web Portal ↗
                      </a>
                    </div>
                  </div>
                </div>

                {/* Col 4: Cold-Chain Van & Community */}
                <div>
                  <h3 className="text-white font-bold text-sm tracking-wider uppercase mb-4 flex items-center gap-2">
                    <Truck className="w-4 h-4 text-amber-400" />
                    <span>150km Refrigerated Radius</span>
                  </h3>
                  <p className="text-xs text-stone-400 mb-3 leading-relaxed">
                    Two dedicated temperature-controlled vans guaranteeing cold-chain compliance. Free local delivery in Wangaratta on $100+.
                  </p>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs space-y-1">
                    <span className="text-amber-300 font-bold block">Friday Dedicated Run:</span>
                    <p className="text-stone-300 text-[11px]">
                      Yarrawonga &amp; Mulwala morning run. Order by Thursday 2pm.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Copyright & Community Attribution */}
              <div className="pt-8 border-t border-stone-800 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p>&copy; {new Date().getFullYear()} Your Everyday Gourmet (Wallace Developments Pty Ltd). All rights reserved.</p>
                <div className="flex items-center gap-4 text-stone-400">
                  <span className="flex items-center gap-1.5">
                    <Heart className="w-3.5 h-3.5 text-red-500" />
                    <span>Wangaratta Carevan Partner</span>
                  </span>
                  <span>•</span>
                  <span>The Personnel Group Partner</span>
                </div>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  );
}
