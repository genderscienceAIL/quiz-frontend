import { useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import { QuizLayout } from './layouts'
import { setOnLocalStorage, getOnLocalStorage } from './utils'
import { key } from './config'
import { QuestionProvider } from './context'

const useStyles = makeStyles({
  app: {
    height: '100vh',
    backgroundColor: 'white',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
})

const App = () => {
  const classes = useStyles()

  useEffect(() => {
    axios.get('http://localhost:3000/getToken').then((res) => {
      setOnLocalStorage(key.token, res.data)

      axios
        .get('http://localhost:3000/quiz/First quiz', {
          headers: {
            Authorization: getOnLocalStorage(key.token),
          },
        })
        .then((res) => setOnLocalStorage('firstQuestion', res.data._id))
    })
  }, [])

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
