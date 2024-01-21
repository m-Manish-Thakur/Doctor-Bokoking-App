import React, { useRef, useState } from "react";
import Header from "./Header";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../Utils/Constants";
import toast from "react-hot-toast";
import { startLoading, stopLoading } from "../Utils/loadingSlice";
import { useDispatch } from "react-redux";

const SignUp = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const firstname = useRef();
  const lastname = useRef();
  const email = useRef();
  const password = useRef();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startLoading());
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/user/signup`,
        {
          firstname: firstname.current.value,
          lastname: lastname.current.value,
          email: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      dispatch(stopLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        toast("Redirecting to Login Page");
        navigate("/signin");
      }
    } catch (error) {
      if (!error.response.data.success) {
        toast.error(error.response.data.message);
      }
      dispatch(stopLoading());
    }
  };

  return (
    <div id="body">
      <Header />
      <div id="form">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div id="title">Register Here</div>
          <Input placeholder="First Name" size="md" ref={firstname} required />
          <Input placeholder="Last Name" size="md" ref={lastname} required />
          <Input placeholder="Enter email" size="md" ref={email} required />
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type={show ? "text" : "password"}
              placeholder="Create Password"
              ref={password}
              required
            />
            <InputRightElement width="4.5rem">
              <span class="material-symbols-outlined" onClick={handleClick}>
                {show ? "visibility" : "visibility_off"}
              </span>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="green" type="submit" onClick={handleSubmit}>
            Register Now
          </Button>
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
