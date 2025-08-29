import React, { useEffect, useState } from 'react';
import { 
  Camera, 
  Eye, 
  Download, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Building2,
  Hammer,
  Shield,
  Trophy,
  Globe,
  ArrowRight,
  Filter,
  Grid,
  List,
  Search,
  Play,
  Pause,
  Volume2,
  VolumeX
} from 'lucide-react';

// Import Header and Footer components
import Header from '../components/Header';
import Footer from '../components/Footer';
import './Gallery.css';

// Import local images
import heroImage from '../assets/about.jpeg';
import project1 from '../assets/gallery2.jpeg';
import project2 from '../assets/gallery3.jpeg';
import project3 from '../assets/gallery4.jpeg';
import project4 from '../assets/gallery5.jpeg';
import project5 from '../assets/gallery1.jpeg';
import constructionVideo from '../assets/video.mp4';

const DextaGalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [videoMuted, setVideoMuted] = useState(true);

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

    document.querySelectorAll('[data-aos]').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

const categories = [
  { id: 'all', name: 'All Projects', count: 6 },
  { id: 'warehouse', name: 'Warehouse & Storage', count: 2 },
  { id: 'logistics', name: 'Logistics & Distribution', count: 2 },
  { id: 'team', name: 'Team & Operations', count: 1 },
  { id: 'video', name: 'Videos', count: 1 }
];

const galleryItems = [
  {
    id: 1,
    type: 'image',
    src: project1,
    title: 'Container Loading Operations',
    category: 'warehouse',
    description: 'Efficient loading and unloading of construction materials from shipping containers',
    location: 'DEXTA Warehouse, Dubai',
    year: '2024',
    materials: ['Steel Pipes', 'Construction Materials', 'Industrial Equipment']
  },
  {
    id: 2,
    type: 'image',
    src: project2,
    title: 'Material Storage Facility',
    category: 'warehouse',
    description: 'State-of-the-art storage facility for construction materials and supplies',
    location: 'DEXTA Storage Center, UAE',
    year: '2024',
    materials: ['Building Materials', 'Safety Equipment', 'Industrial Supplies']
  },
  {
    id: 3,
    type: 'image',
    src: project3,
    title: 'Distribution Center Operations',
    category: 'logistics',
    description: 'Organized distribution and packaging of construction materials for delivery',
    location: 'DEXTA Distribution Hub, Dubai',
    year: '2024',
    materials: ['Packaged Materials', 'Construction Supplies', 'Safety Gear']
  },
  {
    id: 4,
    type: 'image',
    src: project4,
    title: 'Team Management & Planning',
    category: 'team',
    description: 'DEXTA team coordinating project planning and material distribution strategies',
    location: 'DEXTA Office, Dubai',
    year: '2024',
    materials: ['Project Planning', 'Team Coordination', 'Strategic Planning']
  },
  {
    id: 5,
    type: 'image',
    src: project5,
    title: 'Industrial Equipment Handling',
    category: 'logistics',
    description: 'Professional handling and transportation of heavy industrial equipment',
    location: 'DEXTA Facility, UAE',
    year: '2024',
    materials: ['Heavy Machinery', 'Industrial Tools', 'Transport Equipment']
  },
  {
    id: 6,
    type: 'video',
    src: constructionVideo,
    thumbnail: project1, // Use one of the images as thumbnail
    title: 'DEXTA Operations Showcase',
    category: 'video',
    description: 'Complete overview of DEXTA\'s material handling, storage, and distribution operations',
    location: 'Multiple DEXTA Locations, UAE',
    year: '2024',
    duration: '3:45',
    materials: ['Various Materials', 'Equipment', 'Operations']
  }
];
  const filteredItems = galleryItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const openLightbox = (item, index) => {
    setLightboxImage(item);
    setCurrentImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImage(null);
    setVideoPlaying(false);
  };

  const nextImage = () => {
    const nextIndex = (currentImageIndex + 1) % filteredItems.length;
    setCurrentImageIndex(nextIndex);
    setLightboxImage(filteredItems[nextIndex]);
    setVideoPlaying(false);
  };

  const prevImage = () => {
    const prevIndex = (currentImageIndex - 1 + filteredItems.length) % filteredItems.length;
    setCurrentImageIndex(prevIndex);
    setLightboxImage(filteredItems[prevIndex]);
    setVideoPlaying(false);
  };

  const toggleVideoPlay = () => {
    const video = document.getElementById('lightbox-video');
    if (video) {
      if (videoPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setVideoPlaying(!videoPlaying);
    }
  };

  const toggleVideoMute = () => {
    const video = document.getElementById('lightbox-video');
    if (video) {
      video.muted = !videoMuted;
      setVideoMuted(!videoMuted);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="gallery-hero-section">
        {/* Animated Background */}
        <div className="gallery-hero-background">
          <img 
            src={heroImage}
            alt="Construction projects gallery" 
            className="gallery-hero-bg-image"
          />
          
          {/* Floating Elements */}
          <div className="gallery-floating-elements">
            <Camera className="gallery-floating-icon" size={40} />
            <Building2 className="gallery-floating-icon" size={35} />
            <Hammer className="gallery-floating-icon" size={30} />
            <Trophy className="gallery-floating-icon" size={38} />
            <Globe className="gallery-floating-icon" size={33} />
          </div>

          {/* Animated Particles */}
          <div className="gallery-particles">
            {[...Array(15)].map((_, i) => (
              <div
                key={i}
                className="gallery-particle"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 15}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
          </div>
        </div>

        <div className="gallery-hero-overlay"></div>
        
        <div className="gallery-hero-content">
          <div className="gallery-hero-badge" data-aos="fade-up">
            <Camera size={20} />
            <span>Project Gallery & Showcase</span>
          </div>
          
          <h1 className="gallery-hero-title" data-aos="fade-up" data-aos-delay="200">
            Our Project
            <br />
            <span style={{color: '#ff1744'}}>Gallery</span>
          </h1>
          
          <p className="gallery-hero-subtitle" data-aos="fade-up" data-aos-delay="400">
            Explore our extensive portfolio of successful projects across the UAE and beyond. From towering commercial complexes to luxury residential developments, witness the quality and precision of DEXTA's construction materials in action.
          </p>
          
          <a href="#gallery" className="gallery-hero-cta" data-aos="fade-up" data-aos-delay="600">
            <span>View Projects</span>
            <ArrowRight size={20} />
          </a>
        </div>
      </section>

      {/* Gallery Controls Section */}
      <section id="gallery" className="gallery-controls-section">
        <div className="gallery-controls-container" data-aos="fade-up">
          <div className="gallery-controls-header">
            <h2>Browse Our Projects</h2>
            <p>Filter and explore our comprehensive project portfolio</p>
          </div>

          <div className="gallery-controls-wrapper">
            {/* Category Filters */}
            <div className="gallery-category-filters">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`gallery-category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                >
                  {category.name}
                  <span className="gallery-category-count">{category.count}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="gallery-view-toggle">
              <button
                onClick={() => setViewMode('grid')}
                className={`gallery-view-btn ${viewMode === 'grid' ? 'active' : ''}`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`gallery-view-btn ${viewMode === 'list' ? 'active' : ''}`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="gallery-section">
        <div className="gallery-container">
          <div className={`gallery-grid ${viewMode === 'list' ? 'list-view' : 'grid-view'}`}>
            {filteredItems.map((item, index) => (
              <div 
                key={item.id} 
                className={`gallery-item ${item.type === 'video' ? 'gallery-video-item' : ''}`}
                data-aos="fade-up" 
                data-aos-delay={index * 100}
                onClick={() => openLightbox(item, index)}
              >
                <div className="gallery-image-wrapper">
                  {item.type === 'video' ? (
                    <div className="gallery-video-thumbnail">
                      <img src={item.thumbnail} alt={item.title} className="gallery-image" />
                      <div className="gallery-video-overlay">
                        <div className="gallery-play-button">
                          <Play size={32} fill="white" />
                        </div>
                        <div className="gallery-video-duration">{item.duration}</div>
                      </div>
                    </div>
                  ) : (
                    <img src={item.src} alt={item.title} className="gallery-image" />
                  )}
                  
                  <div className="gallery-image-overlay">
                    <div className="gallery-overlay-content">
                      <button className="gallery-zoom-btn">
                        {item.type === 'video' ? <Play size={24} /> : <ZoomIn size={24} />}
                      </button>
                      <div className="gallery-image-info">
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {viewMode === 'list' && (
                  <div className="gallery-list-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <div className="gallery-project-details">
                      <span className="gallery-location">{item.location}</span>
                      <span className="gallery-year">{item.year}</span>
                      {item.type === 'video' && <span className="gallery-duration">{item.duration}</span>}
                    </div>
                    <div className="gallery-materials-tags">
                      {item.materials.map((material, idx) => (
                        <span key={idx} className="gallery-material-tag">{material}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="gallery-no-results" data-aos="fade-up">
              <Camera size={64} />
              <h3>No projects found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="gallery-lightbox-overlay" onClick={closeLightbox}>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="gallery-lightbox-close" onClick={closeLightbox}>
              <X size={24} />
            </button>
            
            <button className="gallery-lightbox-nav prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            
            <button className="gallery-lightbox-nav next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>

            <div className="gallery-lightbox-image-wrapper">
              {lightboxImage.type === 'video' ? (
                <div className="gallery-lightbox-video-container">
                  <video 
                    id="lightbox-video"
                    src={lightboxImage.src}
                    className="gallery-lightbox-video"
                    controls={false}
                    muted={videoMuted}
                    onPlay={() => setVideoPlaying(true)}
                    onPause={() => setVideoPlaying(false)}
                  />
                  <div className="gallery-video-controls">
                    <button className="gallery-video-control-btn" onClick={toggleVideoPlay}>
                      {videoPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </button>
                    <button className="gallery-video-control-btn" onClick={toggleVideoMute}>
                      {videoMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
                    </button>
                  </div>
                </div>
              ) : (
                <img src={lightboxImage.src} alt={lightboxImage.title} className="gallery-lightbox-image" />
              )}
            </div>

            <div className="gallery-lightbox-info">
              <h3>{lightboxImage.title}</h3>
              <p>{lightboxImage.description}</p>
              <div className="gallery-project-meta">
                <span><strong>Location:</strong> {lightboxImage.location}</span>
                <span><strong>Year:</strong> {lightboxImage.year}</span>
                {lightboxImage.type === 'video' && (
                  <span><strong>Duration:</strong> {lightboxImage.duration}</span>
                )}
              </div>
              <div className="gallery-materials-list">
                <strong>Materials Used:</strong>
                <div className="gallery-materials-tags">
                  {lightboxImage.materials.map((material, idx) => (
                    <span key={idx} className="gallery-material-tag">{material}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="gallery-cta-section">
        <div className="gallery-cta-content" data-aos="fade-up">
          <h2 className="gallery-cta-title">Ready to Start Your Project?</h2>
          <p className="gallery-cta-subtitle">
            Let us supply the premium materials for your next construction project
          </p>
          <div className="gallery-cta-buttons">
            <a href="#contact" className="gallery-cta-button primary">
              <Building2 size={20} />
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

export default DextaGalleryPage;