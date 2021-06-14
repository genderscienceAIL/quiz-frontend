import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuestionDispatch, useQuestionState } from '../context'
import { FadeIn, FadeOut } from './animation'
import { NewLineText } from './common'

const Question = () => {
  const {
    currentQuestion,
    currentQuestionInfo,
    showAnimations,
    status,
    token,
  } = useQuestionState()
  const dispatch = useQuestionDispatch()
  const Animation = showAnimations ? FadeIn : FadeOut

  useEffect(() => {
    const getFirstQuiz = async () => {
      const { data } = await axios.get(
        'https://limno-backend-test.onrender.com/quiz/First quiz',
        {
          headers: {
            Authorization: token,
          },
        }
      )

      dispatch({ type: 'updateCurrentQuestion', payload: data })
    }

    getFirstQuiz()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  if (status !== 'Quiz') {
    return null
  }

  return (
    <Grid item xs={12}>
      <Animation>
        {currentQuestionInfo && <span>{currentQuestionInfo}</span>}
        <NewLineText text={currentQuestion} />
      </Animation>
    </Grid>
  )
}

export default Question
