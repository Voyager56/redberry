import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Form from "./pages/Form";

import Submited from "./pages/Submited";

function App() {
  return (
    // routing for the form and info
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/personalinfo' element={<Form />} />
        <Route path='/submited' element={<Submited />} />
      </Routes>
    </Router>
  );
}

export default App;
