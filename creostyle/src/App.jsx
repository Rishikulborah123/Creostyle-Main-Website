
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Team from './components/Team'
import logo from '../src/pictures/creostyle_logo.png'
import Contact from './components/Contact'
import Courses from './components/Courses'
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './components/Footer';
import Donation from './components/Donation'


function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar logo={logo} />

    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/services" element={<Services />} />
      <Route exact path="/team" element={<Team />} />
      <Route exact  path="/contact" element={<Contact />} />
      <Route exact path="/courses" element={<Courses />} />
      <Route exact path="/donation" element={<Donation />} />
    </Routes>
  
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
