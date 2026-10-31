import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://www.acteauto502.ro/' },
    { url: 'https://www.acteauto502.ro/inmatriculari-auto-cluj' },
    { url: 'https://www.acteauto502.ro/confidentialitate' },
  ]
}
