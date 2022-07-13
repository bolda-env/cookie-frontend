import React from "react";
// import { Router } from "@gatsbyjs/reach-router";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//@desc     Components
import Login from "./Compo/Login";
import Register from "./Compo/Register";
import Home from "./Compo/Home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
