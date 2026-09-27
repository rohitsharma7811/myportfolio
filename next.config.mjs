/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export: `npm run build` writes a plain HTML/CSS/JS site to /out
  // that can be hosted anywhere (Netlify, Vercel, GitHub Pages, cPanel...).
  output: "export",
  images: { unoptimized: true },
  reactStrictMode: true,
};

export default nextConfig;
