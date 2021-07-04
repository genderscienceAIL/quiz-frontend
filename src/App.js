import { makeStyles } from '@material-ui/core/styles'
import { QuizLayout } from './layouts'
import { QuestionProvider } from './context'

const useStyles = makeStyles({
  app: {
    overflow: 'scroll',
    padding: ' 65px 0',
    height: '100vh',
    backgroundColor: '#3c2b42',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
})

const App = () => {
  const classes = useStyles()

  return (
    <QuestionProvider>
      <div className={classes.app}>
        <header></header>
        <main className={classes.main}>
          <QuizLayout />
        </main>
      </div>
    </QuestionProvider>
  )
}

export default App
