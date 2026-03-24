/* eslint-env node */
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';

const app = express();
const port = 3001;

// For local development, use an environment variable (or a '.env' file)
const resend = new Resend(process.env.RESEND_API_KEY || 'add-your-key-in-env-file');

// Middleware
app.use(cors());
app.use(express.json());

// API Endpoint to handle email sending
app.post('/api/send-email', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'info@richiespices.com', // Official client email
      subject: `New Inquiry from ${name}: ${subject}`,
      html: `
        <h3>New Website Inquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong><br/> ${message}</p>
      `
    });
    
    // Explicitly return success status
    res.status(200).json(data);
  } catch (error) {
    console.error('Error sending email via Resend:', error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Email proxy server running at http://localhost:${port}`);
});
