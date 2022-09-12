const postFields = `
  _id,
  title,
  excerpt,
  lang,
  tags[]->{
    name,
    "slug": slug.current
  },
  "slug": slug.current,
`;

export const postQuery = `
{
  "post": *[_type == "post" && slug.current == $slug] | order(_updatedAt desc) [0] {
    content,
    ${postFields}
  }
}`;
