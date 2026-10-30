import type { Metadata } from 'next'
import { LandingPage } from '@/components/landing-page'

export const metadata: Metadata = { alternates: { canonical: '/' } }

const business = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.acteauto502.ro/#business',
  name: 'Acte Auto 502',
  legalName: 'AGRAFE BIROTIC&COPY SOLUTIONS S.R.L.',
  url: 'https://www.acteauto502.ro/',
  telephone: '+40753867235',
  email: 'acteauto502@gmail.com',
  address: { '@type': 'PostalAddress', streetAddress: 'Bulevardul Eroilor nr. 7', addressLocality: 'Cluj-Napoca', addressRegion: 'Cluj', addressCountry: 'RO' },
  areaServed: { '@type': 'Place', name: 'Cluj-Napoca și împrejurimi, până la 40 km' },
  description: 'Serviciu privat de asistență pentru înmatriculări și acte auto în Cluj-Napoca și împrejurimi.',
}

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(business).replace(/</g, '\\u003c') }} /><LandingPage /></>
}
