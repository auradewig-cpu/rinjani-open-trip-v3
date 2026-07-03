import { useEffect, lazy, Suspense } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { ScrollScrub } from "./components/ScrollScrub";
import { motion, MotionConfig } from "motion/react";
import { MessageCircle } from "lucide-react";

const PackagesSection = lazy(() => import("./components/PackagesSection").then(m => ({default: m.PackagesSection})));
const WhyUsSection = lazy(() => import("./components/WhyUsSection").then(m => ({default: m.WhyUsSection})));
const GallerySection = lazy(() => import("./components/GallerySection").then(m => ({default: m.GallerySection})));
const ItinerarySection = lazy(() => import("./components/ItinerarySection").then(m => ({default: m.ItinerarySection})));
const TestimonialsSection = lazy(() => import("./components/TestimonialsSection").then(m => ({default: m.TestimonialsSection})));
const FaqSection = lazy(() => import("./components/FaqSection").then(m => ({default: m.FaqSection})));
const CtaSection = lazy(() => import("./components/CtaSection").then(m => ({default: m.CtaSection})));
const Footer = lazy(() => import("./components/Footer").then(m => ({default: m.Footer})));

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

  const prefersReducedMotion =
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const isMobile = window.innerWidth < 768;
  const disableMotion = isMobile || prefersReducedMotion;

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
      <ScrollScrub />

      {/* All content sits above the canvas */}
      <div className="relative" style={{ zIndex: 2 }}>
        <Navbar />
        <HeroSection />
        <MotionConfig reducedMotion={disableMotion ? "always" : "never"}>
          <Suspense fallback={null}>
            <PackagesSection />
            <WhyUsSection />
            <GallerySection />
            <ItinerarySection />
            <TestimonialsSection />
            <FaqSection />
            <CtaSection />
            <Footer />
          </Suspense>
        </MotionConfig>
      </div>

      <FloatingWhatsApp />
    </div>
  );
}
