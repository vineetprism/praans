/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,

  // images: {
  //   formats: ['image/avif', 'image/webp'],
  //   deviceSizes: [320, 480, 768, 1024, 1280, 1600, 2000],
  //   imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  //   remotePatterns: [
  //     { protocol: 'https', hostname: 'a4m1n.praansconsultech.com', pathname: '/**' },
  //   ],
  //   unoptimized: false,
  //   minimumCacheTTL: 31536000,
  //   dangerouslyAllowSVG: false,
  // },


  images: {
  formats: ['image/avif', 'image/webp'],
  deviceSizes: [320,480,768,1024,1280,1600,2000],
  imageSizes: [16,32,48,64,96,128,256,384],
  remotePatterns: [
    { protocol: 'https', hostname: 'a4m1n.praansconsultech.com', pathname: '/**' },
    { protocol: 'https', hostname: 'prns.prisminfoways.com', pathname: '/**' }, // <-- add this
    // add any other hosts your API can return
  ],
  unoptimized: false,
  minimumCacheTTL: 31536000,
  dangerouslyAllowSVG: false,
},
  async headers() {
    return [
      {
        source: '/_next/static/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*\\.(jpg|jpeg|png|webp|avif|gif)$',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },

  experimental: {
    optimizePackageImports: ['lucide-react', '@radix-ui/react-icons'],
  },

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

  eslint: {
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
