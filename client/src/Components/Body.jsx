import React from "react";
import Header from "./Header";
import { Button, ButtonGroup } from "@chakra-ui/react";

const Body = () => {
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
