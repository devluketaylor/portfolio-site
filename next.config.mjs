/** @type {import('next').NextConfig} */
export default {
    // Blog/project/settings content is fetched at runtime from the Phluent Labs
    // portfolio API (see lib/portfolio-api.ts), so there's no build-time content
    // pipeline here anymore. Allow remote images from the PL/UploadThing hosts so
    // cover images and project thumbnails render via next/image.
    images: {
        remotePatterns: [
            { protocol: "https", hostname: "**.ufs.sh" },
            { protocol: "https", hostname: "utfs.io" },
            { protocol: "https", hostname: "phluentlabs.com" },
        ],
    },
};
