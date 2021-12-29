import React from "react";
import Dashboard from "../Components/UserComponents/Dashboard";
import UserProfile from "../Components/UserComponents/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";

const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user_profile" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default PrivateRoute;
