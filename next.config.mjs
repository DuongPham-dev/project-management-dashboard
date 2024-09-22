/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      // Configs test
      {
        port: "",
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
      },
      {
        port: "",
        protocol: "https",
        hostname: "nextui.org",
      },
      { port: "", protocol: "https", hostname: "media.dolenglish.vn" },
      { hostname: "randomuser.me", port: "", protocol: "https" },
    ],
  },
};

export default nextConfig;
