'use client';
import { motion } from 'framer-motion';

interface MeatPackCardProps {
  name: string;
  price: string;
  tag: string;
  description: string;
  items: string[];
  phoneNumber: string;
}

export default function MeatPackCard({ name, price, tag, description, items, phoneNumber }: MeatPackCardProps) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="bg-white rounded-2xl border border-stone-200/90 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col justify-between overflow-hidden group"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-2">
          <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-stone-100 text-stone-800 border border-stone-200">
            {tag}
          </span>
          <span className="text-2xl font-black text-amber-800 bg-amber-50 px-3 py-0.5 rounded-xl border border-amber-200">
            {price}
          </span>
        </div>
        <h3 className="text-xl font-black text-stone-950 mt-3 group-hover:text-amber-800 transition-colors duration-300">
          {name}
        </h3>
        <p className="text-xs text-stone-500 mt-1.5 leading-relaxed mb-4">{description}</p>
        <div className="border-t border-stone-100 pt-4">
          <h4 className="text-xs font-bold uppercase tracking-wider text-stone-700 mb-2.5">What&apos;s Inside:</h4>
          <ul className="space-y-1.5 text-xs text-stone-700">
            {items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-amber-600 font-bold text-xs mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-6 bg-stone-50 border-t border-stone-100">
        <a
          href={`tel:${phoneNumber}`}
          className="w-full py-2.5 px-4 bg-stone-900 hover:bg-stone-800 text-white font-bold text-xs rounded-xl shadow transition-all duration-300 flex items-center justify-center gap-2 group-hover:bg-amber-500 group-hover:text-stone-950 hover:scale-[1.03] active:scale-[0.97]"
        >
          <span>📞 Call to Order This Pack</span>
        </a>
      </div>
    </motion.div>
  );
}
