'use client'

import { useState, useEffect } from 'react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface SearchBarProps {
  placeholder?: string
  onSearch?: (query: string) => void
  className?: string
  initialValue?: string
}

export default function SearchBar({ 
  placeholder = "Search products, stores...", 
  onSearch,
  className = "",
  initialValue = ""
}: SearchBarProps) {
  const [query, setQuery] = useState(initialValue)
  const router = useRouter()

  // Update local state when initialValue changes
  useEffect(() => {
    setQuery(initialValue)
  }, [initialValue])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (query.trim()) {
      if (onSearch) {
        onSearch(query.trim())
      } else {
        // Navigate to stores page with search query
        router.push(`/stores?search=${encodeURIComponent(query.trim())}`)
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setQuery(value)
    
    // For live search on stores page
    if (onSearch && value.trim()) {
      onSearch(value.trim())
    } else if (onSearch && !value.trim()) {
      onSearch('')
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
        placeholder={placeholder}
      />
    </form>
  )
} 