import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { Route, Routes } from "react-router-dom";
import Headpart from "./components/Headpart";
import Main from "./components/Main";
import Loding from "./components/Loading";

function App() {
  const [preload, setpreload] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setpreload(false);
      document.body.classList.remove("overflow_hidden_preloder");
    }, 3000);
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <div className="overflow_hidden_preloder">
        {preload && <Loding />}
        <Routes>
          <Route path="/" element={<Headpart />} />
          <Route path="/Main" element={<Main />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
