/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  reactStrictMode: true,
  // CloudFlare: To use image next/image, something like this needs to be implemented
  images: {
    loader: "imgix",
    path: "/",
  },
};

// replace [yourprojectname] and [yourdomain.com] with your actual project name and (custom) domain
// const cloudflareImageLoader = ({ src, width, quality }) => {
//   if (!quality) {
//     quality = 75;
//   }
//   return `https://image.tmtlabs.workers.dev?width=${width}&quality=${quality}&image=https://tmtlabs.xyz${src}`;
// };

module.exports = nextConfig;
// module.exports = {
//   experimental: {
//     addDir: true
//   }
// };
