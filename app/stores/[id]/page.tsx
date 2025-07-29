import { notFound } from 'next/navigation'
import { Star, MapPin, Phone, Mail, Globe, Calendar, ArrowLeft, ShoppingBag } from 'lucide-react'
import { stores } from '@/data/stores'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

interface StorePageProps {
  params: {
    id: string
  }
}

export default function StorePage({ params }: StorePageProps) {
  const store = stores.find(s => s.id === params.id)
  
  if (!store) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Store Header */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link href="/stores" className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to all stores
            </Link>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Store Image & Basic Info */}
            <div>
              <div className="bg-white rounded-2xl shadow-lg p-8 text-center mb-8">
                <div className="text-8xl mb-6">{store.image}</div>
                {store.featured && (
                  <span className="inline-block bg-primary-600 text-white text-sm font-bold px-3 py-1 rounded-full mb-4">
                    Featured Store
                  </span>
                )}
                <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
                  {store.name}
                </h1>
                <p className="text-lg text-primary-600 font-medium mb-4">{store.category}</p>
                
                {/* Rating */}
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(store.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{store.rating}</span>
                  <span className="text-gray-500">({store.reviewCount} reviews)</span>
                </div>

                {/* Specialties */}
                <div className="flex flex-wrap gap-2 justify-center">
                  {store.specialties.map((specialty, index) => (
                    <span
                      key={index}
                      className="inline-block bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-display font-semibold text-lg text-gray-900 mb-4">
                  Contact Information
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-primary-500" />
                    <span className="text-gray-700">{store.location}, {store.country}</span>
                  </div>
                  {store.phone && (
                    <div className="flex items-center space-x-3">
                      <Phone className="h-5 w-5 text-primary-500" />
                      <a href={`tel:${store.phone}`} className="text-gray-700 hover:text-primary-600">
                        {store.phone}
                      </a>
                    </div>
                  )}
                  {store.email && (
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-primary-500" />
                      <a href={`mailto:${store.email}`} className="text-gray-700 hover:text-primary-600">
                        {store.email}
                      </a>
                    </div>
                  )}
                  {store.established && (
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-primary-500" />
                      <span className="text-gray-700">Established {store.established}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Store Description */}
            <div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {store.longDescription}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {store.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Discover authentic handcrafted items from {store.name}
            </p>
          </div>

          {store.products.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {store.products.map((product) => (
                <div key={product.id} className="card hover:shadow-lg transition-shadow duration-300 group">
                  {/* Product Image */}
                  <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary-50 group-hover:to-primary-100 transition-colors duration-300">
                    <div className="text-4xl text-center mb-2">{product.image}</div>
                    {!product.inStock && (
                      <div className="absolute top-2 right-2">
                        <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded-full">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Product Info */}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-lg font-bold text-primary-600">
                        ${product.price} {product.currency}
                      </div>
                      <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    <button
                      disabled={!product.inStock}
                      className={`w-full font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center ${
                        product.inStock
                          ? 'bg-primary-600 hover:bg-primary-700 text-white'
                          : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <ShoppingBag className="h-4 w-4 mr-2" />
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">📦</div>
              <h3 className="text-xl font-display font-semibold text-gray-900 mb-2">
                Products Coming Soon
              </h3>
              <p className="text-gray-600 mb-6">
                {store.name} is setting up their product catalog. Check back soon!
              </p>
              <div className="flex justify-center space-x-4">
                {store.phone && (
                  <a href={`tel:${store.phone}`} className="btn-primary">
                    Call Store
                  </a>
                )}
                {store.email && (
                  <a href={`mailto:${store.email}`} className="btn-secondary">
                    Email Store
                  </a>
                )}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-primary-500 to-primary-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            Support {store.name}
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Every purchase helps preserve cultural heritage and supports the local community.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {store.phone && (
              <a href={`tel:${store.phone}`} className="bg-white text-primary-600 font-medium py-3 px-8 rounded-lg hover:bg-gray-50 transition-colors">
                Call {store.name}
              </a>
            )}
            {store.email && (
              <a href={`mailto:${store.email}`} className="bg-primary-700 text-white font-medium py-3 px-8 rounded-lg hover:bg-primary-800 transition-colors">
                Send Message
              </a>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

// Generate static params for all store pages
export async function generateStaticParams() {
  return stores.map((store) => ({
    id: store.id,
  }))
} 