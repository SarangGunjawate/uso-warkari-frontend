import './App.css'
import { Routes, Route } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import GranthVed from './Components/GranthVed/GranthVed'
import ScrollToTopButton from './Components/ScrollToTop/ScrollToTopButton'

function App() {
  return (
    <>
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/granthved" element={<GranthVed />} />
        </Routes>
      </div>
      <ScrollToTopButton />
    </>
  )
}

export default App