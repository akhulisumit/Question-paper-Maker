import React from "react";

function Cards() {
  return (
    <div className="grid md:grid-cols-3 bg-gray-900 gap-6 p-10">
      {/* Feature 1 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Smart Question Generation
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Automatically generate balanced question papers using our intelligent system that ensures proper distribution of difficulty levels.
        </p>
      </a>

      {/* Feature 2 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Multiple Templates
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Choose from a variety of professional templates to create consistent and well-formatted question papers for different subjects.
        </p>
      </a>

      {/* Feature 3 */}
      <a href="#" className="block p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Question Bank
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Access and manage a comprehensive database of questions, categorized by subject, topic, and difficulty level.
        </p>
      </a>
    </div>
  );
}

export default Cards;
