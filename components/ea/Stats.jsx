"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "500",
    suffix: "+",
    label: "Happy Students",
    bn: "সন্তুষ্ট শিক্ষার্থী",
  },
  {
    value: "6",
    suffix: " Mo",
    label: "To Full Mastery",
    bn: "সম্পূর্ণ দক্ষতার জন্য",
  },
  {
    value: "4",
    suffix: "+",
    label: "Institutions Taught",
    bn: "প্রতিষ্ঠানে পড়িয়েছি",
  },
  { value: "100", suffix: "%", label: "Success Rate", bn: "সাফল্যের হার" },
];

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-[#102A23]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-y lg:divide-y-0 divide-white/10 border border-white/10 rounded-3xl overflow-hidden">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-10 text-center relative group hover:bg-white/5 transition-colors duration-300"
            >
              <div className="font-display text-6xl lg:text-7xl font-bold text-gold-gradient mb-2">
                {stat.value}
                <span className="text-4xl">{stat.suffix}</span>
              </div>
              <div className="font-mono text-[#C9A84C]/60 text-[10px] tracking-[0.15em] uppercase mb-1">
                {stat.bn}
              </div>
              <div className="text-white/50 text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
