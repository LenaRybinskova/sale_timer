/*
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

module.exports = nextConfig*/
/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    basePath: '/sale_timer',
    assetPrefix: '/sale_timer/',
    images: {
        unoptimized: true
    }
}
module.exports = nextConfig