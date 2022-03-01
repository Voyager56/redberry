import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./Landing";
import Form from "./Form";

function App() {
  return (
    // routing for the form and info
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/personalinfo' element={<Form />} />
      </Routes>
    </Router>
  );
}

export default App;
