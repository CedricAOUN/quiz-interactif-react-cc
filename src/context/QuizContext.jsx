import { createContext, useState } from "react";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [category, setCategory] = useState('all');

  const handleCategoryChange = (category) => {
    setCategory(category);
  }

  return (
    <QuizContext.Provider value={{ category, handleCategoryChange  }}>
      {children}
    </QuizContext.Provider>
  );
};