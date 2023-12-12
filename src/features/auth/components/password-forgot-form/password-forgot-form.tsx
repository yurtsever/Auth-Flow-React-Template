import React from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

function PasswordForgotFrom(): React.FunctionComponentElement<undefined> {
  return (
    <>
      <Input type="text" placeholder="E-Mail" />
      <Button>Send</Button>
    </>
  )
}

export default PasswordForgotFrom
