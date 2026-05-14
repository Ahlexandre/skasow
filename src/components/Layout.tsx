import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import FloatingChatbot from './FloatingChatbot'
import Navbar from './Navbar'

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] text-[#111111]">
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FloatingChatbot />
      <Footer />
    </div>
  )
}
