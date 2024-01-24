import "./Stylesheets/Root.css"
// import NavBar from "./Components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home"
import Navbar from "./Components/Navbar";
import Recognizer from "./pages/Recognizer.js";
import Shops from "./pages/Shops.js";
import About from "./pages/About.js";

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route element = {<Home />} path="/" />
      <Route element = {<Shops />} path = "/shops"/>
      <Route element={<Recognizer />} path="/recognizer" /> 
      <Route element = {<About />} path = "/about"/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
