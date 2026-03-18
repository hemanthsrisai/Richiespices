import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { X, ZoomIn } from 'lucide-react';
import styles from './Gallery.module.css';

// Using actual Unsplash images based on the theme
const GALLERY_ITEMS = [
  { id: 1, type: 'product', img: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80', title: 'Premium Whole Spices', desc: 'A rich spread of our finest whole spices ready for grinding.' },
  { id: 2, type: 'facility', img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80', title: 'Quality Assurance', desc: 'Rigorous testing for purity and aroma.' },
  { id: 3, type: 'packaging', img: 'https://images.unsplash.com/photo-1587525381665-2748f9dd6329?w=800&q=80', title: 'Bulk Sacks', desc: 'Prepared for immediate HORECA dispatch.' },
  { id: 4, type: 'product', img: 'https://images.unsplash.com/photo-1508249626573-030ec603e839?w=800&q=80', title: 'Vibrant Powder Spices', desc: 'High-curcumin turmeric and bright red chilli powder.' },
  { id: 5, type: 'facility', img: 'https://images.unsplash.com/photo-1628178125585-80f4ce02d08a?w=800&q=80', title: 'Modern Manufacturing', desc: 'Our state-of-the-art processing facility.' },
  { id: 6, type: 'product', img: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80', title: 'Blended Masalas', desc: 'Our signature mixed spice blends.' },
  { id: 7, type: 'product', img: 'https://images.unsplash.com/photo-1456324463128-7ff69039dc52?w=800&q=80', title: 'Cardamom Pods', desc: 'Close-up of premium green cardamom.' },
  { id: 8, type: 'packaging', img: 'https://images.unsplash.com/photo-1616422849884-2f22b8214fa3?w=800&q=80', title: 'Retail Ready', desc: 'Attractive packaging ready for supermarket shelves.' },
  { id: 9, type: 'facility', img: 'https://images.unsplash.com/photo-1584916201218-f4242ceb4809?w=800&q=80', title: 'Packaging Line', desc: 'Automated packing machinery ensuring hygiene.' },
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [activeItem, setActiveItem] = useState(null);

  const openLightbox = (item) => {
    setActiveItem(item);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setActiveItem(null), 300); // Wait for transition
    document.body.style.overflow = 'auto';
  };

  return (
    <div className={styles.galleryPage}>
      <PageHeader 
        title="Visual Journey" 
        subtitle="Explore our facilities, products, and processes."
        breadcrumb="Home / Gallery" 
      />

      <section className="section bg-paper">
        <div className="container">
          <div className={styles.galleryGrid}>
            {GALLERY_ITEMS.map((item, index) => (
              <div 
                key={item.id} 
                className={`${styles.galleryItem} animate-fade-in-up`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openLightbox(item)}
              >
                <div className={styles.imagePlaceholder}>
                  <img src={item.img} alt={item.title} className={styles.galleryImg} loading="lazy" />
                  <div className={styles.hoverOverlay}>
                    <ZoomIn size={32} className={styles.zoomIcon} />
                    <span className={styles.hoverText}>{item.title}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal */}
      <div className={`${styles.lightbox} ${lightboxOpen ? styles.lightboxOpen : ''}`} onClick={closeLightbox}>
        <button className={styles.closeBtn} onClick={closeLightbox} aria-label="Close Lightbox">
          <X size={32} />
        </button>
        
        {activeItem && (
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.lightboxImageContainer}>
              <img src={activeItem.img} alt={activeItem.title} className={styles.lightboxImageElement} />
            </div>
            <div className={styles.lightboxInfo}>
              <h3 className="serif-heading">{activeItem.title}</h3>
              <p>{activeItem.desc}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;
