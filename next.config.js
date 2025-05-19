/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: true,
  sassOptions: {
    includePaths: ["./styles"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
