import React from 'react'
import { ButtonProps } from './button.definitions'

function Button(props: ButtonProps): React.FunctionComponentElement<ButtonProps> {
  return <button {...props}>{props.children}</button>
}

export default Button
