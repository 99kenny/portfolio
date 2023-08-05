/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'www.notion.so',
      'images.unsplash.com',
      "avatars.githubusercontent.com",
      "user-images.githubusercontent.com"
    ]
  }
}

module.exports = nextConfig
