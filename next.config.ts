import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    trailingSlash: true,
    basePath: '', // Explicitly set to empty string for root deployment
    assetPrefix: '', // Explicitly set to empty string for root deployment
    images: {
        unoptimized: true
    },
}

export default nextConfig