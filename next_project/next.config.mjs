/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        localPatterns: [
            {
                pathname: "/assets/images/**",
                search: ""
            }
        ],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
                port: "",
                pathname: "/**"
            },
            {
                protocol: "https",
                hostname: "images.pexels.com",
                port: "",
                pathname: "/**"
            },
                        {
                protocol: "https",
                hostname: "render.fineartamerica.com",
                port: "",
                pathname: "/**"
            },
        ]
    }
};

export default nextConfig;
