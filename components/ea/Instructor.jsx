"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Quote,
  CheckCircle2,
  GraduationCap,
  BookOpen,
  Star,
} from "lucide-react";

const experiences = [
  "Global Education Center",
  "Neuron Academic Coaching",
  "Progress Coaching Center",
  "Landmark School & College",
];

const stats = [
  { label: "Years Teaching", value: "5+" },
  { label: "Students Taught", value: "1000+" },
  { label: "Success Rate", value: "100%" },
  { label: "Institutions", value: "4" },
];

export default function Instructor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="instructor"
      className="py-32 navy-gradient relative overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-white/3"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#C9A84C]/5" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Meet the Expert
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-white"
          >
            Your <span className="italic text-gold-gradient">Instructor</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Avatar card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm overflow-hidden p-8">
              {/* Avatar placeholder — elegant monogram */}
              <div className="relative w-40 h-40 mx-auto mb-6">
                <div className="w-full h-full rounded-full gold-gradient flex items-center justify-center shadow-2xl">
                  <img
                    src="/adib.png"
                    alt="Saleh Adib Hasnat"
                    className="rounded-full h-full w-full object-cover"
                  />
                </div>
                {/* Verified badge */}
                <div className="absolute bottom-2 right-2 w-10 h-10 rounded-full bg-[#4A7C6F] border-4 border-[#0F1929] flex items-center justify-center">
                  <CheckCircle2 size={16} fill="white" className="text-white" />
                </div>
              </div>

              <div className="text-center mb-6">
                <h3 className="font-display text-4xl font-bold text-white mb-1">
                  Saleh Adib Hasnat
                </h3>
                <div className="font-mono text-[#C9A84C] text-xs tracking-[0.15em] uppercase mb-3">
                  Instructor & Founder
                </div>
                <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
                  <GraduationCap size={15} />
                  <span>
                    Dept. of English — Gopalganj Science & Technology University
                  </span>
                </div>
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill="#C9A84C"
                    className="text-[#C9A84C]"
                  />
                ))}
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-4 gap-3 p-4 rounded-2xl bg-white/5 border border-white/10">
                {stats.map(({ label, value }) => (
                  <div key={label} className="text-center">
                    <div className="font-display text-2xl font-bold text-[#C9A84C]">
                      {value}
                    </div>
                    <div className="text-white/40 text-[10px] font-mono leading-tight mt-0.5">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quote card */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 max-w-[220px] bg-[#C9A84C] rounded-2xl p-4 shadow-2xl"
            >
              <Quote size={16} className="text-[#0F1929]/40 mb-1" />
              <p className="font-display text-[#0F1929] text-sm font-semibold leading-snug italic">
                "English should be a tool, not a barrier."
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3 }}
          >
            <div className="space-y-8">
              {/* Bio */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <BookOpen size={16} className="text-[#C9A84C]" />
                  <span className="font-mono text-[#C9A84C] text-xs tracking-widest uppercase">
                    About
                  </span>
                </div>
                <p className="text-white/70 text-lg leading-relaxed">
                  Saleh Adib Hasnat is a passionate English educator from the
                  Department of English at Gopalganj Science & Technology
                  University. With years of teaching experience across renowned
                  institutions, he brings a unique, student-centered approach
                  that makes English accessible and enjoyable for learners at
                  every level.
                </p>
              </div>

              {/* Teaching philosophy */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Star size={16} className="text-[#C9A84C]" />
                  <span className="font-mono text-[#C9A84C] text-xs tracking-widest uppercase">
                    Teaching Philosophy
                  </span>
                </div>
                <p className="text-white/60 text-base leading-relaxed">
                  His mission is simple: ensure that every student becomes so
                  confident in English that they never need another tutor.
                  Through methodical teaching, Bengali translations, and
                  consistent assessment, he transforms weak students into fluent
                  speakers.
                </p>
              </div>

              {/* Previous institutions */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap size={16} className="text-[#C9A84C]" />
                  <span className="font-mono text-[#C9A84C] text-xs tracking-widest uppercase">
                    ইতিপূর্বে English Teacher হিসাবে পড়িয়েছি
                  </span>
                </div>
                <div className="space-y-3">
                  {experiences.map((exp, i) => (
                    <motion.div
                      key={exp}
                      initial={{ opacity: 0, x: 20 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.1 }}
                      className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/8 hover:border-[#C9A84C]/30 transition-colors duration-300"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#C9A84C]/15 border border-[#C9A84C]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#C9A84C] text-xs font-bold font-mono">
                          {i + 1}
                        </span>
                      </div>
                      <div>
                        <span className="text-white/80 text-sm font-medium">
                          {exp}
                        </span>
                        <div className="flex gap-1 mt-1">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              size={9}
                              fill="#C9A84C"
                              className="text-[#C9A84C]"
                            />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href="tel:01317136420"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-[#0F1929] font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-500"
              >
                Learn with Adib Sir
                <span className="text-[#0F1929]/60">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
