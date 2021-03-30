import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  container: {
    maxWidth: '630px',
    padding: '16px',
    borderRadius: '5px',
    backgroundColor: '#2a9d8f',
  }
})

const QuizLayout = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.container}>
      <Grid container item>
        <Grid item xs={12}>
          <p>Pregunta</p>
        </Grid>
      </Grid>
      <Grid container item spacing={3}>
        <Grid item xs={12} sm={6}>
          <p>Soy una respuesta A</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Soy una respuesta B</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Soy una respuesta C</p>
        </Grid>
        <Grid item xs={12} sm={6}>
          <p>Soy una respuesta D</p>
        </Grid>
      </Grid>
    </Grid>)
}

export default QuizLayout

