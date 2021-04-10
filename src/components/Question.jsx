import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { useEffect } from 'react'

import { key } from '../config'
import { getOnLocalStorage } from '../utils'
import { useQuestionDispatch, useQuestionState } from '../context'
import { FadeIn, FadeOut } from './animation'

const Question = () => {
  const { currentQuestion, showAnimations } = useQuestionState()
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

  return (
    <Grid item xs={12}>
      <Animation>{currentQuestion}</Animation>
    </Grid>
  )
}

export default Question
