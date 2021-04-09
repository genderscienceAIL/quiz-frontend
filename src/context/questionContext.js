import {createContext, useContext, useReducer} from 'react';


const QuestionStateContext = createContext();
const QuestionDispatchContext = createContext();


const QuestionReducer = (state, action) => {

  switch (action.type) {
    case 'changeSelectedAnswer': {

      return { 
        currentQuestionId: state.currentQuestionId,
        currentQuestion: state.currentQuestion,
        currentAnswers: state.currentAnswers,
        selectedAnswer: action.payload, 
        status: state.status, 
        error: state.error,
      };
    }
    case 'nextQuestion': {
      return { 
        currentQuestionId: action.payload._id,
        currentQuestion: action.payload.question,
        currentAnswers: action.payload.answers,
        selectedAnswer: state.selectedAnswer, 
        status: state.status, 
        error: state.error,
      };
    }
    case 'updateCurrentQuestion': {      
      return { 
        currentQuestionId: action.payload._id,
        currentQuestion: action.payload.question,
        currentAnswers: action.payload.answers,
        selectedAnswer: state.selectedAnswer, 
        status: state.status, 
        error: state.error,
      };
    } 
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

const QuestionProvider = ({children}) => {
  const [state, dispatch] = useReducer(QuestionReducer, {
    currentQuestionId: undefined,
    currentQuestion: undefined,
    currentAnswers: undefined,
    selectedAnswer: undefined,
    status: '',
    error: '',
  });

  return (
    <QuestionStateContext.Provider value={state}>
      <QuestionDispatchContext.Provider value={dispatch}>
        {children}
      </QuestionDispatchContext.Provider>
    </QuestionStateContext.Provider>
  );
};

const useQuestionState = () => {
  const context = useContext(QuestionStateContext);
  if (context === undefined) {
    throw new Error(
      'useQuestionState must be used within a QuestionProvider',
    );
  }
  return context;
};

const useQuestionDispatch = () => {
  const context = useContext(QuestionDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useQuestionDispatch must be used within a QuestionProvider',
    );
  }
  return context;
};


export {
  QuestionProvider,
  useQuestionState,
  useQuestionDispatch,
};