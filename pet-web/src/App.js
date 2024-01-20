import React from "react";
import "./Stylesheets/Root.css";
import Navbar from "./Components/Navbar";
import Rightdiv from "./Components/Rightdiv";
import Leftdiv from "./Components/Leftdiv";

function App() {
  return (
    <>
      <Navbar />
      <Rightdiv />
      <Leftdiv />
    </>
  );
}

export default App;
