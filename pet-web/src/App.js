import "./Stylesheets/Root.css";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./Components/Navbar";
import Minigame from "./pages/Minigame.js";
import Shops from "./pages/Shops.js";
import About from "./pages/About.js";
import Recognizer from "./pages/Recognizer.js";
import Login from "./pages/Login.js";
import Signupf from "./pages/Signupf.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Shops />} path="/shops" />
          <Route element={<Minigame />} path="/minigame" /> 
          <Route element={<About />} path="/about" />
          <Route element={<Recognizer />} path="/recognizer" />
          <Route element={<Login/>} path="/signin"/>
          <Route element={<Signupf/>} path="/signup"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
