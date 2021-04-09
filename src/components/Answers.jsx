
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useQuestionState, useQuestionDispatch } from '../context'

const Answers = () => {
  const {selectedAnswer, currentAnswers} = useQuestionState()
  const dispatch = useQuestionDispatch()

  const handleChange = (event) => {
    dispatch({type: 'changeSelectedAnswer', payload: event.target.value})
  };

  return (
    <>      
      {
        currentAnswers && currentAnswers.map((item, key) => (
          <Grid key={key} item xs={12} sm={6}>
            <FormControlLabel value={item} control={<Radio checked={selectedAnswer === item} onChange={handleChange} />} label={item} />
          </Grid>))
      }
    </>
  )
}

export default Answers

