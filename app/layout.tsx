import type { Metadata } from 'next'
import './globals.css'
import { AuthProvider } from '@/contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Bazaar - Tibetan & Himalayan Marketplace',
  description: 'Centralized platform helping Tibetan and Himalayan businesses get their products online and drive traffic to their stores.',
  keywords: 'Tibetan, Himalayan, marketplace, business, online store, cultural products',
  authors: [{ name: 'Bazaar Team' }],
  openGraph: {
    title: 'Bazaar - Tibetan & Himalayan Marketplace',
    description: 'Discover authentic Tibetan and Himalayan products from local businesses',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full font-sans antialiased">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
} 