import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Mushroom from "./components/Mushroom";
import About from "./components/About";
import Range from "./components/Range";
import Delivery from "./components/Delivery";
import Area from "./components/Area";
import Price from "./components/Price";
import Stroage from "./components/Stroage";
import Orders from "./components/Orders";
import Classifications from "./components/Classifications";
import Items from "./components/Items";
import News from "./components/News";
import Teddy from "./components/Teddy";
import Hours from "./components/Hours";
import Footer from "./components/Footer";
import Cannabis from "./components/Cannabis";
import Alert from "./components/Alert";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  return (
    <>
      <Header />

      <Mushroom />
      <About />
      <Range />
      <Delivery />
      <Area />
      <Price />
      <Stroage />
      <Orders />
      <Cannabis />
      <Alert />
      <Classifications />
      <Items />
      <News />
      <Teddy />
      <Hours />
      <Footer />
    </>
  );
}

export default App;
