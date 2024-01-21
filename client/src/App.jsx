import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Wrapper from "./Components/Wrapper";

const App = () => {
  return (
    <ChakraProvider>
      <Provider store={appStore}>
        <Wrapper />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
