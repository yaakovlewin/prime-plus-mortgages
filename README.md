This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Google Maps API Key for location features
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# reCAPTCHA configuration
NEXT_PUBLIC_reCAPTCHA_site_key=your_recaptcha_site_key
reCAPTCHA_secret_key=your_recaptcha_secret_key

# Email Configuration for Contact Form
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-specific-password
ADMIN_EMAIL=admin@example.com
```

### Setting up Email Notifications

The contact form uses Nodemailer to send email notifications. To set this up:

1. If using Gmail:

   - Go to your Google Account settings
   - Enable 2-Step Verification if not already enabled
   - Generate an App Password (Security > 2-Step Verification > App Passwords)
   - Use this App Password as your `SMTP_PASS` in .env.local

2. Update the `ADMIN_EMAIL` in .env.local to the email address where you want to receive contact form notifications

3. The contact form submissions will be:
   - Stored in Firebase Firestore under the "contacts" collection
   - Sent via email to the specified admin email address

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
