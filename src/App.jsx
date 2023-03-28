import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Gallery from "./pages/gallery/Gallery";
import NotFound from "./pages/notFound/notFound";
import SmartEnergy from "./pages/smartenergy/SmartEnergy";
import Trainers from "./pages/trainers/Trainers";
import Navbar from "./components/Navbar";

import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="sinalizadordeFaltas" element={ <About /> } />
        <Route path="/acopladorDP" element={ <Contact /> } />

        <Route path="gallery" element={ <Gallery /> } />
        <Route path="smartenergy" element={ <SmartEnergy /> } />
        <Route path="trainers" element={ <Trainers /> } />

        <Route path='*' element={ <NotFound /> } />



      </Routes>

    </BrowserRouter>
  )
}

export default App