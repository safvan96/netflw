export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const BREVO_KEY = process.env.BREVO_KEY;
  if (!BREVO_KEY) {
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const { name, email, company, country, message, products } = req.body;

  const productLines = products.map(i => `${i.qty}x ${i.name} (${i.code})`).join('<br>');
  const html = `
    <b>Name:</b> ${name}<br>
    <b>Email:</b> ${email}<br>
    <b>Company:</b> ${company || '—'}<br>
    <b>Country:</b> ${country || '—'}<br><br>
    <b>Products:</b><br>${productLines}<br><br>
    <b>Message:</b><br>${message || '—'}
  `;

  const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      'api-key': BREVO_KEY,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      sender: { name: 'Net Flow Website', email: 'info@netflw.com' },
      to: [{ email: 'infonetflw@gmail.com' }],
      replyTo: { email: email, name: name },
      subject: `Quote Request from ${name} — ${company || country || ''}`,
      htmlContent: html
    })
  });

  if (brevoRes.ok) {
    return res.status(200).json({ ok: true });
  } else {
    const err = await brevoRes.json();
    return res.status(500).json({ error: err });
  }
}
