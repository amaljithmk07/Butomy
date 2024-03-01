import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HomeNavbar from "./components/Home/HomeNavbar";
import Homepage from "./components/Home/Homepage";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer/Footer";
import { HomeNavbar2 } from "./components/Home/HomeNavbar2";


function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      {/* <HomeNavbar /> */}
      <HomeNavbar2 />
      <Homepage />
      <Footer/>
    </>
  );
}

export default App;
