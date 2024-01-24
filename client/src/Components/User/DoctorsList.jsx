import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Divider, Flex, Spacer } from "@chakra-ui/react";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/react";
import Doctor_Card from "./Doctor_Card";
import axios from "axios";
import { SERVER_URL } from "../../Utils/Constants";
import toast from "react-hot-toast";

const DoctorsList = () => {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/doctor/get-all-doctors`);
      setDoctors(response.data.doctors);
    } catch (error) {
      if (!error.response.data.success) {
        toast.error(error.response.data.message);
      }
    }
  };

  return (
    <div id="body">
      <Header />
      <div style={{ padding: "25px 10px" }}>
        <h1 id="heading">Doctors List</h1>
        <Divider mt="3" />
        <Flex wrap="wrap" justify="space-around">
          {doctors && doctors.map((doctor) => <Doctor_Card doctor={doctor} />)}
        </Flex>
      </div>
    </div>
  );
};

export default DoctorsList;
