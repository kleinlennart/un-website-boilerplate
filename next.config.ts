import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    trailingSlash: true,
    // FIXME: Change to empty if CNAMEed to TLD
    basePath: '/un-website-boilerplate',
    assetPrefix: '/un-website-boilerplate',
    images: {
        unoptimized: true
    },
}

export default nextConfig