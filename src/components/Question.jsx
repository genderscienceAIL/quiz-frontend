import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { useEffect } from 'react'
import { useQuestionDispatch, useQuestionState } from '../context'
import { FadeIn, FadeOut } from './animation'
import { NewLineText } from './common'

const Question = () => {
  const { currentQuestion, showAnimations, status, token } = useQuestionState()
  const dispatch = useQuestionDispatch()
  const Animation = showAnimations ? FadeIn : FadeOut

  useEffect(() => {
    const getFirstQuiz = async () => {
      console.log('Question!')
      const { data } = await axios.get(
        'http://localhost:3000/quiz/First quiz',
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
        <NewLineText text={currentQuestion} />
      </Animation>
    </Grid>
  )
}

export default Question
