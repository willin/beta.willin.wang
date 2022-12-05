import { NextApiResponse } from 'next';

function generateSiteMap(posts: { id: string }[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     <url>
       <loc>https://willin.wang</loc>
     </url>
     <url>
       <loc>https://willin.wang/zh-TW/</loc>
     </url>
     ${posts
       .map(({ id }) => {
         return `
       <url>
           <loc>https://willin.wang/posts/${id}</loc>
       </url>
     `;
       })
       .join('')}
   </urlset>
 `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }: { res: NextApiResponse }) {
  // We make an API call to gather the URLs for our site
  const request = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts: { id: string }[] = await request.json();

  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
