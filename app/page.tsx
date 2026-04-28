import Image from "next/image";
import { PRODUCTS, CATEGORIES, getDeals, getFeaturedProducts } from "@/lib/mockData";

export default function HomePage() {
  const deals = getDeals();
  const featured = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* ═══════════════════════════════════════════
          🏛️ HERO — Phase 1 Showcase
          ═══════════════════════════════════════════ */}
      <section className="relative pt-12 pb-20 px-4 md:pt-20">
        <div className="container mx-auto">
          {/* Badge */}
          <div className="flex justify-center mb-6 animate-fade-in-up">
            <div className="pulse-gold inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gold-gradient text-white text-sm font-bold shadow-gold-glow">
              <span>✨</span>
              <span>Phase 1 — Luxury Foundation</span>
            </div>
          </div>

          {/* Main Title */}
          <h1
            className="text-center text-5xl md:text-7xl lg:text-display-lg font-display font-bold mb-4 animate-fade-in-up"
            style={{ animationDelay: "100ms" }}
          >
            <span className="text-gold-shine">ماركت زوادة الدكان</span>
          </h1>

          <p
            className="text-center text-lg md:text-xl text-ink-700 max-w-2xl mx-auto mb-2 animate-fade-in-up"
            style={{ animationDelay: "200ms" }}
          >
            بوتيك التسوق الفاخر • تجربة استثنائية بمعايير ضيافة راقية
          </p>
          <p
            className="text-center text-sm text-pearl-500 mb-12 animate-fade-in-up"
            style={{ animationDelay: "300ms" }}
          >
            Inspired by{" "}
            <span className="text-teal-600 font-semibold">Keif Al-Diafa</span> aesthetic
          </p>

          {/* Glassmorphism Showcase Card */}
          <div
            className="glass-light-strong rounded-4xl p-6 md:p-10 max-w-4xl mx-auto shadow-luxe-lg animate-scale-in"
            style={{ animationDelay: "400ms" }}
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {[
                { label: "منتج فاخر", value: "20+", icon: "🛍️" },
                { label: "فئة متنوعة", value: "10", icon: "📦" },
                { label: "بلد منشأ", value: "12", icon: "🌍" },
                { label: "تقييم العملاء", value: "4.8★", icon: "⭐" },
              ].map((stat, i) => (
                <div
                  key={i}
                  className="card-luxe text-center p-4 rounded-2xl bg-white/40 backdrop-blur-md border border-white/50"
                >
                  <div className="text-3xl mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-bold text-gold-gradient">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-ink-700 mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Magnetic CTA */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <button className="btn-gold px-8 py-4 rounded-2xl text-base md:text-lg">
                🛒 ابدأ التسوق الآن
              </button>
              <button className="btn-magnetic px-8 py-4 rounded-2xl bg-white/60 backdrop-blur-xl border border-pearl-200 text-ink-800 font-bold hover:bg-white/80">
                💬 تواصل عبر واتساب
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          🎯 CATEGORY CHIPS (Phase 1 preview)
          ═══════════════════════════════════════════ */}
      <section className="px-4 mb-12">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-ink-800">
            <span className="text-gold-gradient">الأقسام</span>
          </h2>
          <div className="snap-x-pills overflow-x-auto flex gap-3 pb-3">
            {CATEGORIES.map((cat, i) => (
              <button
                key={cat.id}
                className={`shrink-0 snap-start px-5 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  i === 0
                    ? "pulse-gold bg-gold-gradient text-white shadow-gold-glow"
                    : "glass-light text-ink-700 hover:shadow-luxe"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          🔥 DEALS GRID (Bento)
          ═══════════════════════════════════════════ */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <div className="flex items-baseline justify-between mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-ink-800">
              <span className="text-gold-gradient">🔥 عروض اليوم</span>
            </h2>
            <span className="text-sm text-pearl-500">{deals.length} منتج</span>
          </div>

          <div className="bento-grid">
            {deals.slice(0, 8).map((product, i) => {
              const discount = product.oldPrice
                ? Math.round(
                    ((product.oldPrice - product.price) / product.oldPrice) * 100
                  )
                : 0;
              return (
                <div
                  key={product.id}
                  className={`card-luxe group relative overflow-hidden rounded-3xl bg-white shadow-luxe ${
                    i === 0 ? "bento-feature" : ""
                  }`}
                >
                  {/* Image */}
                  <div className="relative aspect-square overflow-hidden bg-pearl-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 768px) 50vw, (max-width: 1280px) 25vw, 16vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      quality={80}
                      priority={i < 4}
                    />
                    {/* Discount Badge */}
                    {discount > 0 && (
                      <div className="absolute top-3 right-3 bg-gold-gradient text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-gold-glow">
                        -{discount}%
                      </div>
                    )}
                    {product.isBestseller && (
                      <div className="absolute top-3 left-3 glass-dark text-white text-xs font-bold px-2.5 py-1 rounded-full">
                        ⭐ الأكثر مبيعاً
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-3 md:p-4">
                    <p className="text-xs text-pearl-500 mb-1">{product.brand}</p>
                    <h3 className="font-bold text-sm md:text-base text-ink-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    <div className="flex items-baseline justify-between gap-2">
                      <div className="flex items-baseline gap-2">
                        <span className="text-base md:text-lg font-bold text-gold-gradient">
                          {product.price.toLocaleString("ar")}
                        </span>
                        {product.oldPrice && (
                          <span className="text-xs text-pearl-400 line-through">
                            {product.oldPrice.toLocaleString("ar")}
                          </span>
                        )}
                      </div>
                      <span className="text-xs text-pearl-500">{product.unit}</span>
                    </div>
                    <button className="btn-gold w-full mt-3 py-2 rounded-xl text-xs md:text-sm">
                      أضف للسلة
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          ✨ FEATURED PRODUCTS
          ═══════════════════════════════════════════ */}
      <section className="px-4 mb-16">
        <div className="container mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-ink-800">
            <span className="text-gold-gradient">✨ منتجات مميزة</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="card-luxe glass-light rounded-3xl overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover"
                    quality={80}
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-ink-800 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-xs text-pearl-500 mt-1">{product.origin}</p>
                  <div className="flex items-center justify-between mt-2">
                    <span className="font-bold text-gold-gradient">
                      {product.price.toLocaleString("ar")} ريال
                    </span>
                    <span className="text-xs text-gold-600">⭐ {product.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          🏛️ PHASE 1 CHECKLIST FOOTER
          ═══════════════════════════════════════════ */}
      <section className="px-4 pb-20">
        <div className="container mx-auto">
          <div className="glass-dark rounded-4xl p-6 md:p-10 text-white">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold-shine inline-block">
              ✅ Phase 1 — مكتملة
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6">
              {[
                "🎨 لوحة ألوان فاخرة (Teal #009BC5 + Gold #D4AF37→#F27628)",
                "🌫️ Mesh Gradient متحرك (24s loop)",
                "✨ Glassmorphism 2.0 (light/dark/strong)",
                "🧲 Magnetic CTA Buttons مع shimmer",
                "✏️ Cairo + Amiri fonts عبر next/font",
                "🛒 20 منتج فاخر موزعة على 10 فئات",
                "🖼️ صور WebP (q=80) من Unsplash",
                "📱 RTL + Safe-area + PWA-ready",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 p-3 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10"
                >
                  <span className="text-sm md:text-base">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-white/60 text-center">
              الخطوة التالية: Phase 2 — Zustand Store + Header + Bottom Nav + Product Grid
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
