"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, ArrowRight } from "lucide-react";

const courses = [
  {
    grade: "Class VI–VIII",
    bn: "ষষ্ঠ - অষ্টম শ্রেণী",
    tag: "Foundation",
    color: "#4A7C6F",
    bg: "#F3F4F6",
    highlights: [
      "English alphabet mastery",
      "Basic spoken English",
      "Simple grammar rules",
      "Free hand writing basics",
      "Fun reading exercises",
      "Bengali translation support",
    ],
    price: "Affordable",
    cta: "Get Started",
  },
  {
    grade: "Class IX–X",
    bn: "নবম - দশম শ্রেণী",
    tag: "Intermediate",
    color: "#C9A84C",
    bg: "#102A23",
    highlights: [
      "SSC board exam preparation",
      "Advanced grammar & writing",
      "Paragraph & essay mastery",
      "Full textbook translations",
      "Weekly mock exams",
      "Reading comprehension",
    ],
    price: "Most Popular",
    cta: "Join Batch",
    featured: true,
  },
  {
    grade: "Class XI–XII",
    bn: "একাদশ - দ্বাদশ শ্রেণী",
    tag: "Advanced",
    color: "#B5451B",
    bg: "#FDF4F0",
    highlights: [
      "HSC board complete prep",
      "Advanced writing skills",
      "Speech & presentation",
      "Model question mastery",
      "Monthly assessments",
      "Personal attention sessions",
    ],
    price: "Premium",
    cta: "Apply Now",
  },
];

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="courses" className="py-32 bg-[#F7FAFC] relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Our Programs
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-[#0F1929]"
          >
            Courses for{" "}
            <span className="italic text-[#C9A84C]">every grade</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[#0F1929]/50 text-lg mt-4 max-w-xl mx-auto"
          >
            ষষ্ঠ থেকে দ্বাদশ শ্রেণী পর্যন্ত — comprehensive English education
            tailored for your grade level.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-6">
          {courses.map((course, i) => (
            <motion.div
              key={course.grade}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className={`relative rounded-3xl overflow-hidden card-hover ${!course.featured ? "border border-gray-300" : ""} ${course.featured ? "scale-105 shadow-2xl" : ""}`}
              style={{ background: course.featured ? course.bg : course.bg }}
            >
              {/* Featured badge */}
              {course.featured && (
                <div className="absolute top-5 right-5 px-3 py-1 rounded-full bg-[#C9A84C] text-[#0F1929] text-xs font-bold font-mono tracking-wide">
                  ★ Most Popular
                </div>
              )}

              <div className="p-8">
                {/* Tag */}
                <div
                  className="inline-block px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-4"
                  style={{
                    background: `${course.color}20`,
                    color: course.featured ? course.color : course.color,
                    border: `1px solid ${course.color}40`,
                  }}
                >
                  {course.tag}
                </div>

                <div
                  className="font-mono text-xs mb-1"
                  style={{
                    color: course.featured
                      ? "rgba(255,255,255,0.5)"
                      : "rgba(0,0,0,0.4)",
                  }}
                >
                  {course.bn}
                </div>
                <h3
                  className="font-display text-4xl font-bold mb-6"
                  style={{ color: course.featured ? "#fff" : "#0F1929" }}
                >
                  {course.grade}
                </h3>

                {/* Features list */}
                <ul className="space-y-3 mb-8">
                  {course.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${course.color}20` }}
                      >
                        <Check
                          size={11}
                          style={{ color: course.color }}
                          strokeWidth={3}
                        />
                      </div>
                      <span
                        className="text-sm"
                        style={{
                          color: course.featured
                            ? "rgba(255,255,255,0.75)"
                            : "rgba(0,0,0,0.6)",
                        }}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Divider */}
                <div
                  className="border-t mb-6"
                  style={{
                    borderColor: course.featured
                      ? "rgba(255,255,255,0.1)"
                      : "rgba(0,0,0,0.08)",
                  }}
                />

                {/* Also includes */}
                <div className="flex items-center gap-2 mb-6">
                  <div
                    className="font-mono text-xs"
                    style={{
                      color: course.featured
                        ? "rgba(255,255,255,0.4)"
                        : "rgba(0,0,0,0.35)",
                    }}
                  >
                    + Free PDF materials • Limited batch
                  </div>
                </div>

                <a
                  href="tel:01317136420"
                  className="flex items-center justify-center gap-2 w-full py-4 rounded-2xl font-semibold text-sm transition-all duration-300 group"
                  style={{
                    background: course.featured
                      ? course.color
                      : `${course.color}15`,
                    color: course.featured ? "#0F1929" : course.color,
                    border: course.featured
                      ? "none"
                      : `1px solid ${course.color}30`,
                  }}
                >
                  {course.cta}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Perks ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 p-6 rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/5 flex flex-wrap gap-6 justify-center items-center"
        >
          {[
            "3 Days Free Demo",
            "PDF for All Topics",
            "Limited Batch Size",
            "Weekly + Monthly Exams",
          ].map((perk) => (
            <div key={perk} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A84C]" />
              <span className="font-medium text-[#0F1929]/70 text-sm">
                {perk}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
