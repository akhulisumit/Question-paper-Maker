import React from "react";

function Hero() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="grid max-w-screen-xl px-2 py-2 mx-auto lg:gap-2 xl:gap-0 lg:py-4 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-1 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            Create Professional Question Papers Instantly
          </h1>
          <p className="max-w-2xl mb-4 font-light text-gray-500 lg:mb-6 md:text-lg lg:text-xl dark:text-gray-400">
            Streamline your exam preparation process with our intelligent question paper generator. Perfect for teachers, educational institutions, and training centers.
          </p>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 mr-2 text-base font-medium text-center text-white rounded-lg bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
          >
            Create Paper
            <svg
              className="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            className="inline-flex items-center justify-center px-4 py-2 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
          >
            View Templates
          </a>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex justify-center items-center">
          <img
            src="/logo.png"
            alt="Question Paper Example"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
