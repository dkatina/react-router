import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomeView from "./views/HomeView"
import ContactView from "./views/ContactView"
import AboutView from "./views/AboutView"
import PostsView from "./views/PostsView"
import PostView from "./views/PostView"

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomeView/>}/>
        <Route path='/contact' element={<ContactView/>} />
        <Route path='/about' element={<AboutView/>}/>
        <Route path='/posts' element={<PostsView/>}/>
        <Route path='/post/:id' element={<PostView/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
