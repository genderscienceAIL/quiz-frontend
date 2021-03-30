import { makeStyles } from '@material-ui/core/styles';
import {QuizLayout} from './layouts'

const useStyles = makeStyles({
  app: {
    height: '100vh',
    backgroundColor: '#264653'
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%'
  }
})

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.app}>
      <header>
      </header>
      <main className={classes.main}>
        <QuizLayout />
      </main>
    </div>
  );
}

export default App;
