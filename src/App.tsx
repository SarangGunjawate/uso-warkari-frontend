import './App.css'
import { Routes, Route, useLocation } from "react-router-dom"
import { useEffect } from "react"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import GranthVed from './Components/GranthVed/GranthVed'
import ScrollToTopButton from './Components/ScrollToTop/ScrollToTopButton'
import Footer from './Components/Footer/Footer'

function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }, [pathname])

  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pustak-prakashan" element={<GranthVed />} />
        </Routes>
      </div>
      <Footer />
      <ScrollToTopButton />
    </>
  )
}

export default App