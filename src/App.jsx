import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Coupler from "./pages/coupler/Coupler";
import NotFound from "./pages/notFound/notFound";
import Navbar from "./components/Navbar";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={ <Home /> } />
        <Route path="sinalizadordeFaltas" element={ <About /> } />
        <Route path="/acopladorDP" element={ <Coupler /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  )
}

export default App;