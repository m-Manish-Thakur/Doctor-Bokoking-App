import React, { useState, useRef } from "react";
import Header from "./Header";
import { Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SERVER_URL } from "../Utils/Constants";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setUser } from "../Utils/userSlice";
import { startLoading, stopLoading } from "../Utils/loadingSlice";

const SignIn = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(startLoading());
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/user/signin`,
        {
          email: email.current.value,
          password: password.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = response.data;
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      dispatch(setUser(response.data.user));
      dispatch(stopLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      if (!error.response.data.success) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div id="body">
      <Header />
      <div id="form">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <div id="title">Login Here</div>
          <Input placeholder="Enter email" size="md" ref={email} required />
          <InputGroup size="md">
            <Input pr="4.5rem" type={show ? "text" : "password"} ref={password} placeholder="Enter Password" />
            <InputRightElement width="4.5rem">
              <span class="material-symbols-outlined" onClick={handleClick}>
                {show ? "visibility" : "visibility_off"}
              </span>
            </InputRightElement>
          </InputGroup>
          <Button colorScheme="green" type="submit" onClick={handleSubmit}>
            Login Now
          </Button>
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
