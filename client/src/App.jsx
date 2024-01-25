import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import appStore from "./Utils/appStore";
import Router from "./Components/Routes/Routes";

const App = () => {
  return (
    <ChakraProvider>
      <Provider store={appStore}>
        <Router />
      </Provider>
    </ChakraProvider>
  );
};

export default App;
