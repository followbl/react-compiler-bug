const nextConfig = {
    pageExtensions: ["ts", "tsx", "md"],
    reactStrictMode: true,

    experimental: {
        ppr: true,
        dynamicOnHover: true,
        reactCompiler: true,
    },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: true },
    productionBrowserSourceMaps: false,
    poweredByHeader: false,
    turbopack: {
        resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
    },
}

export default nextConfig
