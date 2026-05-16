import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import ProtectedRoute from './components/ProtectedRoute'
import { AuthProvider } from './contexts/AuthContext'
import AdminDashboard from './pages/AdminDashboard'
import AdminUsers from './pages/AdminUsers'
import Auth from './pages/Auth'
import Chatbot from './pages/Chatbot'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'
import Home from './pages/Home'
import PreAnalysis from './pages/PreAnalysis'
import ServiceDetail from './pages/ServiceDetail'
import AdminHistory from './pages/AdminHistory'
import MyData from './pages/MyData'
import UserDashboard from './pages/UserDashboard'

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Navigate to="/#services" replace />} />
            <Route path="services/:slug" element={<ServiceDetail />} />
            <Route path="pre-analysis" element={<PreAnalysis />} />
            <Route path="pre-analyse-ia" element={<PreAnalysis />} />
            <Route path="chatbot" element={<Chatbot />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="contact" element={<Contact />} />
            <Route path="auth" element={<Auth />} />
            <Route path="admin" element={<Navigate to="/admin/dashboard" replace />} />
            <Route
              path="mon-espace"
              element={
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="mes-donnees"
              element={
                <ProtectedRoute>
                  <MyData />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/dashboard"
              element={
                <ProtectedRoute adminOnly>
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/users"
              element={
                <ProtectedRoute adminOnly>
                  <AdminUsers />
                </ProtectedRoute>
              }
            />
            <Route
              path="admin/historique"
              element={
                <ProtectedRoute adminOnly>
                  <AdminHistory />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App
