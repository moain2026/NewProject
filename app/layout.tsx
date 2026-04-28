import type { Metadata, Viewport } from "next";
import { Cairo, Amiri } from "next/font/google";
import "./globals.css";

// ═══════════════════════════════════════════════════
// ✏️ ELEGANT TYPOGRAPHY LOADING
// ═══════════════════════════════════════════════════
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
  preload: true,
});

const amiri = Amiri({
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-amiri",
  display: "swap",
  preload: true,
});

// ═══════════════════════════════════════════════════
// 🔍 SEO & SOCIAL METADATA
// ═══════════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL("https://zawada-aldukkan.com"),
  title: {
    default: "ماركت زوادة الدكان | بوتيك التسوق الفاخر",
    template: "%s | زوادة الدكان",
  },
  description:
    "اكتشف تجربة تسوق فاخرة مع ماركت زوادة الدكان. أجود أنواع المواد الغذائية، الفواكه الطازجة، والمنتجات الأصيلة بتوصيل سريع وخدمة استثنائية.",
  keywords: [
    "زوادة الدكان",
    "ماركت فاخر",
    "تسوق أونلاين اليمن",
    "توصيل بقالة",
    "منتجات طازجة",
    "Zawada Al-Dukkan",
    "luxury supermarket",
  ],
  authors: [{ name: "Zawada Al-Dukkan" }],
  creator: "Zawada Al-Dukkan Market",
  category: "shopping",
  applicationName: "زوادة الدكان",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: "https://zawada-aldukkan.com",
    siteName: "ماركت زوادة الدكان",
    title: "ماركت زوادة الدكان | بوتيك التسوق الفاخر",
    description: "تجربة تسوق فاخرة بمعايير ضيافة استثنائية",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ماركت زوادة الدكان",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ماركت زوادة الدكان",
    description: "بوتيك التسوق الفاخر — تجربة لا تُنسى",
    images: ["/og-image.jpg"],
  },
  appleWebApp: {
    capable: true,
    title: "زوادة الدكان",
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
  },
  manifest: "/manifest.json",
};

// ═══════════════════════════════════════════════════
// 📱 VIEWPORT (Native PWA Feel)
// ═══════════════════════════════════════════════════
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FBFCFD" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0C10" },
  ],
};

// ═══════════════════════════════════════════════════
// 🏛️ ROOT LAYOUT
// ═══════════════════════════════════════════════════
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable}`}
      suppressHydrationWarning
    >
      <head>
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.pexels.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GroceryStore",
              name: "ماركت زوادة الدكان",
              alternateName: "Zawada Al-Dukkan Market",
              image: "https://zawada-aldukkan.com/og-image.jpg",
              telephone: "+967771529063",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                addressCountry: "YE",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen antialiased font-cairo">
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-mesh-luxury bg-[length:200%_200%] animate-mesh-drift opacity-90 pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="fixed inset-0 -z-10 bg-premium-noise opacity-[0.015] mix-blend-overlay pointer-events-none"
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:right-4 focus:z-[100] focus:bg-gold-gradient focus:text-white focus:px-4 focus:py-2 focus:rounded-xl"
        >
          الانتقال إلى المحتوى الرئيسي
        </a>
        <main id="main" className="relative z-0 pb-24 md:pb-0">
          {children}
        </main>
      </body>
    </html>
  );
}
