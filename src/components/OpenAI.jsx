import React from "react";
import axios from "axios";

const OpenAI = () => {
  const generateTopic = async (input) => {
    input = "Mitosis";

    try {
      const apiKey = process.env.REACT_APP_OPENAI_API_KEY;
      const response = await axios.post(
        "https://api.openai.com/v1/engines/davinci/completions",
        {
          prompt: `Generate a article content about this topic: ${input}`,
          max_tokens: 50, // Adjust as needed
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const generatedTopic = response.data.choices[0].text;

      console.log(generatedTopic);
      return generatedTopic;
    } catch (error) {
      console.error("Error generating topic:", error);
      return "Error generating topic";
    }
  };

  return (
    <div>
      <button className="px-4 py-2 rounded-md bg-blue-600 text-white mt-4" onClick={() => generateTopic()}>Generate Topic</button>
    </div>
  );
};

export default OpenAI;
