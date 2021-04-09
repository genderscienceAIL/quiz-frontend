import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { useQuestionDispatch, useQuestionState } from '../context'
import axios from 'axios'

import { key } from '../config'
import { getOnLocalStorage } from '../utils'

const useStyles = makeStyles({
  button: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
  },
})

const NextQuestionButton = () => {
  const classes = useStyles()
  const dispatch = useQuestionDispatch()
  const { currentQuestionId, selectedAnswer } = useQuestionState()

  const getNextQuestion = async () => {
    const result = await axios.get(`http://localhost:3000/nextQuestion/${currentQuestionId}/${selectedAnswer}`, {
      headers: {
        Authorization: getOnLocalStorage(key.token),
      }
    })
    dispatch({type: 'nextQuestion', payload: result.data });
  }

  return (<Button onClick={() => getNextQuestion()} className={classes.button}>Next</Button>)
}

export default NextQuestionButton
