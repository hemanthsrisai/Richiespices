import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Weight, Search } from 'lucide-react';
import PageHeader from '../components/layout/PageHeader';
import styles from './Products.module.css';

// Using high-quality Unsplash images for products
const ALL_PRODUCTS = [
  // Whole Spices
  { id: 1, name: 'Cumin Seeds (Jeera)', category: 'Whole Spices', desc: 'Premium sorted cumin seeds with rich aroma.', packSizes: ['50g', '100g', '500g', '1kg', '50kg Bulk'], image: '/media/products/Jeera.jpg' },
  { id: 2, name: 'Green Cardamom (Choti Elaichi)', category: 'Whole Spices', desc: 'Handpicked aromatic cardamom pods.', packSizes: ['50g', '100g', '250g', '1kg'], image: '/media/products/Choti Elaichi.jpg' },
  { id: 3, name: 'Black Pepper', category: 'Whole Spices', desc: 'Bold, pungent whole black peppercorns.', packSizes: ['100g', '500g', '1kg', '30kg Bulk'], image: '/media/products/Black Pepper.jpg' },
  { id: 4, name: 'Cloves (Laung)', category: 'Whole Spices', desc: 'Premium quality whole cloves with intense aroma.', packSizes: ['50g', '100g', '250g', '1kg'], image: '/media/products/Laung.jpg' },
  { id: 5, name: 'Ajwain', category: 'Whole Spices', desc: 'Aromatic carom seeds for authentic Indian cooking.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Ajwain.jpg' },
  { id: 6, name: 'Fennel Seeds (Sauf)', category: 'Whole Spices', desc: 'Sweet, aromatic fennel seeds.', packSizes: ['50g', '100g', '500g', '1kg'], image: '/media/products/Sauf.jpg' },
  { id: 18, name: 'Mustard Seeds (Sarso)', category: 'Whole Spices', desc: 'Premium quality mustard seeds.', packSizes: ['100g', '500g', '1kg'], image: '/media/products/Sarso.jpg' },
  { id: 19, name: 'Fenugreek Seeds (Methi)', category: 'Whole Spices', desc: 'Aromatic fenugreek for rich flavor.', packSizes: ['100g', '500g', '1kg'], image: '/media/products/Methi.jpg' },
  { id: 20, name: 'Poppy Seeds (Posta Dana)', category: 'Whole Spices', desc: 'White poppy seeds for gravies and sweets.', packSizes: ['50g', '100g', '250g'], image: '/media/products/Posta Dana.jpg' },
  { id: 21, name: 'Nigella Seeds (Mangraila)', category: 'Whole Spices', desc: 'Black cumin seeds with earthy flavor.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Mangraila.jpg' },
  
  // Powder Spices
  { id: 7, name: 'Turmeric Powder (Haldi)', category: 'Powder Spices', desc: 'Bright yellow, high-curcumin turmeric powder.', packSizes: ['100g', '200g', '500g', '1kg', '50kg Bulk'], image: '/media/products/Haldi Powder.png' },
  { id: 8, name: 'Red Chilli Powder', category: 'Powder Spices', desc: 'Vibrant color and perfect heat.', packSizes: ['100g', '200g', '500g', '1kg', '30kg Bulk'], image: '/media/products/Red Mirch Powder.jpeg' },
  { id: 9, name: 'Coriander Powder (Dhaniya)', category: 'Powder Spices', desc: 'Freshly ground coriander seeds.', packSizes: ['100g', '200g', '500g', '1kg'], image: '/media/products/Dhaniya Powder.jpeg' },
  { id: 10, name: 'Cumin Powder (Jeera)', category: 'Powder Spices', desc: 'Finely ground cumin powder with intense aroma.', packSizes: ['100g', '200g', '500g', '1kg'], image: '/media/products/Jeera Powder.png' },
  { id: 22, name: 'Black Pepper Powder', category: 'Powder Spices', desc: 'Freshly ground black pepper for bold flavor.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Black pepperPowder.png' },
  
  // Blended Spices
  { id: 11, name: 'Garam Masala', category: 'Blended Spices', desc: 'Authentic blend of traditional Indian spices.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Garam Masala.jpg' },
  { id: 12, name: 'Biryani Masala', category: 'Blended Spices', desc: 'Perfect mix for aromatic and flavorful biryani.', packSizes: ['50g', '100g', 'Retail Sachets'], image: '/media/products/Biryani Masala.png' },
  { id: 13, name: 'Chicken Masala', category: 'Blended Spices', desc: 'Aromatic blend for delicious chicken dishes.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Chicken Masala.png' },
  { id: 14, name: 'Meat Masala', category: 'Blended Spices', desc: 'Rich blend for flavorful meat preparations.', packSizes: ['50g', '100g', '500g'], image: '/media/products/Meat Masala.png' },
  
  // Oleoresins & Oils
  { id: 16, name: 'Cumin Oil', category: 'Oleoresins & Oils', desc: 'Pure extracted cumin essential oil.', packSizes: ['100ml', '500ml', '1L', 'Bulk Drums'], image: '/media/cumin olis.png' },
  { id: 17, name: 'Cardamom Oil', category: 'Oleoresins & Oils', desc: 'Premium cardamom essential oil with rich aroma.', packSizes: ['100ml', '500ml', '1L', 'Bulk Drums'], image: '/media/products/cardamon oil.png' },
  { id: 23, name: 'Black Pepper Oil', category: 'Oleoresins & Oils', desc: 'Pure black pepper oleoresin extract.', packSizes: ['100ml', '500ml', '1L', 'Bulk Drums'], image: '/media/products/black pepper oil.png' },
];

const CATEGORIES = ['All', 'Whole Spices', 'Powder Spices', 'Blended Spices', 'Oleoresins & Oils'];

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All' 
    ? ALL_PRODUCTS 
    : ALL_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className={styles.productsPage}>
      <PageHeader 
        title="Our Products" 
        subtitle="Explore our extensive range of premium spices, masalas, and extracts."
        breadcrumb="Home / Products" 
      />

      <section className="section bg-paper">
        <div className="container">
          
          {/* Filters */}
          <div className={styles.filterWrapper}>
            <div className={styles.filterList}>
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Product Grid */}
          <div className={styles.productGrid}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={`${styles.productCard} animate-fade-in-up`}>
                <div className={styles.productImageWrapper}>
                  <img src={product.image} alt={product.name} className={styles.productImage} loading="lazy" />
                  <span className={styles.categoryTag}>{product.category}</span>
                </div>
                <div className={styles.productInfo}>
                  <h3 className="serif-heading">{product.name}</h3>
                  <p className={styles.productDesc}>{product.desc}</p>
                  
                  <div className={styles.packagingInfo}>
                    <Weight size={16} className={styles.packIcon} />
                    <div className={styles.packSizes}>
                      {product.packSizes.map((size, idx) => (
                        <span key={idx} className={styles.packSizePill}>{size}</span>
                      ))}
                    </div>
                  </div>
                  
                  <Link to="/contact" className={`btn btn-outline ${styles.enquireBtn}`}>
                    INQUIRE PRICE
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className={styles.noProducts}>
              <Search size={40} style={{marginBottom: '1rem', color: 'var(--color-text-muted)'}} />
              <p>No products found in this category.</p>
            </div>
          )}
          
        </div>
      </section>
      
      {/* CTA bottom */}
      <section className="section" style={{backgroundColor: 'var(--color-primary-dark)', color: 'white', textAlign: 'center'}}>
        <div className="container">
          <h2 className="serif-heading" style={{color: 'white', marginBottom: '1rem', fontSize: '3rem'}}>Looking for Custom Blends?</h2>
          <p style={{marginBottom: '2.5rem', color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem'}}>We manufacture and package custom recipes strictly according to your specifications under complete confidentiality.</p>
          <Link to="/contact" className="btn" style={{backgroundColor: 'var(--color-saffron)', color: 'var(--color-primary-dark)'}}>CONTACT FOR PRIVATE LABEL</Link>
        </div>
      </section>
    </div>
  );
};

export default Products;
