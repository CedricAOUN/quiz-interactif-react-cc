import { createContext, useReducer } from "react";
import { initialState, quizReducer } from "../reducers/quizReducer";

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [state, dispatch] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider value={{ category: state.category, questions: state.questions, dispatch }}>
      {children}
    </QuizContext.Provider>
  );
};