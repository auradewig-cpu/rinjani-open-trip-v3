import { useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { PackagesSection } from "./components/PackagesSection";
import { WhyUsSection } from "./components/WhyUsSection";
import { GallerySection } from "./components/GallerySection";
import { ItinerarySection } from "./components/ItinerarySection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FaqSection } from "./components/FaqSection";
import { CtaSection } from "./components/CtaSection";
import { Footer } from "./components/Footer";
import { ScrollScrub } from "./components/ScrollScrub";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

function FloatingWhatsApp() {
  return (
    <motion.a
      href="https://wa.me/6281234567890"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 300 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
      style={{
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
      }}
    >
      <MessageCircle size={26} className="text-white" />
      <motion.div
        animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 rounded-full"
        style={{ backgroundColor: "#25D36640" }}
      />
    </motion.a>
  );
}

export default function App() {
  useEffect(() => {
    document.title = "Rinjani Open Trip — Petualangan Tak Terlupakan";
    document.documentElement.style.scrollBehavior = "smooth";
    document.body.style.fontFamily = "'Plus Jakarta Sans', sans-serif";
  }, []);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <ScrollScrub />

      {/* All content sits above the canvas */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <HeroSection />
        <PackagesSection />
        <WhyUsSection />
        <GallerySection />
        <ItinerarySection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
