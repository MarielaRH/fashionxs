/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    domains: ["./public", "fakestoreapi.com", "lh3.googleusercontent.com"]
  }
}

module.exports = nextConfig
