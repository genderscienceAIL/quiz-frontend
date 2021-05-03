import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { useEffect } from 'react'

import { key } from '../config'
import { getOnLocalStorage } from '../utils'
import { useQuestionDispatch, useQuestionState } from '../context'
import { FadeIn, FadeOut } from './animation'
import { NewLineText } from './common'

const Question = () => {
  const { currentQuestion, showAnimations, status } = useQuestionState()
  const dispatch = useQuestionDispatch()
  const Animation = showAnimations ? FadeIn : FadeOut

  useEffect(() => {
    axios
      .get('http://localhost:3000/quiz/First quiz', {
        headers: {
          Authorization: getOnLocalStorage(key.token),
        },
      })
      .then((res) => {
        dispatch({ type: 'updateCurrentQuestion', payload: res.data })
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
