export default async function handler(request, response) {
  // Only allow POST requests
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, subject, message } = request.body;

  try {
    // Dynamically import resend to avoid issues in some serverless environments
    const { Resend } = await import('resend');
    
    // We will use the environment variable exclusively to ensure security
    // Vercel handles this securely via project settings
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'chatgptonly82@gmail.com',
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

    response.status(200).json(data);
  } catch (error) {
    console.error('Error sending email via Serverless Function:', error);
    response.status(500).json({ error: error.message });
  }
}
