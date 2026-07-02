import { motion } from "motion/react";
import { Shield, Users, Camera, Backpack, Leaf, PhoneCall } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Keamanan Terjamin",
    description: "Semua guide bersertifikat BNSP. Perlengkapan P3K lengkap dan asuransi pendakian untuk setiap peserta.",
    color: "#4ade80",
    bgColor: "#4ade8015",
  },
  {
    icon: Users,
    title: "Grup Kecil & Intim",
    description: "Maksimal 12 peserta per trip untuk pengalaman lebih personal, aman, dan tidak tergesa-gesa.",
    color: "#f59e0b",
    bgColor: "#f59e0b15",
  },
  {
    icon: Camera,
    title: "Foto Profesional",
    description: "Setiap trip didampingi fotografer berpengalaman. Pulang dengan kenangan foto yang Instagram-worthy!",
    color: "#60a5fa",
    bgColor: "#60a5fa15",
  },
  {
    icon: Backpack,
    title: "Perlengkapan Lengkap",
    description: "Tenda, matras, sleeping bag, carrier tersedia. Kamu cukup bawa badan dan semangat!",
    color: "#f472b6",
    bgColor: "#f472b615",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Kami berkomitmen pada pendakian ramah lingkungan. Zero waste policy dan edukasi alam bebas.",
    color: "#34d399",
    bgColor: "#34d39915",
  },
  {
    icon: PhoneCall,
    title: "Support 24 Jam",
    description: "Tim kami siap membantu kapan pun. Konsultasi gratis sebelum dan sesudah pendakian.",
    color: "#a78bfa",
    bgColor: "#a78bfa15",
  },
];

export function WhyUsSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#1a5c46]/10 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4ade80]/10 border border-[#4ade80]/30 mb-4">
            <Shield size={14} className="text-[#4ade80]" />
            <span className="text-[#4ade80] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Kenapa Kami?
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Bukan Sekadar Jalan-Jalan
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto text-base"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Kami hadir untuk memastikan setiap langkah di Rinjani menjadi petualangan yang aman, berkesan, dan penuh makna
          </p>
        </motion.div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="group p-6 rounded-3xl border border-white/5 relative overflow-hidden"
              style={{ backgroundColor: "#0d1f10" }}
            >
              {/* Hover bg glow */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{ background: `radial-gradient(circle at 30% 30%, ${feature.bgColor}, transparent 70%)` }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: feature.bgColor, border: `1px solid ${feature.color}30` }}
                >
                  <feature.icon size={22} style={{ color: feature.color }} />
                </div>

                <h3
                  className="text-white mb-3"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "17px", fontWeight: 700 }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-white/50 text-sm leading-relaxed"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                >
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
