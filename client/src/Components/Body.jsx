import React, { useEffect } from "react";
import Header from "./Header";
import { Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { setUser } from "../Utils/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Retrieve the user from local storage and parse it back to an object
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(user));
  }, []);

  return (
    <div id="body">
      <Header />
      <div id="bodyContainer">
        <div>
          <h1>
            Book Your Doctor <br /> Appointment <br /> Online.
          </h1>
          <p>
            A Healthier Tommorrow Starts Today. Schedule Your Appointment Your Wellness, Our Expertise: Set Up Your
            Appointment Today.
          </p>
          <Button colorScheme="green">Book Appointment</Button>
          <Button colorScheme="green" variant="outline" style={{ marginLeft: "20px" }}>
            Register
          </Button>
        </div>
        <img
          src="https://img.freepik.com/premium-vector/online-doctor-medical-consultation-vector-illustration_311563-446.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default Body;
