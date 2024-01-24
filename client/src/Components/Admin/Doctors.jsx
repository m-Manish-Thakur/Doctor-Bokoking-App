import React, { useEffect, useState } from "react";
import Header from "../Header";
import { Divider } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tr, Th, Td, TableContainer, Button } from "@chakra-ui/react";
import { SERVER_URL } from "../../Utils/Constants";
import axios from "axios";
import toast from "react-hot-toast";

const Doctors = () => {
  const [doctors, setDoctors] = useState(null);

  useEffect(() => {
    fetchDoctorsList();
  }, []);

  const fetchDoctorsList = async () => {
    try {
      const response = await axios.get(`${SERVER_URL}/api/admin/get-all-doctors`);
      setDoctors(response.data.doctors);
    } catch (error) {
      console.log(error);
    }
  };

  const approveDoctor = async (userId) => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/admin/approveDoctorApplication/${userId}`);
      console.log(response.data);
      fetchDoctorsList();
      if (response.data.success) {
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error);
      if (!error.response.data.success) {
        toast.error(error.response.data.message);
      }
    }
  };

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
                      <Td>{new Date(doctor?.createdAt).toISOString().split("T")[0]}</Td>
                      <Td>{doctor?.status}</Td>
                      <Td>
                        {doctor?.status === "Pending" ? (
                          <>
                            <Button colorScheme="teal" size="xs" onClick={() => approveDoctor(doctor?.userId)}>
                              Approve
                            </Button>
                          </>
                        ) : (
                          <Button colorScheme="red" size="xs">
                            Reject
                          </Button>
                        )}
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
