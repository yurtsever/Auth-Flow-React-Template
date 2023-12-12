import React from 'react'
import { InputProps } from './input.definitions'

function Input(props: InputProps): React.FunctionComponentElement<InputProps> {
  return <input {...props} />
}

export default Input
