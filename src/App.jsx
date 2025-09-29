import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/HomeView"
import ContactView from "./views/ContactView"
import AboutView from "./views/AboutView"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/contact' element={<ContactView/>} />
        <Route path='/about' element={<AboutView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
