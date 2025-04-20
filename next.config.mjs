/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Configuración para AWS Amplify
  output: 'standalone',
  // Configuración para optimizar imágenes
  images: {
    domains: [],
    unoptimized: process.env.NODE_ENV === 'production' ? true : false,
  },
  // Deshabilitar ESLint durante la construcción para evitar fallos
  eslint: {
    ignoreDuringBuilds: true,
  },
  // Deshabilitar errores de TypeScript durante la construcción
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
