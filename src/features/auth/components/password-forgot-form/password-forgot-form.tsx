import React from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

function PasswordForgotForm(): React.FunctionComponentElement<undefined> {
  return (
    <>
      <Input type="text" placeholder="E-Mail" />
      <Button>Send</Button>
    </>
  )
}

export default PasswordForgotForm
