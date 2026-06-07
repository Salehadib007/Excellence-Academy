"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Mic,
  PenTool,
  BookOpen,
  GraduationCap,
  Languages,
  Brain,
  Users,
  Trophy,
} from "lucide-react";

const features = [
  {
    icon: Mic,
    title: "Spoken English",
    bn: "কথ্য ইংরেজি",
    desc: "Expert teachers from the English department guide you through spoken communication with confidence.",
    accent: "#C9A84C",
  },
  {
    icon: GraduationCap,
    title: "6-Month Mastery",
    bn: "৬ মাসে দক্ষতা",
    desc: "From basic to all English topics — we guarantee fluency through our structured curriculum.",
    accent: "#4A7C6F",
  },
  {
    icon: PenTool,
    title: "Free Hand Writing",
    bn: "হাতের লেখার বিশেষ পদ্ধতি",
    desc: "Unique methodology for Free Hand Writing with dedicated practice sessions every class.",
    accent: "#B5451B",
  },
  {
    icon: BookOpen,
    title: "Board Exam Ready",
    bn: "বোর্ড পরীক্ষার প্রস্তুতি",
    desc: "All model and board exam preparation completed in-class — no need for extra coaching.",
    accent: "#C9A84C",
  },
  {
    icon: Languages,
    title: "Bengali Translations",
    bn: "বাংলা অনুবাদ",
    desc: "Every English text in your book comes with full Bengali translation and lecture notes.",
    accent: "#4A7C6F",
  },
  {
    icon: Brain,
    title: "Multi-Method Teaching",
    bn: "বিভিন্ন পদ্ধতি",
    desc: "Separate proven methodologies for Grammar, Reading, and Writing for maximum retention.",
    accent: "#B5451B",
  },
  {
    icon: Users,
    title: "Weak Student Support",
    bn: "দুর্বল শিক্ষার্থীদের সহায়তা",
    desc: "Special classes for students who struggle — nobody gets left behind in our academy.",
    accent: "#C9A84C",
  },
  {
    icon: Trophy,
    title: "Weekly & Monthly Tests",
    bn: "সাপ্তাহিক ও মাসিক পরীক্ষা",
    desc: "Regular assessments track your progress and prepare you for real exam conditions.",
    accent: "#4A7C6F",
  },
];

export default function Features() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="features"
      className="py-32 bg-[#FAF8F4] relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#4A7C6F]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="max-w-2xl mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Why Choose Us
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-[#0F1929] leading-tight"
          >
            প্রতিষ্ঠানের{" "}
            <span className="italic text-[#C9A84C]">বৈশিষ্ট্য</span>
            <br />
            <span className="text-3xl lg:text-4xl font-light text-[#0F1929]/50">
              What makes us different
            </span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="card-hover group p-6 rounded-2xl bg-white border border-[#E8E0D0] relative overflow-hidden"
              >
                {/* Hover fill */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500"
                  style={{ background: f.accent }}
                />

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{
                    background: `${f.accent}15`,
                    border: `1px solid ${f.accent}30`,
                  }}
                >
                  <Icon size={20} style={{ color: f.accent }} />
                </div>

                <div
                  className="font-mono text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ color: f.accent }}
                >
                  {f.bn}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F1929] mb-3 leading-tight">
                  {f.title}
                </h3>
                <p className="text-[#0F1929]/50 text-sm leading-relaxed">
                  {f.desc}
                </p>

                {/* Accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: f.accent }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
