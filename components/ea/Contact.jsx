"use client";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  ArrowRight,
  Mail,
} from "lucide-react";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      className="py-32 bg-[#F5F0E8] relative overflow-hidden"
      ref={ref}
    >
      {/* Big CTA banner first */}
      <div className="max-w-7xl mx-auto px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="relative rounded-[2.5rem] navy-gradient overflow-hidden p-12 lg:p-20 text-center"
        >
          {/* Decorations */}
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full border border-white/5 -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full border border-[#C9A84C]/10 translate-y-1/2 -translate-x-1/2" />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-1/2 left-1/4 w-72 h-72 rounded-full bg-[#C9A84C]/5 blur-3xl -translate-y-1/2"
          />

          <div className="relative">
            <div className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-6">
              ✦ Limited Seats Available ✦
            </div>
            <h2 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Start your{" "}
              <span className="italic text-gold-gradient">free demo</span>
              <br />
              today
            </h2>
            <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
              ভর্তির পূর্বে ৩ দিন ফ্রি Demo Class নিন। কোনো বাধ্যবাধকতা নেই।
              Experience the difference before you commit.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="tel:01317136420"
                className="group flex items-center gap-3 px-8 py-4 rounded-full gold-gradient text-[#0F1929] font-bold text-sm tracking-wide hover:shadow-[0_0_60px_rgba(201,168,76,0.5)] transition-all duration-500"
              >
                <Phone size={16} />
                Call 01317136420
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="tel:01572912789"
                className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/20 text-white font-medium text-sm hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              >
                <Phone size={16} />
                01572912789
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact info cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <div className="h-px w-12 bg-[#C9A84C]" />
            <span className="font-mono text-[#C9A84C] text-xs tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <div className="h-px w-12 bg-[#C9A84C]" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.35 }}
            className="font-display text-4xl font-bold text-[#0F1929]"
          >
            যোগাযোগ করুন
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Phone,
              title: "Phone",
              bn: "ফোন",
              lines: ["01317136420", "01572912789"],
              action: "tel:01317136420",
              color: "#C9A84C",
            },
            {
              icon: MessageCircle,
              title: "WhatsApp",
              bn: "হোয়াটসঅ্যাপ",
              lines: ["01317136420", "01572912789"],
              action: "https://wa.me/8801317136420",
              color: "#4A7C6F",
            },
            {
              icon: Clock,
              title: "Class Hours",
              bn: "ক্লাসের সময়",
              lines: ["Morning & Evening", "Batches Available"],
              action: "tel:01317136420",
              color: "#B5451B",
            },
          ].map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.title}
                href={item.action}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="group p-8 rounded-2xl bg-white border border-[#E8E0D0] hover:border-[#C9A84C]/40 card-hover text-center block"
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-colors duration-300"
                  style={{
                    background: `${item.color}15`,
                    border: `1px solid ${item.color}30`,
                  }}
                >
                  <Icon size={22} style={{ color: item.color }} />
                </div>
                <div
                  className="font-mono text-[10px] tracking-[0.15em] uppercase mb-1"
                  style={{ color: item.color }}
                >
                  {item.bn}
                </div>
                <h3 className="font-display text-xl font-bold text-[#0F1929] mb-3">
                  {item.title}
                </h3>
                {item.lines.map((line) => (
                  <div
                    key={line}
                    className="text-[#0F1929]/60 text-sm font-medium"
                  >
                    {line}
                  </div>
                ))}
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
