import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
      async redirects() {
        return [
          {
            source: '/index.html', // The incoming request path pattern
            destination: '/', // The path to redirect to
            permanent: true, // true for 308 (permanent), false for 307 (temporary)
          },
          // Add more redirect rules as needed
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