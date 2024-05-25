/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: {
          compilationMode: 'annotation',
        },
        ppr: 'incremental',
        after: true,

      },
};

export default nextConfig;
