/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "https://avatars.githubusercontent.com/",
      },
    ],
  },
};

export default nextConfig;
