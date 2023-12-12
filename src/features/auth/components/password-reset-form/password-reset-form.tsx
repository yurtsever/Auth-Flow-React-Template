import React from 'react'
import { Input } from '@/components/input'
import { Button } from '@/components/button'

function PasswordResetFrom(): React.FunctionComponentElement<undefined> {
  return (
    <>
      <Input type="password" placeholder="Password" />
      <Input type="password-match" placeholder="Password check" />
      <Button>Send</Button>
    </>
  )
}

export default PasswordResetFrom
