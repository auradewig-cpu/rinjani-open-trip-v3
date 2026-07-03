import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CheckCircle2, Clock, Users, Mountain, Star, ChevronRight, Flame } from "lucide-react";

const packages = [
  {
    id: 1,
    name: "Paket Segara Anak",
    subtitle: "2 Hari 1 Malam",
    price: "Rp 750.000",
    priceNote: "per orang",
    badge: null,
    duration: "2H 1M",
    maxPax: 12,
    difficulty: "Sedang",
    rating: 4.8,
    reviews: 312,
    color: "from-[#1a5c46] to-[#0d3b2e]",
    accent: "#4ade80",
    includes: [
      "Guide berpengalaman",
      "Tenda & matras",
      "Makan 3x sehari",
      "Carrier 60L tersedia",
      "P3K & asuransi",
      "Simaksi resmi",
    ],
    description: "Trek menuju Danau Segara Anak yang legendaris. Cocok untuk pemula yang ingin merasakan keindahan kaldera Rinjani.",
    image: "https://images.unsplash.com/photo-1698799330469-e53f68a91c08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 2,
    name: "Paket Summit Attack",
    subtitle: "3 Hari 2 Malam",
    price: "Rp 1.150.000",
    priceNote: "per orang",
    badge: "Terlaris",
    duration: "3H 2M",
    maxPax: 10,
    difficulty: "Menantang",
    rating: 4.9,
    reviews: 587,
    color: "from-[#92400e] to-[#78350f]",
    accent: "#f59e0b",
    includes: [
      "Guide & porter berpengalaman",
      "Full perlengkapan camping",
      "Makan 6x + snack",
      "Summit attempt pukul 02:00",
      "Foto sunrise di puncak",
      "Sertifikat pendakian",
    ],
    description: "Pengalaman lengkap: Danau Segara Anak + Summit 3.726 mdpl. Saksikan sunrise paling epic dari puncak Rinjani!",
    image: "https://images.unsplash.com/photo-1782676395854-7053c3d6a830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
  {
    id: 3,
    name: "Paket Senaru Loop",
    subtitle: "4 Hari 3 Malam",
    price: "Rp 1.550.000",
    priceNote: "per orang",
    badge: "Premium",
    duration: "4H 3M",
    maxPax: 8,
    difficulty: "Expert",
    rating: 5.0,
    reviews: 203,
    color: "from-[#1e3a5f] to-[#0f2040]",
    accent: "#60a5fa",
    includes: [
      "Head guide + 2 porter",
      "Full luxury camping gear",
      "Makan 9x + buah segar",
      "Summit + Segara Anak + Hot spring",
      "Traverse Senaru-Sembalun",
      "Foto profesional drone",
    ],
    description: "Rute terpanjang nan menakjubkan, menyebrangi seluruh kaldera, berendam di hot spring, dan menikmati puncak 2x!",
    image: "https://images.unsplash.com/photo-1770065799075-26584088c482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
  },
];

const difficultyColor: Record<string, string> = {
  Sedang: "text-emerald-400 bg-emerald-400/20",
  Menantang: "text-amber-400 bg-amber-400/20",
  Expert: "text-blue-400 bg-blue-400/20",
};

function PackageCard({ pkg, index }: { pkg: typeof packages[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15, ease: "easeOut" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative flex flex-col rounded-3xl overflow-hidden cursor-pointer"
      style={{ background: "linear-gradient(145deg, #111c15, #0a140d)" }}
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <motion.img
          src={pkg.image}
          alt={pkg.name}
          loading="lazy"
          decoding="async"
          animate={{ scale: hovered ? 1.08 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-b ${pkg.color} opacity-60`} />

        {/* Badge */}
        {pkg.badge && (
          <div className="absolute top-4 left-4">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#f59e0b] text-black text-xs shadow-lg"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
            >
              <Flame size={12} />
              {pkg.badge}
            </motion.div>
          </div>
        )}

        {/* Rating */}
        <div className="absolute top-4 right-4 flex items-center gap-1 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-sm">
          <Star size={12} className="text-[#f59e0b] fill-[#f59e0b]" />
          <span className="text-white text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}>
            {pkg.rating}
          </span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm">
            <Clock size={12} className="text-white/70" />
            <span className="text-white text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              {pkg.duration}
            </span>
            <span className="text-white/40 text-xs">•</span>
            <Users size={12} className="text-white/70" />
            <span className="text-white text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Max {pkg.maxPax}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3
              className="text-white mb-1"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", fontWeight: 700 }}
            >
              {pkg.name}
            </h3>
            <span
              className={`inline-block text-xs px-2.5 py-1 rounded-full ${difficultyColor[pkg.difficulty]}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
            >
              {pkg.difficulty}
            </span>
          </div>
          <div className="text-right">
            <div
              className="text-white"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "22px", fontWeight: 700 }}
            >
              {pkg.price}
            </div>
            <div className="text-white/40 text-xs" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              {pkg.priceNote}
            </div>
          </div>
        </div>

        <p
          className="text-white/60 text-sm leading-relaxed mb-5"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          {pkg.description}
        </p>

        {/* Includes */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {pkg.includes.map((item) => (
            <div key={item} className="flex items-center gap-1.5">
              <CheckCircle2 size={13} style={{ color: pkg.accent, flexShrink: 0 }} />
              <span
                className="text-white/70 text-xs leading-tight"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="mt-auto w-full py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm"
          style={{
            background: `linear-gradient(135deg, ${pkg.accent}22, ${pkg.accent}11)`,
            border: `1px solid ${pkg.accent}40`,
            color: pkg.accent,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            fontWeight: 700,
          }}
        >
          Pesan Sekarang
          <ChevronRight size={16} />
        </motion.button>
      </div>

      {/* Hover glow border */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 rounded-3xl pointer-events-none"
        style={{ boxShadow: `inset 0 0 0 1px ${pkg.accent}40` }}
      />
    </motion.div>
  );
}

export function PackagesSection() {
  return (
    <section id="packages" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-4">
            <Mountain size={14} className="text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Open Trip 2025
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Pilih Petualanganmu
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Setiap paket dirancang dengan cermat untuk memberikan pengalaman terbaik di Gunung Rinjani
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-white/40 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Harga belum termasuk transportasi ke basecamp • Semua paket include simaksi resmi TNGR
          </p>
        </motion.div>
      </div>
    </section>
  );
}
