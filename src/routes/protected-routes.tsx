import { useAuth } from '@/features/auth/hooks/use-auth'
import { Navigate, Outlet } from 'react-router-dom'

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()

  return isAuthenticated ? <Outlet /> : <Navigate to="/signin" />
}

export default ProtectedRoute
