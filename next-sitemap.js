const { createClient } = require("@sanity/client");
const fs = require("fs");
// import {createClient} from '@sanity/client'

// generate Time 
const now = new Date();
const year = now.getFullYear();
const month = String(now.getMonth() + 1).padStart(2, '0');
const day = String(now.getDate()).padStart(2, '0');
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const seconds = String(now.getSeconds()).padStart(2, '0');
const formattedDateTime = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}+00:00`;

const config = {
     projectId: "g4zoa46z",
     dataset: "production",
     apiVersion: "2021-10-14",
     useCdn: false,
};

const SITE_URL = "https://www.budgetrepaircenter.nz";

const sanityClient = createClient(config);

async function generateSitemap() {
  const query = `*[ _type == "blogs" && defined(slug.current)]{
    "slug": slug.current,
    _updatedAt
  }`;
  const Servicesquery = `*[ _type == "services" && defined(slug.current)]{
     "slug": slug.current,
     _updatedAt
   }`;

  const documents = await sanityClient.fetch(query);
  const services = await sanityClient.fetch(Servicesquery);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
          <loc>${SITE_URL}</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/blog</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/request-a-qoute</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/contact-us</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
       <url>
          <loc>${SITE_URL}/about</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      <url>
          <loc>${SITE_URL}/services</loc>
          <lastmod>${formattedDateTime}</lastmod>
          <priority>1.00</priority>
      </url>
      ${documents
        .map(
          (item) => `
        <url>
          <loc>${SITE_URL}/blog/${item.slug}</loc>
          <lastmod>${item._updatedAt}</lastmod>
          <priority>1.00</priority>
        </url>
       `).join("")}
       ${services
          .map(
            (item) => `
          <url>
            <loc>${SITE_URL}/services/${item.slug}</loc>
            <lastmod>${item._updatedAt}</lastmod>
            <priority>1.00</priority>
          </url>
         `).join("")}

    </urlset>
  `;
  fs.writeFileSync("public/sitemap.xml", sitemap);
}

generateSitemap();