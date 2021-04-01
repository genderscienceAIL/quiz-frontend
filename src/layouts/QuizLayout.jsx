import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import { Question, Answers } from "../components"

const useStyles = makeStyles({
  container: {
    maxWidth: "630px",
    padding: "16px",
    borderRadius: "5px",
    backgroundColor: "#2a9d8f",
  },
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

const QuizLayout = () => {
  const classes = useStyles()

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container item>
        <Question></Question>
      </Grid>
      <Grid container item spacing={3}>
        <Answers></Answers>
      </Grid>
      <Button className={classes.button}>Next</Button>
    </Grid>
  )
}

export default QuizLayout
