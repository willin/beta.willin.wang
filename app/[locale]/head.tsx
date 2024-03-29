export default function DefaultHead({ imported }: { imported?: boolean } = { imported: false }) {
  return (
    <>
      {!imported && (
        <>
          <title>Willin Wang</title>
          <meta name='description' content='To be Willin is to be willing.' />
        </>
      )}
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link href='/favicon.png' rel='shortcut icon' />
    </>
  );
}
