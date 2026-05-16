import { Outlet, useLocation } from 'react-router-dom'
import Footer from './Footer'
import FloatingChatbot from './FloatingChatbot'
import Navbar from './Navbar'

export default function Layout() {
  const location = useLocation()
  const isDashboard =
    location.pathname.startsWith('/admin') ||
    location.pathname === '/mon-espace' ||
    location.pathname === '/mes-donnees'

  return (
    <div className="grain relative min-h-screen bg-app text-[#EDEAE4]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-60 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#C9A84C]/[0.05] blur-[130px]" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#C9A84C]/[0.03] blur-[100px]" />
      </div>

      {isDashboard ? (
        <div className="relative z-10 flex min-h-screen">
          <Navbar sidebar />
          <main className="flex flex-1 flex-col overflow-hidden">
            <Outlet />
          </main>
        </div>
      ) : (
        <>
          <Navbar />
          <main className="relative z-10">
            <Outlet />
          </main>
          <FloatingChatbot />
          <Footer />
        </>
      )}
    </div>
  )
}
