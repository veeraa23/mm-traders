const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=800&auto=format&fit=crop",
    alt: "Golden paddy fields ready for harvest",
    label: "Paddy Fields",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?q=80&w=800&auto=format&fit=crop",
    alt: "Tamil Nadu rice paddy",
    label: "Harvest Season",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1602867741746-6df80f40b3f6?q=80&w=800&auto=format&fit=crop",
    alt: "Paddy sacks ready for transport",
    label: "Paddy Bags",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1620706857370-e1b9770e8bb1?q=80&w=800&auto=format&fit=crop",
    alt: "Trucks loaded with paddy",
    label: "Transport Fleet",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=800&auto=format&fit=crop",
    alt: "Rice mill exterior in Tamil Nadu",
    label: "Rice Mills",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=800&auto=format&fit=crop",
    alt: "Close-up of paddy grains",
    label: "Quality Paddy",
    span: "",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-sm font-semibold mb-5">
            Gallery
          </div>
          <h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Fields to{" "}
            <span className="text-gradient-gold">Mills</span>
          </h2>
          <p className="text-gray-500 text-lg">
            A visual journey through the paddy supply chain we operate every day.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:scale-[1.02] ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-white font-semibold text-sm bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
