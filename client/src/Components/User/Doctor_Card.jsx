import React from "react";
import { Card, CardBody, Flex, Image, Stack, Badge, Button, Skeleton, Spacer } from "@chakra-ui/react";

const Doctor_Card = ({ doctor }) => {
  console.log(doctor);
  return doctor ? (
    <div>
      <Card width={"280px"} id="card">
        <CardBody>
          <Image src="/Images/doctor.png" alt="Doctor" borderRadius="lg" size="xl" />
          <Badge mt="2" fontSize="0.8em" colorScheme="green">
            {doctor?.experience}+ Years of Experience
          </Badge>
          <Stack mt="3" spacing="1">
            <Flex align="center">
              <div>
                <p>
                  {doctor?.firstname} {doctor?.lastname}
                </p>
                <h2>{doctor?.specialization}</h2>
              </div>
              <Spacer />
              <h3>
                ₹ {doctor?.feePerConsultation}
                <span>/Hour</span>
              </h3>
            </Flex>
          </Stack>

          <Button mt="3" variant="solid" colorScheme="green" width={"100%"}>
            Get Appointment
          </Button>
        </CardBody>
      </Card>
    </div>
  ) : (
    <>
      <div>
        <Skeleton width="300px" height="290px" borderRadius="lg" />
        <Skeleton width="200px" height="20px" borderRadius="lg" mt="3" />
        <Skeleton width="300px" height="30px" borderRadius="lg" mt="2" />
        <Skeleton width="300px" height="25px" borderRadius="lg" mt="2" />
        <Skeleton width="250px" height="50px" borderRadius="lg" mt="3" />
      </div>
    </>
  );
};

export default Doctor_Card;
