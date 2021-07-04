import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useQuestionDispatch, useQuestionState } from '../context'
import Grid from '@material-ui/core/Grid'
import axios from 'axios'
import { timeout } from '../utils'

const useStyles = makeStyles({
  button: {
    background: '#70988c',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#fcf4ec',
    width: 30,
    height: 30,
    padding: '0 30px',
    fontSize: '12px',
    fontFamily: ['Raleway', 'sans-serif'],
    '&:hover': {
      background: '#3c2b42',
    },
  },
})

const NextQuestionButton = () => {
  const [isLoading, setIsLoading] = useState(false)
  const classes = useStyles()
  const dispatch = useQuestionDispatch()
  const { currentQuestionId, selectedAnswer, status, token } =
    useQuestionState()

  const getNextQuestion = async () => {
    if (
      selectedAnswer ===
      'I do not wish to participate in the study neither to take the self-assessment questionnaire'
    ) {
      dispatch({ type: 'updateAnimations', payload: false })
      await timeout(250)
      dispatch({
        type: 'changeStatus',
        payload: 'NoConsentMsg',
      })
      dispatch({ type: 'updateAnimations', payload: true })
    } else {
      setIsLoading(true)
      dispatch({ type: 'updateAnimations', payload: false })
      const { data } = await axios.get(
        `https://backend-m4dz.onrender.com/nextQuestion/${currentQuestionId}/${selectedAnswer}`,
        {
          headers: {
            Authorization: token,
          },
        }
      )
      await timeout(250)

      if (data.isEndQuiz) {
        dispatch({ type: 'changeStatus', payload: 'TotalPointsMsg' })
      } else {
        dispatch({ type: 'nextQuestion', payload: data })
      }
      dispatch({ type: 'updateAnimations', payload: true })
      setIsLoading(false)
    }
  }

  if (status !== 'Quiz') {
    return null
  }

  return (
    <Grid container item justify="flex-end">
      <Button
        disabled={selectedAnswer && !isLoading ? false : true}
        onClick={() => getNextQuestion()}
        className={classes.button}
      >
        Next
      </Button>
    </Grid>
  )
}

export default NextQuestionButton
