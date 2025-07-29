'use client'

import { ArrowRight, MapPin, Store, Users } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-accent-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-1 bg-primary-500 rounded-full"></div>
              <span className="text-primary-600 font-medium">Empowering Communities</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-gray-900 leading-tight mb-6">
              Discover Authentic
              <span className="text-primary-600 block">Tibetan & Himalayan</span>
              Treasures
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Support local Tibetan and Himalayan businesses while discovering unique handcrafted products, 
              traditional foods, and cultural treasures. Every purchase helps preserve heritage and empower communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/stores" className="btn-primary text-lg px-8 py-3 flex items-center justify-center">
                Explore Marketplace
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link href="/#business" className="btn-secondary text-lg px-8 py-3">
                List Your Business
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary-100 rounded-full mb-3 mx-auto">
                  <Store className="h-6 w-6 text-primary-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">150+</div>
                <div className="text-sm text-gray-600">Local Stores</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-accent-100 rounded-full mb-3 mx-auto">
                  <Users className="h-6 w-6 text-accent-600" />
                </div>
                <div className="text-2xl font-bold text-gray-900">5,000+</div>
                <div className="text-sm text-gray-600">Happy Customers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-himalayan-gold/20 rounded-full mb-3 mx-auto">
                  <MapPin className="h-6 w-6 text-himalayan-gold" />
                </div>
                <div className="text-2xl font-bold text-gray-900">25+</div>
                <div className="text-sm text-gray-600">Communities</div>
              </div>
            </div>
          </div>
          
          {/* Image/Visual */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-2">
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl h-80 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏔️</div>
                  <div className="text-2xl font-bold mb-2">བཟར།</div>
                  <div className="text-lg opacity-90">Connecting Communities</div>
                </div>
              </div>
            </div>
            
            {/* Floating cards */}
            <div className="absolute -top-4 -left-4 bg-white rounded-lg shadow-lg p-4 transform -rotate-6">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-himalayan-red rounded-full flex items-center justify-center text-white text-sm font-bold">
                  T
                </div>
                <div>
                  <div className="font-semibold text-sm">Tenzin's Crafts</div>
                  <div className="text-xs text-gray-500">Handmade Jewelry</div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 transform rotate-3">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-himalayan-blue rounded-full flex items-center justify-center text-white text-sm font-bold">
                  D
                </div>
                <div>
                  <div className="font-semibold text-sm">Dolma's Kitchen</div>
                  <div className="text-xs text-gray-500">Traditional Foods</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 