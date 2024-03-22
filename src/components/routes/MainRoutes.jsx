import React from "react";
import { Route, Routes } from "react-router-dom";
import UserLogin from "../user-login/UserLogin";
import App from "../../App";
import { ToastContainer } from "react-toastify";

import toast, { Toaster } from "react-hot-toast";
function MainRoutes() {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/home/" element={<App />} />
      </Routes>
    </>
  );
}

export default MainRoutes;
