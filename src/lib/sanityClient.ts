import { createClient } from 'next-sanity';
 
const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.SANITY_API_VERSION || "1",
  token: process.env.SANITY_TOKEN,
  useCdn: true,  
});

export default sanityClient;
