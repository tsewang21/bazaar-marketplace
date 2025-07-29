'use client'

import { Star, MapPin, ArrowRight } from 'lucide-react'
import { stores } from '@/data/stores'
import Link from 'next/link'

const featuredStores = stores.filter(store => store.featured)

export default function FeaturedStores() {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
            <span className="text-primary-600 font-medium">Featured Businesses</span>
            <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-gray-900 mb-6">
            Discover Amazing
            <span className="text-primary-600 block">Local Businesses</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each store tells a unique story of cultural heritage, craftsmanship, and community. 
            Support these incredible businesses and discover authentic treasures.
          </p>
        </div>

        {/* Store Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredStores.map((store) => (
            <div key={store.id} className="card hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
              {/* Store Image/Icon */}
              <div className="relative p-8 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary-50 group-hover:to-primary-100 transition-colors duration-300">
                <div className="text-6xl text-center mb-4">{store.image}</div>
                <div className="absolute top-4 right-4">
                  <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                    Featured
                  </span>
                </div>
              </div>
              
              {/* Store Info */}
              <div className="p-6">
                <div className="mb-3">
                  <h3 className="font-display font-semibold text-lg text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                    {store.name}
                  </h3>
                  <span className="text-sm text-primary-600 font-medium">{store.category}</span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {store.description}
                </p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current text-yellow-400" />
                    <span className="text-sm font-medium text-gray-900">{store.rating}</span>
                    <span className="text-sm text-gray-500">({store.reviewCount})</span>
                  </div>
                  
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="truncate">{store.location}</span>
                  </div>
                </div>
                
                <Link href={`/stores/${store.id}`} className="w-full bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 font-medium py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white">
                  Visit Store
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center">
          <Link href="/stores" className="btn-primary text-lg px-8 py-3 flex items-center justify-center mx-auto">
            Browse All Stores
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  )
} 