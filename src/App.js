import Header, { HeaderPhone } from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import Timeline from "./components/Timeline";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [ratio, setRatio] = useState(window.innerWidth / window.innerHeight);

  useEffect(() => {
    const resizeRation = () => {
      setRatio(window.innerWidth / window.innerHeight);
      // console.log(ratio);
    };
    window.addEventListener("resize", resizeRation);

    return () => {
      window.removeEventListener("resize", resizeRation);
    };
  }, [ratio]);

  return ratio > 0.15 && ratio < 2.323 ? (
    <>
      <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home ratio={ratio} />
      <Work />
      <Timeline />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
      <Toaster />
    </>
  ) : (
    <em id="customMsg">Kindly, change the ratio to view</em>
  );
}

export default App;
