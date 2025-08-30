import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  ChevronDown, ArrowRight, Play, Shield, Truck, Users, Star, Award,
  Wrench, Settings, Factory, Building2, Globe, Phone, Mail, MapPin,
  Download, ExternalLink, CheckCircle, TrendingUp, Zap, Target
} from 'lucide-react';
import './Home.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import DextaAboutSection from '../components/DextaAboutSection';

// Import images
import heroImage from '../assets/hero.jpeg';
import aboutImage from '../assets/hero1.png';
import facilityImage from '../assets/about.jpg';
import warehouseImage from '../assets/about.jpg';
import teamImage from '../assets/about.jpg';
import qualityImage from '../assets/about.jpg';
import industrialImage from '../assets/about.jpg';
import constructionImage from '../assets/about.jpg';
// Product Category Images
import metalProductsImage from '../assets/metal.jpg';
import safetyProductsImage from '../assets/safetyproducts.jpg';
import packingMaterialsImage from '../assets/packing.jpg';
import fastenersImage from '../assets/fastners.jpg';
import powerToolsImage from '../assets/images.jpeg';
import plasticSheetsImage from '../assets/plastic.jpg';
import adhesivesImage from '../assets/AA-2.jpg';
import woodProductsImage from '../assets/wood.jpg';
import fabricProductsImage from '../assets/fabric.jpg';
import lightsProductsImage from '../assets/li.jpg';

const HomePage = () => {
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-slide for hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.dataset.section]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  // Handle brochure download - PDF only with error handling
  const handleBrochureDownload = () => {
    // First try to check if file exists and is valid
    fetch('/assets/DEXTA.pdf')
      .then(response => {
        if (response.ok) {
          // File exists, trigger download
          const link = document.createElement('a');
          link.href = '../assets/DEXTA.pdf';
          link.download = 'DEXTA-Catalog-2025.pdf';
          link.target = '_blank';
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        } else {
          throw new Error('PDF file not found');
        }
      })
      .catch(() => {
        // Fallback if PDF has issues
        alert('PDF download temporarily unavailable. Please contact us for the catalog:\n\nPhone: +971 52 682 2173\nEmail: info@dextatradingllc.com');
      });
  };

  const heroSlides = [
    {
      title: "PREMIUM QUALITY",
      subtitle: "Building Materials Excellence",
      description: "Discover our comprehensive range of premium construction materials",
      tagline: "Where Innovation Meets Precision",
      cta: "Explore Catalog",
      isMain: true
    },
    {
      title: "EXPORT-IMPORT",
      subtitle: "China to GCC Solutions",
      description: "Direct sourcing from China to GCC countries with quality assurance",
      tagline: "Bridging Quality. Connecting Markets.",
      cta: "View Products",
      isMain: false
    },
    {
      title: "METAL SOLUTIONS",
      subtitle: "Industrial Grade Materials",
      description: "High-quality steel, aluminum, and specialty metals",
      tagline: "Strength. Durability. Performance.",
      cta: "View Products",
      isMain: false
    },
    {
      title: "SAFETY FIRST",
      subtitle: "Complete Protection Solutions",
      description: "Comprehensive safety equipment for every workplace",
      tagline: "Your Safety, Our Priority",
      cta: "Safety Products",
      isMain: false
    }
  ];

  const stats = [
    {
      number: "8+",
      label: "Years Experience",
      icon: Award,
      description: "Trusted industry expertise",
      color: "from-blue-500 to-blue-600"
    },
    {
      number: "5000+",
      label: "Happy Clients",
      icon: Users,
      description: "Satisfied customers worldwide",
      color: "from-green-500 to-green-600"
    },
    {
      number: "10000+",
      label: "Products",
      icon: Star,
      description: "Premium quality items",
      color: "from-purple-500 to-purple-600"
    },
    {
      number: "24/7",
      label: "Support",
      icon: CheckCircle,
      description: "Round-the-clock assistance",
      color: "from-red-500 to-red-600"
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Quality Assured",
      description: "Premium products from trusted international manufacturers with rigorous quality control and testing procedures",
      highlight: "ISO Certified",
      image: qualityImage,
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Efficient logistics network ensuring prompt delivery across the UAE and neighboring regions",
      highlight: "Same Day",
      image: facilityImage,
      bgColor: "bg-gradient-to-br from-green-50 to-green-100"
    },
    {
      icon: TrendingUp,
      title: "Expert Support",
      description: "Professional technical guidance and comprehensive customer support services",
      highlight: "24/7 Available",
      image: teamImage,
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-100"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "International supplier partnerships bringing you the best products worldwide",
      highlight: "20+ Countries",
      image: industrialImage,
      bgColor: "bg-gradient-to-br from-orange-50 to-orange-100"
    },
    {
      icon: Target,
      title: "Competitive Pricing",
      description: "Best value for money with transparent pricing and no hidden costs",
      highlight: "Best Rates",
      image: constructionImage,
      bgColor: "bg-gradient-to-br from-teal-50 to-teal-100"
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Latest technology and cutting-edge solutions for modern construction",
      highlight: "Future Ready",
      image: aboutImage,
      bgColor: "bg-gradient-to-br from-pink-50 to-pink-100"
    }
  ];

  const productCategories = [
    {
      icon: Factory,
      title: "Metal Products",
      subtitle: "Industrial Grade Materials",
      description: "High-quality steel, aluminum, and specialty metals for construction projects",
      products: ["MS Sheets", "GI Sheets", "SS Tubes", "Aluminum Profiles", "Steel Bars", "Metal Pipes"],
      badge: "Best Seller",
      image: metalProductsImage
    },
    {
      icon: Shield,
      title: "Safety Products",
      subtitle: "Complete Protection Solutions",
      description: "Comprehensive safety equipment and gear for workplace protection",
      products: ["Safety Helmets", "Protective Gear", "Warning Systems", "Emergency Equipment", "Safety Barriers"],
      badge: "Certified",
      image: safetyProductsImage
    },
    {
      icon: Building2,
      title: "Packing Materials",
      subtitle: "Secure & Reliable",
      description: "Professional packaging solutions for safe transport and storage",
      products: ["Protective Films", "Bubble Wrap", "Packing Tapes", "Cargo Straps", "Storage Boxes"],
      badge: "Premium",
      image: packingMaterialsImage
    },
    {
      icon: Wrench,
      title: "Fasteners and Fixings",
      subtitle: "Strong & Durable",
      description: "High-strength fasteners and fixing solutions for construction",
      products: ["Bolts & Nuts", "Screws", "Anchors", "Washers", "Threaded Rods", "Clips"],
      badge: "Pro Grade",
      image: fastenersImage
    },
    {
      icon: Zap,
      title: "Power Tools",
      subtitle: "Professional Equipment",
      description: "Advanced power tools and accessories for construction professionals",
      products: ["Drills", "Grinders", "Saws", "Sanders", "Polishers", "Accessories"],
      badge: "Professional",
      image: powerToolsImage
    },
    {
      icon: Target,
      title: "Plastic & Composite Sheets",
      subtitle: "Modern Materials",
      description: "Advanced plastic and composite materials for modern applications",
      products: ["Acrylic Sheets", "Polycarbonate", "HDPE Sheets", "Composite Panels", "PVC Boards"],
      badge: "Innovation",
      image: plasticSheetsImage
    },
    {
      icon: Settings,
      title: "Adhesives & Sealants",
      subtitle: "Bonding Solutions",
      description: "Professional adhesives and sealants for various applications",
      products: ["Structural Adhesives", "Silicone Sealants", "Epoxy", "Construction Glues", "Gaskets"],
      badge: "Reliable",
      image: adhesivesImage
    },
    {
      icon: Globe,
      title: "Wood Products",
      subtitle: "Natural Materials",
      description: "Quality wood products and engineered solutions for construction",
      products: ["Plywood", "Timber Boards", "Wood Panels", "Engineered Wood", "Veneers"],
      badge: "Natural",
      image: woodProductsImage
    },
    {
      icon: Star,
      title: "Fabric Products",
      subtitle: "Technical Textiles",
      description: "Specialized fabrics and textiles for industrial applications",
      products: ["Geotextiles", "Tarpaulins", "Canvas", "Protective Fabrics", "Industrial Textiles"],
      badge: "Durable",
      image: fabricProductsImage
    },
    {
      icon: TrendingUp,
      title: "Lights Products",
      subtitle: "Illumination Solutions",
      description: "Professional lighting solutions for construction and industrial use",
      products: ["LED Fixtures", "Work Lights", "Emergency Lighting", "Industrial Lamps", "Outdoor Lighting"],
      badge: "Bright",
      image: lightsProductsImage
    }
  ];

  // Brand logos data - using placeholder brand names
  const brands = [
    { name: "Sika", logo: "https://cdn.cookielaw.org/logos/9aaa3e8a-b171-45d6-b15b-5e7dba70499a/d605949c-4d65-4d25-b2c1-770a467efdb3/1516601d-a07f-4b17-9bb7-f8f3bdbf9778/Sika_NoClaim_pos_rgb_30.png" },
    { name: "Pattex", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Pattex-Logo.svg/2545px-Pattex-Logo.svg.png" },
    { name: "Dow Corning", logo: "https://www.glassonline.com/wp-content/uploads/2018/02/20180125090900_20171009063832DOWcowing.jpg" },
    { name: "Soudal", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsCLIkMwJy6XPNdR-JQ9X7FtPf6NIJ_ZeSYw&s" },
    { name: "Tremco", logo: "https://www.rpminc.com/media/3013/trbm_logo-construction_products-01-small.png" },
    { name: "Armacell", logo: "https://www.seekpng.com/png/detail/289-2898763_avatar-placeholder-asmaco.png" },
    { name: "Wacker", logo: "https://brandeps.com/logo-download/W/Wacker-Chemie-logo-01.png" },
    { name: "Dr. Fixit", logo: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEibYHHzMS0Dk7Lk16w8lsDSKe7P88eE6O_6coAhBzn-zGCmQ5hA1v0Q3Ra6L_Gb9QCcjSOO5SaoMJP5Dxh-klg4C7R1opkgiv8r8z-ENsfhm8OFHaPoQ5vmzbRGLpjd0XASCKOB/s1600/drfixit+logo.png" },
    { name: "Dolphin", logo: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRitVO_gVmoy2eTzMyL40053MM-gGP0P5Cy8cEN-8JrwzvXkaKB" },
    { name: "UltraPro", logo: "https://aliglaziers.co.ke/image/cache/catalog/1%20NEW/SAS_Brands_banner-vaultex-100x100.png" },
    { name: "Viewflex", logo: "https://hardwarepasal.com/src/img/brand/2018-10-09-09-46-51_vQUr74odQK_brand.png" },
    { name: "Armstrong", logo: "https://i.ebayimg.com/images/g/wqYAAOSwi1ZdnKnL/s-l1200.png" },
    { name: "Honeywell", logo: "https://1000logos.net/wp-content/uploads/2017/12/Honeywell-Logo.png" },
    { name: "Miller", logo: "https://upload.wikimedia.org/wikipedia/en/thumb/4/45/Miller_Brewery_Logo.svg/800px-Miller_Brewery_Logo.svg.png" },
    { name: "Makita", logo: "https://images.seeklogo.com/logo-png/57/1/makita-power-tools-logo-png_seeklogo-572464.png" },
    { name: "DeWALT", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1024px-DeWalt_Logo.svg.png" },
    { name: "DEXTA", logo: "https://scontent.fccj2-1.fna.fbcdn.net/v/t39.30808-1/494695585_122101483118856714_3165656557114136193_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=103&ccb=1-7&_nc_sid=e99d92&_nc_ohc=dC73qRWe5BkQ7kNvwE9U0XD&_nc_oc=AdmyUh7c5iiCjJv1jRQuATN8lQkuQ5-6wxZXg3fYb0EJ7122hlglLjLFO-mcU-BjEuvlrbuTNA3xJXaCBWHwv6MJ&_nc_zt=24&_nc_ht=scontent.fccj2-1.fna&_nc_gid=TOSSrn9HhCeeAb3U7W-7Xg&oh=00_AfUR-08e8hzG17qCWbN4o2r3-PZL0Ype-50hlcn3p7R6nA&oe=68B895CA" }

  ];

  const testimonials = [
    {
      name: "Ahmed Al-Mansouri",
      company: "Emirates Construction",
      text: "DEXTA has been our trusted partner for over 8 years. Their quality and service are unmatched.",
      rating: 5,
      avatar: teamImage
    },
    {
      name: "Sarah Johnson",
      company: "Dubai Developers",
      text: "The fastest delivery and best customer support in the UAE. Highly recommended!",
      rating: 5,
      avatar: aboutImage
    },
    {
      name: "Mohammed Hassan",
      company: "Gulf Industries",
      text: "Excellent product range and competitive pricing. Our go-to supplier for all projects.",
      rating: 5,
      avatar: qualityImage
    }
  ];

  const contactInfo = {
    phones: ["+971 52 682 2173", "+971 52 844 1348"],
    website: "www.dextatradingllc.com",
    email: "info@dextatradingllc.com",
    address: "Sharjah Media City (SHAMS)\nP.O Box: 231525\nSharjah - UAE",
    chinaAddress: "UNIT 2, BUILDING 2, LIANPING VILLAGE\nFUTIAN SUB-DISTRICT, YIWU CITY\nZHEJIANG PROVINCE, CHINA"
  };

  return (
    <div className="home-elegant-homepage">
      <Header />

      {/* Hero Section */}
      <section className="home-hero-section" data-section="hero">
        <div className="home-hero-background">
          <img src={heroImage} alt="Construction Background" className="home-hero-bg-image" />
          <div className="home-hero-overlay"></div>
          <div className="home-hero-pattern"></div>
        </div>

        <div className="home-hero-content">
          {/* Hero Badge */}
          <div className="home-hero-badge" data-aos="fade-up">
            <Building2 size={16} />
            <span>Leading Construction Materials Supplier</span>
          </div>

          {/* Address Information */}
          <div className="home-hero-addresses" data-aos="fade-up" data-aos-delay="200">
            <div className="home-address-item">
              <MapPin size={14} />
              <span>UAE: Sharjah Media City (SHAMS)</span>
            </div>
            <div className="home-address-separator">•</div>
            <div className="home-address-item">
              <Globe size={14} />
              <span>China: Yiwu City, Zhejiang Province</span>
            </div>
            <div className="home-address-separator">•</div>
            <div className="home-address-item export-import-badge">
              <Truck size={14} />
              <span>Export-Import China to GCC</span>
            </div>
          </div>

          <div className="home-hero-slides">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`home-hero-slide ${index === currentSlide ? 'active' : ''}`}
              >
                <h1 className="home-hero-title">{slide.title}</h1>
                <p className="home-hero-subtitle">{slide.subtitle}</p>
                <p className="home-hero-description">{slide.description}</p>
                <div className="home-hero-tagline">{slide.tagline}</div>
              </div>
            ))}
          </div>

          <div className="home-hero-actions">
            <Link to="/products" className="home-btn-primary">
              <span>Explore Catalog</span>
              <ArrowRight size={20} />
            </Link>
            {/* <button
              onClick={handleBrochureDownload}
              className="home-btn-secondary"
            >
              <Download size={20} />
              <span>Download Brochure</span>
            </button> */}
          </div>
          <div className="home-slide-indicators">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                className={`home-indicator ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
        </div>

        <div className="home-scroll-indicator">
          <ChevronDown size={24} />
        </div>
      </section>

      {/* Stats Section */}
      <section className="home-stats-section" data-section="stats">
        <div className="home-stats-container">
          <div className="home-container">
            <div className="home-stats-grid">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`home-stat-item ${isVisible.stats ? 'visible' : ''}`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="home-stat-icon-bg">
                    <stat.icon className="home-stat-icon" size={22} />
                  </div>
                  <div className="home-stat-number">{stat.number}</div>
                  <div className="home-stat-label">{stat.label}</div>
                  <div className="home-stat-description">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section - Replace the old one */}
      <DextaAboutSection />

      {/* Features Section */}
      <section className="home-features-section" data-section="features">
        <div className="home-container">
          <div className="section-header">
            <div className="home-section-badge">Why Choose Us</div>
            <h2 className="home-section-title">
              Your Trusted <span className="home-text-accent">Construction Partner</span>
            </h2>
            <div className="home-section-divider"></div>
            <p className="home-section-description">
              We deliver exceptional value through quality products, reliable service, and innovative solutions
            </p>
          </div>

          <div className="home-features-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`home-feature-card-new ${isVisible.features ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="home-feature-card-container">
                  <div className="home-feature-gradient-overlay" />
                  <div className="home-feature-content-section">
                    <div className="home-feature-icon-container">
                      <feature.icon className="home-feature-main-icon" />
                    </div>
                    <h3 className="home-feature-card-title">{feature.title}</h3>
                    <p className="home-feature-card-description">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="home-product-categories-section" data-section="products">
        <div className="home-container">
          <div className="section-header">
            <div className="home-section-badge">Product Categories</div>
            <h2 className="home-section-title">
              Complete <span className="home-text-accent">Construction Solutions</span>
            </h2>
            <div className="home-section-divider"></div>
            <p className="home-section-description">
              Discover our premium range of construction materials and industrial solutions designed for modern professionals
            </p>
          </div>

          <div className="home-product-showcase-grid">
            {productCategories.map((category, index) => (
              <div
                key={index}
                className={`home-product-showcase-item ${isVisible.products ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="home-product-showcase-card">
                  <div className="home-product-image-container">
                    <div className="home-product-image-wrapper">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="home-product-showcase-image"
                        loading="lazy"
                        onLoad={(e) => {
                          e.target.style.filter = 'brightness(1) contrast(1) saturate(1)';
                        }}
                      />
                      <div className="home-product-floating-badge">
                        {category.badge}
                      </div>
                      <div className="home-product-completion-info">
                        <span className="home-completion-year">Available Now</span>
                      </div>
                    </div>
                  </div>

                  <div className="home-product-content-section">
                    <div className="home-product-category-icon">
                      <category.icon size={32} />
                    </div>

                    <h3 className="home-product-showcase-title">
                      {category.title}
                    </h3>

                    <p className="home-product-showcase-subtitle">
                      {category.subtitle}
                    </p>

                    <p className="home-product-showcase-description">
                      {category.description}
                    </p>

                    <div className="home-product-features-showcase">
                      {category.products.slice(0, 3).map((product, idx) => (
                        <div
                          key={idx}
                          className="home-product-feature-tag"
                          style={{ animationDelay: `${idx * 0.1}s` }}
                        >
                          {product}
                        </div>
                      ))}
                     
                    </div>

                   
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="home-brands-section" data-section="brands">
        <div className="home-brands-container">
          <div className="home-brands-header">
            <div className="home-section-badge">Trusted Partners</div>
            <h2 className="home-brands-title">
              Premium <span className="home-text-accent">Global Brands</span>
            </h2>
            <div className="home-section-divider"></div>
            <p className="home-brands-description">
              We partner with the world's leading manufacturers to bring you the highest quality construction materials and industrial solutions
            </p>
          </div>

          <div className="home-brands-grid">
            {brands.map((brand, index) => (
              <div
                key={index}
                className={`home-brand-item ${isVisible.brands ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} Logo`}
                  className="home-brand-logo"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="home-testimonials-section" data-section="testimonials">
        <div className="home-container">
          <div className="section-header">
            <div className="home-section-badge">Client Reviews</div>
            <h2 className="home-section-title">
              What Our <span className="home-text-accent">Clients Say</span>
            </h2>
            <div className="home-section-divider"></div>
          </div>

          <div className="home-testimonials-grid">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`home-testimonial-card ${isVisible.testimonials ? 'visible' : ''}`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="home-testimonial-content">
                  <div className="home-stars">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="home-testimonial-text">"{testimonial.text}"</p>
                </div>
                <div className="home-testimonial-author">
                  <img src={testimonial.avatar} alt={testimonial.name} />
                  <div>
                    <div className="home-author-name">{testimonial.name}</div>
                    <div className="home-author-company">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta-section" data-section="cta">
        <div className="home-cta-background"></div>
        <div className="home-container">
          <div className={`home-cta-content ${isVisible.cta ? 'visible' : ''}`}>
            <h2 className="home-cta-title">Ready to Start Your Project?</h2>
            <p className="home-cta-description">
              Get in touch with our experts for personalized solutions and competitive quotes
            </p>
            <div className="home-cta-buttons">
             
              <Link
                to="/contact"
                className="home-btn-outline large"
              >
                <Mail size={20} />
                <span>Get Quote Now</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;