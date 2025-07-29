export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  role: 'customer' | 'business' | 'admin'
  createdAt: Date
  emailVerified: boolean
}

export interface AuthState {
  user: User | null
  loading: boolean
  error: string | null
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterCredentials {
  name: string
  email: string
  password: string
  confirmPassword: string
  role?: 'customer' | 'business'
}

export interface AuthResponse {
  success: boolean
  user?: User
  token?: string
  error?: string
} 