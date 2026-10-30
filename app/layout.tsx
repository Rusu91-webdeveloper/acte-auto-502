import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Servicii Înmatriculări Auto | Acte Auto de la A la Z | Acte Auto 502',
  description: 'Servicii complete de înmatriculări auto: contracte, traduceri, RAR, ITP, numere definitive, radieri. Ne ocupăm de tot, rapid și fără bătăi de cap. Sună: 0753.867.235',
  openGraph: {
    title: 'Servicii Complete de Înmatriculări Auto | Acte Auto 502',
    description: 'Înmatriculări auto de la A la Z — simplu, rapid, fără bătăi de cap.',
    locale: 'ro_RO',
    type: 'website',
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
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
