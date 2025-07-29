'use client'

import { useState, useMemo, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Filter, Star, MapPin, ArrowRight, Globe, X } from 'lucide-react'
import { stores, categories, countries } from '@/data/stores'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SearchBar from '@/components/SearchBar'
import Link from 'next/link'

function StoresContent() {
  const searchParams = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All Categories')
  const [selectedCountry, setSelectedCountry] = useState('All Countries')
  const [showFilters, setShowFilters] = useState(false)

  // Handle URL search parameters
  useEffect(() => {
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      setSearchTerm(searchQuery)
    }
  }, [searchParams])

  const filteredStores = useMemo(() => {
    return stores.filter(store => {
      const matchesSearch = searchTerm === '' || 
                           store.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           store.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           store.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           store.specialties.some(specialty => 
                             specialty.toLowerCase().includes(searchTerm.toLowerCase())
                           ) ||
                           store.products.some(product =>
                             product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             product.description.toLowerCase().includes(searchTerm.toLowerCase())
                           )
      
      const matchesCategory = selectedCategory === 'All Categories' || 
                             store.category === selectedCategory
      
      const matchesCountry = selectedCountry === 'All Countries' || 
                            store.country === selectedCountry
      
      return matchesSearch && matchesCategory && matchesCountry
    })
  }, [searchTerm, selectedCategory, selectedCountry])

  const handleSearch = (query: string) => {
    setSearchTerm(query)
  }

  const clearSearch = () => {
    setSearchTerm('')
  }

  const clearAllFilters = () => {
    setSearchTerm('')
    setSelectedCategory('All Categories')
    setSelectedCountry('All Countries')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-accent-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6">
              Discover Amazing
              <span className="text-primary-600 block">Tibetan & Himalayan Stores</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Support authentic businesses preserving cultural heritage while offering unique, handcrafted treasures from across the Himalayas.
            </p>
          </div>

          {/* Search and Filters */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            {/* Search Bar */}
            <div className="mb-6">
              <SearchBar 
                placeholder="Search stores, products, locations, or specialties..."
                onSearch={handleSearch}
                initialValue={searchTerm}
              />
              {searchTerm && (
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm text-gray-600">
                    Searching for: <strong>"{searchTerm}"</strong>
                  </span>
                  <button
                    onClick={clearSearch}
                    className="text-sm text-primary-600 hover:text-primary-700 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear
                  </button>
                </div>
              )}
            </div>

            {/* Filter Toggle */}
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-4">
                <div className="text-sm text-gray-600">
                  {filteredStores.length} stores found
                </div>
                {(searchTerm || selectedCategory !== 'All Categories' || selectedCountry !== 'All Countries') && (
                  <button
                    onClick={clearAllFilters}
                    className="text-sm text-red-600 hover:text-red-700 flex items-center"
                  >
                    <X className="h-4 w-4 mr-1" />
                    Clear All Filters
                  </button>
                )}
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium"
              >
                <Filter className="h-4 w-4" />
                <span>Filters</span>
                {(selectedCategory !== 'All Categories' || selectedCountry !== 'All Countries') && (
                  <span className="bg-primary-100 text-primary-700 text-xs px-2 py-1 rounded-full">
                    {[
                      selectedCategory !== 'All Categories' ? 1 : 0,
                      selectedCountry !== 'All Countries' ? 1 : 0
                    ].reduce((a, b) => a + b, 0)}
                  </span>
                )}
              </button>
            </div>

            {/* Filters */}
            {showFilters && (
              <div className="grid md:grid-cols-2 gap-4 pt-4 border-t border-gray-200">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Category
                  </label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {categories.map(category => (
                      <option key={category} value={category}>{category}</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <select
                    value={selectedCountry}
                    onChange={(e) => setSelectedCountry(e.target.value)}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  >
                    {countries.map(country => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Store Listings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredStores.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-display font-semibold text-gray-900 mb-2">
                No stores found
              </h3>
              <p className="text-gray-600 mb-8">
                Try adjusting your search terms or filters to find what you're looking for.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('All Categories')
                  setSelectedCountry('All Countries')
                }}
                className="btn-primary"
              >
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredStores.map((store) => (
                <div key={store.id} className="card hover:shadow-lg transition-all duration-300 group">
                  {/* Store Header */}
                  <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-primary-50 group-hover:to-primary-100 transition-colors duration-300">
                    <div className="text-5xl text-center mb-4">{store.image}</div>
                    {store.featured && (
                      <div className="absolute top-4 right-4">
                        <span className="bg-primary-600 text-white text-xs font-bold px-2 py-1 rounded-full">
                          Featured
                        </span>
                      </div>
                    )}
                  </div>
                  
                  {/* Store Info */}
                  <div className="p-6">
                    <div className="mb-3">
                      <h3 className="font-display font-semibold text-xl text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                        {store.name}
                      </h3>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-primary-600 font-medium">{store.category}</span>
                        <div className="flex items-center text-gray-500">
                          <Globe className="h-4 w-4 mr-1" />
                          <span>{store.country}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {store.description}
                    </p>

                    {/* Specialties */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {store.specialties.slice(0, 3).map((specialty, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                          >
                            {specialty}
                          </span>
                        ))}
                        {store.specialties.length > 3 && (
                          <span className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full">
                            +{store.specialties.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="text-sm font-medium text-gray-900">{store.rating}</span>
                        <span className="text-sm text-gray-500">({store.reviewCount})</span>
                      </div>
                      
                      <div className="flex items-center text-sm text-gray-500">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span className="truncate max-w-32">{store.location}</span>
                      </div>
                    </div>
                    
                    <Link
                      href={`/stores/${store.id}`}
                      className="w-full bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center group-hover:bg-primary-600 group-hover:text-white"
                    >
                      Visit Store
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default function StoresPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading stores...</div>}>
      <StoresContent />
    </Suspense>
  )
} 