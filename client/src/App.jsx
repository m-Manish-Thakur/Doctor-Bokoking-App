import React, { useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";

const App = () => {
  return (
    <ChakraProvider>
      <Provider store={appStore}>
        <div id="App">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
            </Routes>
          </BrowserRouter>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
      </Provider>
    </ChakraProvider>
  );
};

export default App;
