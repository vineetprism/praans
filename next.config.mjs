/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  // Optimize images
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true, // Added update
  },

  // Enable experimental features for better performance
  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

  // Bundle analyzer in development
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      }
    }
    return config
  },

  // Handle headers for cache-control
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable', // Allow caching for non-sensitive pages
          },
        ],
      },
      {
        source: '/login', // Prevent caching for login pages
        headers: [
          {
            key: 'Cache-Control',
            value: 'no-store', // Prevent caching
          },
        ],
      },
    ];
  },

  eslint: {
    ignoreDuringBuilds: true, // Added update
  },

  typescript: {
    ignoreBuildErrors: true, // Added update
  },
};

export default nextConfig;
