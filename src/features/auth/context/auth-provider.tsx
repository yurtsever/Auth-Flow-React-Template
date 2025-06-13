import React from 'react'
import { AuthContext } from './auth-context'
import type { User } from './auth-context.definitions'

function AuthProvider({
  children,
}: React.PropsWithChildren): React.FunctionComponentElement<React.PropsWithChildren> {
  const [user, setUser] = React.useState<User | null>(null)

  const login = (email: string, password: string) => {
    const userData = { email, username: 'Jon Doe' }
    setUser(userData)
    // Additional login logic
  }

  const logout = () => {
    setUser(null)
    // Additional logout logic
  }

  return <AuthContext.Provider value={{ user, login, logout }}>{children}</AuthContext.Provider>
}

export default AuthProvider
