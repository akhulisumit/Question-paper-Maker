# 📄 AI-Powered Question Paper Generator

Create beautifully structured and personalized question papers within minutes using AI. This React-based tool allows educators to input paper details and dynamically build question groups. It uses **Google's Gemini API** to generate full question papers from a smart prompt — saving time and effort.

---

## 🚀 Features

- 🎯 **Dynamic Form Inputs**: Select subject, grade, difficulty, total marks, number of questions, and add unlimited question groups.
- 🧠 **AI-Powered Generation**: Automatically create a question paper using Google's Gemini LLM via prompt-to-content generation.
- 🧱 **Flexible Question Groups**: Choose type (MCQ, Short, Long), marks, count, and add custom instructions/comments for each group.
- 🎨 **Clean UI**: Built with Tailwind CSS and React for a responsive, intuitive experience.
- 🧰 **Modular Code**: Easy to customize and extend for new features or APIs.

---

## 🖼️ Demo

![App Demo](./demo.gif) <!-- You can add your GIF or screenshot here -->

---

## 🛠️ Tech Stack

- **Frontend**: React.js, Tailwind CSS
- **AI Backend**: Google Gemini API (`gemini-2.0-pro`)
- **Utilities**: React Router, Custom Prompt Builder, Fetch API
---

## 📄 How It Works

1. User fills out the form: subject, grade, difficulty, topics, etc.
2. Dynamically adds question groups like:
   - 5 Long Answer Questions of 10 marks each
   - 10 MCQs of 1 mark each with custom comments
3. On clicking **Generate**, the form data is used to build a prompt.
4. Prompt is sent to Gemini API.
5. Gemini returns a generated question paper, which is displayed in the UI.

---

## 🧪 Getting Started

### 🔧 Prerequisites

- Node.js & npm
- A [Gemini API key](https://makersuite.google.com/app)

### 📥 Installation

```bash
git clone https://github.com/your-username/question-paper-generator.git
cd question-paper-generator
npm install
