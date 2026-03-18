import styles from './PageHeader.module.css';

const PageHeader = ({ title, subtitle, breadcrumb }) => {
  return (
    <section className={styles.pageHeader}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.content}`}>
        {breadcrumb && <div className={styles.breadcrumb}>{breadcrumb}</div>}
        <h1 className="serif-heading animate-fade-in-up">{title}</h1>
        {subtitle && <p className={`animate-fade-in-up ${styles.subtitle}`} style={{ animationDelay: '0.2s' }}>{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHeader;
