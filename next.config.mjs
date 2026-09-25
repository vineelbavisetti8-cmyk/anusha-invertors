/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 768, 1024, 1280, 1600, 1920],
    imageSizes: [64, 128, 256, 512],
  },
  // Allow Three.js and R3F to work properly
  transpilePackages: ['three'],
};

export default nextConfig;
