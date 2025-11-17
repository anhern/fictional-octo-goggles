import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

  module.exports = {
    ...nextConfig, // Spread existing config
    async redirects() {
      return [
        {
          source: '/index.html', // The incoming request path pattern
          destination: '/',      // The path you want to route to (e.g., your homepage)
          permanent: true,       // Use 308 for permanent redirect (cached by browsers/search engines)
        },
        // Add more redirects if needed
      ];
    },
  };

export default nextConfig;


//  async redirects() {
//     return [
//       // Basic redirect
//       {
//         source: '/about',
//         destination: '/',
//         permanent: true,
//       },
//       // Wildcard path matching
//       {
//         source: '/blog/:slug',
//         destination: '/news/:slug',
//         permanent: true,
//       },
//     ]
//   },