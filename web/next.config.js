/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'dl.airtable.com',
      'https://dl.airtable.com',
    ],
  },
}

module.exports = nextConfig
