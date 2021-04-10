import Grid from '@material-ui/core/Grid'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'

import { useQuestionState, useQuestionDispatch } from '../context'
import { FadeIn, FadeOut } from './animation'

const Answers = () => {
  const { selectedAnswer, currentAnswers, showAnimations } = useQuestionState()
  const dispatch = useQuestionDispatch()
  const Animation = showAnimations ? FadeIn : FadeOut

  const handleChange = (event) => {
    dispatch({ type: 'changeSelectedAnswer', payload: event.target.value })
  }

  return (
    <>
      {currentAnswers &&
        currentAnswers.map((item, key) => (
          <Grid key={key} item xs={12} sm={6}>
            <Animation>
              <FormControlLabel
                value={item}
                control={
                  <Radio
                    checked={selectedAnswer === item}
                    onChange={handleChange}
                  />
                }
                label={item}
              />
            </Animation>
          </Grid>
        ))}
    </>
  )
}

export default Answers
