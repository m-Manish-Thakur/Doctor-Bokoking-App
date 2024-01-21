import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import Sidebar from "./Sidebar";
import Body from "./Body";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useSelector } from "react-redux";
import ApplyDoctor from "./Doctor/ApplyDoctor";

const Wrapper = () => {
  const loading = useSelector((state) => state.loading.isLoading);

  return (
    <div id="App">
      {loading && (
        <div id="spinnerContainer">
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.100" color="green.500" size="xl" />
        </div>
      )}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/applyDoctor" element={<ApplyDoctor />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Wrapper;
