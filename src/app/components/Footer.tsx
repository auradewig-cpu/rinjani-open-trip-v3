import { motion } from "motion/react";
import { Mountain, Instagram, Facebook, Youtube, MessageCircle, MapPin, Phone, Mail } from "lucide-react";

const quickLinks = [
  { label: "Beranda", href: "#home" },
  { label: "Open Trip", href: "#packages" },
  { label: "Galeri", href: "#gallery" },
  { label: "Itinerary", href: "#itinerary" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/rinjani.opentrip" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/6281234567890" },
];

export function Footer() {
  return (
    <footer className="relative">
      {/* Top wave */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full">
          <path d="M0,40 C360,0 1080,60 1440,20 L1440,0 L0,0 Z" fill="transparent" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-20 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#f59e0b] to-[#ea580c] flex items-center justify-center">
                <Mountain size={22} className="text-white" />
              </div>
              <div>
                <span className="text-white" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px" }}>
                  RINJANI
                </span>
                <span className="text-[#f59e0b]" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "18px" }}>
                  {" "}OPEN TRIP
                </span>
              </div>
            </div>
            <p
              className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Operator open trip Gunung Rinjani terpercaya sejak 2017. Mengantarkan ribuan pendaki meraih puncak impian mereka dengan aman dan berkesan.
            </p>
            {/* Socials */}
            <div className="flex gap-3">
              {socials.map((s) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} Rinjani Open Trip`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white/50 hover:text-white transition-colors"
                  style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                >
                  <s.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Menu
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 hover:text-white/80 text-sm transition-colors"
                    style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", textDecoration: 'none' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-white mb-5"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700, fontSize: "14px", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              Kontak
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <MapPin size={14} className="text-[#f59e0b] mt-0.5 flex-shrink-0" />
                <span>Jl. Rinjani No. 1, Sembalun, Lombok Timur, NTB</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Phone size={14} className="text-[#f59e0b] flex-shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Mail size={14} className="text-[#f59e0b] flex-shrink-0" />
                <span>info@rinjani-opentrip.id</span>
              </li>
              <li className="flex items-center gap-2 text-white/60 text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                <Instagram size={14} className="text-[#f59e0b] flex-shrink-0" />
                <span>@rinjani.opentrip</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/5 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/50 text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            © 2025 Rinjani Open Trip. All rights reserved.
          </p>
          <p
            className="text-white/50 text-sm"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Izin Usaha TNGR No. 001/TNGR/2025 • Member PHRI
          </p>
        </div>
      </div>
    </footer>
  );
}
