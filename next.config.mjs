/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: '/hhio-landing',
  assetPrefix: '/hhio-landing/',
  trailingSlash: true,
}

export default nextConfig
