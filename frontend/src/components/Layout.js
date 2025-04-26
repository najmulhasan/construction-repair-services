import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import BackButton from "./BackButton";
import Footer from "./Footer/Footer";
import MobileFooter from "./Footer/MobileFooter";

// Layout component that wraps page content and includes shared elements
const Layout = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const isDashboardPage =
    location.pathname.includes("/dashboard") ||
    location.pathname.includes("/admin");

  return (
    <>
      <Navbar />
      <div className="pt-16 min-h-screen">
        {/* Only show back button if not on home page */}
        {!isHomePage && <BackButton />}
        {children}
      </div>
      {/* Don't show footers on dashboard pages */}
      {!isDashboardPage && (
        <>
          <Footer />
          <MobileFooter />
        </>
      )}
    </>
  );
};

export default Layout;
