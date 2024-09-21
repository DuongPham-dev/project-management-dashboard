/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        port: "",
        protocol: "https",
        hostname: "https://avatars.githubusercontent.com/",
      },
      {
        port: "",
        protocol: "https",
        hostname: "nextui.org",
      },
    ],
  },
};

export default nextConfig;
