import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Headpart from "./components/Headpart";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Routes>
        <Route path="/" element={<Headpart />} />
        <Route path="/Main" element={<Main />} />
      </Routes>
    </>
  );
}

export default App;
