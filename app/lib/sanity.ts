import createClient from '@sanity/client';

const sanityConfig = {
  projectId: process.env.SANITY_PROJECT_ID || 'crrougir',
  dataset: process.env.SANITY_DATASET || 'production',
  useCdn: process.env.NODE_ENV !== 'production',
  apiVersion: '2021-03-25'
};

export const sanityClient = createClient(sanityConfig);

export const previewClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token: process.env.SANITY_API_TOKEN
});

export const getClient = (preview) => (preview ? previewClient : sanityClient);
