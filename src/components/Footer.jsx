import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full border-t border-gray-200 dark:border-gray-700">
      {/* Wrapper div without max-width constraint for background color */}
      <div className="w-full">
        {/* Container for the main content - still centered but with full width background */}
        <div className="max-w-screen-xl mx-auto px-6 py-8">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-12 gap-8">
            {/* Logo and description section */}
            <div className="md:col-span-4">
              <a href="/" className="flex items-center gap-3 mb-4">
                <img
                  src="/logo.png"
                  className="h-10"
                  alt="Logo"
                />
                <span className="text-xl font-semibold text-gray-800 dark:text-white">
                  Question Paper Maker
                </span>
              </a>
              <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                Creating perfect question papers made easy and efficient. Streamline your workflow and save time with our comprehensive solution.
              </p>
            </div>

            {/* Empty space for better layout */}
            <div className="hidden md:block md:col-span-1"></div>

            {/* Links section with improved spacing and layout */}
            <div className="md:col-span-7 grid grid-cols-3 gap-8">
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                  Resources
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Documentation</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Help Center</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Tutorials</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">FAQs</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                  Company
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">About Us</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Contact</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Careers</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Blog</a></li>
                </ul>
              </div>
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white mb-4">
                  Legal
                </h2>
                <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Privacy Policy</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Terms of Service</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">Cookie Policy</a></li>
                  <li><a href="#" className="text-sm hover:text-blue-600 transition-colors">GDPR</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        {/* Full width divider line */}
        <hr className="border-gray-200 dark:border-gray-700 w-full" />
        
        {/* Bottom section container */}
        <div className="max-w-screen-xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <span className="text-sm text-gray-500 dark:text-gray-400">
              © 2025 Question Paper Maker. All rights reserved by Sumit
            </span>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4">
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;