import axios from "axios";
import { getServerSideSitemapLegacy } from "next-sitemap";

export const getServerSideProps = (async (context) => {

    const { req } = context;
    const baseUrl = process.env.NODE_ENV === "development" ? 'http://localhost:3000' : 'https://www.yourwebsite.com';
    let result = await axios.get(`${baseUrl}/api/posts`);

    const fields = result.data.map((d) => {
        return {
            loc: `${baseUrl}/blogs/${d.slug}`,
            lastmod: new Date(d.publishedDate).toISOString(),
            priority: 0.7,
            changefreq: "weekly",
        }
    })

    return getServerSideSitemapLegacy(context, fields);
})

export default function siteUrl() { }