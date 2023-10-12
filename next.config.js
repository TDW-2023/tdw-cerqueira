/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    forceSwcTransforms: true,
  },
  images: {
    unoptimized: true
   },

   output: "export"
};

module.exports = nextConfig;



