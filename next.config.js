/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: { emotion: true },
  redirects () {
    return [
      {
        source: '/',
        destination: '/cats',
        permanent: true,
      },
    ]
  },
  images: {
    domains: ['cdn2.thecatapi.com'],
  },
  reactStrictMode: false,
}

module.exports = nextConfig
