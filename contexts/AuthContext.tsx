'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User, AuthState, LoginCredentials, RegisterCredentials } from '@/types/auth'
// Mock cookie functionality for client-side state management
const mockCookies = {
  get: (key: string) => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem(key)
    }
    return null
  },
  set: (key: string, value: string, options?: { expires?: number }) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(key, value)
    }
  },
  remove: (key: string) => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(key)
    }
  }
}

interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<boolean>
  register: (credentials: RegisterCredentials) => Promise<boolean>
  logout: () => void
  updateUser: (user: Partial<User>) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  // Check for existing session on mount
  useEffect(() => {
    const token = mockCookies.get('auth-token')
    const userData = mockCookies.get('user-data')
    
    if (token && userData) {
      try {
        const user = JSON.parse(userData)
        setState({
          user,
          loading: false,
          error: null
        })
      } catch (error) {
        // Clear corrupted cookies
        mockCookies.remove('auth-token')
        mockCookies.remove('user-data')
        setState({
          user: null,
          loading: false,
          error: null
        })
      }
    } else {
      setState(prev => ({ ...prev, loading: false }))
    }
  }, [])

  const login = async (credentials: LoginCredentials): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      // Simulate API call - In real app, this would hit your authentication endpoint
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock authentication logic
      if (credentials.email === 'demo@bazaar.com' && credentials.password === 'demo123') {
        const user: User = {
          id: '1',
          email: credentials.email,
          name: 'Demo User',
          role: 'customer',
          createdAt: new Date(),
          emailVerified: true
        }
        
        // Store in cookies (in real app, use secure HTTP-only cookies)
        mockCookies.set('auth-token', 'demo-token', { expires: 7 })
        mockCookies.set('user-data', JSON.stringify(user), { expires: 7 })
        
        setState({
          user,
          loading: false,
          error: null
        })
        return true
      } else {
        setState({
          user: null,
          loading: false,
          error: 'Invalid email or password'
        })
        return false
      }
    } catch (error) {
      setState({
        user: null,
        loading: false,
        error: 'Login failed. Please try again.'
      })
      return false
    }
  }

  const register = async (credentials: RegisterCredentials): Promise<boolean> => {
    setState(prev => ({ ...prev, loading: true, error: null }))
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock registration logic
      if (credentials.password !== credentials.confirmPassword) {
        setState(prev => ({
          ...prev,
          loading: false,
          error: 'Passwords do not match'
        }))
        return false
      }
      
      const user: User = {
        id: Date.now().toString(),
        email: credentials.email,
        name: credentials.name,
        role: credentials.role || 'customer',
        createdAt: new Date(),
        emailVerified: false
      }
      
      // Store in cookies
      mockCookies.set('auth-token', `token-${user.id}`, { expires: 7 })
      mockCookies.set('user-data', JSON.stringify(user), { expires: 7 })
      
      setState({
        user,
        loading: false,
        error: null
      })
      return true
    } catch (error) {
      setState({
        user: null,
        loading: false,
        error: 'Registration failed. Please try again.'
      })
      return false
    }
  }

  const logout = () => {
    mockCookies.remove('auth-token')
    mockCookies.remove('user-data')
    setState({
      user: null,
      loading: false,
      error: null
    })
  }

  const updateUser = (userData: Partial<User>) => {
    if (state.user) {
      const updatedUser = { ...state.user, ...userData }
      mockCookies.set('user-data', JSON.stringify(updatedUser), { expires: 7 })
      setState(prev => ({
        ...prev,
        user: updatedUser
      }))
    }
  }

  const value: AuthContextType = {
    ...state,
    login,
    register,
    logout,
    updateUser
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
} 