import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);

  return (
    <header>
      <Link to="/">
        <img src="https://wpthemesgrid.com/themes/medikit/img/logo.png" alt="logo" />
      </Link>
      <nav>
        <Button colorScheme="teal" variant="ghost">
          <span className="material-symbols-outlined">notifications</span>
        </Button>
        {!user ? (
          <>
            <Link to="/signin">
              <Button colorScheme="green">Login</Button>
            </Link>
            <Link to="/signup">
              <Button colorScheme="green" variant="outline">
                Register
              </Button>
            </Link>
          </>
        ) : (
          <></>
        )}
      </nav>
    </header>
  );
};

export default Header;
