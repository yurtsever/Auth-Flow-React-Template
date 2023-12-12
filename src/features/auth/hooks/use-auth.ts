import React, { useEffect } from 'react'
import { AuthContext } from '@features/auth/context/auth-context'

export const useAuth = () => {
  const context = React.useContext(AuthContext)
  const [isAuthenticated, setIsAuthenticated] = React.useState(false)
  useEffect(() => {
    if (context?.user) {
      setIsAuthenticated(true)
    }
  }, [context?.user])
  return { isAuthenticated }
}
