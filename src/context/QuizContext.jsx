import { createContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducers/quizReducer";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [category, questions, dispatch ] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ category, questions, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};