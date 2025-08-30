import React, { useState, useEffect } from 'react';
import {
  Search, Filter, Grid, List, ArrowRight, Star, Download, Eye,
  Factory, Shield, Building2, Wrench, Zap, Target, Settings,
  Globe, TrendingUp, ChevronDown, SlidersHorizontal, X, Check,
  ShoppingCart, Heart, Share2, ChevronRight, Phone, Mail,
  ChevronLeft
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { productCategories, detailedProducts } from '../productData';
import { fastenersData } from '../fastenersData';
import { powerToolsData } from '../powerToolsData';

const ProductsPage = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [priceRange, setPriceRange] = useState('all');
  const [isVisible, setIsVisible] = useState({});
  const [wishlist, setWishlist] = useState([]);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Combine all products from different data sources
  const allProducts = [
    ...detailedProducts,
    ...fastenersData.featuredProducts,
    ...powerToolsData.featuredProducts
  ];

  // Filter and search logic
  const filteredProducts = allProducts.filter(product => {
    const matchesCategory = activeFilter === 'all' || product.category === activeFilter;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);

    return matchesCategory && matchesSearch && matchesBrand;
  });

  // Sort products
  const sortedProducts = [...filteredProducts];

  // Get unique brands
  const allBrands = [...new Set(allProducts.map(p => p.brand))];

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
      { threshold: 0.1 }
    );

    document.querySelectorAll('[data-section]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleBrandFilter = (brand) => {
    setSelectedBrands(prev =>
      prev.includes(brand)
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    );
  };

  const toggleWishlist = (productId) => {
    setWishlist(prev =>
      prev.includes(productId)
        ? prev.filter(id => id !== productId)
        : [...prev, productId]
    );
  };

  const getCategoryIcon = (categoryId) => {
    const category = productCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Factory;
  };

  const getCategoryTitle = (categoryId) => {
    const category = productCategories.find(cat => cat.id === categoryId);
    return category ? category.title : 'Product';
  };

  // Responsive helper functions
  const isMobile = windowWidth < 768;
  const isTablet = windowWidth < 1024;

  // Custom inline styles with responsive adjustments
  const styles = {
    heroSection: {
      background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      color: 'white',
      padding: isMobile ? '2rem 0' : '4rem 0',
    },
    searchBar: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      backgroundColor: 'white',
      borderBottom: '1px solid #e5e7eb',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
    },
    categoryNavigation: {
      backgroundColor: '#f9fafb',
      borderBottom: '1px solid #e5e7eb',
      padding: isMobile ? '0.75rem 0' : '1rem 0',
      position: 'sticky',
      top: isMobile ? '4.5rem' : '5rem',
      zIndex: 30,
    },
    productCard: {
      backgroundColor: 'white',
      borderRadius: '0.75rem',
      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      border: '1px solid #e5e7eb',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
    },
    productCardHover: {
      boxShadow: '0 10px 25px -3px rgba(0, 0, 0, 0.1)',
      transform: 'translateY(-2px)',
    },
    redButton: {
      backgroundColor: '#dc2626',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.5rem',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
    },
    redButtonHover: {
      backgroundColor: '#b91c1c',
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <Header />

      {/* Header Section */}
      <div style={styles.heroSection}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: isMobile ? '0 1rem' : '0 1rem',
        }}>
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '0.5rem 1rem',
              backgroundColor: '#dc2626',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: '600',
              borderRadius: '9999px',
              marginBottom: '1rem'
            }}>
              Product Catalog
            </div>
            <h1 style={{
              fontSize: isMobile ? '2rem' : isTablet ? '2.5rem' : 'clamp(2.5rem, 5vw, 3.5rem)',
              fontWeight: '700',
              marginBottom: '1rem',
              fontFamily: "'Playfair Display', serif",
              lineHeight: 1.2,
            }}>
              Premium <span style={{ color: '#ef4444' }}>Construction Materials</span>
            </h1>
            <p style={{
              fontSize: isMobile ? '1rem' : '1.25rem',
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '40rem',
              margin: '0 auto',
              padding: isMobile ? '0 1rem' : '0',
            }}>
              Discover our comprehensive range of high-quality products for all your construction needs
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: isMobile ? '1rem' : '1.5rem',
            marginTop: isMobile ? '2rem' : '3rem'
          }}>
            {[
              { number: `${allProducts.length}+`, label: "Products" },
              { number: `${productCategories.length}`, label: "Categories" },
              { number: "50+", label: "Brands" },
              { number: "24/7", label: "Support" }
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: isMobile ? '1.5rem' : 'clamp(1.5rem, 4vw, 2rem)',
                  fontWeight: '700',
                  color: '#ef4444',
                  marginBottom: '0.25rem',
                  fontFamily: "'Playfair Display', serif"
                }}>
                  {stat.number}
                </div>
                <div style={{
                  fontSize: isMobile ? '0.75rem' : '0.875rem',
                  color: 'rgba(255, 255, 255, 0.7)'
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div style={styles.searchBar}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: isMobile ? '0.75rem 1rem' : '1rem'
        }}>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            alignItems: isMobile ? 'stretch' : 'center'
          }}>
            {/* Search */}
            <div style={{ position: 'relative', flex: 1, maxWidth: isMobile ? '100%' : '28rem' }}>
              <Search
                style={{
                  position: 'absolute',
                  left: '0.75rem',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  color: '#6b7280'
                }}
                size={20}
              />
              <input
                type="text"
                placeholder={isMobile ? "Search products..." : "Search products, brands, or descriptions..."}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{
                  width: '100%',
                  paddingLeft: '2.5rem',
                  paddingRight: '1rem',
                  paddingTop: '0.5rem',
                  paddingBottom: '0.5rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem'
                }}
              />
            </div>

            <div style={{
              display: 'flex',
              gap: '0.75rem',
              justifyContent: isMobile ? 'space-between' : 'flex-start'
            }}>
              {/* Advanced Filters Toggle - Only for brands and other filters */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.5rem 1rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  backgroundColor: 'white',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  fontSize: isMobile ? '0.875rem' : '1rem',
                }}
              >
                <SlidersHorizontal size={20} />
                {isMobile ? 'Brands' : 'More Filters'}
                {selectedBrands.length > 0 && (
                  <span style={{
                    marginLeft: '0.25rem',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    fontSize: '0.75rem',
                    padding: '0.125rem 0.5rem',
                    borderRadius: '9999px'
                  }}>
                    {selectedBrands.length}
                  </span>
                )}
              </button>

              {/* View Toggle */}
              <div style={{
                display: 'flex',
                border: '1px solid #d1d5db',
                borderRadius: '0.5rem',
                overflow: 'hidden'
              }}>
                <button
                  onClick={() => setViewMode('grid')}
                  style={{
                    padding: '0.5rem',
                    backgroundColor: viewMode === 'grid' ? '#dc2626' : 'white',
                    color: viewMode === 'grid' ? 'white' : '#6b7280',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <Grid size={20} />
                </button>
                {!isMobile && (
                  <button
                    onClick={() => setViewMode('list')}
                    style={{
                      padding: '0.5rem',
                      backgroundColor: viewMode === 'list' ? '#dc2626' : 'white',
                      color: viewMode === 'list' ? 'white' : '#6b7280',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <List size={20} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Category Navigation */}
      <div style={styles.categoryNavigation}>
        <div style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitScrollbar: { display: 'none' },
            paddingBottom: '0.25rem'
          }}>
            {/* All Products Button */}
            <button
              onClick={() => setActiveFilter('all')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                borderRadius: '9999px',
                border: activeFilter === 'all' ? '2px solid #dc2626' : '1px solid #d1d5db',
                backgroundColor: activeFilter === 'all' ? '#dc2626' : 'white',
                color: activeFilter === 'all' ? 'white' : '#374151',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                fontSize: isMobile ? '0.875rem' : '1rem',
                fontWeight: activeFilter === 'all' ? '600' : '500',
                whiteSpace: 'nowrap',
                flexShrink: 0
              }}
              onMouseEnter={(e) => {
                if (activeFilter !== 'all') {
                  e.target.style.backgroundColor = '#f3f4f6';
                  e.target.style.borderColor = '#9ca3af';
                }
              }}
              onMouseLeave={(e) => {
                if (activeFilter !== 'all') {
                  e.target.style.backgroundColor = 'white';
                  e.target.style.borderColor = '#d1d5db';
                }
              }}
            >
              <Grid size={isMobile ? 16 : 18} />
              <span>All Products</span>
              <span style={{
                backgroundColor: activeFilter === 'all' ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb',
                color: activeFilter === 'all' ? 'white' : '#6b7280',
                fontSize: '0.75rem',
                padding: '0.125rem 0.375rem',
                borderRadius: '9999px',
                fontWeight: '600'
              }}>
                {allProducts.length}
              </span>
            </button>

            {/* Category Pills */}
            {productCategories.map((category) => {
              const count = allProducts.filter(p => p.category === category.id).length;
              const IconComponent = category.icon;
              const isActive = activeFilter === category.id;

              return (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: isMobile ? '0.5rem 0.75rem' : '0.75rem 1rem',
                    borderRadius: '9999px',
                    border: isActive ? '2px solid #dc2626' : '1px solid #d1d5db',
                    backgroundColor: isActive ? '#dc2626' : 'white',
                    color: isActive ? 'white' : '#374151',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: isMobile ? '0.875rem' : '1rem',
                    fontWeight: isActive ? '600' : '500',
                    whiteSpace: 'nowrap',
                    flexShrink: 0
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = '#f3f4f6';
                      e.target.style.borderColor = '#9ca3af';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.borderColor = '#d1d5db';
                    }
                  }}
                >
                  <IconComponent size={isMobile ? 16 : 18} />
                  <span>{isMobile && category.title.length > 10 ? category.title.substring(0, 8) + '...' : category.title}</span>
                  <span style={{
                    backgroundColor: isActive ? 'rgba(255, 255, 255, 0.2)' : '#e5e7eb',
                    color: isActive ? 'white' : '#6b7280',
                    fontSize: '0.75rem',
                    padding: '0.125rem 0.375rem',
                    borderRadius: '9999px',
                    fontWeight: '600'
                  }}>
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Scroll Indicator for Mobile */}
          {isMobile && (
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: '0.5rem',
              gap: '0.25rem',
              fontSize: '0.75rem',
              color: '#9ca3af'
            }}>
              <ChevronLeft size={12} />
              <span>Swipe to see all categories</span>
              <ChevronRight size={12} />
            </div>
          )}

          {/* Results Summary */}
          <div style={{
            marginTop: '1rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '1rem'
          }}>
            <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
              Showing {sortedProducts.length} of {allProducts.length} products
              {activeFilter !== 'all' && (
                <span style={{ marginLeft: '0.5rem', color: '#dc2626', fontWeight: '500' }}>
                  in {getCategoryTitle(activeFilter)}
                </span>
              )}
            </div>

            {/* Active Brand Filters */}
            {selectedBrands.length > 0 && (
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                flexWrap: 'wrap',
                fontSize: isMobile ? '0.75rem' : '0.875rem'
              }}>
                <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>Brand filters:</span>
                {selectedBrands.map(brand => (
                  <span key={brand} style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                    padding: '0.25rem 0.5rem',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: '#1d4ed8',
                    fontSize: '0.75rem',
                    borderRadius: '9999px'
                  }}>
                    {brand}
                    <button
                      onClick={() => toggleBrandFilter(brand)}
                      style={{
                        padding: '0.125rem',
                        borderRadius: '50%',
                        border: 'none',
                        backgroundColor: 'transparent',
                        cursor: 'pointer'
                      }}
                    >
                      <X size={12} />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        padding: isMobile ? '1rem' : '2rem 1rem'
      }}>
        <div style={{
          display: 'flex',
          flexDirection: isTablet ? 'column' : 'row',
          gap: isMobile ? '1rem' : '2rem'
        }}>
          {/* Advanced Filters Sidebar - Now only for brands and other advanced options */}
          {showFilters && (
            <div style={{
              width: isTablet ? '100%' : '20rem',
              position: isTablet ? 'fixed' : 'static',
              top: isTablet ? 0 : 'auto',
              left: isTablet ? 0 : 'auto',
              right: isTablet ? 0 : 'auto',
              bottom: isTablet ? 0 : 'auto',
              zIndex: isTablet ? 50 : 'auto',
              backgroundColor: isTablet ? 'rgba(0, 0, 0, 0.5)' : 'transparent',
              padding: isTablet ? '1rem' : '0'
            }}>
              <div style={{
                backgroundColor: 'white',
                borderRadius: '0.75rem',
                boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                padding: isMobile ? '1rem' : '1.5rem',
                marginTop: isTablet ? '2rem' : '0'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '1.5rem'
                }}>
                  <h3 style={{
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#111827',
                    margin: 0
                  }}>
                    Advanced Filters
                  </h3>
                  <button
                    onClick={() => setShowFilters(false)}
                    style={{
                      padding: '0.25rem',
                      borderRadius: '0.25rem',
                      border: 'none',
                      backgroundColor: 'transparent',
                      cursor: 'pointer'
                    }}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Brands */}
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{
                    fontSize: '0.875rem',
                    fontWeight: '600',
                    color: '#111827',
                    marginBottom: '0.75rem'
                  }}>
                    Filter by Brand
                  </h4>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    maxHeight: isMobile ? '10rem' : '12rem',
                    overflowY: 'auto'
                  }}>
                    {allBrands.map((brand) => {
                      const count = allProducts.filter(p => p.brand === brand).length;
                      return (
                        <label key={brand} style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '0.5rem',
                          cursor: 'pointer',
                          padding: '0.25rem 0'
                        }}>
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => toggleBrandFilter(brand)}
                            style={{
                              width: '1rem',
                              height: '1rem',
                              accentColor: '#dc2626'
                            }}
                          />
                          <span style={{
                            fontSize: '0.875rem',
                            color: '#374151',
                            flex: 1
                          }}>
                            {brand}
                          </span>
                          <span style={{
                            fontSize: '0.75rem',
                            color: '#6b7280'
                          }}>
                            ({count})
                          </span>
                        </label>
                      );
                    })}
                  </div>
                </div>

                {/* Clear Brand Filters */}
                {selectedBrands.length > 0 && (
                  <button
                    onClick={() => setSelectedBrands([])}
                    style={{
                      width: '100%',
                      padding: '0.5rem 1rem',
                      fontSize: '0.875rem',
                      color: '#dc2626',
                      border: '1px solid #dc2626',
                      borderRadius: '0.5rem',
                      backgroundColor: 'transparent',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Clear Brand Filters
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Products Grid/List */}
          <div style={{ flex: 1 }}>
            {sortedProducts.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '3rem 0' }}>
                <div style={{ color: '#6b7280', marginBottom: '1rem' }}>
                  <Search size={48} style={{ margin: '0 auto' }} />
                </div>
                <h3 style={{
                  fontSize: '1.125rem',
                  fontWeight: '600',
                  color: '#111827',
                  marginBottom: '0.5rem'
                }}>
                  No products found
                </h3>
                <p style={{
                  color: '#6b7280',
                  marginBottom: '1rem'
                }}>
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={() => {
                    setActiveFilter('all');
                    setSelectedBrands([]);
                    setSearchTerm('');
                  }}
                  style={{
                    padding: '0.5rem 1rem',
                    backgroundColor: '#dc2626',
                    color: 'white',
                    borderRadius: '0.5rem',
                    border: 'none',
                    cursor: 'pointer'
                  }}
                >
                  Clear All Filters
                </button>
              </div>
            ) : (
              <div style={{
                display: 'grid',
                gap: isMobile ? '1rem' : '1.5rem',
                gridTemplateColumns: viewMode === 'grid'
                  ? (isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(280px, 1fr))')
                  : '1fr'
              }}>
                {sortedProducts.map((product, index) => (
                  <div
                    key={product.id}
                    data-section="products"
                    style={{
                      ...styles.productCard,
                      display: viewMode === 'list' && !isMobile ? 'flex' : 'block',
                      animationDelay: `${index * 0.05}s`
                    }}
                    onMouseEnter={(e) => {
                      Object.assign(e.currentTarget.style, styles.productCardHover);
                    }}
                    onMouseLeave={(e) => {
                      Object.assign(e.currentTarget.style, styles.productCard);
                    }}
                  >
                    {/* Product Image */}
                    <div style={{
                      position: 'relative',
                      overflow: 'hidden',
                      width: viewMode === 'list' && !isMobile ? '12rem' : '100%',
                      height: isMobile ? '10rem' : '12rem',
                      flexShrink: 0
                    }}>
                      <img
                        src={product.image}
                        alt={product.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'transform 0.3s ease'
                        }}
                        loading="lazy"
                      />

                      {/* Badges */}
                      <div style={{
                        position: 'absolute',
                        top: '0.75rem',
                        left: '0.75rem',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.5rem'
                      }}>
                        {product.featured && (
                          <div style={{
                            backgroundColor: '#dc2626',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            padding: '0.25rem 0.5rem',
                            borderRadius: '9999px'
                          }}>
                            Featured
                          </div>
                        )}
                      </div>

                      {/* Quick Actions */}
                      <div style={{
                        position: 'absolute',
                        bottom: '0.75rem',
                        right: '0.75rem',
                        display: 'flex',
                        gap: '0.5rem',
                        opacity: 0,
                        transition: 'opacity 0.3s ease'
                      }}
                        className="quick-actions"
                      >
                        <button
                          onClick={() => toggleWishlist(product.id)}
                          style={{
                            padding: '0.5rem',
                            borderRadius: '50%',
                            backgroundColor: wishlist.includes(product.id) ? '#dc2626' : 'rgba(0, 0, 0, 0.5)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            backdropFilter: 'blur(10px)'
                          }}
                        >
                          <Heart size={16} />
                        </button>
                        <button style={{
                          padding: '0.5rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          borderRadius: '50%',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          <Eye size={16} />
                        </button>
                        <button style={{
                          padding: '0.5rem',
                          backgroundColor: 'rgba(0, 0, 0, 0.5)',
                          backdropFilter: 'blur(10px)',
                          color: 'white',
                          borderRadius: '50%',
                          border: 'none',
                          cursor: 'pointer'
                        }}>
                          <Share2 size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Product Content */}
                    <div style={{ padding: isMobile ? '1rem' : '1.5rem', flex: 1 }}>
                      {/* Header */}
                      <div style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{ flex: 1 }}>
                          <h3 style={{
                            fontSize: isMobile ? '1rem' : '1.125rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.25rem',
                            lineHeight: 1.4,
                            margin: 0,
                            transition: 'color 0.3s ease'
                          }}>
                            {product.name}
                          </h3>
                          <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            marginTop: '0.25rem'
                          }}>
                            <span style={{
                              fontSize: '0.875rem',
                              color: '#6b7280'
                            }}>
                              by
                            </span>
                            <span style={{
                              fontSize: '0.875rem',
                              fontWeight: '500',
                              color: '#111827'
                            }}>
                              {product.brand}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p style={{
                        color: '#6b7280',
                        fontSize: '0.875rem',
                        marginBottom: '1rem',
                        lineHeight: 1.5,
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                      }}>
                        {product.description}
                      </p>

                      {/* Features */}
                      {(viewMode === 'list' || product.features) && (
                        <div style={{ marginBottom: '1rem' }}>
                          <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '0.25rem'
                          }}>
                            {product.features?.slice(0, viewMode === 'list' && !isMobile ? 4 : 3).map((feature, idx) => (
                              <span
                                key={idx}
                                style={{
                                  display: 'inline-flex',
                                  alignItems: 'center',
                                  gap: '0.25rem',
                                  padding: '0.25rem 0.5rem',
                                  backgroundColor: '#f3f4f6',
                                  color: '#374151',
                                  fontSize: isMobile ? '0.625rem' : '0.75rem',
                                  borderRadius: '9999px'
                                }}
                              >
                                <Check size={10} style={{ color: '#059669' }} />
                                {feature}
                              </span>
                            ))}
                            {product.features?.length > (viewMode === 'list' && !isMobile ? 4 : 3) && (
                              <span style={{
                                fontSize: isMobile ? '0.625rem' : '0.75rem',
                                color: '#6b7280',
                                padding: '0.25rem 0.5rem'
                              }}>
                                +{product.features.length - (viewMode === 'list' && !isMobile ? 4 : 3)} more
                              </span>
                            )}
                          </div>
                        </div>
                      )}

                      {/* Specifications - Only in list view and not mobile */}
                      {viewMode === 'list' && !isMobile && (
                        <div style={{ marginBottom: '1rem' }}>
                          <h5 style={{
                            fontSize: '0.875rem',
                            fontWeight: '600',
                            color: '#111827',
                            marginBottom: '0.5rem'
                          }}>
                            Key Specifications:
                          </h5>
                          <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '0.5rem'
                          }}>
                            {product.specifications?.slice(0, 4).map((spec, idx) => (
                              <div key={idx} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                fontSize: '0.875rem',
                                color: '#6b7280'
                              }}>
                                <div style={{
                                  width: '0.25rem',
                                  height: '0.25rem',
                                  backgroundColor: '#dc2626',
                                  borderRadius: '50%'
                                }}></div>
                                {spec}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Contact Buttons */}
                      <div style={{
                        display: 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        gap: '0.5rem'
                      }}>
                        <button
                          onClick={() => window.open('tel:+971528441348', '_self')}
                          style={{
                            flex: 1,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            padding: '0.5rem 0.75rem',
                            fontSize: '0.875rem',
                            color: '#6b7280',
                            border: '1px solid #d1d5db',
                            borderRadius: '0.5rem',
                            backgroundColor: 'white',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.backgroundColor = '#f3f4f6';
                            e.target.style.borderColor = '#dc2626';
                            e.target.style.color = '#dc2626';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.backgroundColor = 'white';
                            e.target.style.borderColor = '#d1d5db';
                            e.target.style.color = '#6b7280';
                          }}
                        >
                          <Phone size={14} />
                          {isMobile ? 'Call' : 'Call for Quote'}
                        </button>

                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Load More Button */}
            {sortedProducts.length > 0 && sortedProducts.length >= 12 && (
              <div style={{ textAlign: 'center', marginTop: '3rem' }}>
                <button style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#e5e7eb',
                  color: '#374151',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer'
                }}>
                  Load More Products
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
        color: 'white',
        padding: isMobile ? '3rem 0' : '4rem 0',
        marginTop: isMobile ? '3rem' : '4rem'
      }}>
        <div style={{
          maxWidth: '64rem',
          margin: '0 auto',
          padding: '0 1rem',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: isMobile ? '1.5rem' : 'clamp(2rem, 4vw, 2.5rem)',
            fontWeight: '700',
            marginBottom: '1rem',
            fontFamily: "'Playfair Display', serif"
          }}>
            Need Help Finding the Right Product?
          </h2>
          <p style={{
            fontSize: isMobile ? '1rem' : '1.25rem',
            color: 'rgba(255, 255, 255, 0.8)',
            marginBottom: '2rem',
            lineHeight: 1.6,
            padding: isMobile ? '0 1rem' : '0'
          }}>
            Our experts are here to help you choose the perfect materials for your project
          </p>
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '1rem',
            justifyContent: 'center',
            padding: isMobile ? '0 1rem' : '0'
          }}>
            <a href="tel:+971528441348" style={{ textDecoration: 'none' }}>
              <button style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                padding: '0.75rem 2rem',
                backgroundColor: '#dc2626',
                color: 'white',
                borderRadius: '0.5rem',
                border: 'none',
                cursor: 'pointer',
                fontSize: isMobile ? '0.875rem' : '1rem'
              }}>
                <Phone size={20} />
                Call +971 52 844 1348
              </button>
            </a>


          </div>
        </div>
      </div>

      <Footer />

      {/* Add hover effects with CSS-in-JS */}
      <style jsx>{`
        .quick-actions {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .product-card:hover .quick-actions {
          opacity: 1;
        }
        
        .product-card:hover img {
          transform: scale(1.05);
        }
        
        .product-card:hover h3 {
          color: #dc2626;
        }
        
        @media (max-width: 768px) {
          .quick-actions {
            opacity: 1 !important;
          }
        }
        
        /* Hide scrollbar for category navigation */
        .category-scroll::-webkit-scrollbar {
          display: none;
        }
        
        .category-scroll {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default ProductsPage;