import { Outlet } from "react-router-dom";

import Navbar from "./navbar/Navbar.jsx";
// import Footer from "./footer/Footer"; // Uncomment when you build it

const Layout = () => {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      {/* <Footer /> */}
    </>
  );
};

export default Layout;
