import { ArrowRight, CheckCircle2, Package, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className={`container ${styles.heroContainer}`}>
          <div className={styles.heroContent}>
            <h1 className="serif-heading animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              From the Soil of India<br />to the <span className="text-saffron">Global Table</span>
            </h1>
            <p className={`animate-fade-in-up ${styles.heroSubtitle}`} style={{ animationDelay: '0.3s', fontSize: '1.4rem', fontWeight: '500', marginTop: '0.5rem' }}>Your trusted partner for high-quality spices</p>
            <p className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              Crafting flavor through premium sourcing, refined processing, and a seamless global supply.
            </p>
            <div className={`animate-fade-in-up ${styles.heroCta}`} style={{ animationDelay: '0.6s' }}>
              <Link to="/products" className="btn btn-primary">EXPLORE PRODUCTS <ArrowRight size={16} style={{marginLeft: '8px'}} /></Link>
              <Link to="/contact" className={`btn btn-outline ${styles.heroBtnSecondary}`}>BULK SUPPLY INQUIRY</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Value / Stats Section - The Pillars of Our Craft */}
      <section className="section bg-paper">
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
             <span className={styles.sectionLabel}>WHY RICHIE SPICES</span>
             <h2 className="serif-heading">The Pillars of Our Craft</h2>
             <p>Every spice we process carries the promise of purity, potency, and precision — from farm to final packaging.</p>
          </div>

          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <CheckCircle2 size={32} className={styles.statIcon} />
              <h3 className="serif-heading">Premium Sourcing</h3>
              <p>Direct procurement from India's finest spice farms.</p>
            </div>
            <div className={styles.statCard}>
              <Package size={32} className={styles.statIcon} style={{color: 'var(--color-primary)'}} />
              <h3 className="serif-heading">Quality Processing</h3>
              <p>Cold-grinding technology preserving natural oils.</p>
            </div>
            <div className={styles.statCard}>
              <Globe size={32} className={styles.statIcon} style={{color: 'var(--color-saffron)'}} />
              <h3 className="serif-heading">Modern Manufacturing</h3>
              <p>State of the art facility.</p>
            </div>
            <div className={styles.statCard}>
              <Globe size={32} className={styles.statIcon} style={{color: 'var(--color-primary-light)'}} />
              <h3 className="serif-heading">Global Supply</h3>
              <p>Reliable supply chain serving international markets.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Peek Section - Our Story */}
      <section className={`section ${styles.aboutPeek}`}>
        <div className={`container ${styles.aboutGrid}`}>
          <div className={styles.aboutContent}>
            <span className={styles.sectionLabel} style={{color: 'var(--color-primary)'}}>✨ OUR STORY</span>
            <h2 className="serif-heading">Crafting <span className="text-primary">Flavor</span><br/>Since 2000</h2>
            <p>
              Richie Spices Company emerged from a singular vision: to bring the authentic flavors of India to the global table through modern processing and uncompromising quality.
            </p>
            <p>
              Our state-of-the-art facility combines traditional knowledge with cold-grinding technology, ensuring every grain retains its essential oils, aroma, and potency.
            </p>
            <Link to="/about" className="btn btn-primary" style={{marginTop: '1.5rem'}}>READ OUR STORY <ArrowRight size={16} style={{marginLeft: '8px'}} /></Link>
          </div>
          <div className={styles.aboutImageWrapper}>
            <img src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Spice Market or Processing" className={styles.aboutImageCard} />
            <div className={styles.imageCaption}>
               Wazirpur Industrial Hub — Delhi, India
            </div>
          </div>
        </div>
      </section>

      {/* Certificates Banner */}
      <section className={`section ${styles.certificatesSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionLabel}>QUALITY ASSURANCE</span>
            <h2 className="serif-heading">Our <span className="text-primary">Certifications</span></h2>
            <p>Committed to the highest standards of quality, safety, and purity.</p>
          </div>
          <div className={styles.certGrid}>
            {[
              { name: 'ISO Certified', image: '/media/certificates/iso certificate.png' },
              { name: 'HACCP', image: '/media/certificates/haccp.png' },
              { name: 'Cool Grind', image: '/media/certificates/cool grind.jpg' },
              { name: 'High Essential Oils', image: '/media/certificates/high essential oils.jpg' },
              { name: 'Sterilized', image: '/media/certificates/sterilized.jpg' },
              { name: 'Zero Preservatives', image: '/media/certificates/zero preservatives.jpg' },
              { name: 'Zero Salmonella', image: '/media/certificates/zero salmonela.png' },
            ].map((cert, idx) => (
              <div key={idx} className={styles.certCard}>
                <img src={cert.image} alt={cert.name} className={styles.certImage} />
                <span className={styles.certName}>{cert.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories (Animated Cards) */}
      <section className={`section ${styles.categoriesSection}`}>
        <div className="container">
          <div className={styles.sectionHeaderLeft}>
            <span className={styles.sectionLabel}>PRODUCT RANGE</span>
            <h2 className="serif-heading" style={{fontSize: '3.5rem'}}>Explore Our Categories</h2>
            <p style={{maxWidth: '800px', fontSize: '1.1rem'}}>From whole spices sourced at origin to precisely blended masalas — crafted for kitchens, restaurants, and industries worldwide.</p>
          </div>
          
          <div className={styles.categoryGrid}>
            {[
              { title: 'Whole Spices', varieties: '12+ varieties', video: '/media/Whole_Spices_Looping_Video_Generation.mp4' },
              { title: 'Powder Spices', varieties: '5+ varieties', video: '/media/Powder_Spices_Category_Card_Animation.mp4' },
              { title: 'Blended Masalas', varieties: '7+ blends', video: '/media/Blended_Masalas_Looping_Video_Creation.mp4' }
            ].map((cat, idx) => (
              <Link to="/products" key={idx} className={styles.categoryCard}>
                <div className={styles.catImageWrapper}>
                    <video 
                      src={cat.video} 
                      className={styles.catImage} 
                      autoPlay 
                      loop 
                      muted 
                      playsInline 
                    />
                </div>
                <div className={styles.catContent}>
                  <h3 className="serif-heading">{cat.title}</h3>
                  <span className={styles.catVarieties}>{cat.varieties}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className={`container ${styles.ctaContainer}`}>
          <h2 className="serif-heading">Ready to Partner<br/>with <span className="text-saffron">Richie Spices?</span></h2>
          <p>Whether you're a retailer, distributor, or food service provider — we<br/>deliver quality at every scale.</p>
          <div className={styles.ctaButtons}>
            <Link to="/contact" className="btn" style={{backgroundColor: 'var(--color-saffron)', color: 'var(--color-primary-dark)'}}>GET IN TOUCH <ArrowRight size={16} style={{marginLeft: '8px'}}/></Link>
            <Link to="/b2b" className="btn btn-outline" style={{borderColor: 'rgba(255,255,255,0.3)', color: 'white'}}>B2B SOLUTIONS</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
