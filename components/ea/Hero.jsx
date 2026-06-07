"use client";
import { motion } from "framer-motion";
import { ArrowDown, Star, Users, BookOpen, Award } from "lucide-react";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: "easeOut" },
});

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen navy-gradient flex flex-col justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large circle */}
        <div className="absolute -top-40 -right-40 w-[700px] h-[700px] rounded-full border border-white/5" />
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full border border-[#C9A84C]/10" />
        {/* Floating orb */}
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#C9A84C]/5 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/4 left-1/4 w-80 h-80 rounded-full bg-[#4A7C6F]/10 blur-3xl"
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(201,168,76,1) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 grid lg:grid-cols-2 gap-16 items-center">
        {/* Left content */}
        <div>
          <motion.div {...fadeUp(0.1)} className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Est. Excellence Academy
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.2)}
            className="font-display text-white leading-[1.05] mb-4"
          >
            <span className="text-6xl lg:text-8xl font-bold block">
              Excel in
            </span>
            <span className="text-6xl lg:text-8xl font-bold text-gold-gradient block italic">
              English.
            </span>
            <span className="text-3xl lg:text-4xl font-light text-white/70 block mt-2">
              ইংরেজির জন্য সেরা প্রতিষ্ঠান
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp(0.35)}
            className="text-white/60 text-lg leading-relaxed mt-6 mb-10 max-w-lg"
          >
            From basic spoken English to advanced grammar — master every aspect
            of the English language in just 6 months. Classes 6 to 12 welcome.
          </motion.p>

          <motion.div {...fadeUp(0.45)} className="flex flex-wrap gap-4">
            <a
              href="#courses"
              className="group flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-[#0F1929] font-semibold text-sm tracking-wide hover:shadow-[0_0_40px_rgba(201,168,76,0.4)] transition-all duration-500"
            >
              Explore Courses
              <ArrowDown
                size={16}
                className="group-hover:translate-y-1 transition-transform"
              />
            </a>
            <a
              href="tel:01317136420"
              className="px-8 py-4 rounded-full border border-white/20 text-white text-sm font-medium hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
            >
              Book Free Demo
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            {...fadeUp(0.55)}
            className="flex gap-8 mt-14 pt-10 border-t border-white/10"
          >
            {[
              { icon: Users, value: "500+", label: "Students" },
              { icon: Award, value: "100%", label: "Success Rate" },
              { icon: BookOpen, value: "6 Mo.", label: "To Fluency" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon size={16} className="text-[#C9A84C]" />
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-white">
                    {value}
                  </div>
                  <div className="text-white/40 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — visual card */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Main card */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-8">
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  fill="#C9A84C"
                  className="text-[#C9A84C]"
                />
              ))}
              <span className="text-white/50 text-xs ml-2">5.0 rating</span>
            </div>

            <h3 className="font-display text-white text-3xl font-bold mb-2">
              "You'll never need a tutor again"
            </h3>
            <p className="text-white/50 text-sm mb-8">
              ইংরেজির জন্য আর কখনোই শিক্ষকের দরকার পড়বে না
            </p>

            {/* Feature pills */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "Spoken English",
                "Grammar",
                "Free Hand Writing",
                "Board Prep",
                "Reading",
                "Writing",
              ].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1.5 rounded-full bg-white/8 border border-white/10 text-white/70 text-xs font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Demo class badge */}
            <div className="flex items-center justify-between p-4 rounded-2xl bg-[#C9A84C]/10 border border-[#C9A84C]/20">
              <div>
                <div className="text-[#C9A84C] font-semibold text-sm">
                  3-Day Free Demo
                </div>
                <div className="text-white/40 text-xs mt-0.5">
                  No commitment required
                </div>
              </div>
              <a
                href="tel:01317136420"
                className="px-4 py-2 rounded-full bg-[#C9A84C] text-[#0F1929] text-xs font-bold hover:bg-[#E8D5A3] transition-colors"
              >
                Book Now
              </a>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [-8, 8, -8] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -left-6 bg-[#C9A84C] rounded-2xl p-4 shadow-2xl"
          >
            <div className="font-mono text-[#0F1929] text-xs font-bold">
              CLASS VI–XII
            </div>
            <div className="font-display text-[#0F1929] text-lg font-bold leading-none">
              Covered
            </div>
          </motion.div>

          {/* PDF badge */}
          <motion.div
            animate={{ y: [8, -8, 8] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute -bottom-4 -right-4 bg-[#1A2744] border border-white/20 rounded-2xl p-4 shadow-2xl"
          >
            <div className="text-white/60 text-xs mb-1">Weekly + Monthly</div>
            <div className="text-white font-semibold text-sm">
              Exams Included
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-white/30 text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#C9A84C] to-transparent"
        />
      </motion.div>
    </section>
  );
}
