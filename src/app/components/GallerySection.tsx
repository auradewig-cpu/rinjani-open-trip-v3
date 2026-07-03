import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ZoomIn, ImageIcon } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1698267703889-06c41f9acba5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Danau Segara Anak dari ketinggian",
    span: "col-span-2 row-span-2",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1586022045497-31fcf76fa6cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Perjalanan menuju puncak",
    span: "col-span-1 row-span-1",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1782676395854-7053c3d6a830?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Bayangan kawah saat sunrise",
    span: "col-span-1 row-span-1",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1770065799075-26584088c482?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Danau kawah biru memukau",
    span: "col-span-1 row-span-2",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Pendaki di puncak kebanggaan",
    span: "col-span-1 row-span-1",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1558883493-8b86ff880fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=60&w=400",
    caption: "Golden hour di Rinjani",
    span: "col-span-1 row-span-1",
  },
];

export function GallerySection() {
  const [selected, setSelected] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#60a5fa]/10 border border-[#60a5fa]/30 mb-4">
            <ImageIcon size={14} className="text-[#60a5fa]" />
            <span className="text-[#60a5fa] text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
              Galeri Pendakian
            </span>
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 900 }}
          >
            Potret Keajaiban Rinjani
          </h2>
          <p
            className="text-white/50 max-w-lg mx-auto text-base"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Setiap foto bercerita tentang perjuangan, keindahan, dan kebanggaan sampai di puncak
          </p>
        </motion.div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-3 grid-rows-3 gap-3 h-[600px] md:h-[700px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              onClick={() => setSelected(item)}
              className={`${item.span} relative overflow-hidden rounded-2xl cursor-pointer group`}
            >
              <img
                src={item.url}
                alt={item.caption}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>
                  <ZoomIn size={20} className="text-white mb-1" />
                  <p className="text-white text-sm" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                    {item.caption}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.button
            aria-label="Tutup galeri"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 bg-black/80 backdrop-blur-md"
            style={{ border: 'none', width: '100%', height: '100%', cursor: 'pointer' }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden"
            >
              <img src={selected.url} alt={selected.caption} loading="lazy" decoding="async" className="w-full h-auto max-h-[80vh] object-cover" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white text-base" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500 }}>
                  {selected.caption}
                </p>
              </div>
              <button
                aria-label="Tutup galeri"
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    </section>
  );
}
