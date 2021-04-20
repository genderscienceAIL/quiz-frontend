import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core/styles'
import { Question, Answers, NextQuestionButton } from '../components'
import Logo from '../images/limnoedu.png'

const useStyles = makeStyles({
  container: {
    maxWidth: '630px',
    padding: '4px',
    borderRadius: '5px',
    backgroundColor: '#fcf4ec',
    fontFamily: ['Raleway', 'sans-serif'],
  },
  logo: {
    width: '25%',
    margin: 'auto',
    padding: '5px',
  },
})

const QuizLayout = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className={classes.container}>
      <img
        src={Logo}
        className={classes.logo}
        title="Logo gender LimnoEdu"
        alt="Logo gender LimnoEdu"
      />
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
