import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Myappointments from "./pages/Myappointments";
import Appointment from "./pages/Appointment";
import Navbar from "./components/navbar";
import Doctors from "./pages/Doctors";
import Login from "./pages/login";
import About from "./pages/about";
import Contact from "./pages/contact";
import Myprofile from "./pages/myprofile";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/appointment" element={<Myappointments />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>
    </div>
  );
};

export default App;
