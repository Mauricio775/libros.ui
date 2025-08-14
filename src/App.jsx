import { useState  } from 'react'
import './App.css'

import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'


import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'

import Dashboard from './components/Dashboard'
import LoginScreen from './components/LoginScreen'
import SignupScreen from './components/SignupScreen'
import BookList from './components/BookList'
import InventoryList from './components/InventoryList'



function App() {


  return (/*Los hijos que pasan todos sus contextos*/
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            {/* Ruta por defecto que redirige al login */}
            <Route path="/" element={<Navigate to="/login" replace />} />

            <Route
              path='/login'
              element={
                <PublicRoute>
                  <LoginScreen />
                </PublicRoute>
              }
            />

            <Route
              path='/signup'
              element={
                <PublicRoute>
                  <SignupScreen />
                </PublicRoute>
              }
            />

            <Route
              path='/dashboard'
              element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }
            />

            <Route
              path='/book'
              element={
                <ProtectedRoute>
                  <BookList />
                </ProtectedRoute>
              }
            />


            <Route
              path='/inventory'
              element={
                <ProtectedRoute>
                  <InventoryList />
                </ProtectedRoute>
              }
            />


            

            

            

          </Routes>
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App