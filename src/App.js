import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from "./page/Login";
import Navbar from "./page/Navbar";
import NotFound from "./page/NotFound";
import Contact from "./page/Contact";
import Home from "./page/Home";
import SignUp from "./page/sign-up/SignUp";

function App() {
  return (
      <Router>
          <Navbar/>
          <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/home" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Router>
  );
}

export default App;
