/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['image.tmdb.org'],
  },
  env: {
    MOVIE_DB_API_KEY: process.env.MOVIE_DB_API_KEY,
  },
}

module.exports = nextConfig
