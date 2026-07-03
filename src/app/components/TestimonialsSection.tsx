import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Aditya Prasetyo",
    location: "Jakarta",
    avatar: "AP",
    avatarBg: "#1a5c46",
    rating: 5,
    text: "Pengalaman pertama naik Rinjani bersama tim ini luar biasa! Guide-nya profesional, makanannya enak (seriously, nasi goreng di ketinggian 2600m rasanya beda!), dan yang paling berkesan adalah sunrise di puncak yang bikin nangis haru.",
    package: "Paket Summit Attack",
    date: "Maret 2025",
  },
  {
    id: 2,
    name: "Sari Dewi Kusuma",
    location: "Surabaya",
    avatar: "SK",
    avatarBg: "#92400e",
    rating: 5,
    text: "Awalnya takut karena ini pendakian pertama saya. Tapi tim Rinjani Open Trip sangat sabar dan supportif! Tidak ada yang tertinggal, semua peserta sampai puncak. Worth every rupiah!",
    package: "Paket Summit Attack",
    date: "April 2025",
  },
  {
    id: 3,
    name: "Rizky Fadhillah",
    location: "Bandung",
    avatar: "RF",
    avatarBg: "#1e3a5f",
    rating: 5,
    text: "Sudah 3x trip bareng mereka dan selalu puas! Paket Senaru Loop paling epic — traverse kaldera, berendam hot spring, foto drone dari atas kaldera. Dokumentasinya sangat profesional.",
    package: "Paket Senaru Loop",
    date: "Mei 2025",
  },
  {
    id: 4,
    name: "Maya Anggraini",
    location: "Yogyakarta",
    avatar: "MA",
    avatarBg: "#5b21b6",
    rating: 5,
    text: "Danau Segara Anak lebih indah dari semua foto yang pernah saya lihat. Guide kami, Pak Hendra, sudah 10 tahun mendaki Rinjani — cerita dan pengetahuannya tentang gunung ini membuat perjalanan semakin kaya makna.",
    package: "Paket Segara Anak",
    date: "Juni 2025",
  },
  {
    id: 5,
    name: "Budi Santoso",
    location: "Medan",
    avatar: "BS",
    avatarBg: "#065f46",
    rating: 5,
    text: "Persiapan trip-nya sangat baik. Briefing sebelum keberangkatan detail, perlengkapan semua tersedia dan terawat, serta tim medis siap siaga. Ini yang membuat saya merasa aman selama pendakian.",
    package: "Paket Summit Attack",
    date: "Juli 2025",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* BG deco */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-[#f59e0b]/5 blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-4">
            <Star size={14} className="text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              5,000+ Peserta Puas
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Kata Mereka
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Ribuan pendaki telah mempercayakan petualangan Rinjani mereka kepada kami
          </p>
        </motion.div>

        {/* Stars row */}
        <div className="flex justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((s) => (
            <Star key={s} size={20} className="fill-[#f59e0b] text-[#f59e0b]" />
          ))}
          <span className="text-white/60 ml-2 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            4.9 dari 5 bintang
          </span>
        </div>

        {/* Card carousel */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              initial={{ opacity: 0, x: direction * 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: direction * -60 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="rounded-3xl p-8 md:p-10 relative"
              style={{ backgroundColor: "#0d1f10", border: "1px solid rgba(255,255,255,0.06)" }}
            >
              {/* Quote icon */}
              <div className="absolute top-8 right-8 opacity-20">
                <Quote size={48} className="text-[#f59e0b]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-[#f59e0b] text-[#f59e0b]" />
                ))}
              </div>

              <p
                className="text-white/80 text-lg md:text-xl leading-relaxed mb-8 relative z-10"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontStyle: "italic" }}
              >
                "{testimonials[current].text}"
              </p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm flex-shrink-0"
                    style={{
                      backgroundColor: testimonials[current].avatarBg,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      fontWeight: 700,
                    }}
                  >
                    {testimonials[current].avatar}
                  </div>
                  <div>
                    <div
                      className="text-white"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >
                      {testimonials[current].name}
                    </div>
                    <div
                      className="text-white/40 text-sm"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                    >
                      {testimonials[current].location} • {testimonials[current].date}
                    </div>
                  </div>
                </div>
                <div
                  className="hidden md:block text-xs px-3 py-1.5 rounded-full"
                  style={{
                    color: "#f59e0b",
                    backgroundColor: "#f59e0b15",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  {testimonials[current].package}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-6">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  aria-label={`Testimoni ${i + 1}`}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "28px" : "8px",
                    height: "8px",
                    backgroundColor: i === current ? "#f59e0b" : "rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <motion.button
                aria-label="Testimoni sebelumnya"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => go(-1)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                aria-label="Testimoni berikutnya"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => go(1)}
                className="w-10 h-10 rounded-xl flex items-center justify-center text-white/60 hover:text-white transition-colors"
                style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
