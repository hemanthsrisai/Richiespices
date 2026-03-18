import PageHeader from '../components/layout/PageHeader';
import { Target, Eye, ShieldCheck, Factory } from 'lucide-react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutPage}>
      <PageHeader 
        title="About Us" 
        subtitle="Discover the story behind Richie Spices Company"
        breadcrumb="HOME / ABOUT" 
      />

      {/* Company Section */}
      <section className="section bg-paper">
        <div className={`container ${styles.companyContainer}`}>
          <div className={styles.companyContent}>
            <span className={styles.label}>OUR STORY</span>
            <h2 className="serif-heading">Roots in Tradition.<br/>A Future in <span className="text-primary">Flavor.</span></h2>
            <p>
              Founded in 2000 in the bustling commercial hub of Wazirpur Industrial Area, Delhi, India, <strong>Richie Spices Company</strong> emerged with a singular goal: to deliver the unadulterated, authentic taste of Indian spices to the world.
            </p>
            <p>
              We are a premier spice manufacturing and packaging company specializing in whole spices, ground spices, and expertly crafted blended masalas. With a strong footprint in the FMCG sector, we cater to both everyday consumers seeking culinary perfection and institutional buyers who demand consistent bulk supply for the HORECA and food manufacturing industries.
            </p>
            <p>
              Backed by modern processing facilities, strict food safety protocols, and an uncompromising dedication to quality, Richie Spices is rapidly becoming a trusted name in households and commercial kitchens globally.
            </p>
          </div>
          <div className={styles.mainImageWrapper}>
            <img 
              src="/media/mainrich.png" 
              alt="Richie Spices Main Facility" 
              className={styles.mainImage}
            />
            <div className={styles.experienceBadge}>
              <span className={styles.badgeNum}>100%</span>
              <span className={styles.badgeText}>PURE & NATURAL</span>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className={`section ${styles.visionMission}`}>
        <div className="container">
          <div className={styles.vmGrid}>
            <div className={styles.vmCard}>
              <div className={styles.iconWrapper}>
                <Eye size={28} />
              </div>
              <h3 className="serif-heading">Our Vision</h3>
              <p>
                To become a globally recognized and trusted spice brand, celebrated for delivering the finest authentic flavors, unparalleled quality, and continuing the rich legacy of Indian spices across the world.
              </p>
            </div>
            <div className={styles.vmCard}>
              <div className={styles.iconWrapper}>
                <Target size={28} />
              </div>
              <h3 className="serif-heading">Our Mission</h3>
              <p>
                To source only the best raw spices directly from trusted growers, utilize advanced processing and packaging technology, and maintain rigorous quality standards to serve both consumers and food industry partners with excellence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values / Strengths */}
      <section className="section bg-paper">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>WHY CHOOSE US</span>
            <h2 className="serif-heading">The Richie Spices Guarantee</h2>
            <p>Our commitment to excellence is reflected in every product we package.</p>
          </div>
          <div className={styles.valuesGrid}>
            <div className={styles.valueItem}>
              <div className={styles.valueIconWrapper}>
                 <ShieldCheck size={32} className={styles.valueIcon} />
              </div>
              <h4 className="serif-heading">Stringent Quality Control</h4>
              <p>Every batch undergoes rigorous testing to ensure it meets international food safety standards, free from adulterants and artificial colors.</p>
            </div>
            <div className={styles.valueItem}>
              <div className={styles.valueIconWrapper}>
                 <Factory size={32} className={styles.valueIcon} />
              </div>
              <h4 className="serif-heading">Modern Manufacturing</h4>
              <p>Our state-of-the-art facility in Delhi ensures hygienic processing and packaging, retaining the volatile oils and natural aroma of the spices.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
