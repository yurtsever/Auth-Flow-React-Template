import React from 'react'
import { Input } from '@/components/input'
import { SigninFormProps } from './signin-form.definitions'
import { Button } from '@/components/button'

function SigninFrom(props: SigninFormProps): React.FunctionComponentElement<SigninFormProps> {
  return (
    <form {...props}>
      <Input type="text" placeholder="E-Mail" />
      <Input type="password" placeholder="Password" />
      <Button>Login</Button>
    </form>
  )
}

export default SigninFrom
