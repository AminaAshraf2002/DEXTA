// DextaAboutPage.jsx - Complete About Page for DEXTA Trading LLC with Header and Footer
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
  ArrowRight,
  Users,
  Clock,
  Star,
  Building2,
  Hammer,
  HeartHandshake,
  Lightbulb,
  Trophy,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

// Import Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';
import './About.css';

// Import only 2 images
import heroBackground from '../assets/abouthero.jpeg';
import aboutImage from '../assets/abo.jpeg';

const DextaAboutPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [activeTab, setActiveTab] = useState('mission');

  useEffect(() => {
    // Initialize AOS-like animations
    const observerOptions = {
      threshold: 0.1,
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
            } else {
              counter.textContent = Math.ceil(current) + '+';
            }
            requestAnimationFrame(updateCounter);
          }
        };
        
        updateCounter();
      });
    };

    setTimeout(animateCounters, 1000);

    return () => observer.disconnect();
  }, []);

  const teamMembers = [
    {
      name: "Ahmed Al-Rashid",
      position: "CEO & Founder",
      experience: "20+ Years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sarah Johnson",
      position: "Operations Director",
      experience: "15+ Years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Mohammed Hassan",
      position: "Supply Chain Manager",
      experience: "12+ Years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      position: "Quality Assurance Lead",
      experience: "10+ Years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ];

  const milestones = [
    { year: "2008", title: "Company Founded", desc: "Started as a small trading company in Dubai" },
    { year: "2012", title: "Regional Expansion", desc: "Expanded operations across the UAE" },
    { year: "2016", title: "ISO Certification", desc: "Achieved ISO 9001:2015 certification" },
    { year: "2020", title: "Digital Transformation", desc: "Launched our digital platform" },
    { year: "2024", title: "Global Reach", desc: "Serving 20+ countries worldwide" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Component */}
      <Header />

      {/* About Hero Section with Background Image */}
      <section 
        className="about-hero-section"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(17, 24, 39, 0.8), rgba(31, 41, 55, 0.9)), url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="about-hero-content">
          <div className="about-hero-badge" data-aos="fade-up">
            <Building2 size={16} />
            <span>Leading Construction Materials Supplier</span>
          </div>
          
          <h1 className="about-hero-title" data-aos="fade-up" data-aos-delay="200">
            Building the Future with
            <br />
            <span style={{color: '#DC2626'}}>DEXTA Trading LLC</span>
          </h1>
          
          <p className="about-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            For over 8 years, we've been the trusted partner for contractors, developers, and architects across the UAE and beyond, delivering premium quality construction materials and exceptional service.
          </p>
          
          <a href="/contact" className="about-hero-cta" data-aos="fade-up" data-aos-delay="600">
            <span>Get Started Today</span>
            <ArrowRight size={18} />
          </a>

          {/* About Stats Grid */}
          <div className="about-stats-grid" data-aos="fade-up" data-aos-delay="800">
            <div className="about-stat-card">
              <div className="about-stat-number animated-counter" data-target="7">7+</div>
              <div className="about-stat-label">Years Experience</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number animated-counter" data-target="5000">5K+</div>
              <div className="about-stat-label">Happy Clients</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number animated-counter" data-target="20">20+</div>
              <div className="about-stat-label">Countries Served</div>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-number animated-counter" data-target="100">100M+</div>
              <div className="about-stat-label">Project Value</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="about-content-section">
        <div className="about-section-header" data-aos="fade-up">
          <h2 className="about-section-title">Our Story</h2>
          <p className="about-section-subtitle">
            From humble beginnings to becoming a regional leader in construction materials supply
          </p>
        </div>

        <div className="about-story-grid">
          <div className="about-story-content" data-aos="fade-right">
            <h3>Founded on <span className="about-highlight-text">Excellence</span></h3>
            <p>
              DEXTA Trading LLC was founded in 2008 with a simple yet ambitious vision: to become the most trusted name in construction materials across the region. What started as a small trading company in Dubai has grown into a comprehensive solution provider serving thousands of clients across 20+ countries.
            </p>
            <p>
              Our journey has been marked by continuous innovation, unwavering commitment to quality, and an absolute dedication to customer satisfaction. Today, we stand as a testament to what's possible when expertise meets passion.
            </p>
          </div>
          <div className="about-story-image" data-aos="fade-left">
            <img src={aboutImage} alt="DEXTA facility" />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="about-content-section">
        <div className="about-mvv-container" data-aos="fade-up">
          <div className="about-tab-buttons">
            <button 
              className={`about-tab-button ${activeTab === 'mission' ? 'active' : ''}`}
              onClick={() => setActiveTab('mission')}
            >
              Our Mission
            </button>
            <button 
              className={`about-tab-button ${activeTab === 'vision' ? 'active' : ''}`}
              onClick={() => setActiveTab('vision')}
            >
              Our Vision
            </button>
            <button 
              className={`about-tab-button ${activeTab === 'values' ? 'active' : ''}`}
              onClick={() => setActiveTab('values')}
            >
              Our Values
            </button>
          </div>

          <div className="about-tab-content">
            {activeTab === 'mission' && (
              <div data-aos="zoom-in" key="mission">
                <h3>Our Mission</h3>
                <p>
                  To provide premium quality construction materials and innovative solutions that empower builders to create exceptional structures across the UAE and beyond. We are committed to excellence in every aspect of our business, from product quality to customer service.
                </p>
              </div>
            )}

            {activeTab === 'vision' && (
              <div data-aos="zoom-in" key="vision">
                <h3>Our Vision</h3>
                <p>
                  To become the leading construction materials supplier in the region, known for excellence, reliability, and innovation in everything we deliver. We envision a future where DEXTA is synonymous with quality and trust in the construction industry.
                </p>
              </div>
            )}

            {activeTab === 'values' && (
              <div data-aos="zoom-in" key="values">
                <h3>Our Core Values</h3>
                <div className="about-values-grid">
                  <div className="about-value-card">
                    <div className="about-value-icon">
                      <Shield size={20} />
                    </div>
                    <h4>Quality First</h4>
                    <p>Every product meets our stringent quality standards</p>
                  </div>
                  <div className="about-value-card">
                    <div className="about-value-icon">
                      <HeartHandshake size={20} />
                    </div>
                    <h4>Trust & Integrity</h4>
                    <p>Building lasting relationships through honest dealings</p>
                  </div>
                  <div className="about-value-card">
                    <div className="about-value-icon">
                      <Lightbulb size={20} />
                    </div>
                    <h4>Innovation</h4>
                    <p>Continuously improving our products and services</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-content-section">
        <div className="about-section-header" data-aos="fade-up">
          <h2 className="about-section-title">Our Journey</h2>
          <p className="about-section-subtitle">
            Key milestones that shaped our growth and success
          </p>
        </div>

        <div className="about-timeline-container">
          <div className="about-timeline-line"></div>
          {milestones.map((milestone, index) => (
            <div key={index} className="about-timeline-item" data-aos="fade-up" data-aos-delay={index * 200}>
              <div className="about-timeline-content">
                <h4>{milestone.title}</h4>
                <p>{milestone.desc}</p>
              </div>
              <div className="about-timeline-year">{milestone.year}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose DEXTA Section */}
      <section className="about-content-section">
        <div className="about-section-header" data-aos="fade-up">
          <h2 className="about-section-title">Why Choose DEXTA?</h2>
          <p className="about-section-subtitle">
            Discover what sets us apart in the construction materials industry
          </p>
        </div>

        <div className="about-values-grid" data-aos="fade-up" data-aos-delay="200">
          <div className="about-value-card">
            <div className="about-value-icon">
              <Award size={20} />
            </div>
            <h4>Premium Quality</h4>
            <p>ISO certified materials that meet international standards</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <Truck size={20} />
            </div>
            <h4>Fast Delivery</h4>
            <p>Efficient logistics network ensuring timely delivery</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <Users size={20} />
            </div>
            <h4>Expert Support</h4>
            <p>Dedicated team of construction material specialists</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <Trophy size={20} />
            </div>
            <h4>Proven Track Record</h4>
            <p>15+ years of successful project completions</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <Globe size={20} />
            </div>
            <h4>Global Reach</h4>
            <p>Serving clients across 20+ countries worldwide</p>
          </div>
          <div className="about-value-card">
            <div className="about-value-icon">
              <Clock size={20} />
            </div>
            <h4>24/7 Support</h4>
            <p>Round-the-clock customer service and assistance</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta-section">
        <div className="about-cta-content" data-aos="fade-up">
          <h2 className="about-cta-title">Ready to Start Your Project?</h2>
          <p className="about-cta-subtitle">
            Join thousands of satisfied clients who trust DEXTA for their construction material needs
          </p>
          <div className="about-cta-buttons">
            <a href="#contact" className="about-cta-button primary">
              <Phone size={18} />
              <span>Get Quote</span>
            </a>
            
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default DextaAboutPage;