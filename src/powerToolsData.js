// powerToolsData.js - DEXTA Power Tools Catalog Data (Single Card Layout with 7 Categories)

export const powerToolsData = {
  title: "POWER TOOLS",
  subtitle: "Where Strength Meets Precision",
  
  // 7 Categories with Images and Product Lists (Single Card Layout)
  catalogSections: [
    {
      id: 1,
      name: "POWER TOOLS",
      image: "https://m.media-amazon.com/images/I/71RkY8b6HdL._SL1500_.jpg",
      products: [
        "DRILL MACHINES",
        "CABLE CUTTING & CRIMPING",
        "GRINDERS & POLISHERS",
        "AUTOMOTIVE TOOLS",
        "CONCRETE EQUIPMENT",
        "DUST MANAGEMENT",
        "COMPRESSORS",
        "IMPACT DRIVERS & WRENCHES"
      ]
    },
    {
      id: 2,
      name: "HAND TOOLS",
      image: "https://m.media-amazon.com/images/I/81VCOpHlK3L._SL1500_.jpg",
      products: [
        "AUTOMOTIVE TOOLS",
        "CHISELS, PUNCHES & FILES",
        "CLAMPS & VISES",
        "CONCRETE MANUAL TOOLS",
        "HAMMERS",
        "HAND SAWS",
        "KNIVES & BLADES",
        "LASERS & INSTRUMENTS",
        "MANUAL FASTENING TOOLS",
        "MEASURE AND LAYOUT TOOLS",
        "MIXED TOOL SETS",
        "PIERS & PIPES",
        "PLUMBING TOOLS",
        "RATCHETS & SOCKETS",
        "SCREWDRIVERS & HEX KEYS",
        "WRENCHES"
      ]
    },
    {
      id: 3,
      name: "ACCESSORIES",
      image: "https://m.media-amazon.com/images/I/61FJ5QY8rWL._SL1100_.jpg",
      products: [
        "BATTERIES & CHARGERS",
        "CUTTING & GRINDING ACCESSORIES",
        "DRILLING ACCESSORIES",
        "FASTENING ACCESSORIES",
        "HOLE SAWS & MANDRELS",
        "INSTRUMENT ACCESSORIES",
        "MULTI-TOOL ACCESSORIES",
        "PLANNING ACCESSORIES",
        "ROUTING ACCESSORIES",
        "SANDING ACCESSORIES",
        "SAWING ACCESSORIES"
      ]
    },
    {
      id: 4,
      name: "POWER TOOLS COMBO KITS",
      image: "https://m.media-amazon.com/images/I/71LhBcqKP8L._SL1500_.jpg",
      products: [
        "RATCHETS",
        "SHIFT TOOLS",
        "ROTARY & DEMOLITION HAMMERS",
        "ROUTERS, PLANERS & JOINERS",
        "SANDERS",
        "SAWS",
        "SCREWDRIVERS & SCREWGUNS",
        "SPECIALTY & OTHER TOOLS",
        "WIRELESS TOOL CONTROL"
      ]
    },
    {
      id: 5,
      name: "MATERIAL HANDLING",
      image: "https://m.media-amazon.com/images/I/71h3YOQzPZL._SL1500_.jpg",
      products: [
        "MULTI-FUNCTION TOOLS",
        "NAILERS & STAPLERS",
        "PIPE & TUBING TOOLS",
        "PNEUMATIC TOOLS"
      ]
    },
    {
      id: 6,
      name: "OUTDOOR HAND TOOLS",
      image: "https://m.media-amazon.com/images/I/71qvgm6GKXL._SL1500_.jpg",
      products: [
        "CUTTING & PRUNING TOOLS",
        "LAWN & GARDEN",
        "WASHERS, PUMPS & HOSES"
      ]
    },
    {
      id: 7,
      name: "STORAGE",
      image: "https://m.media-amazon.com/images/I/71YmVKWGhSL._SL1500_.jpg",
      products: [
        "TOOL LINES",
        "MOBILE TOOL STORAGE",
        "TOOL BAGS & BACKPACKS",
        "TROLLEYS",
        "TOOL BELTS & POUCHES",
        "WORKSHOP STORAGE"
      ]
    }
  ],

  // Featured Products for ProductsPage compatibility (IDs 73-79)
  featuredProducts: [
    // 1. POWER TOOLS Category (ID 73)
    {
      id: 73,
      name: "POWER TOOLS",
      category: "power-tools",
      subCategory: "POWER TOOLS",
      brand: "Various Brands",
      featured: true,
      specifications: ["18V battery", "Variable speed", "LED light", "Keyless chuck"],
      image: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/Ecomm_Large-DCK227D2_K1.jpg?resize=530x530",
      description: "Professional power tools for drilling, cutting, and construction applications.",
      features: ["Cordless Freedom", "Variable Speed", "LED Light", "Professional"]
    },

    // 2. POWER TOOLS COMBO KITS Category (ID 74)
    {
      id: 74,
      name: "POWER TOOLS COMBO KITS",
      category: "power-tools",
      subCategory: "POWER TOOLS COMBO KITS",
      brand: "Various Brands",
      featured: true,
      specifications: ["High torque", "Hex drive", "Compact design", "Battery powered"],
      image: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/Ecomm_Large-DCKSS676D2_K1.jpg?resize=530x530",
      description: "Complete power tool combo kits for professional construction work.",
      features: ["High Torque", "Compact Design", "Heavy Duty", "Professional"]
    },

    // 3. MATERIAL HANDLING Category (ID 75)
    {
      id: 75,
      name: "MATERIAL HANDLING",
      category: "power-tools",
      subCategory: "MATERIAL HANDLING",
      brand: "Various Brands",
      featured: true,
      specifications: ["Hammer action", "Masonry drilling", "Variable speed", "Side handle"],
      image: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/Ecomm_Large-DCE592D1_K1.jpg?resize=530x530",
      description: "Material handling tools and equipment for construction applications.",
      features: ["Multi-Function", "Material Handling", "Variable Speed", "Side Handle"]
    },

    // 4. HAND TOOLS Category (ID 76)
    {
      id: 76,
      name: "HAND TOOLS",
      category: "power-tools",
      subCategory: "HAND TOOLS",
      brand: "Various Brands",
      featured: true,
      specifications: ["Multiple sockets", "Ratchet handle", "Extension bars", "Carrying case"],
      image: "https://bynder.sbdinc.com/m/68d780ca5d60d87f/Drupal_Small-DWMT17107_K1.jpg",
      description: "Comprehensive hand tool sets for automotive and mechanical applications.",
      features: ["Multiple Tools", "Ratchet Handle", "Extension Bars", "Complete Set"]
    },

    // 5. OUTDOOR HAND TOOLS Category (ID 77)
    {
      id: 77,
      name: "OUTDOOR HAND TOOLS",
      category: "power-tools",
      subCategory: "OUTDOOR HAND TOOLS",
      brand: "Various Brands",
      featured: true,
      specifications: ["185mm blade", "Depth adjustment", "Bevel cutting", "Dust port"],
      image: "https://www.dewalt.com/NAG/PRODUCT/IMAGES/HIRES/Ecomm_Large-DCMWP234U2_1.jpg?resize=530x530",
      description: "Professional outdoor hand tools for garden and landscape applications.",
      features: ["Depth Adjustment", "Bevel Cutting", "Dust Port", "Accurate Cuts"]
    },

    // 6. ACCESSORIES Category (ID 78)
    {
      id: 78,
      name: "ACCESSORIES",
      category: "power-tools",
      subCategory: "ACCESSORIES",
      brand: "Various Brands",
      featured: true,
      specifications: ["125mm disc", "High power", "Safety guard", "Side handle"],
      image: "https://bynder.sbdinc.com/m/32e82b1ebbdaba1a/Drupal_Large-DW_Elite_UltraPerformance_Abrasives_G1.jpg",
      description: "High-performance accessories and attachments for power tools.",
      features: ["High Power", "Safety Guard", "Versatile", "Professional"]
    },

    // 7. STORAGE Category (ID 79)
    {
      id: 79,
      name: "STORAGE",
      category: "power-tools",
      subCategory: "STORAGE",
      brand: "Various Brands",
      featured: true,
      specifications: ["Tank capacity", "Oil-free pump", "Pressure regulator", "Quick coupler"],
      image: "https://bynder.sbdinc.com/m/1dd33609a468f742/Drupal_Small-DWST25090_1.jpg",
      description: "Professional storage solutions for workshop and tool organization.",
      features: ["Mobile Storage", "Organization", "Easy Access", "Professional"]
    }
  ],

  // Legacy categories structure (for backward compatibility)
  categories: {
    "POWER TOOLS": [
      "DRILL MACHINES",
      "CABLE CUTTING & CRIMPING",
      "GRINDERS & POLISHERS",
      "AUTOMOTIVE TOOLS",
      "CONCRETE EQUIPMENT",
      "DUST MANAGEMENT",
      "COMPRESSORS",
      "IMPACT DRIVERS & WRENCHES"
    ],

    "HAND TOOLS": [
      "AUTOMOTIVE TOOLS",
      "CHISELS, PUNCHES & FILES",
      "CLAMPS & VISES",
      "CONCRETE MANUAL TOOLS",
      "HAMMERS",
      "HAND SAWS",
      "KNIVES & BLADES",
      "LASERS & INSTRUMENTS",
      "MANUAL FASTENING TOOLS",
      "MEASURE AND LAYOUT TOOLS",
      "MIXED TOOL SETS",
      "PIERS & PIPES",
      "PLUMBING TOOLS",
      "RATCHETS & SOCKETS",
      "SCREWDRIVERS & HEX KEYS",
      "WRENCHES"
    ],

    "ACCESSORIES": [
      "BATTERIES & CHARGERS",
      "CUTTING & GRINDING ACCESSORIES",
      "DRILLING ACCESSORIES",
      "FASTENING ACCESSORIES",
      "HOLE SAWS & MANDRELS",
      "INSTRUMENT ACCESSORIES",
      "MULTI-TOOL ACCESSORIES",
      "PLANNING ACCESSORIES",
      "ROUTING ACCESSORIES",
      "SANDING ACCESSORIES",
      "SAWING ACCESSORIES"
    ],

    "POWER TOOLS COMBO KITS": [
      "RATCHETS",
      "SHIFT TOOLS",
      "ROTARY & DEMOLITION HAMMERS",
      "ROUTERS, PLANERS & JOINERS",
      "SANDERS",
      "SAWS",
      "SCREWDRIVERS & SCREWGUNS",
      "SPECIALTY & OTHER TOOLS",
      "WIRELESS TOOL CONTROL"
    ],

    "MATERIAL HANDLING": [
      "MULTI-FUNCTION TOOLS",
      "NAILERS & STAPLERS",
      "PIPE & TUBING TOOLS",
      "PNEUMATIC TOOLS"
    ],

    "OUTDOOR HAND TOOLS": [
      "CUTTING & PRUNING TOOLS",
      "LAWN & GARDEN",
      "WASHERS, PUMPS & HOSES"
    ],

    "STORAGE": [
      "TOOL LINES",
      "MOBILE TOOL STORAGE",
      "TOOL BAGS & BACKPACKS",
      "TROLLEYS",
      "TOOL BELTS & POUCHES",
      "WORKSHOP STORAGE"
    ]
  }
};

// Helper functions for power tools
export const getCatalogSections = () => {
  return powerToolsData.catalogSections;
};

export const getFeaturedPowerTools = () => {
  return powerToolsData.featuredProducts;
};

export const getPowerToolsCategories = () => {
  return Object.keys(powerToolsData.categories);
};

export const getPowerToolsByCategory = (category) => {
  return powerToolsData.categories[category] || [];
};

export const getAllPowerToolsProducts = () => {
  const allProducts = [];
  Object.entries(powerToolsData.categories).forEach(([category, products]) => {
    products.forEach(product => {
      allProducts.push({
        category,
        name: product,
        type: 'power-tool'
      });
    });
  });
  return allProducts;
};

export const getSectionByName = (sectionName) => {
  return powerToolsData.catalogSections.find(section => section.name === sectionName);
};

export const getFeaturedProductByCategory = (categoryName) => {
  return powerToolsData.featuredProducts.find(product => product.subCategory === categoryName);
};

// Export default
export default powerToolsData;