import "./Stylesheets/Root.css"
// import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./Components/Navbar";
import recong from "./pages/Recognizer";
import Shops from "./pages/Shops";
import About from "./pages/About";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element = {<Home />} path="/" />
      <Route element = {<Shops />} path = "/shops"/>
      <Route element = {<recong />} path = "/recong"/> 
      <Route element = {<About />} path = "/about"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
