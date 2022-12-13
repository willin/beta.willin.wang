import { supportedLanguages } from '@/i18n';
import { getDirectusClient } from '@/models/directus';
import { NextApiResponse } from 'next';

/* eslint-disable no-unused-vars */
enum ContentType {
  POST = 'post',
  PAGE = 'page',
  SNIPPET = 'snippet'
}

enum ContentStatus {
  PUBLISHED = 'published',
  DFRAFT = 'draft',
  ARCHIVED = 'archived'
}

type Contents = {
  id: string;
  slug: string;
  title: string;
  price: number;
  type: ContentType;
  locale: string;
  status: ContentStatus;
  body: string;
  wordcount: number;
  readtime: number;
  date_created: string;
  date_updated: string;
};

export const getContentList = async (type: ContentType, locale: string): Promise<Contents[]> => {
  const directus = await getDirectusClient();
  const { data } = await directus.items('contents').readByQuery({
    fields: ['id', 'status', 'date_created', 'date_updated', 'slug', 'title', 'type', 'locale', 'wordcount', 'readtime', 'tags.tags_id.*'],
    filter: {
      type: {
        _eq: type
      },
      locale: {
        _eq: locale
      },
      status: {
        _eq: ContentStatus.PUBLISHED
      }
    }
  });

  return data as any[] as Contents[];
};

function generateSiteMap(posts: { slug: string }[], pages: { slug: string }[], snippets: { slug: string }[]) {
  const [, ...others] = supportedLanguages;
  const langs = ['', ...others.map((lang) => `/${lang}`)];
  const baseUrl = 'https://willin.wang';
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <!--We manually set the two URLs we know already-->
     ${langs
       .map((lang) => {
         return `
        <url>
          <loc>${baseUrl}${lang}</loc>
        </url>
        <url>
          <loc>${baseUrl}${lang}/posts</loc>
        </url>
        <url>
          <loc>${baseUrl}${lang}/snippets</loc>
        </url>
       `;
       })
       .join('')}
     ${posts
       .map(({ slug }) => {
         return langs
           .map((lang) => {
             return `
          <url>
              <loc>${baseUrl}${lang}/posts/${slug}</loc>
          </url>
        `;
           })
           .join('');
       })
       .join('')}
    ${snippets
      .map(({ slug }) => {
        return langs
          .map((lang) => {
            return `
         <url>
             <loc>${baseUrl}${lang}/snippets/${slug}</loc>
         </url>
       `;
          })
          .join('');
      })
      .join('')}
    ${pages
      .map(({ slug }) => {
        return langs
          .map((lang) => {
            return `
         <url>
             <loc>${baseUrl}${lang}/${slug}</loc>
         </url>
       `;
          })
          .join('');
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
  const posts = await getContentList(ContentType.POST, 'zh-CN');
  const pages = await getContentList(ContentType.PAGE, 'zh-CN');
  const snippets = await getContentList(ContentType.SNIPPET, 'zh-CN');
  // We generate the XML sitemap with the posts data
  const sitemap = generateSiteMap(posts, pages, snippets);

  res.setHeader('Content-Type', 'text/xml');
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {}
  };
}

export default SiteMap;
