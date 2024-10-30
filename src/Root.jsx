import { Outlet } from "react-router-dom";
import Navbar from "./Components/Parts/Navbar";
import Footer from "./Components/Parts/Footer";

export default function Root() {
  return (
    <>
        <Navbar/>
        <Outlet></Outlet>
        <Footer/>
    </>
  )
}
