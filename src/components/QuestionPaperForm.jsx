import React, { useState } from "react";
import { Trash2 } from "lucide-react"; // Optional icon from lucide-react
import { generatePrompt } from "../utils/promtGenerator";
import { generateWithGemini } from "../utils/geminiAPI";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [generatedQuestionPaper, setGeneratedQuestionPaper] = useState("");

  const addQuestionGroup = () => {
    setQuestionGroups([
      ...questionGroups,
      { count: "", marks: "", type: "short", comment: "" },
    ]);
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

  const handleGenerate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setGeneratedQuestionPaper("");

    const formData = {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics,
    };

    try {
      const prompt = generatePrompt(formData, questionGroups);
      console.log("Sending prompt:", prompt);
      const response = await generateWithGemini(prompt);
      
      if (!response) {
        throw new Error("No response received from the API");
      }
      
      setGeneratedQuestionPaper(response);
    } catch (err) {
      setError(err.message);
      console.error("Generation failed:", err);
    } finally {
      setIsLoading(false);
    }
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

  const handleDownload = () => {
    const blob = new Blob([generatedQuestionPaper], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${subject}-question-paper.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
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
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Enter subject"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Grade/Class
            </label>
            <input
              type="text"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              placeholder="Enter class"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Total Questions
            </label>
            <input
              type="number"
              value={totalQuestions}
              onChange={(e) => setTotalQuestions(e.target.value)}
              placeholder="Total number of questions"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Total Marks
            </label>
            <input
              type="number"
              value={totalMarks}
              onChange={(e) => setTotalMarks(e.target.value)}
              placeholder="Total marks"
              className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-700 dark:text-white"
            />
          </div>
          <div>
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Overall Difficulty
            </label>
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
            <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
              Topics
            </label>
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
        <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-white">
          Question Groups
        </h3>

        {questionGroups.map((group, index) => (
          <div
            key={index}
            className="relative grid gap-6 mb-6 p-6 border border-gray-200 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-700"
          >
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  No. of Questions
                </label>
                <input
                  type="number"
                  value={group.count}
                  onChange={(e) => updateGroup(index, "count", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Marks per Question
                </label>
                <input
                  type="number"
                  value={group.marks}
                  onChange={(e) => updateGroup(index, "marks", e.target.value)}
                  className="w-full p-4 border border-gray-300 rounded-lg dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                  Type
                </label>
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
              <label className="block mb-2 text-lg font-medium text-gray-900 dark:text-white">
                Additional Comments
              </label>
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
            className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition duration-300"
          >
            + Add Another Group
          </button>
        </div>

        <div className="text-center">
          <button
            onClick={handleGenerate}
            disabled={isLoading}
            className={`
              w-full
              px-8 py-4
              text-lg font-semibold
              bg-gradient-to-r from-blue-600 to-blue-700
              hover:from-blue-700 hover:to-blue-800
              text-white rounded-xl
              transform transition-all duration-200
              hover:scale-[1.02] hover:shadow-lg
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
              ${isLoading ? "opacity-50 cursor-not-allowed" : ""}
            `}
          >
            {isLoading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </span>
            ) : (
              "Generate Question Paper"
            )}
          </button>

          {error && (
            <div className="mt-4 text-red-600 bg-red-100 p-3 rounded">
              {error}
            </div>
          )}

          {generatedQuestionPaper && (
            <div className="mt-8 text-left">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                      Generated Question Paper
                    </h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => navigator.clipboard.writeText(generatedQuestionPaper)}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                        </svg>
                        Copy
                      </button>
                      <button
                        onClick={handleDownload}
                        className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors flex items-center gap-2"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download
                      </button>
                    </div>
                  </div>
                </div>
                <div className="p-6 overflow-auto max-h-[600px]">
                  <pre className="whitespace-pre-wrap text-gray-800 dark:text-gray-200 font-mono text-sm leading-relaxed">
                    {generatedQuestionPaper}
                  </pre>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default QuestionPaperForm;
