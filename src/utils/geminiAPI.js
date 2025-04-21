const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateWithGemini = async (prompt) => {
  const url = "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent";
  
  const requestBody = {
    contents: [
      {
        parts: [
          {
            text: prompt
          }
        ]
      }
    ]
  };

  try {
    const response = await fetch(`${url}?key=${API_KEY}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody)
    });

    const data = await response.json();
    console.log("Raw API Response:", data);

    if (!response.ok) {
      throw new Error(`API Error: ${data.error?.message || response.statusText}`);
    }

    // Extract text based on the actual response structure
    const generatedText = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!generatedText) {
      console.error("Unexpected response structure:", data);
      throw new Error("No generated text found in the response");
    }

    return generatedText;
  } catch (error) {
    console.error("API Error Details:", error);
    throw new Error(`Failed to generate content: ${error.message}`);
  }
};
