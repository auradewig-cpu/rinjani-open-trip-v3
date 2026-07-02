import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Mountain } from "lucide-react";

const navLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Open Trip", href: "#packages" },
  { label: "Galeri", href: "#gallery" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "Testimoni", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-transparent backdrop-blur-xl shadow-2xl"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => scrollTo("#home")}
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ea580c] flex items-center justify-center shadow-lg">
              <Mountain size={20} className="text-white" />
            </div>
            <div>
              <span className="text-white font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px" }}>
                RINJANI
              </span>
              <span className="text-[#f59e0b] font-bold tracking-wide" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "15px" }}>
                {" "}OPEN TRIP
              </span>
            </div>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ y: -2 }}
                onClick={() => scrollTo(link.href)}
                className="text-white/80 hover:text-[#f59e0b] transition-colors text-sm tracking-wide"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}
              >
                {link.label}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(245,158,11,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => scrollTo("#packages")}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ea580c] text-white text-sm shadow-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              Daftar Sekarang
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 z-40 bg-transparent backdrop-blur-xl border-b border-white/10 py-6 px-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => scrollTo(link.href)}
                  className="text-white/80 hover:text-[#f59e0b] text-left py-2 text-base transition-colors"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {link.label}
                </motion.button>
              ))}
              <button
                onClick={() => scrollTo("#packages")}
                className="mt-2 py-3 rounded-xl bg-gradient-to-r from-[#f59e0b] to-[#ea580c] text-white text-sm"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                Daftar Sekarang
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
