/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 512],
  },
  // Transpile Three.js ecosystem packages for Next.js SSR/client boundary
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
  typescript: {
    // Prevent 3rd-party React 19 / R3F intrinsic element typing mismatch from blocking deployment
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
