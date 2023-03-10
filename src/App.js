import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from './context/AuthContext'

function App() {
  const { currentUser } = useContext(AuthContext)

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/chatWithFriends" />
    }

    return children
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/chatWithFriends/homepage"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/chatWithFriends" element={<Login />} />
        <Route path="/chatWithFriends/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
