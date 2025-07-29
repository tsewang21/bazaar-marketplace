export interface Store {
  id: string
  name: string
  description: string
  longDescription: string
  location: string
  country: string
  rating: number
  reviewCount: number
  image: string
  category: string
  specialties: string[]
  website?: string
  phone?: string
  email?: string
  established?: number
  featured: boolean
  products: Product[]
}

export interface Product {
  id: string
  name: string
  price: number
  currency: string
  description: string
  image: string
  inStock: boolean
  category: string
}

export const stores: Store[] = [
  {
    id: "tibet-spirit-store",
    name: "Tibet Spirit Store",
    description: "Unique handmade items run by Tibetans. We specialize in handmade Tibet Singing Bowls and have close to 1000 singing bowls of every size and tone.",
    longDescription: "Our Tibet Store is solely owned and run by Tibetan people. It's filled with handmade, unique, one-of-a-kind products created by Tibetan families. We offer original Tibet Buddhism Religious, Meditation and Ritual items, including Unique Tibet Mala Prayer Beads, Hand-Painted Tibet Thangka, Tibet Bells and Dorjee, Tibet Prayer Flags, Tibet Buddha Statues, Incense, Jewelry, Clothing, Tibet Wall hangings and more Dharma Products! We regularly travel to Tibet and its surrounding areas buying from Local Artisans.",
    location: "Portland, Oregon",
    country: "USA",
    rating: 4.8,
    reviewCount: 312,
    image: "🏺",
    category: "Spiritual Items",
    specialties: ["Singing Bowls", "Thangka Paintings", "Prayer Beads", "Incense"],
    phone: "(503) 957-5318",
    email: "info@tibetspirit.com",
    website: "https://tibetspirit.com",
    established: 2001,
    featured: true,
    products: [
      {
        id: "red-crystal-incense",
        name: "Tibet Red Crystal Incense",
        price: 25,
        currency: "USD",
        description: "Original by the Drikung Charitable Society",
        image: "🕯️",
        inStock: true,
        category: "Incense"
      },
      {
        id: "manjushri-incense",
        name: "Tibet Manjushri Incense",
        price: 15,
        currency: "USD",
        description: "Perfect for Meditation or purification",
        image: "🕯️",
        inStock: true,
        category: "Incense"
      },
      {
        id: "amitabha-thangka",
        name: "Amitabha Buddha Gold Painted Thangka",
        price: 150,
        currency: "USD",
        description: "Hand-painted with gold details, framed",
        image: "🖼️",
        inStock: true,
        category: "Art"
      }
    ]
  },
  {
    id: "beautiful-tibet",
    name: "Beautiful Tibet",
    description: "Family-owned store featuring handpicked Tibetan, Indian and Nepalese handmade artifacts from rural and tribal artisans living as refugees.",
    longDescription: "Beautiful Tibet is a company owned by a Tibetan family who opened a store in New York City in 2001. Each product is personally handpicked from the best of Tibetan, Indian and Nepalese handmade artifacts, from rural and tribal artisans living as refugees in India and Nepal. 'I was born in India as an exiled Tibetan. I decided that my path should be to preserve and promote my cultural traditions and support Tibetan causes.' - Ngawang 'Ancy' Choden, founder.",
    location: "New York City, NY",
    country: "USA",
    rating: 4.7,
    reviewCount: 89,
    image: "🎨",
    category: "Handicrafts",
    specialties: ["Prayer Beads", "Jewelry", "Music", "Healing Items"],
    phone: "+1-212-555-0143",
    email: "info@beautifultibetstore.com",
    website: "https://beautifultibetstore.com",
    established: 2001,
    featured: true,
    products: [
      {
        id: "carnelian-beads",
        name: "Carnelian Prayer Beads",
        price: 58,
        currency: "USD",
        description: "108 beads rosary for meditation and prayer",
        image: "📿",
        inStock: true,
        category: "Spiritual"
      },
      {
        id: "turquoise-ring",
        name: "Turquoise & Silver Ring",
        price: 95,
        currency: "USD",
        description: "Adjustable size with healing properties",
        image: "💍",
        inStock: true,
        category: "Jewelry"
      }
    ]
  },
  {
    id: "tenzins-crafts",
    name: "Tenzin's Traditional Crafts",
    description: "Authentic Tibetan jewelry and ceremonial items handcrafted with traditional techniques passed down through generations.",
    longDescription: "For over 30 years, Tenzin's family has been creating exquisite Tibetan jewelry and ceremonial items using techniques passed down through five generations. Each piece tells a story of our rich cultural heritage and spiritual tradition. From intricate silver amulets to prayer wheels blessed by high lamas, every item is crafted with devotion and authenticity.",
    location: "Dharamshala, Himachal Pradesh",
    country: "India",
    rating: 4.9,
    reviewCount: 127,
    image: "🏺",
    category: "Handicrafts",
    specialties: ["Silver Jewelry", "Prayer Wheels", "Singing Bowls", "Ceremonial Items"],
    phone: "+91-1892-221456",
    email: "tenzin@traditionalcrafts.in",
    established: 1994,
    featured: true,
    products: [
      {
        id: "silver-gau",
        name: "Traditional Silver Gau (Amulet Box)",
        price: 45,
        currency: "USD",
        description: "Handcrafted silver amulet box with traditional Tibetan motifs",
        image: "🪙",
        inStock: true,
        category: "Jewelry"
      },
      {
        id: "prayer-wheel",
        name: "Hand-held Prayer Wheel",
        price: 28,
        currency: "USD",
        description: "Copper and silver prayer wheel with mantras inscribed",
        image: "🎡",
        inStock: true,
        category: "Spiritual"
      }
    ]
  },
  {
    id: "dolmas-kitchen",
    name: "Dolma's Himalayan Kitchen",
    description: "Traditional Tibetan and Himalayan foods, teas, and spices sourced directly from local communities.",
    longDescription: "Dolma brings the authentic flavors of the Himalayas to your table. Born in Lhasa and now residing in Jackson Heights, she sources the finest yak butter tea, tsampa, and traditional spices directly from Tibetan communities. Every product supports local farmers and preserves our culinary traditions.",
    location: "Jackson Heights, NY",
    country: "USA",
    rating: 4.8,
    reviewCount: 89,
    image: "🫖",
    category: "Food & Beverages",
    specialties: ["Tibetan Tea", "Yak Cheese", "Tsampa", "Himalayan Spices"],
    phone: "+1-718-555-0123",
    email: "dolma@himalayankitchen.com",
    established: 2010,
    featured: true,
    products: [
      {
        id: "butter-tea",
        name: "Traditional Butter Tea Mix",
        price: 18,
        currency: "USD",
        description: "Authentic po cha (butter tea) mix with premium tea leaves",
        image: "🧈",
        inStock: true,
        category: "Tea"
      },
      {
        id: "tsampa-flour",
        name: "Organic Tsampa (Roasted Barley Flour)",
        price: 12,
        currency: "USD",
        description: "Traditional roasted barley flour, staple food of Tibet",
        image: "🌾",
        inStock: true,
        category: "Grains"
      }
    ]
  },
  {
    id: "mountain-textiles",
    name: "Mountain Textiles Nepal",
    description: "Beautiful handwoven carpets, blankets, and clothing featuring traditional Tibetan patterns and colors.",
    longDescription: "Located in the heart of Kathmandu, Mountain Textiles has been weaving dreams into reality for over 25 years. Our skilled artisans create stunning carpets and textiles using traditional Tibetan designs and natural materials. Each piece supports local weavers and keeps ancient textile traditions alive.",
    location: "Kathmandu",
    country: "Nepal",
    rating: 4.9,
    reviewCount: 156,
    image: "🧶",
    category: "Textiles",
    specialties: ["Tibetan Carpets", "Pashmina Shawls", "Traditional Clothing", "Prayer Rugs"],
    phone: "+977-1-4412345",
    email: "info@mountaintextiles.np",
    established: 1999,
    featured: true,
    products: [
      {
        id: "tibetan-carpet",
        name: "Hand-knotted Tibetan Carpet",
        price: 320,
        currency: "USD",
        description: "Traditional dragon design carpet, 4x6 feet, pure wool",
        image: "🪄",
        inStock: true,
        category: "Carpets"
      },
      {
        id: "pashmina-shawl",
        name: "Authentic Pashmina Shawl",
        price: 85,
        currency: "USD",
        description: "100% pure cashmere pashmina from Ladakh region",
        image: "🧣",
        inStock: true,
        category: "Clothing"
      }
    ]
  },
  {
    id: "himalayan-treasures",
    name: "Himalayan Spiritual Treasures",
    description: "Singing bowls, prayer flags, and spiritual items crafted by skilled artisans in the Himalayan region.",
    longDescription: "Based in Boulder, Colorado, we work directly with Tibetan refugee artisans and monasteries to bring you authentic spiritual items. Every purchase supports Tibetan communities and helps preserve sacred art forms. Our singing bowls are handcrafted using traditional seven-metal alloy techniques.",
    location: "Boulder, CO",
    country: "USA",
    rating: 4.7,
    reviewCount: 203,
    image: "🎵",
    category: "Spiritual Items",
    specialties: ["Singing Bowls", "Prayer Flags", "Thangka Paintings", "Meditation Items"],
    phone: "+1-303-555-0198",
    email: "info@himalayantreaures.com",
    established: 2005,
    featured: true,
    products: [
      {
        id: "singing-bowl",
        name: "Handcrafted Tibetan Singing Bowl",
        price: 68,
        currency: "USD",
        description: "7-metal alloy singing bowl with wooden striker and cushion",
        image: "🥣",
        inStock: true,
        category: "Meditation"
      },
      {
        id: "prayer-flags",
        name: "Tibetan Prayer Flags Set",
        price: 15,
        currency: "USD",
        description: "Traditional 5-color prayer flags with mantras, 25 flags",
        image: "🏳️",
        inStock: true,
        category: "Spiritual"
      }
    ]
  },
  {
    id: "sherpa-outdoor",
    name: "Sherpa Mountain Gear",
    description: "High-quality outdoor gear and traditional Sherpa clothing made by experienced mountain guides.",
    longDescription: "Founded by Tenzing Sherpa, a veteran Everest guide, our company creates premium outdoor gear tested in the world's highest mountains. We combine traditional Sherpa knowledge with modern materials to create clothing and equipment that performs in extreme conditions.",
    location: "Namche Bazaar",
    country: "Nepal",
    rating: 4.8,
    reviewCount: 78,
    image: "🏔️",
    category: "Outdoor Gear",
    specialties: ["Mountain Clothing", "Sherpa Boots", "Climbing Gear", "Traditional Wear"],
    phone: "+977-38-540123",
    email: "gear@sherpamountain.np",
    established: 2012,
    featured: false,
    products: [
      {
        id: "sherpa-jacket",
        name: "Traditional Sherpa Jacket",
        price: 120,
        currency: "USD",
        description: "Wool-lined jacket worn by Sherpa mountain guides",
        image: "🧥",
        inStock: true,
        category: "Clothing"
      }
    ]
  },
  {
    id: "potala-books",
    name: "Potala Traditional Books",
    description: "Rare Tibetan texts, Buddhist literature, and traditional manuscripts preserved and shared.",
    longDescription: "Preserving Tibetan literary heritage for future generations. We specialize in reproducing rare Buddhist texts, traditional stories, and cultural manuscripts. Based in Sera Monastery, we work with scholars to ensure accuracy and cultural authenticity.",
    location: "Bylakuppe, Karnataka",
    country: "India",
    rating: 4.9,
    reviewCount: 64,
    image: "📚",
    category: "Books & Literature",
    specialties: ["Buddhist Texts", "Tibetan Language", "Prayer Books", "Cultural Studies"],
    phone: "+91-8174-256789",
    email: "books@potala.in",
    established: 2000,
    featured: false,
    products: [
      {
        id: "prayer-book",
        name: "Daily Prayers in Tibetan & English",
        price: 25,
        currency: "USD",
        description: "Complete daily prayer book with phonetic Tibetan",
        image: "📖",
        inStock: true,
        category: "Religious"
      }
    ]
  },
  {
    id: "yak-cheese",
    name: "Himalayan Yak Dairy",
    description: "Authentic yak cheese and dairy products from high-altitude pastures in Ladakh.",
    longDescription: "Our family has been herding yaks in the Changthang plateau for generations. We produce traditional yak cheese, butter, and other dairy products using age-old methods. Our products are completely natural and represent the authentic taste of the Himalayas.",
    location: "Leh, Ladakh",
    country: "India",
    rating: 4.6,
    reviewCount: 42,
    image: "🧀",
    category: "Food & Beverages",
    specialties: ["Yak Cheese", "Yak Butter", "Dried Yak Meat", "Traditional Dairy"],
    phone: "+91-1982-252456",
    email: "dairy@yakladakh.in",
    established: 2015,
    featured: false,
    products: [
      {
        id: "yak-cheese",
        name: "Traditional Hard Yak Cheese",
        price: 35,
        currency: "USD",
        description: "Aged yak cheese from Changthang plateau, 250g",
        image: "🟨",
        inStock: true,
        category: "Dairy"
      }
    ]
  },
  {
    id: "tibet-eshop",
    name: "Tibet eShop - FTCI",
    description: "Fair Trade Certified online marketplace for authentic Tibetan herbal products, handicrafts, and spiritual items from refugee settlements.",
    longDescription: "Tibet eShop is a unit of FTCI (Fair Trade Committee of India) striving to strengthen social and economic sustainability of Tibetan refugee settlements. We offer 100% authentic Tibetan products including SORIG traditional medicines, handcrafted items, incense, and spiritual products. Our mission is to support displaced Tibet people worldwide.",
    location: "New Delhi",
    country: "India",
    rating: 4.9,
    reviewCount: 245,
    image: "🏪",
    category: "Herbal Products",
    specialties: ["Tibetan Medicine", "Incense", "Handicrafts", "Massage Oils"],
    phone: "+91-11-555-0178",
    email: "info@tibeteshop.com",
    website: "https://www.tibeteshop.com",
    established: 2010,
    featured: true,
    products: [
      {
        id: "sorig-massage-oil",
        name: "SORIG Massage Oil (75ml)",
        price: 12,
        currency: "USD",
        description: "Traditional herbal oil for relaxation and muscle relief",
        image: "🧴",
        inStock: true,
        category: "Health"
      },
      {
        id: "arthritis-oil",
        name: "SORIG Arthritis Oil",
        price: 13,
        currency: "USD",
        description: "Natural herbs based on Tibetan Science of Healing",
        image: "🧴",
        inStock: true,
        category: "Health"
      },
      {
        id: "peace-incense",
        name: "Peace Incense",
        price: 5,
        currency: "USD",
        description: "Traditional hand prepared from authentic Himalayan herbs",
        image: "🕯️",
        inStock: true,
        category: "Incense"
      }
    ]
  },
  {
    id: "tibetan-handloom",
    name: "Tibetan Handloom",
    description: "Traditional Tibetan textiles, prayer flags, and handwoven items created using ancient techniques.",
    longDescription: "Specializing in authentic Tibetan handloom products including prayer flags, wall hangings, altar cloths, and traditional monk clothing. Each item is handwoven by skilled artisans preserving centuries-old textile traditions.",
    location: "Kathmandu",
    country: "Nepal",
    rating: 4.6,
    reviewCount: 156,
    image: "🧶",
    category: "Textiles",
    specialties: ["Prayer Flags", "Wall Hangings", "Altar Cloths", "Traditional Clothing"],
    phone: "+977-1-441-5678",
    email: "tibetanhandloom@gmail.com",
    website: "https://tibetanhandloom.com",
    established: 2005,
    featured: false,
    products: [
      {
        id: "prayer-flags-mix",
        name: "Tibetan Buddhist Mix Deities Prayer Flags",
        price: 3,
        currency: "USD",
        description: "Cotton prayer flags with various Buddhist deities",
        image: "🏳️",
        inStock: true,
        category: "Spiritual"
      },
      {
        id: "table-runner",
        name: "Tibetan Dorje Design Table Runner",
        price: 15,
        currency: "USD",
        description: "Traditional table runner with dorje motif",
        image: "🏃",
        inStock: true,
        category: "Home Decor"
      }
    ]
  },
  {
    id: "tibetfoods",
    name: "TibetFoods",
    description: "Authentic traditional Tibetan superfoods from the highlands of Himalaya including Tsampa, Dri cheese, and barley products.",
    longDescription: "TibetFoods aims to bring the authentic superfoods of highland of Himalaya to the world. We hope to bring the taste of authentic traditional Tibet into your home—to nourish you, warm you, and share a piece of the Tibetan way of life with you. All products are 100% natural, high altitude grown, with no preservatives or artificial flavors.",
    location: "Dharamshala, Himachal Pradesh",
    country: "India",
    rating: 4.8,
    reviewCount: 92,
    image: "🌾",
    category: "Food & Beverages",
    specialties: ["Tsampa", "Dri Cheese", "Barley Products", "Himalayan Spices"],
    phone: "+91-98057-71933",
    email: "thetibetfoods@gmail.com",
    website: "https://tibetfoods.com",
    established: 2020,
    featured: true,
    products: [
      {
        id: "tsampa-flour",
        name: "Himalayan Blue Barley Flour (Tsampa)",
        price: 8,
        currency: "USD",
        description: "Traditional roasted barley flour from 4200m+ altitude",
        image: "🌾",
        inStock: true,
        category: "Grains"
      },
      {
        id: "dri-cheese",
        name: "Himalayan Dri Dried Cheese",
        price: 18,
        currency: "USD",
        description: "Nutrient-rich cheese handcrafted from female yak milk",
        image: "🧀",
        inStock: true,
        category: "Dairy"
      },
      {
        id: "neythuk-porridge",
        name: "Neythuk - Himalayan Barley Porridge",
        price: 15,
        currency: "USD",
        description: "Nutritious barley porridge for health and energy",
        image: "🥣",
        inStock: true,
        category: "Grains"
      }
    ]
  },
  {
    id: "little-moon-shop",
    name: "Little Moon Tibetan Gift Shop",
    description: "Imported fair-trade items from the Himalayan regions of Tibet, India, and Nepal featuring clothing, spiritual items, and jewelry.",
    longDescription: "We named our shop after our family in Tibet-Dachung Tsang, which means Little Moon family. We are a small, family-owned business importing fair-trade items from the Himalayan regions. We hope you enjoy shopping with us and supporting traditional artisans.",
    location: "Colorado Springs, CO",
    country: "USA",
    rating: 4.7,
    reviewCount: 78,
    image: "🌙",
    category: "Handicrafts",
    specialties: ["Tibetan Clothing", "Jewelry", "Spiritual Items", "Fair Trade"],
    phone: "+1-719-555-0192",
    email: "info@littlemoonshop.com",
    website: "https://www.littlemoonshop.com",
    established: 2015,
    featured: false,
    products: [
      {
        id: "tibetan-journal",
        name: "Small Tibetan Handmade Paper Journal",
        price: 25,
        currency: "USD",
        description: "Traditional handmade paper journal from Tibet",
        image: "📓",
        inStock: true,
        category: "Stationery"
      },
      {
        id: "redwood-mala",
        name: "Redwood Mala with Turquoise Spacers",
        price: 45,
        currency: "USD",
        description: "Prayer beads made from redwood with turquoise accents",
        image: "📿",
        inStock: true,
        category: "Spiritual"
      }
    ]
  },
  {
    id: "tibet-house-la",
    name: "Tibet House Cultural Center",
    description: "Cultural center and shop in Los Angeles featuring authentic Tibetan books, art, and spiritual items supporting Tibetan culture preservation.",
    longDescription: "Tibet House Los Angeles serves as a cultural bridge between Tibet and the West. Our shop features carefully curated books on Buddhism and Tibetan culture, traditional art pieces, and spiritual items. All proceeds support our cultural preservation programs and Tibetan refugees.",
    location: "Los Angeles, CA",
    country: "USA",
    rating: 4.8,
    reviewCount: 94,
    image: "🏛️",
    category: "Books & Literature",
    specialties: ["Buddhist Books", "Traditional Art", "Cultural Items", "Educational Materials"],
    phone: "+1-323-555-0156",
    email: "shop@tibethousela.org",
    website: "https://tibethousela.org",
    established: 1987,
    featured: true,
    products: [
      {
        id: "dalai-lama-biography",
        name: "The Story of Tibet: Conversations with the Dalai Lama",
        price: 24,
        currency: "USD",
        description: "Comprehensive biography and teachings",
        image: "📚",
        inStock: true,
        category: "Books"
      },
      {
        id: "thangka-reproduction",
        name: "Museum Quality Thangka Print",
        price: 85,
        currency: "USD",
        description: "High-quality reproduction of traditional thangka painting",
        image: "🖼️",
        inStock: true,
        category: "Art"
      }
    ]
  },
  {
    id: "himalayan-treasures-seattle",
    name: "Himalayan Treasures",
    description: "Seattle-based store specializing in authentic Himalayan crafts, jewelry, and textiles from Nepal, Tibet, and Bhutan.",
    longDescription: "Located in the heart of Seattle's International District, Himalayan Treasures has been serving the Pacific Northwest for over 15 years. We work directly with artisan families in Nepal and Tibet, ensuring fair trade practices and authentic, high-quality products.",
    location: "Seattle, WA",
    country: "USA",
    rating: 4.6,
    reviewCount: 132,
    image: "🏔️",
    category: "Handicrafts",
    specialties: ["Handwoven Textiles", "Silver Jewelry", "Wooden Crafts", "Incense"],
    phone: "+1-206-555-0198",
    email: "info@himalayantreassures.com",
    established: 2008,
    featured: false,
    products: [
      {
        id: "nepal-silver-earrings",
        name: "Nepalese Silver Drop Earrings",
        price: 42,
        currency: "USD",
        description: "Handcrafted silver earrings with traditional motifs",
        image: "👂",
        inStock: true,
        category: "Jewelry"
      },
      {
        id: "yak-wool-blanket",
        name: "Tibetan Yak Wool Blanket",
        price: 165,
        currency: "USD",
        description: "Soft and warm blanket made from yak wool",
        image: "🧶",
        inStock: true,
        category: "Home Textiles"
      }
    ]
  },
  {
    id: "potala-chicago",
    name: "Potala Gate Tibetan Store",
    description: "Chicago's premier Tibetan cultural store offering traditional clothing, meditation supplies, and authentic Tibetan food products.",
    longDescription: "Named after the iconic Potala Palace, our Chicago store has been a cultural hub for the Midwest Tibetan community since 1995. We offer everything from traditional chubas and meditation cushions to hard-to-find Tibetan food ingredients and teas.",
    location: "Chicago, IL",
    country: "USA",
    rating: 4.7,
    reviewCount: 89,
    image: "🏮",
    category: "Food & Beverages",
    specialties: ["Traditional Clothing", "Meditation Supplies", "Tibetan Food", "Tea"],
    phone: "+1-312-555-0177",
    email: "contact@potalagate.com",
    established: 1995,
    featured: true,
    products: [
      {
        id: "tibetan-chuba",
        name: "Traditional Tibetan Chuba Dress",
        price: 280,
        currency: "USD",
        description: "Authentic traditional Tibetan dress for special occasions",
        image: "👘",
        inStock: true,
        category: "Clothing"
      },
      {
        id: "butter-tea-mix",
        name: "Authentic Tibetan Butter Tea Mix",
        price: 18,
        currency: "USD",
        description: "Traditional po cha (butter tea) ingredients",
        image: "🫖",
        inStock: true,
        category: "Beverages"
      }
    ]
  },
  {
    id: "himalayan-arts-boulder",
    name: "Himalayan Arts & Crafts",
    description: "Boulder-based store featuring meditation supplies, singing bowls, and wellness products inspired by Himalayan traditions.",
    longDescription: "Nestled in the foothills of the Colorado Rockies, our Boulder store reflects the spiritual connection between the Colorado mountains and the Himalayas. We specialize in meditation and wellness products, working closely with Tibetan refugees in the US.",
    location: "Boulder, CO",
    country: "USA",
    rating: 4.9,
    reviewCount: 156,
    image: "🧘‍♀️",
    category: "Spiritual Items",
    specialties: ["Singing Bowls", "Meditation Cushions", "Crystals", "Wellness Products"],
    phone: "+1-303-555-0234",
    email: "hello@himalayanarts.net",
    established: 2003,
    featured: true,
    products: [
      {
        id: "crystal-singing-bowl",
        name: "Tibetan Crystal Singing Bowl Set",
        price: 125,
        currency: "USD",
        description: "Hand-selected crystal singing bowl with striker and cushion",
        image: "🥣",
        inStock: true,
        category: "Meditation"
      },
      {
        id: "meditation-cushion",
        name: "Zabuton Meditation Cushion",
        price: 68,
        currency: "USD",
        description: "Traditional meditation cushion filled with buckwheat hulls",
        image: "💺",
        inStock: true,
        category: "Meditation"
      }
    ]
  },
  {
    id: "tibet-corner-boston",
    name: "Tibet Corner",
    description: "Boston's Tibetan cultural store in the heart of Cambridge, serving Harvard and MIT communities with books, art, and traditional items.",
    longDescription: "Located near Harvard Square, Tibet Corner has been serving Boston's academic and Tibetan communities since 1998. We're known for our extensive collection of academic books on Tibet, traditional art pieces, and our monthly cultural events.",
    location: "Cambridge, MA",
    country: "USA",
    rating: 4.5,
    reviewCount: 67,
    image: "🎓",
    category: "Books & Literature",
    specialties: ["Academic Books", "Traditional Art", "Student Supplies", "Cultural Events"],
    phone: "+1-617-555-0145",
    email: "info@tibetcorner.com",
    established: 1998,
    featured: false,
    products: [
      {
        id: "tibet-history-book",
        name: "A History of Modern Tibet",
        price: 32,
        currency: "USD",
        description: "Comprehensive academic text on Tibetan history",
        image: "📖",
        inStock: true,
        category: "Books"
      },
      {
        id: "prayer-flags-small",
        name: "Mini Prayer Flags for Dorms",
        price: 8,
        currency: "USD",
        description: "Colorful mini prayer flags perfect for student rooms",
        image: "🏳️",
        inStock: true,
        category: "Decorative"
      }
    ]
  },
  {
    id: "mountain-spirit-asheville",
    name: "Mountain Spirit Trading",
    description: "Asheville store celebrating mountain cultures worldwide, featuring Tibetan and Nepalese imports alongside Appalachian crafts.",
    longDescription: "In the Blue Ridge Mountains of North Carolina, Mountain Spirit Trading creates a unique fusion of mountain cultures. We honor both Appalachian traditions and Himalayan heritage, offering authentic items from both regions and supporting artisans worldwide.",
    location: "Asheville, NC",
    country: "USA",
    rating: 4.4,
    reviewCount: 103,
    image: "⛰️",
    category: "Handicrafts",
    specialties: ["Mountain Crafts", "Fusion Items", "Local Partnerships", "Cultural Exchange"],
    phone: "+1-828-555-0167",
    email: "trading@mountainspirit.com",
    established: 2010,
    featured: false,
    products: [
      {
        id: "mountain-fusion-bowl",
        name: "Himalayan-Appalachian Fusion Bowl",
        price: 55,
        currency: "USD",
        description: "Unique bowl combining Tibetan and Appalachian design elements",
        image: "🥣",
        inStock: true,
        category: "Home Decor"
      },
      {
        id: "dual-heritage-scarf",
        name: "Mountain Heritage Scarf",
        price: 38,
        currency: "USD",
        description: "Scarf featuring both Himalayan and Appalachian patterns",
        image: "🧣",
        inStock: true,
        category: "Clothing"
      }
    ]
  },
  {
    id: "mandala-tibetan-store",
    name: "Mandala Tibetan Store",
    description: "Authentic Tibetan gift shop in Brooklyn selling jewelry, incense, and traditional clothing with excellent customer reviews.",
    longDescription: "Located in the heart of Brooklyn, Mandala Tibetan Store has been serving the New York Tibetan community and local customers since 2010. Our family-owned shop specializes in authentic Tibetan jewelry, traditional incense, and beautiful clothing. With a 4.8-star rating from 56 Google reviews, we're proud to offer genuine items that connect people to Tibetan culture and spirituality.",
    location: "Brooklyn, NY", 
    country: "USA",
    rating: 4.8,
    reviewCount: 56,
    image: "🪬",
    category: "Handicrafts",
    specialties: ["Tibetan Jewelry", "Traditional Incense", "Tibetan Clothing", "Spiritual Items"],
    phone: "(718) 789-0071",
    email: "info@mandalatibetanstore.com",
    website: "https://www.mandalatibetanstore.com",
    established: 2010,
    featured: true,
    products: [
      {
        id: "mandala-silver-pendant",
        name: "Traditional Tibetan Silver Mandala Pendant",
        price: 45,
        currency: "USD",
        description: "Handcrafted silver pendant featuring intricate mandala design",
        image: "🪬",
        inStock: true,
        category: "Jewelry"
      },
      {
        id: "tibetan-prayer-beads",
        name: "108 Bead Tibetan Prayer Mala",
        price: 28,
        currency: "USD",
        description: "Traditional 108-bead prayer mala made with authentic materials",
        image: "📿",
        inStock: true,
        category: "Spiritual"
      },
      {
        id: "himalayan-incense-set",
        name: "Authentic Himalayan Incense Collection",
        price: 22,
        currency: "USD",
        description: "Set of traditional Tibetan incense sticks with various fragrances",
        image: "🪔",
        inStock: true,
        category: "Incense"
      },
      {
        id: "tibetan-singing-bowl-small",
        name: "Hand-Forged Singing Bowl",
        price: 65,
        currency: "USD",
        description: "Traditional hand-forged singing bowl with striker and cushion",
        image: "🥣",
        inStock: true,
        category: "Spiritual"
      }
    ]
  },
  {
    id: "himalayan-mart",
    name: "Himalayan Mart",
    description: "Online market for authentic Nepalese and Tibetan handmade crafts including statues, thangkas, and ritual items.",
    longDescription: "HimalayanMart.Com is one of the pioneers in online shopping in Nepal. Our primary objective is to expose the most authentic culture of Nepalese and Tibetan craftmanship. Hand Made In Nepal since 2004, we offer Buddha statues, thangkas, ritual items, meditation supplies, and mala beads.",
    location: "Kathmandu",
    country: "Nepal",
    rating: 4.8,
    reviewCount: 324,
    image: "🏛️",
    category: "Handicrafts",
    specialties: ["Buddha Statues", "Thangkas", "Ritual Items", "Meditation Supplies"],
    phone: "+977-1-442-8765",
    email: "info@himalayanmart.com",
    website: "https://himalayanmart.com",
    established: 2004,
    featured: true,
    products: [
      {
        id: "shakyamuni-statue",
        name: "Shakyamuni Buddha Statue",
        price: 195,
        currency: "USD",
        description: "Handcrafted copper statue for compassion and enlightenment",
        image: "🧘",
        inStock: true,
        category: "Statues"
      },
      {
        id: "singing-bowl-set",
        name: "Tibetan Singing Bowl Set",
        price: 23,
        currency: "USD",
        description: "Complete set with striker and cushion",
        image: "🥣",
        inStock: true,
        category: "Meditation"
      },
      {
        id: "conch-mala",
        name: "Conch Shell Mala with Buddha Eye",
        price: 34,
        currency: "USD",
        description: "108 beads meditation mala with carved Buddha eyes",
        image: "📿",
        inStock: true,
        category: "Spiritual"
      }
    ]
  },
  {
    id: "sunrise-pashmina",
    name: "Sunrise Pashmina",
    description: "Impeccable quality handloomed premium pashmina shawls and blankets from Nepal with 25+ years of experience.",
    longDescription: "We founded Sunrise in 1999, and we just love this company. It allows us to share with you some of the most delicious accessories ever made, at reasonable prices. All of our shawls and blankets are of impeccable quality. If you haven't experienced authentic handloomed premium quality pashmina, you will definitely feel the difference!",
    location: "Ithaca, NY",
    country: "USA",
    rating: 4.9,
    reviewCount: 187,
    image: "🧣",
    category: "Textiles",
    specialties: ["Pashmina Shawls", "Cashmere", "Handloom Textiles", "Travel Blankets"],
    phone: "(607) 256-0102",
    email: "info@sunrisepashmina.com",
    website: "https://sunrisepashmina.com",
    established: 1999,
    featured: false,
    products: [
      {
        id: "diversity-shawl",
        name: "100% Handwoven Pashmina Diversity Pride Shawl",
        price: 130,
        currency: "USD",
        description: "Premium cashmere shawl celebrating diversity",
        image: "🏳️‍🌈",
        inStock: true,
        category: "Clothing"
      },
      {
        id: "gesar-blanket",
        name: "Gesar Travel Blanket/Meditation Shawl",
        price: 185,
        currency: "USD",
        description: "Blue diamond-weave travel and meditation blanket",
        image: "🟦",
        inStock: true,
        category: "Home Decor"
      }
    ]
  },
  {
    id: "durbar-square",
    name: "Durbar Square Nepalese Handicrafts",
    description: "Authentic handcrafted Nepali art rooted in tradition, featuring thangkas, statues, singing bowls, and home decor.",
    longDescription: "Durbar Square is used to describe areas near the old royal palaces in Nepal. We founded Durbar Square in honor of these UNESCO World Heritage Sites and with the vision to support the finest craftsmen who have preserved the ancient techniques of hand made craft. Today we help local artisans showcase their craftsmanship and make their exquisite offerings available worldwide.",
    location: "Kathmandu",
    country: "Nepal",
    rating: 4.7,
    reviewCount: 156,
    image: "🏛️",
    category: "Handicrafts",
    specialties: ["Thangkas", "Buddha Statues", "Singing Bowls", "Wall Hangings"],
    phone: "+977-1-445-6789",
    email: "info@durbar-square.com",
    website: "https://durbar-square.com",
    established: 2018,
    featured: false,
    products: [
      {
        id: "green-tara-thangka",
        name: "Green Tara Thangka",
        price: 593,
        currency: "USD",
        description: "Hand-painted traditional Green Tara scroll painting",
        image: "🖼️",
        inStock: true,
        category: "Art"
      },
      {
        id: "buddha-head-bronze",
        name: "Bronze Buddha Head",
        price: 137,
        currency: "USD",
        description: "Handcrafted bronze Buddha head sculpture",
        image: "🗿",
        inStock: false,
        category: "Statues"
      }
    ]
  },
  {
    id: "bhutan-arts",
    name: "Bhutan Traditional Arts",
    description: "Authentic Bhutanese textiles, masks, and traditional crafts celebrating the kingdom's rich culture.",
    longDescription: "From the Land of the Thunder Dragon, we bring you authentic Bhutanese handicrafts. Our artisans follow traditional methods passed down through centuries, creating beautiful textiles, carved masks, and ceremonial items that reflect Bhutan's unique Buddhist culture.",
    location: "Thimphu",
    country: "Bhutan",
    rating: 4.7,
    reviewCount: 38,
    image: "🎭",
    category: "Handicrafts",
    specialties: ["Bhutanese Textiles", "Wooden Masks", "Traditional Jewelry", "Ceremonial Items"],
    phone: "+975-2-323456",
    email: "arts@bhutan.bt",
    established: 2008,
    featured: false,
    products: [
      {
        id: "bhutanese-mask",
        name: "Traditional Bhutanese Dance Mask",
        price: 95,
        currency: "USD",
        description: "Hand-carved wooden mask used in traditional dances",
        image: "👹",
        inStock: true,
        category: "Art"
      }
    ]
  }
]

export const categories = [
  "All Categories",
  "Handicrafts",
  "Food & Beverages", 
  "Textiles",
  "Spiritual Items",
  "Herbal Products",
  "Outdoor Gear",
  "Books & Literature"
]

export const countries = [
  "All Countries",
  "India",
  "Nepal", 
  "USA",
  "Bhutan"
] 