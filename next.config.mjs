/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true,
    },
    experimental: {
        appDir: true,
    },
    basePath: "/project-golden-city",
    assetPrefix: "/project-golden-city/",
};

export default nextConfig;
