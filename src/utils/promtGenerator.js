export const generatePrompt = (formData, questionGroups) => {
    const {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics,
    } = formData;
  
    let prompt = `You are an expert academic examiner.\n\n`;
    prompt += `Create a well-structured question paper for:\n`;
    prompt += `- **Subject**: ${subject}\n`;
    prompt += `- **Class/Grade**: ${grade}\n`;
    prompt += `- **Total Marks**: ${totalMarks}\n`;
    prompt += `- **Number of Questions**: ${totalQuestions}\n`;
    prompt += `- **Overall Difficulty Level**: ${capitalize(difficulty)}\n`;
    prompt += `- **Topics to Cover**: ${topics}\n\n`;
  
    prompt += `The question paper should be divided into the following groups:\n`;
  
    questionGroups.forEach((group, index) => {
      prompt += `- Group ${index + 1}: ${group.count} ${capitalize(group.type)} question(s), `;
      prompt += `each worth ${group.marks} mark(s)`;
      if (group.comment?.trim()) prompt += ` — ${group.comment}`;
      prompt += `\n`;
    });
  
    prompt += `\n🔹 Format the question paper clearly and neatly.`;
    prompt += `\n🔹 Avoid repetition of questions.`;
    prompt += `\n🔹 Ensure questions are relevant, varied in structure, and balanced in difficulty.`;
    prompt += `\n🔹 Do not include answers, only questions.`;
    prompt += `\n\nReturn the final formatted question paper.`;
  
    return prompt;
  };
  
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  