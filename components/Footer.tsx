'use client'

import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Brand Section */}
          <div>
            <div className="gradient-bg text-white px-3 py-2 rounded-lg font-display font-bold text-xl mb-6 inline-block">
              བཟར། Bazaar
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering Tibetan and Himalayan communities by connecting traditional businesses 
              with global customers. Every purchase preserves culture and creates opportunities.
            </p>

          </div>





          {/* Contact Info */}
          <div>
            <h3 className="font-display font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">hello@bazaar.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5" />
                <span className="text-gray-300">
                  Supporting communities from<br />
                  Dharamshala to New York
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Cultural Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="text-center">
            <div className="text-2xl mb-4">🕉️ ☸️ 🏔️</div>
            <p className="text-gray-400 text-sm max-w-2xl mx-auto">
              "In the spirit of community and compassion, we honor the rich traditions of Tibet and the Himalayas. 
              May our marketplace bring prosperity to all beings."
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">
            © 2024 Bazaar. Made with ❤️ for Tibetan & Himalayan communities.
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
} 