/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: [
      'images.unsplash.com',
      'www.clipartmax.com',
      'fabrikbrands.com',
      'encrypted-tbn0.gstatic.com'
    ],
    unoptimized: true,
  },
}

export default nextConfig
