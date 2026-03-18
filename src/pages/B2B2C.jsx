import PageHeader from '../components/layout/PageHeader';
import { Users, Store, BarChart3, TrendingUp, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './B2B2C.module.css';

const B2B2C = () => {
  return (
    <div className={styles.b2b2cPage}>
      <PageHeader 
        title="Distributor Partnerships" 
        subtitle="Grow your business by partnering with India's fastest-growing premium spice brand."
        breadcrumb="Home / B2B2C" 
      />

      {/* Intro Section */}
      <section className="section">
        <div className={`container ${styles.modelGrid}`}>
          <div className={styles.modelContent}>
            <span className={styles.label}>The B2B2C Advantage</span>
            <h2 className="serif-heading">Premium Products for Your Customer Base</h2>
            <p>
              Our B2B2C (Business-to-Business-to-Consumer) model is designed for channel partners, 
              regional distributors, and retail aggregators who supply directly to end consumers.
            </p>
            <p>
              By partnering with Richie Spices, you gain access to a portfolio of high-quality, 
              attractively packaged spices that promise high shelf turnover and excellent margins. 
              We take care of the heavy lifting—sourcing, processing, and packaging—so you can focus on distribution and sales.
            </p>
          </div>
          <div className={styles.modelStats}>
            <div className={styles.statBox}>
              <TrendingUp size={32} className={styles.statIcon} />
              <h4>High Margins</h4>
              <p>Competitive distributor pricing ensures excellent ROI.</p>
            </div>
            <div className={styles.statBox}>
              <BarChart3 size={32} className={styles.statIcon} />
              <h4>Marketing Support</h4>
              <p>Collateral and promotions to boost your tertiary sales.</p>
            </div>
            <div className={styles.statBox}>
              <Users size={32} className={styles.statIcon} />
              <h4>Dedicated Account Manager</h4>
              <p>Personalized support for seamless operations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Availability */}
      <section className={`section ${styles.ecomSection}`}>
        <div className="container">
          <div className={styles.ecomBox}>
            <div className={styles.ecomContent}>
              <h2 className="serif-heading">Gracing the shelves of the internet’s greatest marketplaces.</h2>
              <p>
                Our retail products are aggressively marketed and available across leading D2C and Q-commerce platforms. 
                This existing brand awareness directly benefits our offline distribution partners.
              </p>
              <div className={styles.ecomLogos}>
                <div className={styles.ecomTag}><Store size={20} /> Amazon</div>
                <div className={styles.ecomTag}><ShoppingBag size={20} /> Flipkart</div>
                <div className={styles.ecomTag}><Store size={20} /> Shopify Stores</div>
                <div className={styles.ecomTag}><ShoppingBag size={20} /> Local Q-Commerce</div>
              </div>
            </div>
            <img src="/media/ecomspi.png" alt="Available on Amazon, Flipkart, Shopify" className={styles.ecomImagePlaceholder} style={{objectFit: 'contain', backgroundColor: 'var(--color-paper)'}} />
            
          </div>
        </div>
      </section>

      {/* Enquiry Form Link CTA */}
      <section className="section bg-paper">
        <div className="container">
          <div className={styles.formContainer} style={{textAlign: 'center', padding: '4rem 2rem'}}>
            <div className={styles.formHeader}>
              <h2 className="serif-heading">Become a Distributor</h2>
              <p style={{marginBottom: '2rem'}}>Tap the button below and our partnerships team will get back to you within 24 hours.</p>
            </div>
            
            <Link to="/contact" className="btn btn-primary" style={{display: 'inline-block', padding: '1rem 3rem', fontSize: '1.1rem'}}>
              Submit Partnership Request
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B2C;
