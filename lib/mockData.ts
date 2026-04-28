// ═══════════════════════════════════════════════════════════
// 📦 ZAWADA AL-DUKKAN — REALISTIC MOCK CATALOG
// All images use Unsplash CDN with auto WebP + 80% quality
// Format: ?auto=format&fit=crop&fm=webp&q=80&w=800
// ═══════════════════════════════════════════════════════════

export type Category = {
  id: string;
  name: string;
  emoji: string;
  slug: string;
};

export type Product = {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  brand: string;
  price: number;
  oldPrice?: number;
  unit: string;
  weight?: string;
  image: string;
  images?: string[];
  categoryId: string;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  isOnSale?: boolean;
  origin?: string;
  tags?: string[];
};

const UNSPLASH_BASE = "https://images.unsplash.com";

/**
 * Build an optimized WebP image URL from an Unsplash photo ID.
 * Forces fm=webp + quality=80 + auto-cropping for hyper-realistic display.
 */
export const buildImage = (
  photoId: string,
  width: number = 800,
  height?: number
): string => {
  const h = height ? `&h=${height}` : "";
  return `${UNSPLASH_BASE}/${photoId}?auto=format&fit=crop&fm=webp&q=80&w=${width}${h}`;
};

// ────────────────────────────────────────────────────────────
// 🗂️ CATEGORIES
// ────────────────────────────────────────────────────────────
export const CATEGORIES: Category[] = [
  { id: "deals",      name: "🔥 عروض اليوم",      emoji: "🔥", slug: "deals" },
  { id: "fruits",     name: "فواكه طازجة",        emoji: "🍎", slug: "fruits" },
  { id: "vegetables", name: "خضروات",             emoji: "🥬", slug: "vegetables" },
  { id: "dairy",      name: "ألبان وأجبان",       emoji: "🧀", slug: "dairy" },
  { id: "bakery",     name: "مخبوزات",            emoji: "🥖", slug: "bakery" },
  { id: "meat",       name: "لحوم ودواجن",        emoji: "🥩", slug: "meat" },
  { id: "pantry",     name: "خزانة المؤن",        emoji: "🍚", slug: "pantry" },
  { id: "beverages",  name: "مشروبات",            emoji: "☕", slug: "beverages" },
  { id: "sweets",     name: "حلويات وشوكولاتة",   emoji: "🍫", slug: "sweets" },
  { id: "perfumes",   name: "عطور وبخور",         emoji: "🪔", slug: "perfumes" },
];

// ────────────────────────────────────────────────────────────
// 🛍️ PRODUCTS (20 items)
// ────────────────────────────────────────────────────────────
export const PRODUCTS: Product[] = [
  {
    id: "p-001",
    name: "تفاح لبناني طازج",
    nameEn: "Lebanese Fresh Apples",
    description: "تفاح أحمر فاخر مستورد من لبنان، خامة ممتازة وحلاوة طبيعية لا تُقاوم.",
    brand: "مزارع البقاع",
    price: 1450,
    oldPrice: 1800,
    unit: "كجم",
    weight: "1 كجم",
    image: buildImage("photo-1568702846914-96b305d2aaeb", 800, 800),
    images: [
      buildImage("photo-1568702846914-96b305d2aaeb", 1200),
      buildImage("photo-1567306226416-28f0efdc88ce", 1200),
    ],
    categoryId: "fruits",
    rating: 4.8,
    reviewsCount: 312,
    inStock: true,
    stockCount: 124,
    isFeatured: true,
    isOnSale: true,
    isBestseller: true,
    origin: "لبنان 🇱🇧",
    tags: ["طازج", "مستورد", "عضوي"],
  },
  {
    id: "p-002",
    name: "موز إكوادوري ذهبي",
    nameEn: "Ecuador Golden Bananas",
    description: "موز عالي الجودة من المزارع الذهبية في الإكوادور، غني بالبوتاسيوم.",
    brand: "Tropical Gold",
    price: 850,
    unit: "كجم",
    image: buildImage("photo-1571771894821-ce9b6c11b08e", 800, 800),
    categoryId: "fruits",
    rating: 4.6,
    reviewsCount: 189,
    inStock: true,
    stockCount: 230,
    origin: "الإكوادور 🇪🇨",
    tags: ["طاقة", "غني بالبوتاسيوم"],
  },
  {
    id: "p-003",
    name: "فراولة بلدية فاخرة",
    nameEn: "Premium Local Strawberries",
    description: "فراولة محلية طازجة مقطوفة من المزارع اليمنية بطعم استثنائي.",
    brand: "مزارع تعز",
    price: 2200,
    oldPrice: 2750,
    unit: "علبة 500 جم",
    image: buildImage("photo-1464965911861-746a04b4bca6", 800, 800),
    categoryId: "fruits",
    rating: 4.9,
    reviewsCount: 421,
    inStock: true,
    stockCount: 88,
    isNew: true,
    isOnSale: true,
    origin: "اليمن 🇾🇪",
    tags: ["محلي", "طازج"],
  },
  {
    id: "p-004",
    name: "طماطم شيري عضوية",
    nameEn: "Organic Cherry Tomatoes",
    description: "طماطم شيري عضوية صغيرة الحجم بنكهة حلوة لذيذة، مثالية للسلطات.",
    brand: "Bio Farms",
    price: 1650,
    unit: "علبة 500 جم",
    image: buildImage("photo-1546470427-e52ba8a9a4a6", 800, 800),
    categoryId: "vegetables",
    rating: 4.7,
    reviewsCount: 156,
    inStock: true,
    stockCount: 67,
    isFeatured: true,
    tags: ["عضوي", "Bio"],
  },
  {
    id: "p-005",
    name: "أفوكادو هاس مكسيكي",
    nameEn: "Mexican Hass Avocado",
    description: "أفوكادو هاس فاخر بقوام كريمي وغني بالدهون الصحية.",
    brand: "GreenPeak",
    price: 3200,
    oldPrice: 3800,
    unit: "حبة",
    image: buildImage("photo-1523049673857-eb18f1d7b578", 800, 800),
    categoryId: "vegetables",
    rating: 4.9,
    reviewsCount: 278,
    inStock: true,
    stockCount: 45,
    isOnSale: true,
    isBestseller: true,
    origin: "المكسيك 🇲🇽",
    tags: ["سوبرفود", "صحي"],
  },
  {
    id: "p-006",
    name: "جبنة موزاريلا إيطالية",
    nameEn: "Italian Mozzarella",
    description: "جبنة موزاريلا طازجة مستوردة من إيطاليا، طعم غني وقوام مرن مثالي.",
    brand: "Galbani",
    price: 4500,
    unit: "علبة 250 جم",
    image: buildImage("photo-1486297678162-eb2a19b0a32d", 800, 800),
    categoryId: "dairy",
    rating: 4.8,
    reviewsCount: 234,
    inStock: true,
    stockCount: 92,
    isFeatured: true,
    origin: "إيطاليا 🇮🇹",
    tags: ["مستورد", "بريميوم"],
  },
  {
    id: "p-007",
    name: "زبادي يوناني سادة",
    nameEn: "Greek Yogurt Plain",
    description: "زبادي يوناني كثيف وغني بالبروتين، مثالي للإفطار الصحي.",
    brand: "FAGE",
    price: 1850,
    unit: "كوب 200 جم",
    image: buildImage("photo-1488477181946-6428a0291777", 800, 800),
    categoryId: "dairy",
    rating: 4.7,
    reviewsCount: 198,
    inStock: true,
    stockCount: 156,
    tags: ["بروتين عالي", "صحي"],
  },
  {
    id: "p-008",
    name: "خبز كرواسون فرنسي",
    nameEn: "French Croissant",
    description: "كرواسون زبدة طازج مخبوز يومياً على الطريقة الفرنسية الأصيلة.",
    brand: "La Boulangerie",
    price: 650,
    unit: "حبة",
    image: buildImage("photo-1555507036-ab1f4038808a", 800, 800),
    categoryId: "bakery",
    rating: 4.9,
    reviewsCount: 512,
    inStock: true,
    stockCount: 38,
    isNew: true,
    isBestseller: true,
    origin: "فرنسا 🇫🇷",
    tags: ["طازج", "مخبوز يومياً"],
  },
  {
    id: "p-009",
    name: "صدور دجاج طازج",
    nameEn: "Fresh Chicken Breast",
    description: "صدور دجاج طازج خالية من الهرمونات، معبأة بمعايير صحية عالية.",
    brand: "السنبلة الذهبية",
    price: 3450,
    oldPrice: 3950,
    unit: "كجم",
    image: buildImage("photo-1604503468506-a8da13d82791", 800, 800),
    categoryId: "meat",
    rating: 4.6,
    reviewsCount: 289,
    inStock: true,
    stockCount: 78,
    isOnSale: true,
    tags: ["طازج", "خالٍ من الهرمونات"],
  },
  {
    id: "p-010",
    name: "لحم بقري أنجوس مفروم",
    nameEn: "Angus Ground Beef",
    description: "لحم بقري أنجوس فاخر مفروم طازجاً، مثالي للبرجر والكفتة.",
    brand: "Premium Cuts",
    price: 5800,
    unit: "كجم",
    image: buildImage("photo-1607623814075-e51df1bdc82f", 800, 800),
    categoryId: "meat",
    rating: 4.8,
    reviewsCount: 167,
    inStock: true,
    stockCount: 42,
    isFeatured: true,
    origin: "أستراليا 🇦🇺",
    tags: ["بريميوم", "أنجوس"],
  },
  {
    id: "p-011",
    name: "أرز بسمتي الشعلان",
    nameEn: "Al Shaalan Basmati Rice",
    description: "أرز بسمتي هندي طويل الحبة من الشعلان، نكهة عريقة وطعم لا يُضاهى.",
    brand: "الشعلان",
    price: 8500,
    oldPrice: 9800,
    unit: "كيس 5 كجم",
    image: buildImage("photo-1586201375761-83865001e31c", 800, 800),
    categoryId: "pantry",
    rating: 4.9,
    reviewsCount: 678,
    inStock: true,
    stockCount: 110,
    isOnSale: true,
    isBestseller: true,
    isFeatured: true,
    origin: "الهند 🇮🇳",
    tags: ["بريميوم", "طويل الحبة"],
  },
  {
    id: "p-012",
    name: "زيت زيتون بكر ممتاز",
    nameEn: "Extra Virgin Olive Oil",
    description: "زيت زيتون بكر ممتاز معصور على البارد من جبال إيطاليا.",
    brand: "Bertolli",
    price: 6200,
    unit: "زجاجة 750 مل",
    image: buildImage("photo-1474979266404-7eaacbcd87c5", 800, 800),
    categoryId: "pantry",
    rating: 4.8,
    reviewsCount: 345,
    inStock: true,
    stockCount: 89,
    isFeatured: true,
    origin: "إيطاليا 🇮🇹",
    tags: ["بكر ممتاز", "معصور بارد"],
  },
  {
    id: "p-013",
    name: "عسل مانوكا أصلي",
    nameEn: "Manuka Honey Original",
    description: "عسل مانوكا نيوزيلندي UMF 15+ بفوائد علاجية استثنائية.",
    brand: "Comvita",
    price: 18500,
    unit: "برطمان 500 جم",
    image: buildImage("photo-1587049352846-4a222e784d38", 800, 800),
    categoryId: "pantry",
    rating: 5.0,
    reviewsCount: 89,
    inStock: true,
    stockCount: 18,
    isNew: true,
    origin: "نيوزيلندا 🇳🇿",
    tags: ["UMF 15+", "علاجي"],
  },
  {
    id: "p-014",
    name: "قهوة عربية مختصة",
    nameEn: "Specialty Arabic Coffee",
    description: "قهوة عربية محمصة بدرجة فاتحة بنكهة الهيل والزعفران الأصلي.",
    brand: "بن العميد",
    price: 4800,
    oldPrice: 5500,
    unit: "علبة 500 جم",
    image: buildImage("photo-1559056199-641a0ac8b55e", 800, 800),
    categoryId: "beverages",
    rating: 4.9,
    reviewsCount: 456,
    inStock: true,
    stockCount: 134,
    isOnSale: true,
    isBestseller: true,
    origin: "اليمن 🇾🇪",
    tags: ["مختصة", "محمصة طازج"],
  },
  {
    id: "p-015",
    name: "شاي إيرل غراي بريميوم",
    nameEn: "Earl Grey Premium Tea",
    description: "شاي إيرل غراي إنجليزي فاخر بنكهة البرغموت الطبيعية.",
    brand: "Twinings",
    price: 2400,
    unit: "علبة 100 كيس",
    image: buildImage("photo-1597318181409-cf64d0b5d8a2", 800, 800),
    categoryId: "beverages",
    rating: 4.7,
    reviewsCount: 234,
    inStock: true,
    stockCount: 87,
    origin: "بريطانيا 🇬🇧",
    tags: ["كلاسيكي", "بريميوم"],
  },
  {
    id: "p-016",
    name: "شوكولاتة دارك سويسرية 85%",
    nameEn: "Swiss Dark Chocolate 85%",
    description: "شوكولاتة سويسرية فاخرة بنسبة كاكاو 85% بطعم غني ومُركَّز.",
    brand: "Lindt",
    price: 3200,
    unit: "لوح 100 جم",
    image: buildImage("photo-1606312619070-d48b4c652a52", 800, 800),
    categoryId: "sweets",
    rating: 4.9,
    reviewsCount: 567,
    inStock: true,
    stockCount: 156,
    isFeatured: true,
    origin: "سويسرا 🇨🇭",
    tags: ["دارك", "بريميوم"],
  },
  {
    id: "p-017",
    name: "مكسرات مشكلة ملكية",
    nameEn: "Royal Mixed Nuts",
    description: "تشكيلة فاخرة من اللوز والكاجو والفستق والجوز محمصة بأرقى المعايير.",
    brand: "بيت المكسرات",
    price: 7800,
    oldPrice: 8900,
    unit: "علبة 500 جم",
    image: buildImage("photo-1599599810769-bcde5a160d32", 800, 800),
    categoryId: "sweets",
    rating: 4.8,
    reviewsCount: 312,
    inStock: true,
    stockCount: 64,
    isOnSale: true,
    isBestseller: true,
    tags: ["مشكل", "ملكي"],
  },
  {
    id: "p-018",
    name: "تمر العجوة المدينة",
    nameEn: "Madinah Ajwa Dates",
    description: "تمر عجوة فاخر من المدينة المنورة بحلاوة طبيعية وفوائد مذهلة.",
    brand: "تمور المدينة",
    price: 9500,
    unit: "علبة 1 كجم",
    image: buildImage("photo-1543158181-e6f9f6712055", 800, 800),
    categoryId: "sweets",
    rating: 5.0,
    reviewsCount: 198,
    inStock: true,
    stockCount: 73,
    isNew: true,
    isFeatured: true,
    origin: "المدينة المنورة 🇸🇦",
    tags: ["عجوة", "بريميوم"],
  },
  {
    id: "p-019",
    name: "عطر شرقي فاخر — عود ملكي",
    nameEn: "Royal Oud Perfume",
    description: "عطر شرقي فاخر بمزيج العود الكمبودي والورد الطائفي، يدوم طويلاً.",
    brand: "العربية للعود",
    price: 24500,
    oldPrice: 29000,
    unit: "زجاجة 100 مل",
    image: buildImage("photo-1541643600914-78b084683601", 800, 800),
    categoryId: "perfumes",
    rating: 4.9,
    reviewsCount: 445,
    inStock: true,
    stockCount: 28,
    isOnSale: true,
    isBestseller: true,
    isFeatured: true,
    origin: "السعودية 🇸🇦",
    tags: ["عود ملكي", "بريميوم"],
  },
  {
    id: "p-020",
    name: "بخور دهن العود الكمبودي",
    nameEn: "Cambodian Oud Bakhoor",
    description: "بخور عود كمبودي أصلي معتق برائحة ساحرة تعطي إحساساً ملكياً.",
    brand: "أصالة العود",
    price: 15800,
    unit: "علبة 50 جم",
    image: buildImage("photo-1610390473033-b51b71eb71a6", 800, 800),
    categoryId: "perfumes",
    rating: 4.8,
    reviewsCount: 178,
    inStock: true,
    stockCount: 35,
    isNew: true,
    origin: "كمبوديا 🇰🇭",
    tags: ["معتق", "كمبودي"],
  },
];

// ────────────────────────────────────────────────────────────
// 🔍 HELPER QUERIES
// ────────────────────────────────────────────────────────────
export const getProductById = (id: string): Product | undefined =>
  PRODUCTS.find((p) => p.id === id);

export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === "deals") return PRODUCTS.filter((p) => p.isOnSale);
  return PRODUCTS.filter((p) => p.categoryId === categoryId);
};

export const getFeaturedProducts = (): Product[] =>
  PRODUCTS.filter((p) => p.isFeatured);

export const getBestsellers = (): Product[] =>
  PRODUCTS.filter((p) => p.isBestseller);

export const getNewArrivals = (): Product[] =>
  PRODUCTS.filter((p) => p.isNew);

export const getDeals = (): Product[] =>
  PRODUCTS.filter((p) => p.isOnSale);

export const searchProducts = (query: string): Product[] => {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.nameEn.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags?.some((t) => t.toLowerCase().includes(q))
  );
};
