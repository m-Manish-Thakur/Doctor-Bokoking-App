import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Sidebar from "./Components/Sidebar";
import Body from "./Components/Body";

const App = () => {
  return (
    <ChakraProvider>
      <div id="App">
        <Sidebar />
        <Body />
      </div>
    </ChakraProvider>
  );
};

export default App;
