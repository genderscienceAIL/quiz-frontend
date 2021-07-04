import { useState, useEffect, useCallback } from 'react'
import TextField from '@material-ui/core/TextField'
import Radio from '@material-ui/core/Radio'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckboxDuo from './CheckboxDuo'

const AnswerInput = ({
  index,
  selectedAnswer,
  answerInfo,
  handleChange,
  answerValue,
}) => {
  const { types, validation, label } = answerInfo
  const [helperText, setHelperText] = useState('')

  useEffect(() => {
    setHelperText(
      validation ? `${selectedAnswer.length}/${validation.max}` : ''
    )
  }, [selectedAnswer, validation])

  const renderInput = useCallback(() => {
    if (!types) return
    switch (types[index ? index : 0]) {
      case 'text':
        return (
          <TextField
            fullWidth
            id={`outlined-multiline-static-${index}`}
            label={label}
            multiline
            rowsMax={4}
            helperText={helperText}
            value={selectedAnswer}
            onChange={handleChange}
            inputProps={{
              maxLength: validation ? validation.max : 0,
            }}
            variant="outlined"
          />
        )
      case 'number':
        return (
          <TextField
            fullWidth
            id={`outlined-multiline-static-${index}`}
            label={label}
            type="number"
            helperText={helperText}
            value={selectedAnswer ? selectedAnswer : {}}
            onChange={handleChange}
            maxLength={validation ? validation.max : 2}
            onInput={(e) => {
              e.target.value = Math.max(0, parseInt(e.target.value))
                .toString()
                .slice(0, validation.max)
            }}
            variant="outlined"
          />
        )
      case 'checkbox':
        return (
          <FormControlLabel
            value={answerValue}
            control={
              <Radio
                checked={selectedAnswer === answerValue}
                onChange={handleChange}
              />
            }
            label={answerValue}
          />
        )
      case 'checkbox-text':
        return (
          <CheckboxDuo
            selectedAnswer={selectedAnswer}
            index={index}
            handleChange={handleChange}
            validation={validation}
          />
        )
      case 'checkbox-number':
        return (
          <CheckboxDuo
            number
            selectedAnswer={selectedAnswer}
            index={index}
            handleChange={handleChange}
            validation={validation}
          />
        )
      default:
        break
    }
  }, [
    types,
    index,
    label,
    helperText,
    selectedAnswer,
    handleChange,
    validation,
    answerValue,
  ])

  return <>{renderInput()}</>
}

export default AnswerInput
