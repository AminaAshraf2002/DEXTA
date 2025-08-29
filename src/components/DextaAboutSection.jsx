// DextaAboutSection.jsx - Complete Enhanced About Section for DEXTA
import React, { useEffect, useState } from 'react';
import { 
  CheckCircle, 
  Play, 
  Shield, 
  Truck, 
  TrendingUp, 
  Globe, 
  Target, 
  Zap,
  Award,
  ArrowRight 
} from 'lucide-react';
import './DextaAboutSection.css';

// Import your DEXTA images
import aboutImage from '../assets/hero1.png';

const DextaAboutSection = () => {
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    // Initialize AOS-like animations
    const observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
          const id = entry.target.getAttribute('data-id');
          if (id) {
            setIsVisible(prev => ({ ...prev, [id]: true }));
          }
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    // Animated counters
    const animateCounters = () => {
      const counters = document.querySelectorAll('.animated-counter');
      counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;
        
        const updateCounter = () => {
          if (current < target) {
            current += increment;
            if (counter.textContent.includes('K')) {
              counter.textContent = Math.ceil(current) + 'K+';
            } else if (counter.textContent.includes('M')) {
              counter.textContent = Math.ceil(current) + 'M+';
            } else if (counter.textContent.includes('%')) {
              counter.textContent = Math.ceil(current) + '%';
            } else if (counter.textContent.includes('H')) {
              counter.textContent = Math.ceil(current) + 'H';
            } else {
              counter.textContent = Math.ceil(current) + '+';
            }
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
      });
    };

    setTimeout(animateCounters, 1500);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="dexta-about-section">
      {/* Animated Background Elements */}
      <div className="background-elements">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
        <div className="floating-shape shape-4"></div>
      </div>

      <div className="about-container">
        {/* Main About Content */}
        <div className="about-content">
          <div className="about-text-content" data-aos="fade-right" data-aos-duration="1000">
            <div className="title-badge">
              <Award size={16} />
              <span>Premium Quality Materials</span>
            </div>
            <h2 className="about-main-title">
              Welcome to <span className="highlight glow-text">DEXTA Trading LLC</span>, where innovation meets excellence in{' '}
              <span className="highlight glow-text">building materials</span>
            </h2>
            <p className="about-main-description">
              <span className="quote-icon">❝</span>
              We offer a diverse range of high-quality solutions tailored to the construction industry. 
              Whether you're a contractor, developer, architect, or supplier, we simplify your search for the right materials.
            </p>
            <div className="trust-indicators">
              <div className="trust-item">
                <Shield size={16} />
                <span>ISO Certified</span>
              </div>
              <div className="trust-item">
                <CheckCircle size={16} />
                <span>Quality Assured</span>
              </div>
              <div className="trust-item">
                <Award size={16} />
                <span>15+ Years</span>
              </div>
            </div>
          </div>

          <div className="about-video-stats" data-aos="fade-left" data-aos-duration="1000" data-aos-delay="200">
            <div className="video-container">
              <img
                src={aboutImage}
                alt="DEXTA Trading Facility"
                className="about-video-image"
              />
              <div className="video-overlay">
                <div className="play-button">
                  <Play size={24} />
                </div>
                <h3 className="video-title">DISCOVER</h3>
                <div className="logo-text">DEXTA</div>
                <div className="video-subtitle">Watch Our Story</div>
              </div>
              <div className="video-border-animation"></div>
            </div>

            <div className="stats-container">
              {/* <div className="stats-grid-top">
                <div className="stat-item premium-stat" data-aos="zoom-in" data-aos-delay="400">
                  <div className="stat-icon-bg">
                    <Shield size={20} />
                  </div>
                  <div className="stat-number animated-counter" data-target="15">15+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item premium-stat" data-aos="zoom-in" data-aos-delay="500">
                  <div className="stat-icon-bg">
                    <Target size={20} />
                  </div>
                  <div className="stat-number animated-counter" data-target="5000">5K+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
              </div> */}

              {/* <div className="revenue-card premium-card" data-aos="flip-up" data-aos-delay="600">
                <div className="revenue-icon">
                  <TrendingUp size={24} />
                </div>
                <div className="revenue-amount animated-counter" data-target="100">100M+</div>
                <div className="revenue-label">Total Project Value</div>
                <div className="revenue-period">Since 2008*</div>
                <div className="revenue-trend">
                  <TrendingUp size={14} />
                  <span>Growing Steadily</span>
                </div>
              </div> */}

              {/* <div className="stats-grid-bottom">
                <div className="stat-item premium-stat" data-aos="zoom-in" data-aos-delay="700">
                  <div className="stat-icon-bg">
                    <Globe size={20} />
                  </div>
                  <div className="stat-number animated-counter" data-target="20">20+</div>
                  <div className="stat-label">Countries</div>
                </div>
                <div className="stat-item premium-stat" data-aos="zoom-in" data-aos-delay="800">
                  <div className="stat-icon-bg">
                    <Truck size={20} />
                  </div>
                  <div className="stat-number animated-counter" data-target="10">10K+</div>
                  <div className="stat-label">Products Delivered</div>
                  <div className="stat-period">Monthly*</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Enhanced Why Choose Section */}
        <div className="why-choose-section" data-aos="fade-up" data-aos-delay="900">
          <div className="why-choose-content">
            <h2 className="why-choose-title">
              See why <span className="highlight pulse-text">5000+</span> contractors and developers chose DEXTA to 
              <span className="highlight"> build their projects</span>
            </h2>
            <div className="success-metrics">
              <div className="metric">
                <Zap size={16} />
                <span>Fast Delivery Network</span>
              </div>
              <div className="metric">
                <Shield size={16} />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>
          <div className="cta-sections">
            <button className="find-chapter-btn">
              <span>GET QUOTE NOW</span>
              <ArrowRight size={16} />
            </button>
            <div className="cta-note">Join thousands of successful projects</div>
          </div>
        </div>

        {/* Enhanced Mission Vision Cards */}
        <div className="mission-vision-section" data-aos="fade-up" data-aos-delay="1000">
          <div className="section-header">
            <h3 className="section-title">Our Foundation</h3>
            <p className="section-subtitle">Built on quality, trust and innovation</p>
          </div>
          <div className="mission-vision-grid">
            <div className="mission-card premium-mission-card">
              <div className="mission-icon-wrapper">
                <div className="mission-icon">
                  <Target size={32} />
                </div>
              </div>
              <div className="mission-header">
                <span className="mission-number">01.</span>
                <h3 className="mission-title">Our Mission</h3>
              </div>
              <p className="mission-content">
                To provide premium quality construction materials and innovative solutions that empower 
                builders to create exceptional structures across the UAE and beyond.
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Premium quality materials</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Trusted partnerships</span>
                </div>
              </div>
            </div>
            <div className="mission-card premium-mission-card">
              <div className="mission-icon-wrapper">
                <div className="mission-icon">
                  <Globe size={32} />
                </div>
              </div>
              <div className="mission-header">
                <span className="mission-number">02.</span>
                <h3 className="mission-title">Our Vision</h3>
              </div>
              <p className="mission-content">
                To become the leading construction materials supplier in the region, known for excellence, 
                reliability, and innovation in everything we deliver.
              </p>
              <div className="mission-features">
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Industry leadership</span>
                </div>
                <div className="feature-item">
                  <CheckCircle size={16} />
                  <span>Sustainable solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Bottom Stats */}
        <div className="bottom-stats-section" data-aos="fade-up" data-aos-delay="1100">
          <div className="stats-header">
            <h3 className="bottom-stats-title">Our Impact in Numbers</h3>
            <p className="stats-subtitle">Real results from real projects</p>
          </div>
          <div className="bottom-stats-grid">
            <div className="bottom-stat-card premium-bottom-card">
              <div className="stat-icon-container">
                <div className="stat-icon">
                  <Shield size={24} />
                </div>
              </div>
              <div className="stat-number animated-counter" data-target="100">100%</div>
              <div className="stat-label">Quality Assured</div>
              <div className="stat-description">Every product tested</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
            <div className="bottom-stat-card premium-bottom-card">
              <div className="stat-icon-container">
                <div className="stat-icon">
                  <Truck size={24} />
                </div>
              </div>
              <div className="stat-number animated-counter" data-target="24">24H</div>
              <div className="stat-label">Fast Delivery</div>
              <div className="stat-description">Same day service</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '95%' }}></div>
              </div>
            </div>
            <div className="bottom-stat-card premium-bottom-card">
              <div className="stat-icon-container">
                <div className="stat-icon">
                  <TrendingUp size={24} />
                </div>
              </div>
              <div className="stat-number animated-counter" data-target="98">98%</div>
              <div className="stat-label">Client Satisfaction</div>
              <div className="stat-description">Proven track record</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="bottom-stat-card premium-bottom-card">
              <div className="stat-icon-container">
                <div className="stat-icon">
                  <Globe size={24} />
                </div>
              </div>
              <div className="stat-number">24/7</div>
              <div className="stat-label">Support</div>
              <div className="stat-description">Always available</div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: '100%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DextaAboutSection;