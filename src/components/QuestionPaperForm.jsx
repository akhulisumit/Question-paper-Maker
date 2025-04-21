import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // Optional icon from lucide-react
import { generatePrompt } from "../utils/promtGenerator";

function QuestionPaperForm() {
  const [questionGroups, setQuestionGroups] = useState([
    { count: "", marks: "", type: "short", comment: "" },
  ]);
  const [subject, setSubject] = useState("");
  const [grade, setGrade] = useState("");
  const [totalQuestions, setTotalQuestions] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [topics, setTopics] = useState("");

  const addQuestionGroup = () => {
    setQuestionGroups([...questionGroups, { count: "", marks: "", type: "short", comment: "" }]);
  };

  const deleteQuestionGroup = (index) => {
    if (questionGroups.length > 1) {
      setQuestionGroups(questionGroups.filter((_, i) => i !== index));
    }
  };

  const updateGroup = (index, field, value) => {
    const updatedGroups = [...questionGroups];
    updatedGroups[index][field] = value;
    setQuestionGroups(updatedGroups);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics,
    };
  
    const prompt = generatePrompt(formData, questionGroups);
    console.log("Generated Prompt:\n", prompt);
  
  };
  

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-xl">
        <h2 className="text-3xl font-bold mb-10 text-gray-800 dark:text-white text-center">
          Create a Question Paper
        </h2>

        {/* Static Fields */}
        <div className="grid md:grid-cols-2 gap-10 mb-12">
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Subject</label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Grade/Class</label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Enter class"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Total Questions</label>
            <input
              type="number"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              placeholder="Total number of questions"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Total Marks</label>
            <input
              type="number"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              placeholder="Total marks"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Overall Difficulty</label>
            <select 
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            >
              <option value="">Select difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Topics</label>
            <input
              type="text"
              value={topics}
              onChange={(e) => setTopics(e.target.value)}
              placeholder="Comma-separated topics"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
        </div>

        <hr className="my-8 border-gray-300 dark:border-gray-600" />

        {/* Question Groups */}
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">Question Groups</h3>

        {questionGroups.map((group, index) => (
          <div
            key={index}
            className="relative grid gap-6 mb-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">No. of Questions</label>
                <input
                  type="number"
                  value={group.count}
                  onChange={(e) => updateGroup(index, "count", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Marks per Question</label>
                <input
                  type="number"
                  value={group.marks}
                  onChange={(e) => updateGroup(index, "marks", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Type</label>
                <select
                  value={group.type}
                  onChange={(e) => updateGroup(index, "type", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                >
                  <option value="short">Short Answer</option>
                  <option value="long">Long Answer</option>
                  <option value="mcq">MCQ</option>
                </select>
              </div>
            </div>

            {/* Additional Comments */}
            <div>
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">Additional Comments</label>
              <textarea
                value={group.comment}
                onChange={(e) => updateGroup(index, "comment", e.target.value)}
                placeholder="Write comments or special instructions..."
                className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                rows={3}
              />
            </div>

            {/* Delete Button */}
            {questionGroups.length > 1 && (
              <button
                onClick={() => deleteQuestionGroup(index)}
                className="absolute top-4 right-4 bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition"
                title="Delete this group"
              >
                <Trash2 size={16} />
              </button>
            )}
          </div>
        ))}

        <div className="mb-10 text-center">
          <button
            type="button"
            onClick={addQuestionGroup}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            + Add Another Group
          </button>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="bg-green-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition duration-300"
            onClick={handleSubmit}
          >
            Generate Question Paper
          </button>
        </div>
      </div>
    </div>
  );
}

export default QuestionPaperForm;
