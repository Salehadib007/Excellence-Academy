"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, BookOpen } from "lucide-react";

const links = [
  "About",
  "Features",
  "Courses",
  "Instructor",
  "Testimonials",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#102A23]/95 backdrop-blur-xl shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
            <BookOpen size={18} className="text-[#0F1929]" strokeWidth={2.5} />
          </div>
          <div>
            <div className="font-display text-white font-bold text-lg leading-none">
              Excellence
            </div>
            <div className="font-mono text-[10px] text-[#C9A84C] tracking-[0.15em] uppercase leading-none mt-0.5">
              Academy
            </div>
          </div>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-white/70 hover:text-[#C9A84C] text-sm font-medium tracking-wide transition-colors duration-300 relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:01317136420"
            className="px-5 py-2.5 rounded-full border border-[#C9A84C] text-[#C9A84C] text-sm font-medium hover:bg-[#C9A84C] hover:text-[#0F1929] transition-all duration-300"
          >
            Enroll Now
          </a>
        </div>

        {/* Mobile */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-white">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0F1929]/98 backdrop-blur-xl border-t border-white/10"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-white/80 hover:text-[#C9A84C] text-base font-medium tracking-wide transition-colors"
                >
                  {link}
                </a>
              ))}
              <a
                href="tel:01317136420"
                className="mt-2 px-5 py-3 rounded-full bg-[#C9A84C] text-[#0F1929] text-sm font-semibold text-center"
              >
                Enroll Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
