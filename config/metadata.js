// config/metadata.js

const siteConfig = {
  name: "Prime Plus Mortgages",
  url: "https://www.primeplusmortgages.co.uk",
  baseDescription:
    "Expert mortgage brokers in Salford & Manchester. Specialising in residential mortgages, buy-to-let, commercial mortgages, bridging loans, and development finance. FCA regulated with competitive rates.",
};

export const sharedKeywords = [
  // Location-based keywords
  "mortgage broker Salford",
  "mortgage advisor Manchester",
  "mortgage services Greater Manchester",
  "local mortgage broker",

  // Business-specific keywords
  "Prime Plus Mortgages",
  "Prime Plus Mortgages Salford",
  "mortgage broker near me",
  "trusted mortgage advisors",

  // Qualifier keywords
  "best mortgage rates",
  "FCA regulated mortgage broker",
  "professional mortgage advice",

  // Industry-specific terms
  "FCA approved broker",
  "regulated mortgage advice",
  "whole of market broker",
  "independent mortgage broker",
].join(", ");

export const defaultMetadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | Mortgage Broker Salford & Manchester`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.baseDescription,
  keywords: sharedKeywords,
  authors: [{ name: siteConfig.name }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.baseDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.baseDescription,
  },
  verification: {
    google: "Add your Google Search Console verification code here",
  },
  alternates: {
    canonical: siteConfig.url,
  },
};

export const serviceMetadata = {
  ownerOccupier: {
    title: "Residential Mortgages | First Time Buyer Specialist",
    description:
      "Expert residential mortgage advice for first-time buyers and home movers. Get competitive rates and personalized solutions from FCA regulated brokers in Salford & Manchester.",
    keywords:
      "first time buyer mortgages, residential mortgages, home buyer mortgages, house purchase loans, mortgage advice first time buyers",
  },
  buyToLet: {
    title: "Buy to Let Mortgages | Landlord Mortgage Specialists",
    description:
      "Specialist buy to let mortgage solutions for landlords and property investors. Access competitive rates and expert advice for your property portfolio.",
    keywords:
      "buy to let mortgages, landlord mortgages, property investment loans, rental property finance, BTL mortgage advice",
  },
  portfolioFinance: {
    title: "Portfolio Mortgages | Property Portfolio Finance",
    description:
      "Comprehensive portfolio finance solutions for professional landlords. Manage and grow your property portfolio with expert mortgage advice and competitive rates.",
    keywords:
      "portfolio mortgages, property portfolio finance, landlord portfolio loans, multiple property mortgages, portfolio lending",
  },
  remortgages: {
    title: "Remortgage Specialists | Better Rates & Expert Advice",
    description:
      "Professional remortgage services to help you secure better rates or release equity. Expert advice from FCA regulated brokers in Salford & Manchester.",
    keywords:
      "remortgage advice, remortgage rates, equity release, better mortgage rates, switch mortgage provider",
  },
  bridgingLoans: {
    title: "Bridging Loans & Short-Term Finance Solutions",
    description:
      "Fast and flexible bridging loans for property purchases and developments. Short-term finance solutions with competitive rates.",
    keywords:
      "bridging loans, short term finance, property bridge loans, quick property finance, development bridging",
  },
  commercialMortgages: {
    title: "Commercial Mortgages | Business Property Finance",
    description:
      "Specialist commercial mortgage solutions for business properties. Expert advice on commercial property finance with competitive rates.",
    keywords:
      "commercial mortgages, business property loans, commercial property finance, shop mortgages, office finance",
  },
  developmentFinance: {
    title: "Property Development Finance | Construction Loans",
    description:
      "Specialized development finance solutions for property developers. Fund your next construction project with competitive rates and expert guidance.",
    keywords:
      "development finance, property development loans, construction finance, developer mortgages, building project finance",
  },
  holidayLet: {
    title: "Holiday Let Mortgages | Vacation Rental Finance",
    description:
      "Expert holiday let mortgage advice for vacation rental properties. Secure competitive rates and specialist lending solutions.",
    keywords:
      "holiday let mortgages, vacation rental finance, holiday home loans, airbnb mortgages, short term rental finance",
  },
  foreignNational: {
    title: "Foreign National Mortgages | Non-UK Resident Loans",
    description:
      "Specialist mortgage solutions for foreign nationals and non-UK residents. Expert advice on UK property finance for international buyers.",
    keywords:
      "foreign national mortgages, non-UK resident mortgages, international buyer loans, expatriate mortgages, overseas buyer finance",
  },
};
