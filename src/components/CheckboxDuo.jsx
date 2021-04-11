import { useState, useEffect } from 'react'
import TextField from '@material-ui/core/TextField'

const CheckboxDuo = ({
  number,
  selectedAnswer,
  index,
  validation,
  handleChange,
}) => {
  const [helperText, setHelperText] = useState('')
  const [value, setValue] = useState('')

  useEffect(() => {
    setHelperText(validation ? `${value.length}/${validation.max}` : '')
  }, [value, validation])

  useEffect(() => {
    if (selectedAnswer !== value) {
      setValue('')
    }
  }, [selectedAnswer, value])

  return (
    <>
      {number ? (
        <TextField
          fullWidth
          id={`outlined-multiline-static-${index}`}
          label="free"
          type="number"
          helperText={helperText}
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            handleChange(event)
          }}
          maxLength={validation ? validation.max : 2}
          onInput={(e) => {
            e.target.value = Math.max(0, parseInt(e.target.value))
              .toString()
              .slice(0, validation.max)
          }}
          variant="outlined"
        />
      ) : (
        <TextField
          id={`outlined-multiline-static-${index}`}
          label="free"
          multiline
          rowsMax={4}
          helperText={helperText}
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            handleChange(event)
          }}
          inputProps={{
            maxLength: validation ? validation.max : 0,
          }}
          variant="outlined"
        />
      )}
    </>
  )
}

export default CheckboxDuo
