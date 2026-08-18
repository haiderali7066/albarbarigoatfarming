import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Al-Barbari Goat Farming',
    short_name: 'Al-Barbari',
    description: 'Premium Purebred Bakray & Aqeeqah Services in Lahore',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#12823b',
    icons: [
      {
        src: '/logo.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/logo.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}