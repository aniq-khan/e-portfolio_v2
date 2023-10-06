/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    protocol: 'https',
    hostname: 'cdn.sanity.io',
    domains: ['cdn.sanity.io'],
      port: '',
      pathname: '/images/*',
  }
}

module.exports = nextConfig
