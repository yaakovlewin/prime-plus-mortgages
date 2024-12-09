/**
 * Sends an email using the email API route
 * @param {Object} emailOptions - The email options
 * @param {string} emailOptions.to - Recipient email address
 * @param {string} emailOptions.subject - Email subject
 * @param {string} [emailOptions.text] - Plain text email content
 * @param {string} [emailOptions.html] - HTML email content (optional)
 * @returns {Promise<{ success: boolean, error?: string }>}
 */
export const sendEmail = async ({ to, subject, text, html }) => {
  try {
    // Use relative URL path - Next.js will automatically handle the base URL
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        to,
        subject,
        text,
        html,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return { success: true };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
};

// Example usage in a Next.js component:
/*
import { sendEmail } from 'js/services/emailService';

// In an async function:
try {
  const result = await sendEmail({
    to: 'recipient@example.com',
    subject: 'Test Email',
    text: 'This is a test email',
    // or html: '<h1>This is a test email</h1>'
  });

  if (result.success) {
    console.log('Email sent successfully');
  } else {
    console.error('Failed to send email:', result.error);
  }
} catch (error) {
  console.error('Error:', error);
}
*/
