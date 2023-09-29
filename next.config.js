/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['github.com'],
    },
    // async rewrites() {
    //     return [
    //         {
    //             source: '/api/:path*',
    //             destination: 'http://localhost:3001/api/:path*', // Replace with your Express API's URL
    //         },
    //     ];
    // },
}

module.exports = nextConfig
