// import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from "react";
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  const removeClasses = () => {
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    // document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-primary')
  }
  const [mode, setmode] = useState('light');
  const toggleMode = (cls) => {
    removeClasses();
    document.body.classList.add('bg-' + cls)
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode enabled", "success");
      document.title = "Text Utility - Dark";
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success");
      document.title = "Text Utility - Light";

    }
  }


  return (
    <>
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        {/* <TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} /> */}
        {/* <About /> */}
        <div className="container my-3">

          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter the text to analyze below" mode={mode} showAlert={showAlert} />} />
            <Route exact path="/about" element={<About mode={mode} />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
