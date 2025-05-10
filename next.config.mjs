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
  output: 'export', // Usado para exportação estática
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/hhio-landing', // Flexível com variável de ambiente
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/hhio-landing', // Flexível com variável de ambiente
  trailingSlash: true, // Mantido para compatibilidade
  distDir: 'out', // Diretório de saída configurado explicitamente
}

export default nextConfig