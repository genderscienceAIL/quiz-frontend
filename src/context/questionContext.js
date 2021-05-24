import { createContext, useContext, useReducer } from 'react'

const QuestionStateContext = createContext()
const QuestionDispatchContext = createContext()

const QuestionReducer = (state, action) => {
  console.log(action, 'context')
  switch (action.type) {
    case 'changeSelectedAnswer': {
      return {
        ...state,
        selectedAnswer: action.payload,
      }
    }
    case 'nextQuestion': {
      return {
        ...state,
        currentQuestionId: action.payload._id,
        currentQuestion: action.payload.question,
        currentAnswers: action.payload.answers,
        selectedAnswer: undefined,
        answerInfo: action.payload.answerInfo,
        currentQuestionInfo: action.payload.info,
      }
    }
    case 'updateCurrentQuestion': {
      return {
        ...state,
        currentQuestionId: action.payload._id,
        currentQuestion: action.payload.question,
        currentAnswers: action.payload.answers,
        answerInfo: action.payload.answerInfo,
        currentQuestionInfo: action.payload.info,
      }
    }
    case 'updateAnimations': {
      return {
        ...state,
        showAnimations: action.payload,
      }
    }
    case 'changeStatus': {
      return {
        ...state,
        status: action.payload,
      }
    }
    case 'updateToken': {
      return {
        ...state,
        token: action.payload,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const QuestionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(QuestionReducer, {
    currentQuestionId: undefined,
    currentQuestionInfo: undefined,
    currentQuestion: undefined,
    currentAnswers: undefined,
    selectedAnswer: undefined,
    showAnimations: true,
    answerInfo: undefined,
    status: 'Quiz',
    token: undefined,
    error: '',
  })

  return (
    <QuestionStateContext.Provider value={state}>
      <QuestionDispatchContext.Provider value={dispatch}>
        {children}
      </QuestionDispatchContext.Provider>
    </QuestionStateContext.Provider>
  )
}

const useQuestionState = () => {
  const context = useContext(QuestionStateContext)
  if (context === undefined) {
    throw new Error('useQuestionState must be used within a QuestionProvider')
  }
  return context
}

const useQuestionDispatch = () => {
  const context = useContext(QuestionDispatchContext)
  if (context === undefined) {
    throw new Error(
      'useQuestionDispatch must be used within a QuestionProvider'
    )
  }
  return context
}

export { QuestionProvider, useQuestionState, useQuestionDispatch }
