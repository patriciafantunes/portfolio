import { createClient, Entry } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID || '',
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || '',
});

export default client;


interface LandingPageFields {
    fields: {
        title: string;
        components: string[];
    }; 
    contentTypeId: string;
   // Ajuste conforme o modelo no Contentful
};

export async function fetchLandingPage(id: string): Promise<LandingPageFields | null> {
  try {
    const entry: Entry<LandingPageFields> = await client.getEntry(id);
    return entry.fields;
  } catch (error) {
    console.error('Error fetching landing page:', error);
    return null;
  }
}