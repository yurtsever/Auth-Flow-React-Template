export type User = {
  username: string
  email: string
  password?: string
}

export type AuthContextProps = {
  user: User | null
  login: (email: string, password: string) => void
  logout: () => void
}
