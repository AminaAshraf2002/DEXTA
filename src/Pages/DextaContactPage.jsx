// DextaContactPage.jsx - Complete Contact Page for DEXTA Trading LLC
import React, { useEffect, useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Building2,
  Globe,
  MessageSquare,
  User,
  Briefcase,
  Calendar,
  CheckCircle,
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Truck,
  Shield,
  Award,
  HeadphonesIcon
} from 'lucide-react';

// Import Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';
import './DextaContactPage.css';

const DextaContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    serviceType: '',
    projectBudget: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [activeOffice, setActiveOffice] = useState('sharjah');

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
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        serviceType: '',
        projectBudget: ''
      });
    }, 2000);
  };

  const offices = {
    sharjah: {
      name: "DEXTA Headquarters",
      address: "Sharjah Media City (SHAMS), P.O Box: 231525, Sharjah-United Arab Emirates",
      phone: "+971 52 682 2173",
      phone2: "+971 52 844 1348",
      email: "info@dextatradingllc.com",
      website: "www.dextatradingllc.com",
      hours: "Sunday - Thursday: 8:00 AM - 6:00 PM",
      mapEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.5739676904567!2d55.3932999!3d25.3573299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ef5f43348a67e24b%3A0xff45e502e1ceb7e2!2sSharjah%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1234567890"
    }
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak directly with our experts",
      info: "+971 52 682 2173 | +971 52 844 1348",
      action: "tel:+971526822173" // Primary number for the click action
    },
    {
      icon: Mail,
      title: "Email Us",
      description: "Get detailed responses",
      info: "info@dextatradingllc.com",
      action: "mailto:info@dextatradingllc.com"
    },
    {
      icon: Globe,
      title: "Visit Website",
      description: "Explore our full catalog",
      info: "www.dextatradingllc.com",
      action: "https://www.dextatradingllc.com"
    },
    {
      icon: Calendar,
      title: "Schedule Meeting",
      description: "Book a consultation",
      info: "Free consultation",
      action: "tel:+971526822173"
    }
  ];

  const serviceTypes = [
    "General Inquiry",
    "Product Quotation",
    "Bulk Orders",
    "Technical Support",
    "Partnership Opportunities",
    "Supplier Registration",
    "Quality Concerns",
    "Other"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-content">
          <div className="contact-hero-badge" data-aos="fade-up">
            <Building2 size={20} />
            <span>Get In Touch With DEXTA</span>
          </div>

          <h1 className="contact-hero-title" data-aos="fade-up" data-aos-delay="200">
            Let's Build Something
            <br />
            <span style={{ color: '#DC2626' }}>Amazing Together</span>
          </h1>

          <p className="contact-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Ready to start your construction project? Our team of experts is here to help you find the perfect materials and solutions for your needs.
          </p>

          {/* Quick Contact Cards */}
          <div className="contact-quick-contact-grid" data-aos="fade-up" data-aos-delay="600">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="contact-quick-contact-card"
                data-aos="zoom-in"
                data-aos-delay={600 + (index * 100)}
                target={method.action.startsWith('http') ? '_blank' : '_self'}
                rel={method.action.startsWith('http') ? 'noopener noreferrer' : ''}
              >
                <div className="contact-contact-icon">
                  <method.icon size={24} />
                </div>
                <h3>{method.title}</h3>
                <p>{method.description}</p>
                <span className="contact-contact-info">{method.info}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-contact-section">
        <div className="contact-contact-container">
          <div className="contact-contact-grid">
            {/* Contact Form */}
            <div className="contact-contact-form-section" data-aos="fade-right">
              <div className="contact-form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="phone">
                      <Phone size={18} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="contact-form-group">
                    <label htmlFor="company">
                      <Briefcase size={18} />
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>

                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label htmlFor="serviceType">
                      <Globe size={18} />
                      Service Type *
                    </label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select service type</option>
                      {serviceTypes.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label htmlFor="message">
                    <MessageSquare size={18} />
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us more about your project requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className={`contact-submit-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="contact-spinner"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="contact-success-message">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! We'll get back to you soon.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Contact Information */}
            <div className="contact-contact-info-section" data-aos="fade-left">
              <div className="contact-info-header">
                <h2>Get In Touch</h2>
                <p>Connect with our team through multiple channels</p>
              </div>

              {/* Office Location */}
              <div className="contact-office-locations">
                <h3>Our Office</h3>

                <div className="contact-office-details">
                  <div className="contact-office-info">
                    <h4>{offices.sharjah.name}</h4>
                    <div className="contact-info-item">
                      <MapPin size={18} />
                      <span>{offices.sharjah.address}</span>
                    </div>
                    <div className="contact-info-item">
                      <Phone size={18} />
                      <div className="contact-phone-numbers">
                        <a href="tel:+971526822173">{offices.sharjah.phone}</a>
                        <span> | </span>
                        <a href="tel:+971528441348">{offices.sharjah.phone2}</a>
                      </div>
                    </div>
                    <div className="contact-info-item">
                      <Mail size={18} />
                      <a href="mailto:info@dextatradingllc.com">
                        {offices.sharjah.email}
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <Globe size={18} />
                      <a
                        href="https://www.dextatradingllc.com"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {offices.sharjah.website}
                      </a>
                    </div>
                    <div className="contact-info-item">
                      <Clock size={18} />
                      <span>{offices.sharjah.hours}</span>
                    </div>
                  </div>

                  <div className="contact-map-container">
                    <iframe
                      src={offices.sharjah.mapEmbed}
                      width="100%"
                      height="200"
                      style={{ border: 0, borderRadius: '12px' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="DEXTA Headquarters Location"
                    ></iframe>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="contact-why-choose-contact">
                <h3>Why Choose DEXTA?</h3>
                <div className="contact-benefits-list">
                  <div className="contact-benefit-item">
                    <Shield size={20} />
                    <div>
                      <strong>Quality Assured</strong>
                      <p>ISO certified materials and processes</p>
                    </div>
                  </div>
                  <div className="contact-benefit-item">
                    <Truck size={20} />
                    <div>
                      <strong>Fast Delivery</strong>
                      <p>Same-day delivery across UAE</p>
                    </div>
                  </div>
                  <div className="contact-benefit-item">
                    <HeadphonesIcon size={20} />
                    <div>
                      <strong>24/7 Support</strong>
                      <p>Round-the-clock customer service</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="contact-social-media-section">
                <h3>Follow Us</h3>
                <div className="contact-social-links">
                  <a
                    href="https://www.facebook.com/share/16RrDJGvUS/?mibextid=wwXIfr"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                  >
                    <Facebook size={20} />
                  </a>
                  <a
                    href="https://www.instagram.com/dexta_building_materials?igsh=MW1oMmp2Ym5jdDh1cg=="
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href="https://www.dextatradingllc.com"
                    className="contact-social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Website"
                  >
                    <Globe size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="contact-contact-cta-section">
        <div className="contact-cta-content" data-aos="fade-up">
          <h2>Ready to Start Your Project?</h2>
          <p>Join thousands of satisfied clients who trust DEXTA for their construction needs</p>
          <div className="contact-cta-buttons">
            <a href="tel:+971526822173" className="contact-cta-button primary">
              <Phone size={20} />
              <span>Call Now</span>
            </a>
            <a href="mailto:info@dextatradingllc.com" className="contact-cta-button secondary">
              <Mail size={20} />
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
  );
};

export default DextaContactPage;