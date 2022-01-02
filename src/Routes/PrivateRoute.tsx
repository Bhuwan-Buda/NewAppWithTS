import React from "react";
import Dashboard from "../Components/UserComponents/Dashboard";
import UserProfile from "../Components/UserComponents/UserProfile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/Header";
import Footer from "../Components/Footer/Footer";
import UserLists from "../Components/UserComponents/UserLists";

const PrivateRoute = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users_list" element={<UserLists />} />
        <Route path="/users_list/:userId" element={<UserProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default PrivateRoute;
