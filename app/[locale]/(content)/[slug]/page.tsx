// import { getContentsStaticParams, ContentType } from '@/models/contents';

// export async function generateStaticParams() {
//   const data = await getContentsStaticParams(ContentType.PAGE);

//   console.log(data);
//   return data;
// }

export default async function Page(args) {
  console.log(args);
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
}
