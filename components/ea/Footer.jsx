import { BookOpen, Phone, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0A1D17] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full gold-gradient flex items-center justify-center">
                <BookOpen size={18} className="text-[#0F1929]" strokeWidth={2.5} />
              </div>
              <div>
                <div className="font-display text-white font-bold text-lg leading-none">
                  Excellence
                </div>
                <div className="font-mono text-[10px] text-[#C9A84C] tracking-[0.15em] uppercase">
                  Academy
                </div>
              </div>
            </div>
            <p className="text-white/40 text-sm leading-relaxed max-w-xs">
              ইংরেজির জন্য সেরা প্রতিষ্ঠান। Empowering students across Bangladesh to master the
              English language.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-mono text-[#C9A84C] text-xs tracking-widest uppercase mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["About", "Features", "Courses", "Instructor", "Testimonials", "Contact"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/40 hover:text-[#C9A84C] text-sm transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-[#C9A84C] text-xs tracking-widest uppercase mb-4">
              Contact
            </h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone size={14} className="text-[#C9A84C]" />
                <div>
                  <a
                    href="tel:01317136420"
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    01317136420
                  </a>
                  <span className="text-white/20 mx-2">/</span>
                  <a
                    href="tel:01572912789"
                    className="text-white/60 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    01572912789
                  </a>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] text-[#C9A84C]/60 tracking-widest uppercase mb-1">
                  Instructor
                </div>
                <div className="text-white/60 text-sm">Saleh Adib Hasnat</div>
                <div className="text-white/30 text-xs">Dept. of English, GSTU</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/20 text-xs font-mono tracking-widest">
            © 2024 EXCELLENCE ACADEMY. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-2 text-white/20 text-xs">
            <span>Made with</span>
            <Heart size={11} fill="currentColor" className="text-[#C9A84C]" />
            <span>for English learners</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
