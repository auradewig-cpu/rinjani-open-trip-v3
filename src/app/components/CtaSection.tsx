import { motion } from "motion/react";
import { MessageCircle, Instagram, Phone, ArrowRight, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">

      {/* Glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-[#f59e0b]/10 blur-3xl"
        />
      </div>

      <div className="max-w-4xl mx-auto relative text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#f59e0b]/10 border border-[#f59e0b]/30 mb-6">
            <Sparkles size={14} className="text-[#f59e0b]" />
            <span className="text-[#f59e0b] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Slot Terbatas — Daftar Sekarang!
            </span>
          </div>

          <h2
            className="text-white mb-6"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 4rem)", fontWeight: 900, lineHeight: 1.1 }}
          >
            Siap Menaklukkan<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#ea580c]">
              Atap Lombok?
            </span>
          </h2>

          <p
            className="text-white/60 text-lg mb-10 max-w-xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Bergabunglah dengan ribuan pendaki yang telah merasakan keajaiban Rinjani bersama kami.
            Trip berikutnya menanti petualanganmu!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(37,211,102,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#25D366] text-white"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "15px" }}
            >
              <MessageCircle size={20} />
              Chat WhatsApp
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={() => { const el = document.querySelector("#packages"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
              className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-white/10 border border-white/20 text-white backdrop-blur-sm"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px" }}
            >
              Lihat Paket
              <ArrowRight size={18} />
            </motion.button>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-wrap gap-6 justify-center">
            <div className="flex items-center gap-2 text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}>
              <Instagram size={16} className="text-[#f59e0b]" />
              <span>@rinjani.opentrip</span>
            </div>
            <div className="flex items-center gap-2 text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}>
              <Phone size={16} className="text-[#f59e0b]" />
              <span>+62 812-3456-7890</span>
            </div>
            <div className="flex items-center gap-2 text-white/40" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "14px" }}>
              <MessageCircle size={16} className="text-[#f59e0b]" />
              <span>Respon cepat, rata-rata 5 menit</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
