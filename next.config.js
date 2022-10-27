/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "github.com",
      "www.gravatar.com",
      "images.clerk.dev"
  ]
  }
}

module.exports = nextConfig
