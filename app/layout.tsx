import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.acteauto502.ro'),
  applicationName: 'Acte Auto 502',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-502-48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon-502-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon-502.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-touch-icon-502.png', sizes: '180x180', type: 'image/png' }],
  },
  title: 'Înmatriculări Auto Cluj-Napoca | Acte Auto 502',
  description: 'Înmatriculări auto, contracte, RAR, ITP și traduceri autorizate în Cluj-Napoca și împrejurimi. Contactează Acte Auto 502 la 0753.867.235.',
  openGraph: {
    title: 'Înmatriculări Auto Cluj-Napoca | Acte Auto 502',
    description: 'Servicii de acte auto în Cluj-Napoca și împrejurimi.',
    locale: 'ro_RO',
    type: 'website',
    siteName: 'Acte Auto 502',
    url: '/',
    images: [{ url: '/images/hero-road-v2.png', alt: 'Acte Auto 502 — servicii auto în Cluj-Napoca' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#17231e',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ro" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        <a className="skip-link" href="#main-content">Sari la conținut</a>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
