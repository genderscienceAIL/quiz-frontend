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
      if (token) {
        const { data } = await axios.get(
          'https://backend-m4dz.onrender.com/quiz/First quiz',
          {
            headers: {
              Authorization: token,
            },
          }
        )

        dispatch({ type: 'updateCurrentQuestion', payload: data })
      }

      getFirstQuiz()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  if (status !== 'Quiz') {
    return null
  }

  return (
    <Grid container item>
      <Grid item xs={12}>
        <Animation>
          {currentQuestionInfo && <span>{currentQuestionInfo}</span>}
          <NewLineText text={currentQuestion} />
        </Animation>
      </Grid>
    </Grid>
  )
}

export default Question
