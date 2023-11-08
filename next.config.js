/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    pathname: 'cdn.sanity.io',
    domains: ['cdn.sanity.io'],
  }
}
module.exports = nextConfig
