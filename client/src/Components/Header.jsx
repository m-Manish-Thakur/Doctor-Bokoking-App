import React from "react";
import { Button } from "@chakra-ui/react";

const Header = () => {
  return (
    <header>
      <img src="https://wpthemesgrid.com/themes/medikit/img/logo.png" alt="logo" />
      <nav>
        <Button colorScheme="teal" variant="ghost">
          <span className="material-symbols-outlined">notifications</span>
        </Button>
        <Button colorScheme="green">Login</Button>
        <Button colorScheme="green" variant="outline">
          Register
        </Button>
      </nav>
    </header>
  );
};

export default Header;
