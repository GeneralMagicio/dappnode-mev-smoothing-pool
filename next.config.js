/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://157.90.93.245:7300/:path*',
      },
    ]
  },
}

module.exports = nextConfig
