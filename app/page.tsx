import Header from '@/components/Header'
import Hero from '@/components/Hero'
import FeaturedStores from '@/components/FeaturedStores'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedStores />
      <Footer />
    </main>
  )
} 