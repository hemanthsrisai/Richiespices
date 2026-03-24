import { useState, useEffect } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { Building2, ChefHat, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './B2B.module.css';

const PACKAGING_SIZES = ['25gm', '50gm', '100gm', '250gm', 'Half Kg', '1 Kg'];

const B2B = () => {
  const [currentSize, setCurrentSize] = useState(0);
  const [isSlideOut, setIsSlideOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsSlideOut(true);
      setTimeout(() => {
        setCurrentSize((prev) => (prev + 1) % PACKAGING_SIZES.length);
        setIsSlideOut(false);
      }, 500);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.b2bPage}>
      <PageHeader 
        title="B2B & Bulk Supply" 
        subtitle="Dedicated spice solutions for food manufacturing, HORECA, and institutional buyers."
        breadcrumb="Home / B2B" 
      />

      {/* Introduction Section */}
      <section className="section">
        <div className={`container ${styles.introGrid}`}>
          <div className={styles.introContent}>
            <span className={styles.label}>Partnering for Success</span>
            <h2 className="serif-heading">Your Trusted Source for Premium Bulk Spices</h2>
            <p className={styles.leadText}>
              At Richie Spices, we understand the critical role consistent quality and flavor play in your business. 
              We offer comprehensive bulk supply and private labeling solutions tailored to your operational needs.
            </p>
            <p>
              From custom spice blends calibrated to your exact recipe, to standardized whole and ground spices 
              in commercial packaging, our state-of-the-art facility is equipped to handle volume without compromising pure taste.
            </p>
            <ul className={styles.benefitList}>
              <li><CheckCircle2 className={styles.checkIcon} /> Consistent Quality & Aroma profile</li>
              <li><CheckCircle2 className={styles.checkIcon} /> Scalable production capacity</li>
              <li><CheckCircle2 className={styles.checkIcon} /> Strict Food Safety Certifications</li>
              <li><CheckCircle2 className={styles.checkIcon} /> Competitive bulk pricing</li>
            </ul>
          </div>
          <div className={styles.introImageWrapper}>
            <img src="/media/bulk packing.png" alt="Bulk Spices" className={styles.introImage} />
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="section bg-paper">
        <div className="container">
          <div className={styles.sectionHeaderSplit}>
            <div className={styles.sectionHeaderLeft}>
              <h2 className={`serif-heading ${styles.highlightedHeading}`}>
                Industries We <span className="text-primary">Serve</span>
              </h2>
              <p>Tailored packaging and product specifications for diverse business needs.</p>
            </div>
            <div className={styles.packagingShowcase}>
              <div className={styles.packagingContent}>
                <span className={styles.packagingLabel}>AVAILABLE IN B2B SIZES</span>
                <div className={styles.animatedTextWrapper}>
                  Available in:
                  <div className={styles.sliderContainer}>
                    <span className={`${styles.sliderItem} ${isSlideOut ? styles.slideOut : styles.slideIn}`}>
                      {PACKAGING_SIZES[currentSize]}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.industryGrid}>
            <div className={styles.industryCard}>
              <ChefHat size={40} className={styles.industryIcon} />
              <h3>HORECA</h3>
              <p>Hotels, Restaurants, and Cafes. We provide curated spice blends, 1kg to 5kg catering packs, and consistent flavor profiles for your menus.</p>
            </div>
            <div className={styles.industryCard}>
              <Building2 size={40} className={styles.industryIcon} />
              <h3>Food Manufacturing</h3>
              <p>RTE meals, snack producers, and bakery industries. We supply standardized bulk raw materials in 30kg and 50kg sacks.</p>
            </div>
            <div className={styles.industryCard}>
              <ShoppingCart size={40} className={styles.industryIcon} />
              <h3>Supermarkets & Retail</h3>
              <p>Attractive retail packaging (50g - 500g) with high shelf appeal and barcodes, ready for direct modern trade placement.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions / Private Label */}
      <section className={`section ${styles.solutionsSection}`}>
        <div className={`container ${styles.solutionsGrid}`}>
          <img src="/media/private packing.png" alt="Private Label Packaging" className={styles.solutionsImage} />
          <div className={styles.solutionsContent}>
            <h2 className="serif-heading">Private Labeling & Custom Blends</h2>
            <p>Want to launch your own brand of spices but lack the manufacturing facility? Or do you have a secret recipe that requires confidential, large-scale blending?</p>
            <p>Richie Spices offers end-to-end contract manufacturing:</p>
            <ul className={styles.solutionsList}>
              <li><strong>Sourcing:</strong> Procurement of A-grade raw materials.</li>
              <li><strong>Processing:</strong> Cleaning, roasting, and grinding to spec.</li>
              <li><strong>Blending:</strong> Precise recipe formulation under strict NDA.</li>
              <li><strong>Packaging:</strong> From printed sachets to jars, customized with your branding.</li>
            </ul>
            <Link to="/contact" className="btn btn-outline" style={{marginTop: '1.5rem', color: 'white', borderColor: 'white'}}>Enquire About Private Label</Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaCard}>
            <h2 className="serif-heading">Ready for a Bulk Quote?</h2>
            <p>Contact our B2B sales team today to discuss your volume requirements, request samples, and view our institutional pricing.</p>
            <Link to="/contact" className="btn btn-primary">Request Bulk Quote</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default B2B;
