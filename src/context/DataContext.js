import { createContext, useEffect, useState } from 'react';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useSpeechSynthesis } from 'react-speech-kit';

export const DataContext = createContext();

export default function DataContextProvider({ children }) {
  const [login, islogin] = useState('false');
  const [loading, isloading] = useState('false');
  const [prompt, setPrompt] = useState('');
  const [data, setData] = useState('');
  const [username, setusername] = useState('');

  const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");

  const MODEL_NAME = "gemini-1.0-pro";
  const API_KEY = process.env.REACT_APP_GEMINI_API_KEY

  const geminiresponse = async (req, res) => {
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: MODEL_NAME });

    const generationConfig = {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    };

    const safetySettings = [
      {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
      {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
      },
    ];

    const chat = model.startChat({
      generationConfig,
      safetySettings,
      history: [
        {
          role: "user",
          parts: [{ text: "s" }],
        },
        {
          role: "model",
          parts: [{ text: "e" }],
        },
      ],
    });

    const result = await chat.sendMessage(`${prompt}`);
    const response = await result.response;
    console.log(response);
    setData(response.text());
    return response;
  }

  function submitHandler(e) {
    e.preventDefault();
    geminiresponse();
  }
  const copyText = () => {
    navigator.clipboard.writeText(data)
  }
  const handleClearClick = () => {
    // console.log("lowercase was clicked" +text);
    setData("");
  }

  
  const value = {
    login,
    islogin,
    username,
    isloading,
    islogin,
    setusername,
    setPrompt,
    prompt,
    submitHandler,
    geminiresponse,
    data,
    copyText,
    handleClearClick
  };
  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
};
