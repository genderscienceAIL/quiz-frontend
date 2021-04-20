import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { useQuestionDispatch, useQuestionState } from '../context'
import axios from 'axios'

import { key } from '../config'
import { getOnLocalStorage, timeout } from '../utils'

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
  const classes = useStyles()
  const dispatch = useQuestionDispatch()
  const { currentQuestionId, selectedAnswer } = useQuestionState()

  const getNextQuestion = async () => {
    dispatch({ type: 'updateAnimations', payload: false })
    const result = await axios.get(
      `http://localhost:3000/nextQuestion/${currentQuestionId}/${selectedAnswer}`,
      {
        headers: {
          Authorization: getOnLocalStorage(key.token),
        },
      }
    )
    await timeout(1000)
    dispatch({ type: 'nextQuestion', payload: result.data })
    dispatch({ type: 'updateAnimations', payload: true })
  }

  return (
    <Button onClick={() => getNextQuestion()} className={classes.button}>
      Next
    </Button>
  )
}

export default NextQuestionButton
