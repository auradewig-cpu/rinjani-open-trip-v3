import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, Sun, Moon, Sunrise, Sunset, MapPin } from "lucide-react";

const itinerary = [
  {
    day: "Hari 1",
    title: "Keberangkatan & Registrasi",
    icon: Sun,
    color: "#f59e0b",
    events: [
      { time: "06:00", desc: "Kumpul di meeting point Sembalun" },
      { time: "07:00", desc: "Briefing pendakian & pengecekan perlengkapan" },
      { time: "08:00", desc: "Start pendakian dari Sembalun Lawang (1.156 mdpl)" },
      { time: "12:00", desc: "Istirahat makan siang di padang savana" },
      { time: "17:00", desc: "Tiba di Plawangan Sembalun (2.639 mdpl)" },
      { time: "19:00", desc: "Makan malam & persiapan tidur" },
    ],
  },
  {
    day: "Hari 2",
    title: "Summit Attack & Danau Segara Anak",
    icon: Sunrise,
    color: "#ea580c",
    events: [
      { time: "02:00", desc: "Bangun & persiapan summit attack" },
      { time: "02:30", desc: "Mulai pendakian menuju puncak Rinjani" },
      { time: "05:30", desc: "Tiba di Puncak Rinjani 3.726 mdpl — SUNRISE!" },
      { time: "08:00", desc: "Turun dari puncak menuju Plawangan" },
      { time: "10:00", desc: "Turun menuju Danau Segara Anak" },
      { time: "13:00", desc: "Tiba di tepi Danau Segara Anak — camping" },
      { time: "16:00", desc: "Berendam di pemandian air panas (hot spring)" },
    ],
  },
  {
    day: "Hari 3",
    title: "Kepulangan via Senaru",
    icon: Sunset,
    color: "#f59e0b",
    events: [
      { time: "06:00", desc: "Sarapan dengan view danau yang menakjubkan" },
      { time: "07:30", desc: "Start perjalanan turun via Senaru" },
      { time: "12:00", desc: "Istirahat makan siang di pos 3 Senaru" },
      { time: "15:00", desc: "Tiba di basecamp Senaru (600 mdpl)" },
      { time: "16:00", desc: "Bersih-bersih & makan siang akhir" },
      { time: "18:00", desc: "Perpisahan & kembali ke titik awal" },
    ],
  },
];

function DayCard({ item, index }: { item: typeof itinerary[0]; index: number }) {
  const [open, setOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline line */}
      {index < itinerary.length - 1 && (
        <div className="absolute left-7 top-14 bottom-0 w-0.5 bg-gradient-to-b from-white/20 to-transparent" />
      )}

      <div className="flex gap-4">
        {/* Day indicator */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 z-10"
          style={{ background: `linear-gradient(135deg, ${item.color}33, ${item.color}11)`, border: `1px solid ${item.color}40` }}
        >
          <item.icon size={22} style={{ color: item.color }} />
        </div>

        {/* Content */}
        <div className="flex-1 rounded-3xl overflow-hidden" style={{ backgroundColor: "#0d1f10", border: "1px solid rgba(255,255,255,0.05)" }}>
          <button
            onClick={() => setOpen(!open)}
            className="w-full flex items-center justify-between p-5"
          >
            <div>
              <span
                className="text-xs mb-1 block"
                style={{ color: item.color, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 600 }}
              >
                {item.day}
              </span>
              <h3
                className="text-white text-left"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "16px", fontWeight: 700 }}
              >
                {item.title}
              </h3>
            </div>
            <motion.div
              animate={{ rotate: open ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown size={20} className="text-white/40" />
            </motion.div>
          </button>

          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="px-5 pb-5 space-y-3">
                  {item.events.map((event, i) => (
                    <motion.div
                      key={event.time}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.04 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className="text-xs px-2 py-0.5 rounded-lg flex-shrink-0 mt-0.5"
                        style={{
                          color: item.color,
                          backgroundColor: `${item.color}15`,
                          fontFamily: "'Plus Jakarta Sans', sans-serif",
                          fontWeight: 600,
                          minWidth: "52px",
                          textAlign: "center",
                        }}
                      >
                        {event.time}
                      </div>
                      <div className="flex items-start gap-2">
                        <MapPin size={12} className="text-white/30 mt-1 flex-shrink-0" />
                        <p
                          className="text-white/60 text-sm"
                          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
                        >
                          {event.desc}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

export function ItinerarySection() {
  return (
    <section id="itinerary" className="py-24 px-6 relative">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill="transparent" />
        </svg>
      </div>

      <div className="max-w-3xl mx-auto pt-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ea580c]/10 border border-[#ea580c]/30 mb-4">
            <Moon size={14} className="text-[#ea580c]" />
            <span className="text-[#ea580c] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Rencana Perjalanan
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Itinerary Lengkap
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto text-base"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Setiap momen terencana dengan baik, agar petualanganmu berjalan lancar dan tak terlupakan
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="space-y-6">
          {itinerary.map((item, i) => (
            <DayCard key={item.day} item={item} index={i} />
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,30 C480,0 960,60 1440,30 L1440,60 L0,60 Z" fill="transparent" />
        </svg>
      </div>
    </section>
  );
}
