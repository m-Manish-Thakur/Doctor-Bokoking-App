import React from "react";
import { Button, Badge } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const { user } = useSelector((store) => store.user);

  return (
    <header>
      <Link to="/">
        <img src="https://wpthemesgrid.com/themes/medikit/img/logo.png" alt="logo" />
      </Link>
      <nav>
        <Link to="/notifications">
          <Button colorScheme="teal" variant="ghost">
            <span className="material-symbols-outlined">notifications</span>
            <p className="badge">{user?.unseenNotifications.length}</p>
          </Button>
        </Link>
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
