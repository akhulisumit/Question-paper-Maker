import React, { useState } from "react";

function Navbar() {
  const navItems = ["Home", "About", "Services", "Pricing", "Contact"];
  const [active, setActive] = useState(null);

  return (
    <nav className="bg-white dark:bg-gray-900 fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            className="h-8"
            alt="Flowbite Logo"
          />
          <span className="text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </a>

        <div className="hidden md:block">
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setActive(item)}
                  className={`text-lg font-medium transition-colors duration-300 group relative cursor-pointer 
                    ${active === item 
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-md" 
                      : "text-gray-900 dark:text-white hover:text-blue-500"
                    }`}
                >
                  {item}
                  <span className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300
                    ${active === item ? 'w-full' : 'w-0 group-hover:w-full'}`}>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
