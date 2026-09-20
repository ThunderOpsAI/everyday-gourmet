'use client';
import { motion } from 'framer-motion';

interface AwardBadgeProps {
  title: string;
  award: string;
  category: string;
}

export default function AwardBadge({ title, award, category }: AwardBadgeProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      className="p-6 rounded-2xl bg-gradient-to-br from-stone-50 to-amber-50/50 border border-amber-200/60 shadow-sm hover:shadow-lg transition-shadow duration-300 relative overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
      <span className="text-3xl mb-3 block">🥇</span>
      <h4 className="font-bold text-stone-900 text-sm relative">{title}</h4>
      <p className="text-xs text-amber-700 font-semibold mt-1">{award}</p>
      <p className="text-[11px] text-stone-500 mt-1">{category}</p>
    </motion.div>
  );
}
