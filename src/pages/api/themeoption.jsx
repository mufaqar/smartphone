// pages/api/siteSettings.js
import { client } from '../../../sanity/lib/client'

export default async function handler(req, res) {
  try {
    // Fetch siteSettings data from Sanity
    const result = await client.fetch(`
    *[_type == "siteSettings"]{
      headerNav,
      logo{
        asset->{
          url
        }
      },
      about ,
      socialicons,
      schedule,
      quicklinks,
      contact
    }
  `);
    // Send the result as a JSON response
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching siteSettings:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
