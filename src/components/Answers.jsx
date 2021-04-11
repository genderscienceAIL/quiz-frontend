import Grid from '@material-ui/core/Grid'
import { useQuestionState, useQuestionDispatch } from '../context'
import { FadeIn, FadeOut } from './animation'
import AnswerInput from './AnswerInput'

const Answers = () => {
  const {
    selectedAnswer,
    currentAnswers,
    showAnimations,
    answerInfo,
  } = useQuestionState()
  const dispatch = useQuestionDispatch()
  const Animation = showAnimations ? FadeIn : FadeOut

  const handleChange = (event) => {
    dispatch({ type: 'changeSelectedAnswer', payload: event.target.value })
  }

  return (
    <>
      {currentAnswers && currentAnswers.length !== 0 ? (
        currentAnswers.map((item, index) => (
          <Grid key={index} item xs={12} sm={6}>
            <Animation>
              <AnswerInput
                index={index}
                answerValue={item}
                selectedAnswer={selectedAnswer ? selectedAnswer : ''}
                answerInfo={answerInfo ? answerInfo : {}}
                handleChange={handleChange}
              />
            </Animation>
          </Grid>
        ))
      ) : (
        <Grid item xs={12}>
          <Animation>
            <AnswerInput
              selectedAnswer={selectedAnswer ? selectedAnswer : ''}
              answerInfo={answerInfo ? answerInfo : {}}
              handleChange={handleChange}
            />
          </Animation>
        </Grid>
      )}
    </>
  )
}

export default Answers
