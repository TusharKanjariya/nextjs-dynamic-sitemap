const siteUrl = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://www.yourwebsite.com";

module.exports = {
    siteUrl,
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                disallow: '/thank-you', // Disallow a specific folder
            },
            {
                userAgent: '*',
                allow: '/', // Allow all pages by default
            }
        ],
        additionalSitemaps: [`${siteUrl}/sitemap-blog.xml`, `${siteUrl}/sitemap-posts.xml`]
    },
    exclude: [
        '/exclude-file', // for specific page/file
        '/exclude/*', // for Folder
    ],
};