import React from "react";
import Header from "./Header";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div id="body">
      <Header />
      <div id="form">
        <form>
          <div id="title">Login Here</div>
          <Input placeholder="Enter email" size="md" required />
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter Password" />
            <InputRightElement width="4.5rem">
              <span class="material-symbols-outlined" onClick={handleClick}>
                {show ? "visibility" : "visibility_off"}
              </span>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="green">Login Now</Button>
          <Link to="/signup">
            <p>
              Don't have an account? <a>Register now</a>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignIn;