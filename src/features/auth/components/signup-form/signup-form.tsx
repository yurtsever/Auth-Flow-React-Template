import React from 'react'
import { Input } from '@/components/input'
import { SignupFormProps } from './signup-form.definitions'
import { Button } from '@/components/button'

function SignupFrom(props: SignupFormProps): React.FunctionComponentElement<SignupFormProps> {
  return (
    <form {...props}>
      <Input type="text" placeholder="E-Mail" />
      <Input type="password" placeholder="Password" />
      <Input type="password-match" placeholder="Password check" />
      <Button>Sign up</Button>
    </form>
  )
}

export default SignupFrom
