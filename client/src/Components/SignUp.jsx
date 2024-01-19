import React from "react";
import Header from "./Header";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div id="body">
      <Header />
      <div id="form">
        <form>
          <div id="title">Register Here</div>
          <Input placeholder="First Name" size="md" required />
          <Input placeholder="Last Name" size="md" required />
          <Input placeholder="Enter email" size="md" required />
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Create Password" />
            <InputRightElement width="4.5rem">
              <span class="material-symbols-outlined" onClick={handleClick}>
                {show ? "visibility" : "visibility_off"}
              </span>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="green">Register Now</Button>
          <Link to="/signin">
            <p>
              Already have an account? <a>Login now</a>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
