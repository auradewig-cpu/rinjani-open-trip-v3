import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    q: "Apakah saya perlu pengalaman mendaki sebelumnya?",
    a: "Tidak wajib untuk paket Segara Anak, namun untuk Summit Attack dan Senaru Loop disarankan memiliki kondisi fisik yang baik dan pengalaman trekking minimal. Kami akan memberikan briefing lengkap sebelum keberangkatan.",
  },
  {
    q: "Perlengkapan apa yang harus saya bawa sendiri?",
    a: "Pakaian olahraga (tebal dan tipis), sepatu trekking, rain jacket, headlamp, sunblock, dan obat pribadi. Tenda, matras, sleeping bag, dan carrier tersedia dari kami. Detail packing list akan dikirim setelah konfirmasi booking.",
  },
  {
    q: "Berapa minimal peserta per trip?",
    a: "Trip kami berjalan minimal dengan 4 peserta dan maksimal 12 peserta. Ini memastikan kualitas pelayanan tetap optimal dan pengalaman lebih personal untuk setiap peserta.",
  },
  {
    q: "Apakah ada batasan usia untuk mendaki Rinjani?",
    a: "Minimal usia 17 tahun atau 15 tahun dengan izin orang tua tertulis. Tidak ada batasan usia maksimal, namun direkomendasikan dalam kondisi kesehatan prima. Peserta di atas 45 tahun disarankan melampirkan surat keterangan dokter.",
  },
  {
    q: "Bagaimana cara pembayaran dan kapan deadline-nya?",
    a: "DP 50% saat konfirmasi booking via transfer bank (BCA/Mandiri/BRI/BSI). Pelunasan 50% maksimal H-7 sebelum keberangkatan. Kami juga menerima cicilan untuk paket premium.",
  },
  {
    q: "Apakah open trip bisa dibatalkan atau dijadwal ulang?",
    a: "Pembatalan H-14 = refund 50%. Pembatalan H-7 = tidak ada refund, namun bisa dijadwal ulang ke trip berikutnya. Jika pembatalan dari pihak kami (cuaca ekstrem/force majeure), refund penuh atau reschedule gratis.",
  },
  {
    q: "Kapan jadwal open trip tersedia?",
    a: "Trip tersedia setiap minggu, tergantung season pendakian TNGR (April–Desember). Januari–Maret biasanya tutup karena musim hujan. Cek jadwal terbaru via WhatsApp atau Instagram kami.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6 relative">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#a78bfa]/10 border border-[#a78bfa]/30 mb-4">
            <HelpCircle size={14} className="text-[#a78bfa]" />
            <span className="text-[#a78bfa] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              FAQ
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Pertanyaan Umum
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Punya pertanyaan lain? Hubungi kami via WhatsApp, kami siap membantu 24/7
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl overflow-hidden"
              style={{
                backgroundColor: openIndex === i ? "#111f14" : "#0d1a10",
                border: openIndex === i ? "1px solid rgba(167,139,250,0.2)" : "1px solid rgba(255,255,255,0.05)",
                transition: "all 0.3s ease",
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span
                  className="text-white pr-4"
                  style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600, fontSize: "15px" }}
                >
                  {faq.q}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === i ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0"
                >
                  <ChevronDown
                    size={18}
                    style={{ color: openIndex === i ? "#a78bfa" : "rgba(255,255,255,0.3)" }}
                  />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5">
                      <div className="h-px bg-white/5 mb-4" />
                      <p
                        className="text-white/60 text-sm leading-relaxed"
                        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                      >
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
