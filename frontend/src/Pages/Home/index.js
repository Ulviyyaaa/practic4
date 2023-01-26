import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import HomePageComponents from "../../Components/HomePageComponents";
import Footer from "../../Layout/Footer";
import Navbar from "../../Layout/Navbar";

function Home() {
  return (
    <>
      <HelmetProvider>
        <Helmet>
            <title>
                Home page
            </title>
        </Helmet>
        <Navbar />
        <HomePageComponents />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default Home;
