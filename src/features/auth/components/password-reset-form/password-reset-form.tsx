import React from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

function PasswordResetForm(): React.FunctionComponentElement<undefined> {
  return (
    <>
      <Input type="password" placeholder="Password" />
      <Input type="password" placeholder="Password check" />
      <Button>Send</Button>
    </>
  )
}

export default PasswordResetForm
