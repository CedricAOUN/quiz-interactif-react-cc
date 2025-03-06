const QUESTIONS = [
  {
    id: 1,
    category: "Math",
    question: "Combien font 2+2 ?",
    answer: "4",
    validation: null,
  },
  {
    id: 2,
    category: "Science",
    question: "Quelle est la formule de l'eau ?",
    answer: "H2O",
    validation: null,
  },
  {
    id: 3,
    category: "Histoire",
    question: "Qui a découvert l'Amérique ?",
    answer: "Christophe Colomb",
    validation: null,
  },
]

export const initialState = { category: 'all', questions: QUESTIONS };

export const quizReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_CATEGORY":
      return { category: action.payload };
    case "VALIDATE":
      return {
        questions: state.questions.map((quest) =>
          quest.id === action.payload.id
            ? { ...quest, validation: action.payload.userChoice }
            : quest
        ),
      };
    default:
      return state;
  }
};