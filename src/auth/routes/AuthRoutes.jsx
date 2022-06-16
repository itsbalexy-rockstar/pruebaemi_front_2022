import { Navigate, Routes, Route } from 'react-router-dom'
import LoginView from '../views/LoginView'

const AuthRoutes = () => {
  return (
    <Routes>
        <Route path="login" element={<LoginView />} />
        <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  )
}

export default AuthRoutes