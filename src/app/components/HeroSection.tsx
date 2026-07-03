import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Users, Star, Calendar, ChevronDown } from "lucide-react";

const stats = [
  { icon: Users, value: "5,000+", label: "Peserta Puas" },
  { icon: Star, value: "4.9/5", label: "Rating Kepuasan" },
  { icon: Calendar, value: "8 Tahun", label: "Pengalaman" },
  { icon: MapPin, value: "3,726m", label: "Ketinggian Puncak" },
];

const words = ["Petualangan", "Kenangan", "Keajaiban"];

export function HeroSection() {
  const [currentWord, setCurrentWord] = useState(0);
  const [showScroll, setShowScroll] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector("#home");
      if (hero) {
        const rect = hero.getBoundingClientRect();
        setShowScroll(rect.bottom > 0);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToPackages = () => {
    document.querySelector("#packages")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-start px-6 pt-24 pb-16"
      style={{ position: "relative", backgroundColor: "transparent" }}
    >
      {/* Floating blobs decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-[#f59e0b]/10 blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -20, 0], y: [0, 30, 0], scale: [1, 0.9, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-[#1a8c5e]/20 blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/20 border border-[#f59e0b]/40 backdrop-blur-sm mb-6"
        >
          <MapPin size={14} className="text-black" />
          <span className="text-black text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
            Lombok, Nusa Tenggara Barat
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-4"
        >
          <h1
            className="text-white leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.8rem, 7vw, 6rem)",
              fontWeight: 900,
              lineHeight: 1.1,
            }}
          >
            Raih Puncak,<br />
            Ciptakan{" "}
            <span className="inline-block" style={{ minWidth: "240px" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45 }}
                  className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ea580c] inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-black text-lg max-w-xl mb-10 leading-relaxed px-4 py-3 rounded-2xl bg-white/60 backdrop-blur-md"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          Open trip Gunung Rinjani terpercaya dengan guide berpengalaman, perlengkapan lengkap,
          dan pengalaman tak terlupakan menuju puncak tertinggi kedua di Indonesia.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-wrap gap-4 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(245,158,11,0.5)" }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToPackages}
            className="px-8 py-4 rounded-2xl bg-gradient-to-r from-[#f59e0b] to-[#ea580c] text-white shadow-2xl flex items-center gap-2"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px" }}
          >
            Lihat Paket Trip
            <ChevronDown size={18} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => document.querySelector("#gallery")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px" }}
          >
            Lihat Galeri
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-2xl"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 text-center"
            >
              <stat.icon size={18} className="text-[#f59e0b] mx-auto mb-1" />
              <div className="text-white text-xl" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
                {stat.value}
              </div>
              <div className="text-white/60 text-xs mt-0.5" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator — clickable, bounces down */}
      <AnimatePresence>
        {showScroll && (
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ delay: 1.6, duration: 0.4 }}
            onClick={scrollToPackages}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center gap-2 cursor-pointer group"
            aria-label="Scroll ke paket trip"
          >
            <span
              className="text-white/40 text-xs tracking-widest uppercase group-hover:text-white/70 transition-colors"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Scroll
            </span>
            <div className="w-6 h-10 rounded-full border-2 border-white/25 group-hover:border-white/50 transition-colors flex items-start justify-center pt-2">
              <motion.div
                animate={{ y: [0, 12, 0], opacity: [1, 0, 1] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                className="w-1.5 h-1.5 rounded-full bg-white/70"
              />
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
