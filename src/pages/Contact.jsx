import { useState } from 'react';
import PageHeader from '../components/layout/PageHeader';
import { MapPin, Phone, Mail, Loader2 } from 'lucide-react';
import styles from './Contact.module.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    
    // Get form data
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      // Send the data to our Vercel serverless function
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (!response.ok || responseData.error) {
        throw new Error(responseData.error || 'Failed to send email');
      }

      setSubmitStatus('success');
      e.target.reset(); // Clear the form
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.contactPage}>
      <PageHeader 
        title="Contact Us" 
        subtitle="We're here to answer any questions about our products, bulk pricing, or partnerships."
        breadcrumb="Home / Contact" 
      />

      <section className="section bg-paper">
        <div className={`container`}>
          
          <div className={styles.contactHeader}>
            <h2 className="serif-heading">Let's Start a Conversation</h2>
            <p>Whether it's a business inquiry, distribution partnership, or product question — we'd love to hear from you.</p>
          </div>

          <div className={styles.contactGrid}>
            
            {/* Left Column: Contact Cards */}
            <div className={styles.infoCardsColumn}>
              
              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Address</h4>
                  <p>Richie Spices Company<br/>Wazirpur Industrial Area<br/>Delhi, India</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <Phone size={24} />
                </div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-8826-694992</p>
                </div>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconBox}>
                  <Mail size={24} />
                </div>
                <div>
                  <h4>Email</h4>
                  <p>info@richiespices.com<br/>sales@richiespices.com</p>
                </div>
              </div>

            </div>

            <div className={styles.formContainer}>
               <form className={styles.contactForm} onSubmit={handleSubmit}>
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name">FULL NAME *</label>
                      <input type="text" id="name" name="name" required />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contactEmail">EMAIL ADDRESS *</label>
                      <input type="email" id="contactEmail" name="email" required />
                    </div>
                  </div>
                  
                  <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contactPhone">PHONE NUMBER</label>
                      <input type="tel" id="contactPhone" name="phone" />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="subject">SUBJECT *</label>
                      <select id="subject" name="subject" required>
                        <option value="">Select an option</option>
                        <option value="general">General Inquiry</option>
                        <option value="bulk">Bulk/B2B Order</option>
                        <option value="distributor">Distributorship</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contactMessage">MESSAGE *</label>
                    <textarea id="contactMessage" name="message" rows="4" required placeholder="Tell us about your inquiry..."></textarea>
                  </div>

                  <button type="submit" disabled={isSubmitting} className={`btn btn-primary ${styles.submitBtn}`}>
                    {isSubmitting ? <><Loader2 className="spinner" size={18} style={{marginRight: '8px'}}/> SENDING...</> : 'SEND INQUIRY'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className={styles.successMessage} style={{color: 'green', marginTop: '1rem', fontWeight: '500'}}>
                      Message sent successfully! We will get back to you soon.
                    </div>
                  )}
                  {submitStatus === 'error' && (
                    <div className={styles.errorMessage} style={{color: 'red', marginTop: '1rem', fontWeight: '500'}}>
                      Failed to send message. Please ensure you have replaced the Resend API key with your real one, and check console logs.
                    </div>
                  )}
               </form>
            </div>

          </div>

          {/* Optional Map below */}
          <div className={styles.mapSection}>
             <h3 className="serif-heading" style={{marginTop: '4rem', marginBottom: '1.5rem', textAlign: 'center'}}>Find Us on the Map</h3>
             <div className={styles.mapContainer}>
              <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14002.392437651035!2d77.15848529285094!3d28.69460290547072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0246b14298e3%3A0x6bbaabbd34cd369a!2sWazirpur%20Industrial%20Area%2C%20Ashok%20Vihar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1709635000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Richie Spices Map Location"
                ></iframe>
             </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Contact;
