import { Outlet } from "react-router-dom"
import Navbar from "./components/header/Navbar"
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from "./components/footer/Footer";

AOS.init();

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
