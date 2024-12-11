import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Using Routes instead of Switch
import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCounter/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Banner from "./components/Banner/Banner";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer";
import Login from "./components/Login/Login"; // Import Login component
import Register from "./components/Register/Register"; // Import Register component
import Chatbot from "./components/Chatbot/Chatbot"; // Import Chatbot component

import Img1 from "./assets/banner3.png";

// Banner data
const BannerData = {
  image: Img1,
  tag: "ACCESS LEGAL ADVICE ANYTIME",
  title: "Get Personalized Legal Guidance at Your Convenience",
  subtitle:
    "Our chatbot provides expert legal insights tailored to your needs. Whether it's understanding your constitutional rights or navigating legal challenges, get the support you need anytime, anywhere. With easy accessibility, you can stay informed and confident in your legal decisions. Trust our platform to give you accurate, on-demand legal assistance whenever you need it.",
  link: "#",
};

const App = () => {
  return (
    <Router>
      <main className="overflow-x-hidden">
        {/* Navbar will be visible on all pages */}
        <Navbar />

        {/* Routes section where the content changes based on the route */}
        <Routes>
          {/* Default route */}
          <Route
            path="/"
            element={
              <>
                <NavbarBanner />
                <Hero />
                <NumberCounter />
                <WhyChooseUs />
                <Banner {...BannerData} />
                <Testimonial />
              </>
            }
          />
          {/* Login route */}
          <Route path="/login" element={<Login />} />
          {/* Register route */}
          <Route path="/register" element={<Register />} />
          {/* Chatbot route */}
          <Route path="/chatbot" element={<Chatbot />} />
        </Routes>

        {/* Footer will also be visible on all pages */}
        <Footer />
      </main>
    </Router>
  );
};

export default App;
