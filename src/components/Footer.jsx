import React from 'react';
import { Phone, Mail, MapPin, Globe, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <div className="text-3xl font-bold mb-2">
                DE<span className="footer-logo-accent">X</span>TA
              </div>
              <div className="text-sm text-gray-400 mb-4 uppercase tracking-wide">
                Building Materials Trading LLC
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed max-w-lg">
              DEXTA Hardware Tools Trading LLC is one of the leading traders of industrial tools and equipment. 
              We are committed to providing quality products to a wide range of customers across the region, 
              with our reputation speaking for itself in the hardware tools sector.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="footer-contact-item">
                <MapPin size={18} className="footer-icon" />
                <div>
                  <div className="font-medium text-white">Head Office</div>
                  <span className="text-gray-300 text-sm">Sharjah Media City (SHAMS), P.O Box: 231525, Sharjah-United Arab Emirates</span>
                </div>
              </div>
              <div className="footer-contact-item">
                <Phone size={18} className="footer-icon" />
                <div>
                  <div className="font-medium text-white">Phone</div>
                  <div className="text-gray-300 text-sm">
                    <a href="tel:+971526822173" className="hover:text-white transition-colors">+971 52 682 2173</a>
                    <span className="mx-2">|</span>
                    <a href="tel:+971528441348" className="hover:text-white transition-colors">+971 52 844 1348</a>
                  </div>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} className="footer-icon" />
                <div>
                  <div className="font-medium text-white">Email</div>
                  <a href="mailto:info@dextatradingllc.com" className="text-gray-300 text-sm hover:text-white transition-colors">
                    info@dextatradingllc.com
                  </a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Globe size={18} className="footer-icon" />
                <div>
                  <div className="font-medium text-white">Website</div>
                  <a 
                    href="https://www.dextatradingllc.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-gray-300 text-sm hover:text-white transition-colors"
                  >
                    www.dextatradingllc.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/16RrDJGvUS/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Facebook size={18} />
              </a>
              <a href="https://www.instagram.com/dexta_building_materials?igsh=MW1oMmp2Ym5jdDh1cg==" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Instagram size={18} />
              </a>
              <a href="https://www.dextatradingllc.com" target="_blank" rel="noopener noreferrer" className="social-icon-link">
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'Home', link: '/' },
                { name: 'About Us', link: '/about' }, 
                { name: 'Our Products', link: '/products' },
                { name: 'Gallery', link: '/gallery' },
                { name: 'Contact Us', link: '/contact' },
              
              ].map((item) => (
                <li key={item.name}>
                  <a href={item.link} className="footer-link">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product Categories */}
          <div>
            <h4 className="footer-section-title">Product Categories</h4>
            <ul className="space-y-3">
              {[
                'Hand Tools',
                'Power Tools',
                'Construction Tools',
                'Industrial Machinery',
                'Hardware Accessories',
                'Material Handling',
                'Safety Equipment'
              ].map((item) => (
                <li key={item}>
                  <a href="/products" className="footer-link">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <div className="container mx-auto px-6 py-6">
          <div className="footer-bottom-content">
            <div className="copyright-text">
              © 2025 DEXTA Hardware Tools Trading LLC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;