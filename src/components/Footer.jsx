import React from "react";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 w-full border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="grid md:grid-cols-6 gap-12">
          {/* Logo and description section */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img
                src="/logo.png"
                className="h-12"
                alt="Logo"
              />
              <span className="text-2xl font-semibold dark:text-white">
                Question Paper Maker
              </span>
            </a>
            <p className="text-gray-600 dark:text-gray-400">
              Creating perfect question papers made easy and efficient.
            </p>
          </div>

          {/* Links section with better spacing */}
          <div className="md:col-span-4 grid grid-cols-3 gap-8">
            <div>
              <h2 className="mb-4 font-semibold dark:text-white">Resources</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-500">Documentation</a></li>
                <li><a href="#" className="hover:text-blue-500">Help Center</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold dark:text-white">Company</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-500">About Us</a></li>
                <li><a href="#" className="hover:text-blue-500">Contact</a></li>
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-semibold dark:text-white">Legal</h2>
              <ul className="text-gray-600 dark:text-gray-400">
                <li><a href="#" className="hover:text-blue-500">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-blue-500">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <hr className="my-6 border-gray-200 dark:border-gray-700" />
        
        {/* Bottom section with better alignment */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            © 2025 Question Paper Maker. All rights reserved by Sumit
          </span>
          <div className="flex gap-6">
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
