import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";

const App = () => {
  return (
    <ChakraProvider>
      <div id="App">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ChakraProvider>
  );
};

export default App;
