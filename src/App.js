import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [cls, setCls] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add("bg-" + cls);
    setCls(cls);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3A3B3C";
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
    }
  };

  const removeBodyClasses = () => {
    document.body.classList.remove("bg-light");
    document.body.classList.remove("bg-dark");
    document.body.classList.remove("bg-primary");
    document.body.classList.remove("bg-success");
    document.body.classList.remove("bg-warning");
    document.body.classList.remove("bg-danger");
  };
  return (
    <>
      {/* with cutomized props */}
      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode} />
      {/* with default props */}
      {/* <Navbar /> */}
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/"
          element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} cls={cls} />}
        />
        <Route
          exact
          path="/home"
          element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} cls={cls} />}
        />
        <Route
          exact
          index
          element={<TextForm showAlert={showAlert} heading="Enter text to analyze below" mode={mode} />}
        />
        <Route exact path="/about" element={<About showAlert={showAlert} mode={mode} />} />
      </Routes>
    </>
  );
}

export default App;
