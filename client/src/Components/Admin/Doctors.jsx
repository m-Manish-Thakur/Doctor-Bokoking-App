import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Divider } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from "@chakra-ui/react";
import { SERVER_URL } from "../../Utils/Constants";
import axios from "axios";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    fetchDoctorsList();
  }, []);

  const fetchDoctorsList = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/user/get-all-doctors`);
      setDoctors(response.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(doctors);

  return (
    <>
      <div id="body">
        <Header />
        <div style={{ padding: "25px 10px" }}>
          <h1 id="heading">Doctors List</h1>
          <br />
          <Divider />
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Name</Th>
                  <Th>Phone</Th>
                  <Th>Created At</Th>
                  <Th>Status</Th>
                  <Th>Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {doctors &&
                  doctors.map((doctor) => (
                    <Tr>
                      <Td>{doctor?.firstname}</Td>
                      <Td>{doctor?.phone}</Td>
                      <Td>{new Date(doctor?.updatedAt).toISOString().split("T")[0]}</Td>
                      <Td>{doctor?.status}</Td>
                      <Td>
                        <Button colorScheme="teal" size="xs" alignItems="center" justifyContent="center">
                          Approve
                        </Button>
                      </Td>
                    </Tr>
                  ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};

export default Doctors;
