import { Outlet } from "react-router-dom";
import Footer from "./components/home/Footer";
// import Navbar from './components/home/Navbar'
import { useEffect } from "react";
import Navbar from "@/components/home/Navbar";

function App() {
  const async = async () => {
    await new Promise((resolve) => {
      setTimeout(() => resolve(1), 1000);
    });
    console.log("async");
  };
  const linear = () => {
    console.log("linear");
  };
  useEffect(() => {
    async();
    linear();
  });
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
      {/*<img src='/sdf.img' alt='' />*/}
    </>
  );
}

export default App;
