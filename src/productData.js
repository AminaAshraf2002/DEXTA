// productData.js
import {
  Factory, Shield, Building2, Wrench, Zap, Target, Settings, 
  Globe, TrendingUp, Star
} from 'lucide-react';
import siliconeSealantImg from './assets/img.png';
// Product Categories
export const productCategories = [
  {
    id: 'metal-products',
    icon: Factory,
    title: "Metal Products",
    subtitle: "Where Durability Meets Design",
    description: "High-quality steel, aluminum, and specialty metals for construction projects",
    badge: "Best Seller",
    color: "blue"
  },
  {
    id: 'safety-products',
    icon: Shield,
    title: "Safety Products",
    subtitle: "Complete Protection Solutions", 
    description: "Comprehensive safety equipment and gear for workplace protection",
    badge: "Certified",
    color: "green"
  },
  {
    id: 'packing-materials',
    icon: Building2,
    title: "Packing Materials",
    subtitle: "Secure & Reliable",
    description: "Professional packaging solutions for safe transport and storage",
    badge: "Premium",
    color: "purple"
  },
  {
    id: 'fasteners',
    icon: Wrench,
    title: "Fasteners and Fixings",
    subtitle: "Where Strength Meets Stability",
    description: "High-strength fasteners and fixing solutions for construction",
    badge: "Pro Grade",
    color: "orange"
  },
  {
    id: 'power-tools',
    icon: Zap,
    title: "Power Tools", 
    subtitle: "Professional Equipment",
    description: "Advanced power tools and accessories for construction professionals",
    badge: "Professional",
    color: "red"
  },
  {
    id: 'plastic-sheets',
    icon: Target,
    title: "Plastic & Composite Sheets",
    subtitle: "Where Flexibility Meets Strength",
    description: "Advanced plastic and composite materials for modern applications",
    badge: "Innovation",
    color: "teal"
  },
  {
    id: 'adhesives',
    icon: Settings,
    title: "Adhesives & Sealants",
    subtitle: "Where Bonds Meets Endurance",
    description: "Professional adhesives and sealants for various applications",
    badge: "Reliable",
    color: "indigo"
  },
  {
    id: 'wood-products',
    icon: Globe,
    title: "Wood Products",
    subtitle: "Where Nature Meets Innovation",
    description: "Quality wood products and engineered solutions for construction",
    badge: "Natural",
    color: "amber"
  },
  {
    id: 'fabric-products',
    icon: Star,
    title: "Fabric Products",
    subtitle: "Where Quality Meets Versatility",
    description: "Specialized fabrics and textiles for industrial applications",
    badge: "Durable",
    color: "pink"
  },
  {
    id: 'lights-products',
    icon: TrendingUp,
    title: "Lights Products",
    subtitle: "Where Lights Works Smarter",
    description: "Professional lighting solutions for construction and industrial use",
    badge: "Bright",
    color: "yellow"
  }
];

// Detailed Products Data
export const detailedProducts = [
  // METAL PRODUCTS - SHEETS
  {
    id: 1,
    name: "MS Sheet (Mild Steel Sheet)",
    category: "metal-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Various thickness and sizes", "High durability", "Corrosion resistant coating", "Industrial grade"],
    image: "https://mmisteel.com/wp-content/uploads/2024/02/Mild-Steel-Plate.jpg",
    description: "High-quality mild steel sheets for construction and industrial applications. Perfect for structural work, fabrication, and general engineering projects.",
    features: ["Corrosion Resistant", "High Strength", "Weldable", "Cost Effective"]
  },
  {
    id: 2,
    name: "SS Sheet (Stainless Steel Sheet)",
    category: "metal-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Grade 304/316", "Mirror finish available", "Food grade quality", "Various thickness"],
    image: "https://images.jdmagicbox.com/quickquotes/images_main/stainless-steel-s-s-sheet-362779996-adnyy.jpg",
    description: "Premium stainless steel sheets for high-end applications requiring corrosion resistance and aesthetic appeal.",
    features: ["Corrosion Free", "Food Grade", "High Polish", "Precision Made"]
  },
  {
    id: 3,
    name: "GI Sheet (Galvanized Iron Sheet)",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Zinc coating", "Weather resistant", "Various gauges", "Standard sizes"],
    image: "https://5.imimg.com/data5/RO/IU/TQ/SELLER-37838907/gi-sheet-500x500.jpg",
    description: "Galvanized iron sheets with superior corrosion protection for roofing and exterior applications.",
    features: ["Weather Resistant", "Long Lasting", "Easy Installation", "Recyclable"]
  },
  {
    id: 4,
    name: "CR Sheet (Cold Rolled Sheet)",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Smooth surface finish", "Precise dimensions", "High strength", "Various thickness"],
    image: "https://productimages.withfloats.com/actual/67150d54f63c5d276cefab71.jpg",
    description: "Cold rolled steel sheets with superior surface finish and dimensional accuracy.",
    features: ["Smooth Finish", "High Precision", "Strong", "Versatile"]
  },
  {
    id: 5,
    name: "Aluminium Sheet",
    category: "metal-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Various alloys", "Lightweight", "Corrosion resistant", "Multiple finishes"],
    image: "https://d91ztqmtx7u1k.cloudfront.net/ClientContent/Images/Catalogue/aluminium-sheets-and-plates-silver-thickness-2-mm20230805102241.jpg",
    description: "High-grade aluminum sheets for lightweight applications with excellent corrosion resistance.",
    features: ["Lightweight", "Corrosion Resistant", "Recyclable", "Easy to Work"]
  },

  // METAL PRODUCTS - RODS & BARS
  {
    id: 6,
    name: "MS Rod (Mild Steel Rod)",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various diameters", "Standard lengths", "High tensile strength", "Quality steel"],
    image: "https://5.imimg.com/data5/JJ/FT/MY-31591796/ms-round-500x500.jpg",
    description: "High-quality mild steel rods for construction and fabrication work.",
    features: ["High Strength", "Durable", "Weldable", "Standard Sizes"]
  },
  {
    id: 7,
    name: "SS Rod (Stainless Steel Rod)",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Grade 304/316", "Polished finish", "Corrosion resistant", "Various diameters"],
    image: "https://4.imimg.com/data4/NQ/RE/MY-15412676/ss-round-bar-500x500.jpg",
    description: "Premium stainless steel rods with excellent corrosion resistance and finish.",
    features: ["Corrosion Free", "Polished Finish", "High Grade", "Precision Made"]
  },
  {
    id: 8,
    name: "Shafting Bar",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Precision ground", "Various diameters", "High tolerance", "Quality steel"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/6/UP/VX/YS/14046257/316-ss-shafting-round-bar-500x500.jpg",
    description: "Precision shafting bars for mechanical applications requiring high accuracy.",
    features: ["High Precision", "Quality Steel", "Smooth Finish", "Standard Lengths"]
  },
  {
    id: 9,
    name: "Flat Bar",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Standard lengths", "Hot/Cold rolled", "Multiple grades"],
    image: "https://americanstainlesscorp.com/wp-content/uploads/2024/02/stainless-steel-flat-bar.jpg",
    description: "High-quality flat bars for structural and fabrication applications.",
    features: ["Versatile", "Strong", "Easy to Work", "Standard Sizes"]
  },
  {
    id: 10,
    name: "Square Bar",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Precision cut", "Standard lengths", "Quality material"],
    image: "https://5.imimg.com/data5/SELLER/Default/2024/6/429852620/QN/JU/DS/3299486/12mm-ms-square-bar-250x250.jpg",
    description: "Precision square bars for construction and mechanical applications.",
    features: ["Precise Dimensions", "Strong", "Versatile", "Quality Material"]
  },
  {
    id: 11,
    name: "Angle Bar",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various angles", "Standard lengths", "Hot rolled", "Structural grade"],
    image: "https://reganindustrial.com/wp-content/uploads/2021/06/Shelving-Units.jpg",
    description: "Structural angle bars for construction and support applications.",
    features: ["Structural Grade", "Strong", "Versatile", "Standard Sizes"]
  },

  // METAL PRODUCTS - TUBES
  {
    id: 12,
    name: "MS Tube (Mild Steel Tube)",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Round/Square", "Welded/Seamless", "Standard lengths"],
    image: "https://images.jdmagicbox.com/quickquotes/images_main/ms-pipe-159335595-tdqgc.jpg",
    description: "Mild steel tubes for structural and general engineering applications.",
    features: ["Versatile", "Strong", "Weldable", "Cost Effective"]
  },
  {
    id: 13,
    name: "SS Tube (Stainless Steel Tube)",
    category: "metal-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Grade 304/316", "Various sizes", "Polished finish", "Corrosion resistant"],
    image: "https://5.imimg.com/data5/SELLER/Default/2022/11/RL/XB/LN/87568954/stainless-steel-pipes-tubes.jpg",
    description: "Premium stainless steel tubes for high-end applications.",
    features: ["Corrosion Free", "High Quality", "Polished Finish", "Food Grade"]
  },
  {
    id: 14,
    name: "Aluminium Tube",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various alloys", "Lightweight", "Corrosion resistant", "Multiple sizes"],
    image: "https://www.gj-alu.com/data/upload/ueditor/20240229/65dfeafc01e8b.jpg",
    description: "Lightweight aluminum tubes for various industrial applications.",
    features: ["Lightweight", "Corrosion Resistant", "Easy to Work", "Versatile"]
  },

  // METAL PRODUCTS - MESH
  {
    id: 15,
    name: "GI Welded Mesh",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Galvanized coating", "Various mesh sizes", "Standard panels", "Weather resistant"],
    image: "https://sunviksteels.com/wp-content/uploads/2024/12/image.png",
    description: "Galvanized welded mesh for fencing and security applications.",
    features: ["Weather Resistant", "Strong", "Easy Installation", "Long Lasting"]
  },
  {
    id: 16,
    name: "Expandable Mesh",
    category: "metal-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Expanded metal", "Lightweight", "Ventilation"],
    image: "https://www.iwimesh.net/images/Expanded-Metal-Mesh1.jpg",
    description: "Expandable mesh for ventilation and screening applications.",
    features: ["Lightweight", "Good Ventilation", "Strong", "Versatile"]
  },

  // SAFETY PRODUCTS
  {
    id: 17,
    name: "Safety Shoe",
    category: "safety-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Steel toe cap", "Slip resistant sole", "Different sizes", "Various materials"],
    image: "https://agarson.in/wp-content/uploads/2024/09/9015.jpg",
    description: "Professional safety shoes with steel toe protection for workplace safety.",
    features: ["Steel Toe Protection", "Slip Resistant", "Comfortable", "Durable"]
  },
  {
    id: 18,
    name: "Safety Belt",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Adjustable size", "High strength webbing", "Multiple attachment points", "CE certified"],
    image: "https://www.aldahome.com/media/catalog/product/cache/1/image/650x/040ec09b1e35df139433887a97daa66f/f/u/full-body-safety-belt-harness-safety-belt.jpg",
    description: "High-strength safety belts for fall protection and work at height.",
    features: ["Fall Protection", "Adjustable", "High Strength", "Certified"]
  },
  {
    id: 19,
    name: "Safety Gloves",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Cut resistant", "Various materials", "Different sizes", "Anti-slip grip"],
    image: "https://m.media-amazon.com/images/I/61qrPbh+3tL.jpg",
    description: "Professional safety gloves with superior grip and protection for various work environments.",
    features: ["Cut Resistant", "Superior Grip", "Breathable", "Durable"]
  },
  {
    id: 20,
    name: "Safety Vest",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["High visibility", "Reflective strips", "Various sizes", "Lightweight"],
    image: "https://www.milwaukeetool.com/--/web-images/sc/eadde98a8cdf4458aab13e3a295f1568?hash=7dea362b3fac8e00956a4952a3d4f474&lang=en-CA",
    description: "High-visibility safety vests for improved worker visibility and safety.",
    features: ["High Visibility", "Reflective", "Lightweight", "Comfortable"]
  },
  {
    id: 21,
    name: "Safety Goggles",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Anti-fog coating", "UV protection", "Scratch resistant", "Adjustable strap"],
    image: "https://m.media-amazon.com/images/I/61f1v3900cL.jpg",
    description: "Premium safety goggles with anti-fog and UV protection for eye safety.",
    features: ["Clear Vision", "UV Protection", "Anti-Fog", "Comfortable Fit"]
  },
  {
    id: 22,
    name: "Safety Helmet",
    category: "safety-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["EN 397 Certified", "Adjustable fit", "Multiple colors", "Ventilation holes"],
    image: "https://www.karam.in/sites/default/files/2025-02/LAMINATION-BLUE--PN-541-%28YTC%29.jpg",
    description: "High-impact safety helmets with superior protection and comfort for construction sites.",
    features: ["Impact Resistant", "Comfortable Fit", "Certified Quality", "Sweat Resistant"]
  },
  {
    id: 23,
    name: "Safety Apron",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Chemical resistant", "Various materials", "Adjustable straps", "Easy to clean"],
    image: "https://cdn.velleman.eu/images/products/85/stw98011.jpg",
    description: "Protective aprons for chemical and splash protection in industrial environments.",
    features: ["Chemical Resistant", "Easy to Clean", "Adjustable", "Durable"]
  },
  {
    id: 24,
    name: "Face Shield",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Clear polycarbonate", "Adjustable headband", "Anti-fog", "Impact resistant"],
    image: "https://5.imimg.com/data5/BL/PA/MY-50518744/face-shields-500x500.jpg",
    description: "Clear face shields for comprehensive face and eye protection.",
    features: ["Full Face Protection", "Clear Vision", "Adjustable", "Impact Resistant"]
  },
  {
    id: 25,
    name: "Safety Rope",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["High strength", "Various lengths", "Weather resistant", "Multiple diameters"],
    image: "https://m.media-amazon.com/images/I/81LN+xwsjuL.jpg",
    description: "High-strength safety ropes for climbing and fall protection applications.",
    features: ["High Strength", "Weather Resistant", "Flexible", "Reliable"]
  },
  {
    id: 26,
    name: "Ear Muffs",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Noise reduction", "Adjustable headband", "Comfortable padding", "Various NRR ratings"],
    image: "https://m.media-amazon.com/images/I/61ApeRbqRhL.jpg",
    description: "Professional ear muffs for hearing protection in noisy environments.",
    features: ["Noise Reduction", "Comfortable", "Adjustable", "Effective Protection"]
  },
  {
    id: 27,
    name: "Welding Helmet",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Auto-darkening", "UV/IR protection", "Adjustable", "Multiple shade levels"],
    image: "https://images-cdn.ubuy.co.in/64fd7def22035813b31e2e5b-large-viewing-screen-auto-welding-helmet.jpg",
    description: "Professional welding helmets with auto-darkening filters for welding safety.",
    features: ["Auto-Darkening", "UV Protection", "Adjustable", "Professional Grade"]
  },
  {
    id: 28,
    name: "Hard Hat",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Impact protection", "Electrical insulation", "Adjustable suspension", "Various colors"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXhK9g7KWhwdSXoKggQrQMxIakCaj2A1tn5A&s",
    description: "Professional hard hats for head protection in construction and industrial environments.",
    features: ["Impact Protection", "Electrical Insulation", "Comfortable", "Certified"]
  },
  {
    id: 29,
    name: "Safety Harness",
    category: "safety-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Full body protection", "CE marked", "Maximum load 140kg", "Fall arrest system"],
    image: "https://m.media-amazon.com/images/I/610uo-7DYvL.jpg",
    description: "Full-body safety harnesses for fall protection when working at height.",
    features: ["Full Body Protection", "Adjustable Straps", "Quick Connect", "Certified Safety"]
  },
  {
    id: 30,
    name: "Safety Coverall",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Full body protection", "Various materials", "Multiple sizes", "Easy to wear"],
    image: "https://safetycoverall.ae/wp-content/uploads/2022/03/FR21-FLAME-RESISTANT-SUPER-LIGHT-WEIGHT-ANTI-STATIC-COVERALL-210G.jpg",
    description: "Protective coveralls for full body protection in industrial environments.",
    features: ["Full Body Protection", "Comfortable", "Easy to Wear", "Durable"]
  },
  {
    id: 31,
    name: "Safety Mask",
    category: "safety-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Dust protection", "Comfortable fit", "Disposable/Reusable", "Various filtration levels"],
    image: "https://m.media-amazon.com/images/I/61yQWgoebwL._UY1100_.jpg",
    description: "Protective masks for respiratory protection against dust and particles.",
    features: ["Respiratory Protection", "Comfortable", "Effective Filtration", "Easy to Use"]
  },
  {
    id: 32,
    name: "Milton Water Bottle",
    category: "safety-products",
    brand: "Milton",
    featured: false,
    specifications: ["BPA free", "Insulated", "Various sizes", "Leak proof"],
    image: "https://www.milton.in/cdn/shop/files/Duo_Delux_750_Ml_Steel_1.jpg?v=1736934624&width=1080",
    description: "High-quality insulated water bottles for workplace hydration.",
    features: ["BPA Free", "Insulated", "Leak Proof", "Durable"]
  },

  // PACKING MATERIALS
  {
    id: 33,
    name: "Carpet Tape",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Double sided", "Strong adhesion", "Various widths", "Easy application"],
    image: "https://m.media-amazon.com/images/I/81XkazHKZlL.jpg",
    description: "High-strength carpet tape for flooring and installation applications.",
    features: ["Strong Adhesion", "Double Sided", "Easy Application", "Reliable"]
  },
  {
    id: 34,
    name: "BOPP Clear Tape",
    category: "packing-materials",
    brand: "Various Brands",
    featured: true,
    specifications: ["Crystal clear", "Strong adhesion", "Various widths", "Weather resistant"],
    image: "https://www.jiomart.com/images/product/original/rvvubkkxhh/hash-shoppe-bopp-strong-adhesive-packaging-clear-tape-2-inch-width-length-100-metre-product-images-orvvubkkxhh-p609317965-0-202406101848.png?im=Resize=(1000,1000)",
    description: "Premium BOPP clear tape for packaging and sealing applications.",
    features: ["Crystal Clear", "Strong Adhesion", "Weather Resistant", "Versatile"]
  },
  {
    id: 35,
    name: "Stretch Film",
    category: "packing-materials",
    brand: "Various Brands",
    featured: true,
    specifications: ["High stretch", "Puncture resistant", "Various widths", "Clear/Colored"],
    image: "https://www.picknpack.in/media/catalog/product/cache/1/image/374x272/9df78eab33525d08d6e5fb8d27136e95/s/t/stretch-film-roll-at-picknpack.jpg",
    description: "Professional stretch film for palletizing and cargo wrapping.",
    features: ["High Stretch", "Puncture Resistant", "Cost Effective", "Reliable"]
  },
  {
    id: 36,
    name: "Bubble Roll",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Shock absorption", "Various bubble sizes", "Different widths", "Lightweight"],
    image: "https://www.upack.in/media/catalog/product/cache/434b5723752bfe2768a169417576f99a/u/p/upbw_1.jpg",
    description: "Protective bubble wrap for cushioning and packaging applications.",
    features: ["Shock Absorption", "Lightweight", "Protective", "Easy to Use"]
  },
  {
    id: 37,
    name: "Corrugated Roll",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Protective cushioning", "Various widths", "Easy to cut", "Recyclable"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXgs9j52FUKDZty07ILu0dz9NKq5oLJ8row&s",
    description: "Corrugated protective wrap for fragile item packaging.",
    features: ["Protective", "Recyclable", "Easy to Cut", "Cost Effective"]
  },
  {
    id: 38,
    name: "Masking Tape",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Easy removal", "Various widths", "Temperature resistant", "Clean removal"],
    image: "https://5.imimg.com/data5/ZP/NP/HS/SELLER-35121122/masking-tape.jpg",
    description: "Professional masking tape for painting and temporary applications.",
    features: ["Easy Removal", "Clean Peel", "Temperature Resistant", "Versatile"]
  },
  {
    id: 39,
    name: "Double Side Tissue Tape",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Double sided adhesion", "Tissue backing", "Various widths", "Strong hold"],
    image: "https://www.essencetape.com/image/cache/catalog/TISSUE%20/07-800x800.png",
    description: "Double-sided tissue tape for mounting and bonding applications.",
    features: ["Double Sided", "Strong Hold", "Tissue Backing", "Versatile"]
  },
  {
    id: 40,
    name: "Polythene Sheet",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Waterproof", "Various thickness", "Different sizes", "Transparent/Colored"],
    image: "https://images.jdmagicbox.com/quickquotes/images_main/mono-industries-building-construction-polythene-sheets-2226345625-4yb2di0x.jpg",
    description: "Protective polythene sheets for covering and wrapping applications.",
    features: ["Waterproof", "Protective", "Versatile", "Cost Effective"]
  },
  {
    id: 41,
    name: "Foam Roll",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Cushioning protection", "Various thickness", "Easy to cut", "Lightweight"],
    image: "https://www.upack.in/media/catalog/product/cache/1b6285b0519a2e4e16a97e58faf7625a/e/p/epe_upack_1.jpg",
    description: "Protective foam rolls for cushioning and packaging delicate items.",
    features: ["Cushioning", "Lightweight", "Easy to Cut", "Protective"]
  },
  {
    id: 42,
    name: "Tarpaulin",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Waterproof", "UV resistant", "Various sizes", "Heavy duty"],
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgh3gI9-I0B9zqGSMc0RlHgFaXlvfyaTg6g8MzYvRjRsFRaJOvA7QYuemQiInJQU9DiDM&usqp=CAU",
    description: "Heavy-duty tarpaulins for outdoor protection and covering applications.",
    features: ["Waterproof", "UV Resistant", "Heavy Duty", "Durable"]
  },
  {
    id: 43,
    name: "Safety Warning Tape",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["High visibility", "Various colors", "Strong adhesion", "Weather resistant"],
    image: "https://m.media-amazon.com/images/I/913QLHYXJpL._UF350,350_QL80_.jpg",
    description: "High-visibility warning tape for safety marking and hazard identification.",
    features: ["High Visibility", "Safety Marking", "Weather Resistant", "Strong Adhesion"]
  },
  {
    id: 44,
    name: "Garbage Bag",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Heavy duty", "Leak proof", "Different colors"],
    image: "https://rukminim2.flixcart.com/image/850/1000/ksxjs7k0/garbage-bag/m/o/0/10-small-garbage-bag-16x20-pack-of-2-small-50-amanya-enterprises-original-imag6dkaqyhy2yjv.jpeg?q=20&crop=false",
    description: "Heavy-duty garbage bags for waste management and disposal.",
    features: ["Heavy Duty", "Leak Proof", "Various Sizes", "Reliable"]
  },
  {
    id: 45,
    name: "Plastic Bag",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various sizes", "Clear/Colored", "Food grade available", "Different thickness"],
    image: "https://static.wixstatic.com/media/1a1403_f25ccd07cbbd4be5bd91b8570136983b~mv2.jpeg/v1/fill/w_864,h_476,al_c,lg_1,q_85,enc_avif,quality_auto/1a1403_f25ccd07cbbd4be5bd91b8570136983b~mv2.jpeg",
    description: "General purpose plastic bags for packaging and storage applications.",
    features: ["Versatile", "Various Sizes", "Food Grade Available", "Cost Effective"]
  },
  {
    id: 46,
    name: "Zipper Bag",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Resealable", "Various sizes", "Clear visibility", "Easy to use"],
    image: "https://solo.in/cdn/shop/files/my-zipper-bag-zipper-closure-a4fc-size-pack-of-10-734771.jpg?v=1742021663",
    description: "Resealable zipper bags for storage and organization applications.",
    features: ["Resealable", "Clear Visibility", "Easy to Use", "Reusable"]
  },
  {
    id: 47,
    name: "Cotton Rope",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Natural fiber", "Various diameters", "Strong", "Different lengths"],
    image: "https://m.media-amazon.com/images/I/61N0zv36JtL._UF894,1000_QL80_.jpg",
    description: "Natural cotton rope for packaging and general purpose applications.",
    features: ["Natural Fiber", "Strong", "Versatile", "Eco-Friendly"]
  },
  {
    id: 48,
    name: "Knife Cutter",
    category: "packing-materials",
    brand: "Various Brands",
    featured: false,
    specifications: ["Sharp blade", "Safety features", "Ergonomic handle", "Replaceable blades"],
    image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/paper-cutter/s/j/a/art-heavy-duty-18-mm-cutter-knife-with-10-replacement-blades-original-imah7hpexxqhjkqq.jpeg?q=20&crop=false",
    description: "Professional utility knives for cutting and packaging applications.",
    features: ["Sharp Blade", "Safety Features", "Ergonomic", "Replaceable Blades"]
  },

  
  // PLASTIC & COMPOSITE SHEETS
  {
    id: 94,
    name: "Polycarbonate Sheet",
    category: "plastic-sheets",
    brand: "Various Brands",
    featured: true,
    specifications: ["Impact resistant", "UV protection", "Various thickness", "Multiple colors"],
    image: "https://s.alicdn.com/@sc04/kf/H26b7975f908548a4b3cb7bf04ee6e9bbj.png",
    description: "High-impact polycarbonate sheets for glazing and protection applications.",
    features: ["Impact Resistant", "UV Protection", "Lightweight", "Clear/Tinted"]
  },
  {
    id: 95,
    name: "Acrylic Sheet",
    category: "plastic-sheets",
    brand: "Various Brands",
    featured: true,
    specifications: ["Crystal clear", "Weather resistant", "Easy to cut", "Various colors"],
    image: "https://s.alicdn.com/@sc04/kf/H7bcb310870584498b4303c680f2d5cf8P.jpg",
    description: "Premium acrylic sheets for signage and display applications.",
    features: ["Crystal Clear", "Weather Resistant", "Easy to Cut", "Versatile"]
  },

  // ADHESIVES & SEALANTS
  {
  id: 96,
  name: "Silicone Sealant",
  category: "adhesives",
  brand: "Various Brands",
  featured: true,
  specifications: ["Weather resistant", "Flexible", "Various colors", "Mold resistant"],
  image: siliconeSealantImg, // Use the imported variable
  description: "High-quality silicone sealant for weatherproofing and bonding.",
  features: ["Weather Resistant", "Flexible", "Mold Resistant", "Long Lasting"]
},
  // WOOD PRODUCTS
  {
    id: 97,
    name: "MDF Board",
    category: "wood-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Smooth surface", "Various thickness", "Easy to work", "Consistent density"],
    image: "https://m.media-amazon.com/images/I/61aPUTYiqCL._UF350,350_QL80_.jpg",
    description: "High-quality MDF boards for furniture and construction applications.",
    features: ["Smooth Surface", "Easy to Work", "Consistent Density", "Versatile"]
  },
  {
    id: 98,
    name: "Plywood",
    category: "wood-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Multi-ply construction", "Various grades", "Water resistant", "Strong"],
    image: "https://5.imimg.com/data5/TE/IU/MY-30588398/mr-grade-plywood-sheet-500x500.jpg",
    description: "Premium plywood for structural and decorative applications.",
    features: ["Multi-Ply", "Water Resistant", "Strong", "Versatile"]
  },
  {
    id: 99,
    name: "White Wood",
    category: "wood-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Natural wood", "Various sizes", "Kiln dried", "Construction grade"],
    image: "https://s.alicdn.com/@sc04/kf/Hc12441a8fac140f0936c35214c20139a9/964662/Hc12441a8fac140f0936c35214c20139a9.png",
    description: "Natural white wood lumber for construction and carpentry.",
    features: ["Natural Wood", "Kiln Dried", "Construction Grade", "Sustainable"]
  },
  {
    id: 100,
    name: "Red Oak",
    category: "wood-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Hardwood", "Beautiful grain", "Durable", "Various sizes"],
    image: "https://m.media-amazon.com/images/I/51MqNOo9dML._UF894,1000_QL80_.jpg",
    description: "Premium red oak lumber for fine woodworking and furniture.",
    features: ["Hardwood", "Beautiful Grain", "Durable", "Premium Quality"]
  },
  {
    id: 101,
    name: "OSB Board",
    category: "wood-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Oriented strands", "Structural grade", "Various thickness", "Moisture resistant"],
    image: "https://images-eu.ssl-images-amazon.com/images/I/713L1hTCMOL._AC_UL495_SR435,495_.jpg",
    description: "Oriented Strand Board for structural and sheathing applications.",
    features: ["Structural Grade", "Moisture Resistant", "Cost Effective", "Strong"]
  },
  {
    id: 102,
    name: "Timber",
    category: "wood-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Structural lumber", "Various dimensions", "Treated/Untreated", "Construction grade"],
    image: "https://m.media-amazon.com/images/I/51NVvcJ5WxL._UF350,350_QL80_.jpg",
    description: "Construction timber for framing and structural applications.",
    features: ["Structural Grade", "Various Dimensions", "Treated Options", "Strong"]
  },
  {
    id: 103,
    name: "Wooden Palette",
    category: "wood-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Standard sizes", "Heat treated", "Four-way entry", "Durable construction"],
    image: "https://skypakaging.com/wp-content/uploads/2022/05/Go_thong_moi_4_chieu-2.jpg",
    description: "Industrial wooden pallets for shipping and storage.",
    features: ["Standard Sizes", "Heat Treated", "Four-Way Entry", "Industrial Grade"]
  },

  // FABRIC PRODUCTS
  {
    id: 104,
    name: "Industrial Carpet",
    category: "fabric-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Heavy duty", "Stain resistant", "Various colors", "Anti-slip backing"],
    image: "https://cdn.shopify.com/s/files/1/1916/8401/files/Screenshot_2021-04-16_at_11.17.20_AM_480x480.png?v=1618552218",
    description: "Heavy-duty industrial carpet for commercial applications.",
    features: ["Heavy Duty", "Stain Resistant", "Anti-Slip Backing", "Durable"]
  },
  {
    id: 105,
    name: "Jute Rug",
    category: "fabric-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Natural fiber", "Various sizes", "Eco-friendly", "Durable weave"],
    image: "https://silk-avenue.co.uk/wp-content/uploads/2023/02/NATURE-scaled.jpg",
    description: "Natural jute rugs for eco-friendly flooring solutions.",
    features: ["Natural Fiber", "Eco-Friendly", "Durable Weave", "Various Sizes"]
  },
  {
    id: 106,
    name: "Industrial Felt",
    category: "fabric-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Dense construction", "Various thickness", "Heat resistant", "Sound dampening"],
    image: "https://m.media-amazon.com/images/I/915QDA5WciL.jpg",
    description: "Industrial felt for insulation and dampening applications.",
    features: ["Dense Construction", "Heat Resistant", "Sound Dampening", "Versatile"]
  },
  {
    id: 107,
    name: "Waterproof Fabric",
    category: "fabric-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Waterproof coating", "UV resistant", "Various colors", "Tear resistant"],
    image: "https://5.imimg.com/data5/SELLER/Default/2024/9/454974943/HS/BS/OH/147282251/lining-fabric-i-mesh-taffata-fabric-500x500.jpg",
    description: "Waterproof fabrics for outdoor and marine applications.",
    features: ["Waterproof", "UV Resistant", "Tear Resistant", "Outdoor Grade"]
  },

  // LIGHTS PRODUCTS
  {
    id: 108,
    name: "LED Strip Light",
    category: "lights-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Multiple colors", "Flexible", "Low power", "Easy installation"],
    image: "https://m.media-amazon.com/images/I/7192HFTUHrL.jpg",
    description: "Flexible LED strip lights with multiple color options.",
    features: ["Multiple Colors", "Flexible", "Low Power", "Easy Installation"]
  },
  {
    id: 109,
    name: "RGB LED Light",
    category: "lights-products",
    brand: "Various Brands",
    featured: true,
    specifications: ["Color changing", "Remote control", "Energy efficient", "Long life"],
    image: "https://sc04.alicdn.com/kf/H4052b550cb7d49ffaca0625c78e729fdU.jpg_350x350.jpg",
    description: "RGB LED lights with color changing capabilities.",
    features: ["Color Changing", "Remote Control", "Energy Efficient", "Long Life"]
  },
  {
    id: 110,
    name: "Track Light",
    category: "lights-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Adjustable direction", "Various wattages", "Modern design", "Easy installation"],
    image: "https://3dbrute.com/wp-content/uploads/2023/10/post11419-300x300.jpg",
    description: "Adjustable track lights for accent and task lighting.",
    features: ["Adjustable Direction", "Modern Design", "Various Wattages", "Versatile"]
  },
  {
    id: 111,
    name: "Neon Light",
    category: "lights-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Bright illumination", "Various colors", "Flexible tube", "Long lasting"],
    image: "https://step1dezigns.com/cdn/shop/products/0009356_led-12v-single-color-mini-flex-neon-lights_700x700.jpg?v=1613209304",
    description: "Bright neon lights for decorative and signage applications.",
    features: ["Bright Illumination", "Various Colors", "Flexible", "Long Lasting"]
  },
  {
    id: 112,
    name: "Aluminium Channel",
    category: "lights-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["LED compatible", "Various profiles", "Easy mounting", "Professional finish"],
    image: "https://m.media-amazon.com/images/I/716gSAzkm7L._UF1000,1000_QL80_.jpg",
    description: "Aluminum channels for LED strip lighting installations.",
    features: ["LED Compatible", "Various Profiles", "Easy Mounting", "Professional Finish"]
  },
  {
    id: 113,
    name: "Power Supply",
    category: "lights-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["Various wattages", "Constant voltage", "Compact design", "Reliable operation"],
    image: "https://m.media-amazon.com/images/I/51lVkAmgxGL._UF350,350_QL50_.jpg",
    description: "LED power supplies for lighting installations.",
    features: ["Various Wattages", "Constant Voltage", "Compact Design", "Reliable"]
  },
  {
    id: 114,
    name: "Curtain LED",
    category: "lights-products",
    brand: "Various Brands",
    featured: false,
    specifications: ["3000K-6500K", "Dimmable", "Easy installation", "Even illumination"],
    image: "https://5.imimg.com/data5/QD/VP/KA/SELLER-91621281/led-strip-light-500x500.jpg",
    description: "Curtain LED lights for decorative and ambient lighting.",
    features: ["Adjustable Color", "Dimmable", "Easy Installation", "Even Illumination"]
  }
];

// Export default object with all data
export default {
  productCategories,
  detailedProducts
};