import React from "react";
import Header from "../Header";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
const ApplyDoctor = () => {
  return (
    <div id="body">
      <Header />
      <div id="Doctorform">
        <form action="#" onSubmit={(e) => e.preventDefault()}>
          <h2>Personal Details</h2>
          <div className="inputCon">
            <div>
              <label>First Name:</label>
              <br />
              <Input placeholder="First Name" size="lg" />
            </div>
            <Input placeholder="Last Name" size="lg" />
            <Input placeholder="Your Email" size="lg" />
            <Input placeholder="Phone Number" size="lg" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ApplyDoctor;
