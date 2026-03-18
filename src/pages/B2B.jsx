import PageHeader from '../components/layout/PageHeader';
import { Building2, ChefHat, Truck, ShoppingCart, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './B2B.module.css';

const B2B = () => {
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
            <div className={styles.floatingCard}>
              <h4>Supply Capacity</h4>
              <p>Up to 500 Tons/Month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Target Industries */}
      <section className="section bg-paper">
        <div className="container">
          <div className={styles.sectionHeader}>
            <h2 className="serif-heading">Industries We Serve</h2>
            <p>Tailored packaging and product specifications for diverse business needs.</p>
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
              <Truck size={40} className={styles.industryIcon} />
              <h3>Wholesale Distributors</h3>
              <p>Reliable supply chain support for distributors seeking high-margin, premium branded or white-label spices for their networks.</p>
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
