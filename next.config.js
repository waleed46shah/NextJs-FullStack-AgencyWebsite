/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["images.pexels.com", "www.pexels.com" ,"images.unsplash.com", "www.unsplash.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
}

module.exports = nextConfig
