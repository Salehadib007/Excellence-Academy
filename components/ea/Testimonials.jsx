"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Rahman",
    grade: "Class X — SSC Candidate",
    src: "/fatema.jpg",
    avatar: "A",
    color: "#C9A84C",
    text: "আমি আগে ইংরেজিতে খুবই দুর্বল ছিলাম। মাত্র ৩ মাসেই Grammar ও Writing-এ এতটা উন্নতি হলো যে SSC তে A+ পেয়েছি! Adib Sir এর পদ্ধতি সত্যিই অসাধারণ।",
    stars: 5,
    result: "GPA 5.00",
  },
  {
    name: "Md. Fahim Hossain",
    grade: "Class XII — HSC Candidate",
    src: "/imran.jpg",
    avatar: "F",
    color: "#4A7C6F",
    text: "The Bengali translations of every lesson made it so easy to understand. I used to fear English but now I can speak and write with full confidence. The weekly exams kept me on track.",
    stars: 5,
    result: "A+ in English",
  },
  {
    name: "Sadia Akter",
    grade: "Class VIII Student",
    src: "/nabila.jpg",
    avatar: "S",
    color: "#B5451B",
    text: "Free hand writing class এ বিশেষ পদ্ধতিতে শেখানো হয় যা অন্য কোথাও পাইনি। প্রতি ব্যাচে কম ছাত্র থাকায় স্যার সবাইকে আলাদা মনোযোগ দিতে পারেন।",
    stars: 5,
    result: "Best in Class",
  },
  {
    name: "Rakib Ahmed",
    grade: "Class XI Student",
    src: "/hasan.jpg",
    avatar: "R",
    color: "#C9A84C",
    text: "The 3-day free demo class showed me how different this place is. The teaching method, the PDF materials, the warmth — I enrolled immediately. My English has transformed completely.",
    stars: 5,
    result: "Top of Batch",
  },
  {
    name: "Tanjila Begum",
    grade: "Parent of Class IX student",

    src: "/mother.jpg",
    avatar: "M",
    color: "#4A7C6F",
    text: "আমার ছেলে ইংরেজিতে অনেক দুর্বল ছিল। আদিবের কাছে পড়ানোর পর মাত্র ৪ মাসে সে নিজেই ইংরেজিতে কথা বলতে শুরু করেছে। অনেক কৃতজ্ঞ।",
    stars: 5,
    result: "Remarkable Growth",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [active, setActive] = useState(0);

  const prev = () =>
    setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  return (
    <section
      id="testimonials"
      className="py-32 bg-[#FAF8F4] relative overflow-hidden"
      ref={ref}
    >
      {/* BG decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A84C]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#4A7C6F]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Student Stories
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-5xl lg:text-6xl font-bold text-[#0F1929]"
          >
            What students <span className="italic text-[#C9A84C]">say</span>
          </motion.h2>
        </div>

        {/* Main testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative rounded-3xl bg-white border border-[#E8E0D0] p-10 lg:p-14 shadow-xl overflow-hidden">
            {/* BG quote mark */}
            <div className="absolute top-6 right-8 opacity-5">
              <Quote size={120} className="text-[#C9A84C]" />
            </div>

            {/* Result badge */}
            <div
              className="inline-block px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase mb-6"
              style={{
                background: `${testimonials[active].color}15`,
                color: testimonials[active].color,
              }}
            >
              ★ {testimonials[active].result}
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[active].stars)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  fill="#C9A84C"
                  className="text-[#C9A84C]"
                />
              ))}
            </div>

            <motion.p
              key={active}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="font-display text-2xl lg:text-3xl text-[#0F1929] leading-relaxed mb-8 font-light italic"
            >
              &ldquo;{testimonials[active].text}&rdquo;
            </motion.p>

            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center font-display text-2xl font-bold text-white"
                style={{ background: testimonials[active].color }}
              >
                {testimonials[active].src ? (
                  <img
                    src={testimonials[active].src}
                    alt={testimonials[active].name}
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  testimonials[active].avatar
                )}
              </div>
              <div>
                <div className="font-semibold text-[#0F1929] text-lg">
                  {testimonials[active].name}
                </div>
                <div className="text-[#0F1929]/50 text-sm">
                  {testimonials[active].grade}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-4 mt-10">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full border border-[#E8E0D0] flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <ChevronLeft size={18} />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className="transition-all duration-300"
                    style={{
                      width: i === active ? "24px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: i === active ? "#C9A84C" : "#E8E0D0",
                    }}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full border border-[#E8E0D0] flex items-center justify-center hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Mini cards */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mt-8">
          {testimonials.map((t, i) => (
            <motion.button
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.08 }}
              onClick={() => setActive(i)}
              className={`p-4 rounded-2xl border text-left transition-all duration-300 ${
                i === active
                  ? "border-[#C9A84C] bg-[#C9A84C]/5"
                  : "border-[#E8E0D0] bg-white hover:border-[#C9A84C]/50"
              }`}
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center font-display font-bold text-white text-sm mb-2"
                style={{ background: t.color }}
              >
                {t.src ? (
                  <img
                    src={t.src}
                    alt={t.name}
                    className="rounded-full h-full w-full object-cover"
                  />
                ) : (
                  t.avatar
                )}
              </div>
              <div className="text-xs font-semibold text-[#0F1929] leading-tight">
                {t.name}
              </div>
              <div className="text-[10px] text-[#0F1929]/40 mt-0.5">
                {t.grade.split("—")[0]}
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
