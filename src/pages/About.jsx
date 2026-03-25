import PageHeader from '../components/layout/PageHeader';
import { Target, Eye, ShieldCheck, Factory, Linkedin } from 'lucide-react';
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
            <h2 className="serif-heading" style={{ fontSize: '2.5rem', marginBottom: '0.5rem', color: 'var(--color-saffron)' }}>Our Story</h2>
            <h3 className="serif-heading" style={{ fontSize: '1.8rem', color: 'var(--color-primary-dark)' }}>Roots in Tradition. A Future in <span className="text-primary">Flavor.</span></h3>
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
          <div className={styles.teamSection}>
            <h2 className={`serif-heading ${styles.teamHeading}`}>Our <span className="text-primary">Team</span></h2>
            <div className={styles.teamGrid}>
              <div className={styles.teamCard}>
                <div className={styles.teamImgWrapper}>
                  <img src="/media/team/ayush.jpeg" alt="Ayush Jaiswal" className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>Ayush Jaiswal</h3>
                  <span className={styles.teamRole}>Chief Executive Officer</span>
                  <p className={styles.teamBio}>Ayush Jaiswal is the CEO of Richie Spices, leading the company's vision of transforming the traditionally unorganized spices industry into a structured, quality-driven FMCG business. He has built systems around sourcing, processing, and distribution, positioning the brand as a reliable and scalable player in the spice industry.</p>
                  <p className={styles.teamBio}>Ayush has previously worked with ITC Limited, in their FMCG division gaining experience in operations and distribution network.</p>
                  <p className={styles.teamBio}>He holds an MBA from the Indian Institute of Management, Indore, and bachelor's degree in Economics from Shri Ram College of Commerce (SRCC), University of Delhi. He has also completed a certification in Strategic Management from the London School of Economics, London.</p>
                  <a href="https://www.linkedin.com/in/jaiswalayush/" target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImgWrapper}>
                  <img src="/media/team/piyush.jpeg" alt="Piyush Jaiswal" className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>Piyush Jaiswal</h3>
                  <span className={styles.teamRole}>Chief Operating Officer</span>
                  <p className={styles.teamBio}>Piyush Jaiswal serves as the COO at Richie Spices, he manages end-to-end operations and ensuring smooth execution across the business. He is also actively involved in driving the company's General Trade network, strengthening distribution channels, and building strong relationships with partners to expand market reach.</p>
                  <p className={styles.teamBio}>Piyush Jaiswal has previously worked with American Express, where he gained valuable exposure to corporate operations, customer management, and financial services.</p>
                  <p className={styles.teamBio}>Piyush holds an MBA from the Delhi School of Business and a Bachelor of Commerce (Honours) degree from the Keshav Mahavidyalaya, University of Delhi.</p>
                  <a href="https://www.linkedin.com/in/piyush-jaiswal-754743138/" target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
              <div className={styles.teamCard}>
                <div className={styles.teamImgWrapper}>
                  <img src="/media/team/pratiyush.jpeg" alt="Pratiyush Jaiswal" className={styles.teamImg} />
                </div>
                <div className={styles.teamInfo}>
                  <h3 className={styles.teamName}>Pratiyush Jaiswal</h3>
                  <span className={styles.teamRole}>Head of B2B & Growth</span>
                  <p className={styles.teamBio}>Pratiyush Jaiswal leads B2B expansion, strategic growth, and overall business operations. With a focus on building a scalable FMCG brand, he focuses on expanding the company's presence across general trade, modern retail, and institutional channels, and expanding into new markets.</p>
                  <p className={styles.teamBio}>Pratiyush has gained experience in the logistics division at Shree Cement, where he was working in supply chain and operational efficiency.</p>
                  <p className={styles.teamBio}>He holds an MBA from Great Lakes Institute of Management, Chennai, and completed a part of his MBA through a student exchange program at IÉSEG School of Management, Paris. He also holds a Bachelor of Business Administration (BBA) degree from Amity University, Noida.</p>
                  <a href="https://www.linkedin.com/in/pratiyush-jaiswal-2a2319212/" target="_blank" rel="noopener noreferrer" className={styles.linkedinBtn} aria-label="LinkedIn">
                    <Linkedin size={14} />
                  </a>
                </div>
              </div>
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

      {/* Our Certifications Banner */}
      <section className={`section ${styles.certificatesSection}`}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.label}>QUALITY ASSURANCE</span>
            <h2 className="serif-heading">State of Art <span className="text-primary">Manufacturing</span></h2>
            <p>Committed to the highest standards of quality, safety, and purity.</p>
          </div>
          <div className={styles.certTrack}>
            <div className={styles.certSlide}>
              {[
                { name: 'ISO Certified', image: '/media/certificates/iso certificate.png' },
                { name: 'HACCP', image: '/media/certificates/haccp.png' },
                { name: 'Cool Grind', image: '/media/certificates/cool grind.jpg' },
                { name: 'High Essential Oils', image: '/media/certificates/high essential oils.jpg' },
                { name: 'Sterilized', image: '/media/certificates/sterilized.jpg' },
                { name: 'Zero Preservatives', image: '/media/certificates/zero preservatives.jpg' },
                { name: 'Zero Salmonella', image: '/media/certificates/zero salmonela.png' },
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
        </div>
      </section>
    </div>
  );
};

export default About;
