import React from 'react'
import { AuthContextProps } from './auth-context.definitions'

export const AuthContext = React.createContext<AuthContextProps | null>(null)
