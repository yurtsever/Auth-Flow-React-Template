import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ProtectedRoute from './routes/protected-routes'
import { Home } from './pages/home'
import { PasswordForgot } from './pages/password-forget'
import { PasswordReset } from './pages/password-reset'
import { Signin } from './pages/signin'
import { Signup } from './pages/signup'
import { Dashboard } from './pages/dashboard/dashboard'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/forgot" element={<PasswordForgot />} />
          <Route path="/reset" element={<PasswordReset />} />
        </Route>
        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
