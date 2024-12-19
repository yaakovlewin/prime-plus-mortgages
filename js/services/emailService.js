import sgMail from "@sendgrid/mail";

const initializeSendGrid = () => {
  if (!process.env.SENDGRID_API_KEY) {
    throw new Error("Missing SENDGRID_API_KEY environment variable");
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
};

export const sendEmail = async ({ to, subject, text, html }) => {
  console.log("Starting email send process...");

  try {
    if (!to || !subject || (!text && !html)) {
      console.error("Missing required fields:", {
        to,
        subject,
        hasText: !!text,
        hasHtml: !!html,
      });
      throw new Error("Missing required email fields");
    }

    // Initialize SendGrid with API key
    initializeSendGrid();

    const msg = {
      to,
      from: {
        email: process.env.SENDGRID_VERIFIED_SENDER,
        name: "Prime Plus Mortgages (Do Not Reply)",
      },
      replyTo: {
        email: "no-reply@void.invalid",
        name: "Do Not Reply",
      },
      subject,
      text: `${text}\n\nThis is an automated message. Please do not reply to this email as it will not be received.`,
      html: html
        ? `${html}<br><br>
        <div style="text-align: center;">
            <i>This is an automated . Please do not reply to this email as it will not be received.</i>
        </div>
        `
        : undefined,
    };

    console.log("Sending email...");
    await sgMail.send(msg);
    console.log("Email sent successfully");

    return { success: true };
  } catch (error) {
    console.error("Email send error:", {
      name: error.name,
      message: error.message,
      code: error.code,
      response: error.response?.body,
    });

    return {
      success: false,
      error: error.message,
      setup: {
        note: "If you're seeing SendGrid errors, please verify:",
        step1: "Your SENDGRID_API_KEY is set correctly in .env",
        step2:
          "The sender email (SENDGRID_VERIFIED_SENDER) is verified in SendGrid",
        step3: "Your SendGrid account is active and in good standing",
        step4: "You haven't exceeded your sending limits",
      },
    };
  }
};
