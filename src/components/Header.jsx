import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, ChevronDown } from 'lucide-react';

// Import your logo image
import logo from '../assets/logo2.png'; // Adjust path as needed

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items with their corresponding routes
  const navigationItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const mobileNavigationItems = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/about' },
    { name: 'PRODUCTS', path: '/products' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'CONTACT', path: '/contact' }
  ];

  const handleMobileMenuClose = () => {
    setIsMenuOpen(false);
  };

  // Check if current route is active
  const isActiveRoute = (path) => {
    return location.pathname === path;
  };

  return (
    <div>
      <style jsx>{`
        /* Header.css - Ultra Compact & Attractive with Fixed Overlay Issue */

        /* Main Header Container */
        .header-main {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: white;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .header-scrolled {
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.15);
          backdrop-filter: blur(10px);
        }

        /* Top Contact Bar - Very Compact */
        .top-contact-bar {
          background: linear-gradient(135deg, #1f2937 0%, #111827 100%);
          color: #e5e7eb;
          font-size: 11px;
          padding: 6px 0;
          border-bottom: 1px solid rgba(239, 68, 68, 0.2);
        }

        @media (max-width: 1024px) {
          .top-contact-bar {
            display: none;
          }
        }

        .top-bar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .contact-items {
          display: flex;
          gap: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #d1d5db;
          font-weight: 500;
        }

        .contact-item:hover {
          color: #fca5a5;
          transition: color 0.3s ease;
        }

        /* Contact Links Styling */
        .contact-link {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 4px;
          padding: 2px 4px;
          margin-left: 4px;
        }

        .contact-link:hover {
          color: #fca5a5;
          background-color: rgba(239, 68, 68, 0.1);
          text-decoration: none;
        }

        /* Phone Link Specific Styling */
        .contact-item a[href^="tel:"]:hover {
          color: #22c55e;
          background-color: rgba(34, 197, 94, 0.1);
        }

        /* Email Link Specific Styling */
        .contact-item a[href^="mailto:"]:hover {
          color: #fca5a5;
          background-color: rgba(239, 68, 68, 0.1);
        }

        .social-items {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .follow-text {
          font-size: 10px;
          color: #9ca3af;
          font-weight: 500;
        }

        .social-icons {
          display: flex;
          gap: 6px;
        }

        .social-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 3px;
          color: #d1d5db;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .social-icon:hover {
          background: #DC2626;
          color: white;
          transform: scale(1.1);
        }

        /* Main Navigation - Super Compact */
        .main-navigation {
          background: white;
          border-bottom: 1px solid #f1f5f9;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 70px; /* Adjusted for better logo space */
        }

        /* Logo Section - With Image Support */
        .logo-container {
          display: flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          color: inherit;
          transition: all 0.3s ease;
        }

        .logo-container:hover {
          text-decoration: none;
          transform: translateY(-1px);
        }

        /* Logo Image Styles */
        .logo-image {
          height: 90px; /* Optimized height */
          width: auto;
          object-fit: contain;
          transition: all 0.3s ease;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        .logo-container:hover .logo-image {
          transform: scale(1.05);
          filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.15));
        }

        /* Text Logo (fallback or additional text) */
        .logo-text-container {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .logo-text {
          font-size: 24px;
          font-weight: 900;
          color: #1f2937;
          letter-spacing: 0.02em;
          font-family: 'Arial', sans-serif;
          line-height: 1;
        }

        .logo-accent {
          color: #DC2626;
          position: relative;
        }

        .logo-accent::after {
          content: '';
          position: absolute;
          inset: -4px;
          background: rgba(239, 68, 68, 0.15);
          border-radius: 50%;
          filter: blur(4px);
          z-index: -1;
          animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
          from { opacity: 0.5; }
          to { opacity: 1; }
        }

        .logo-subtitle {
          font-size: 8px;
          color: #64748b;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          line-height: 1.1;
          max-width: 120px;
        }

        /* Logo-only mode (when you want just the image) */
        .logo-only .logo-text-container {
          display: none;
        }

        .logo-only .logo-image {
          height: 45px;
        }

        /* Desktop Navigation - Sleek */
        .nav-menu-desktop {
          display: none;
          gap: 24px;
        }

        @media (min-width: 1024px) {
          .nav-menu-desktop {
            display: flex;
          }
        }

        .nav-item {
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 12px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          position: relative;
          padding: 6px 12px;
          border-radius: 4px;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: none;
        }

        .nav-item:hover {
          color: #DC2626;
          background: rgba(239, 68, 68, 0.05);
          transform: translateY(-1px);
        }

        .nav-item::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background: #DC2626;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }

        .nav-item:hover::after {
          width: 80%;
        }

        .nav-item.active {
          color: #DC2626;
          background: rgba(239, 68, 68, 0.05);
        }

        .nav-item.active::after {
          width: 80%;
        }

        /* Quote Button - Attractive */
        .quote-button-container {
          display: none;
        }

        @media (min-width: 1024px) {
          .quote-button-container {
            display: block;
          }
        }

        .quote-button {
          background: linear-gradient(135deg, #ef4444 0%, #DC2626 100%);
          color: white;
          border: none;
          padding: 10px 18px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 11px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px rgba(239, 68, 68, 0.3);
          text-decoration: none;
          display: inline-block;
        }

        .quote-button:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 15px rgba(239, 68, 68, 0.4);
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        }

        /* Mobile Menu Toggle */
        .mobile-menu-toggle {
          display: block;
          background: none;
          border: none;
          color: #475569;
          cursor: pointer;
          padding: 4px;
          border-radius: 4px;
          transition: all 0.3s ease;
        }

        @media (min-width: 1024px) {
          .mobile-menu-toggle {
            display: none;
          }
        }

        .mobile-menu-toggle:hover {
          background: #f1f5f9;
          color: #ef4444;
        }

        /* Mobile Menu - Enhanced */
        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid #e2e8f0;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .mobile-menu-open {
          max-height: 400px;
        }

        .mobile-menu-content {
          padding: 20px;
        }

        .mobile-nav-item {
          display: block;
          color: #475569;
          text-decoration: none;
          font-weight: 500;
          font-size: 14px;
          text-transform: uppercase;
          padding: 12px 0;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.3s ease;
          cursor: pointer;
          border: none;
          background: none;
          width: 100%;
          text-align: left;
        }

        .mobile-nav-item:hover {
          color: #ef4444;
          padding-left: 10px;
        }

        .mobile-nav-item.active {
          color: #ef4444;
          padding-left: 10px;
        }

        .mobile-nav-item:last-of-type {
          border-bottom: none;
        }

        .mobile-quote-button {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
          border: none;
          padding: 12px 24px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          text-transform: uppercase;
          cursor: pointer;
          width: 100%;
          margin-top: 16px;
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-block;
          text-align: center;
        }

        .mobile-quote-button:hover {
          background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%);
        }

        /* Mobile Contact Info */
        .mobile-contact {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }

        .mobile-contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #64748b;
          font-size: 12px;
          margin-bottom: 8px;
          transition: color 0.3s ease;
        }

        .mobile-contact-item:hover {
          color: #ef4444;
        }

        .mobile-contact-item svg {
          color: #ef4444;
        }

        /* Mobile Contact Links */
        .mobile-contact-item a {
          color: inherit;
          text-decoration: none;
          transition: all 0.3s ease;
          padding: 2px 4px;
          border-radius: 3px;
        }

        .mobile-contact-item a:hover {
          background-color: rgba(239, 68, 68, 0.1);
        }

        .mobile-contact-item a[href^="tel:"]:hover {
          color: #22c55e;
          background-color: rgba(34, 197, 94, 0.1);
        }

        .mobile-contact-item a[href^="mailto:"]:hover {
          color: #ef4444;
          background-color: rgba(239, 68, 68, 0.1);
        }

        /* Additional Enhancements */
        .header-main::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: linear-gradient(90deg, transparent 0%, #ef4444 50%, transparent 100%);
          opacity: 0.3;
        }

        /* Focus states for accessibility */
        .nav-item:focus,
        .quote-button:focus,
        .mobile-menu-toggle:focus,
        .contact-link:focus,
        .mobile-contact-item a:focus {
          outline: 2px solid #ef4444;
          outline-offset: 2px;
        }

        /* Loading animation for logo */
        .logo-container {
          animation: slideInLeft 0.6s ease-out;
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
            min-height: 60px;
          }
          
          .logo-image {
            height: 50px;
          }
          
          .logo-text {
            font-size: 18px;
          }
          
          .logo-subtitle {
            font-size: 7px;
            max-width: 100px;
          }
          
          .top-bar-container {
            padding: 0 16px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            min-height: 55px;
          }
          
          .logo-image {
            height: 70px;
          }
          
          .logo-text {
            font-size: 16px;
          }
        }

        /* Dark mode logo support (optional) */
        @media (prefers-color-scheme: dark) {
          .logo-image.dark-mode {
            filter: brightness(0) invert(1);
          }
        }

        /* Header spacer to prevent content overlap */
        body {
          padding-top: 0; /* Remove any default body padding */
        }

        /* Ensure no margin collapse issues */
        .header-main + * {
          margin-top: 0;
        }
      `}</style>

      <header className={`header-main ${isScrolled ? 'header-scrolled' : ''}`}>
        {/* Top Contact Bar - Only on Desktop */}
        <div className="top-contact-bar">
          <div className="top-bar-container">
            <div className="contact-items">
              <div className="contact-item">
                <Phone size={12} />
                <a href="tel:+971526822173" className="contact-link">
                  +971 52 682 2173
                </a>
              </div>
              <div className="contact-item">
                <Mail size={12} />
                <a href="mailto:info@dextatradingllc.com" className="contact-link">
                  info@dextatradingllc.com
                </a>
              </div>
            </div>
            <div className="social-items">
              <span className="follow-text">Follow us:</span>
              <div className="social-icons">
                <a href="https://www.facebook.com/share/16RrDJGvUS/?mibextid=wwXIfr" className="social-icon" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <Facebook size={14} />
                </a>

                <a href="https://www.instagram.com/dexta_building_materials?igsh=MW1oMmp2Ym5jdDh1cg==" className="social-icon" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <Instagram size={14} />
                </a>

              </div>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-navigation">
          <div className="nav-container">
            {/* Logo Section with Image */}
            <Link to="/" className="logo-container">
              {/* Logo Image */}
              <img
                src={logo}
                alt="DEXTA Trading LLC Logo"
                className="logo-image"
                onError={(e) => {
                  // Hide image and show text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextElementSibling.style.display = 'flex';
                }}
              />

              {/* Text Logo (fallback or additional) */}
              <div className="logo-text-container" style={{ display: 'none' }}>
                <div className="logo-text">
                  DE<span className="logo-accent">X</span>TA
                </div>
                <div className="logo-subtitle">
                  HARDWARE TOOLS TRADING LLC
                </div>
              </div>
            </Link>

            {/* Desktop Navigation Menu */}
            <div className="nav-menu-desktop">
              {navigationItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`nav-item ${isActiveRoute(item.path) ? 'active' : ''}`}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Get Quote Button */}
            <div className="quote-button-container">
              <Link
                to="/contact"
                className="quote-button"
                aria-label="Get Quote"
              >
                GET QUOTE
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              className="mobile-menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
            <div className="mobile-menu-content">
              {mobileNavigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`mobile-nav-item ${isActiveRoute(item.path) ? 'active' : ''}`}
                  onClick={handleMobileMenuClose}
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mobile-quote-button"
                onClick={handleMobileMenuClose}
                aria-label="Get Quote"
              >
                GET QUOTE
              </Link>

              {/* Mobile Contact Info - Updated with Links */}
              <div className="mobile-contact">
                <div className="mobile-contact-item">
                  <Phone size={14} />
                  <a href="tel:+971526822173">+971 52 682 2173</a>
                </div>
                <div className="mobile-contact-item">
                  <Mail size={14} />
                  <a href="mailto:info@dextatradingllc.com">info@dextatradingllc.com</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;