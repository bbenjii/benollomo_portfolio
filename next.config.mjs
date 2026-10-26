/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [{source: "/photography", destination: "/pics", permanent: true}];
    },
};

export default nextConfig;
