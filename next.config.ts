import type { NextConfig } from "next";

const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
        unoptimized: true
    },
    basePath: process.env.NODE_ENV === 'production' ? '/my-nextjs-app' : '',
    assetPrefix: process.env.NODE_ENV === 'production' ? '/my-nextjs-app/' : '',
}

module.exports = nextConfig