/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: [
    '@cloudscape-design/components',
    '@cloudscape-design/component-toolkit'
  ]
}

module.exports = nextConfig
