export const generatePrompt = (formData, questionGroups) => {
    const {
      subject,
      grade,
      totalQuestions,
      totalMarks,
      difficulty,
      topics
    } = formData;
  
    let prompt = `Create a question paper for Class ${grade} ${subject}.\n`;
    prompt += `Total Marks: ${totalMarks}, Total Questions: ${totalQuestions}, Difficulty: ${capitalize(difficulty)}.\n`;
    prompt += `Topics to cover: ${topics}.\n\n`;
    prompt += `Question Groups:\n`;
  
    questionGroups.forEach((group, index) => {
      prompt += `- ${group.count} ${capitalize(group.type)} Question(s) of ${group.marks} mark(s) each`;
      if (group.comment?.trim()) prompt += `. (${group.comment})`;
      prompt += `\n`;
    });
  
    prompt += `\nUse clear and concise language. Format the paper professionally.`;
  
    return prompt;
  };
  
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);
  