import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import {
  Question,
  Answers,
  NextQuestionButton,
  NoConsentMsg,
} from '../components'

const useStyles = makeStyles({
  container: {
    maxWidth: '630px',
    padding: '4px',
    borderRadius: '5px',
    backgroundColor: '#2a9d8f',
  },
})

const QuizLayout = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container item>
        <NoConsentMsg />
      </Grid>
      <Grid container item>
        <Question />
      </Grid>
      <Grid container item spacing={3}>
        <Answers />
      </Grid>
      <Grid container item justify="flex-end">
        <NextQuestionButton />
      </Grid>
    </Grid>
  )
}

export default QuizLayout
