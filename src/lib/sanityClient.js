import { createClient } from '@sanity/client';

// ⚠️  These values come from your .env file.
// After setting up Sanity (see README), create a .env file in portfolio2025/ with:
//   VITE_SANITY_PROJECT_ID=your_project_id
//   VITE_SANITY_DATASET=production

const client = createClient({
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || 'YOUR_PROJECT_ID',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // Use cached, fast CDN reads (fine for public portfolio data)
});

export default client;
