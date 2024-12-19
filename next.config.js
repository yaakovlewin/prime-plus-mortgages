const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [], // We'll configure this in mdx-components.jsx instead
    rehypePlugins: [],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui-avatars.com",
      },
      {
        protocol: "https",
        hostname: "www.google.com",
      },
      {
        protocol: "https",
        hostname: "via.placeholder.com",
      },
    ],
  },
  // Disable static generation for authenticated routes
  output: "standalone",
  // Configure dynamic rendering for auth pages
  experimental: {
    serverActions: true,
  },
};

module.exports = withMDX(nextConfig);
