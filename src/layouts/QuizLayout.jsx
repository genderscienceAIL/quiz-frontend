import { useEffect } from 'react'
import axios from 'axios'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { useQuestionDispatch } from '../context'
import {
  Question,
  Answers,
  NextQuestionButton,
  NoConsentMsg,
  TotalPointsMsg,
} from '../components'
import Logo from '../images/limnoedu.png'

const useStyles = makeStyles({
  container: {
    maxWidth: '630px',
    padding: '4px',
    borderRadius: '5px',
    backgroundColor: '#fbf6fc',
    fontFamily: ['Monserrat', 'sans-serif'],
  },
  logo: {
    width: '25%',
    margin: 'auto',
    padding: '5px',
  },
})

const QuizLayout = () => {
  const classes = useStyles()
  const dispatch = useQuestionDispatch()

  useEffect(() => {
    const getToken = async () => {
      const { data: token } = await axios.get(
        'https://backend-m4dz.onrender.com/getToken'
      )
      dispatch({ type: 'updateToken', payload: token })
      // await setOnLocalStorage(key.token, token)
    }

    getToken()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Grid container spacing={3} className={classes.container}>
      <img
        src={Logo}
        className={classes.logo}
        title="Logo gender LimnoEdu"
        alt="Logo gender LimnoEdu"
      />

      <Question />

      <Answers />
      <NextQuestionButton />
      <NoConsentMsg />
      <TotalPointsMsg />
    </Grid>
  )
}

export default QuizLayout
