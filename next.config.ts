import type { NextConfig } from 'next'
 
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      }
    ]
  },
}
 
export default nextConfig