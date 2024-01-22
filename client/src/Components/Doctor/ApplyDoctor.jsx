import React, { useRef } from "react";
import Header from "../Header";
import { Input, Button } from "@chakra-ui/react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { SERVER_URL } from "../../Utils/Constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ApplyDoctor = () => {
  const { user } = useSelector((store) => store.user);

  const navigate = useNavigate();
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const website = useRef(null);
  const address = useRef(null);
  const specialization = useRef(null);
  const experience = useRef(null);
  const feePerConsultation = useRef(null);
  const hospitalOrClinic = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission
    try {
      const response = await axios.post(
        `${SERVER_URL}/api/user/apply-for-doctor`,
        {
          userId: user._id,
          firstname: firstName.current.value,
          lastname: lastName.current.value,
          email: email.current.value,
          phone: phone.current.value,
          websiteLink: website.current.value,
          address: address.current.value,
          specialization: specialization.current.value,
          experience: experience.current.value,
          feePerConsultation: feePerConsultation.current.value,
          hospitalOrClinic: hospitalOrClinic.current.value,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = response.data;
      console.log(response.data);
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="body">
      <Header />
      <div id="Doctorform">
        <form onSubmit={handleSubmit}>
          <h2>Personal Details</h2>
          <div className="inputCon">
            <div>
              <label>
                First Name <span>*</span>
              </label>
              <br />
              <Input placeholder="First Name" size="md" required ref={firstName} />
            </div>
            <div>
              <label>
                Last Name <span>*</span>
              </label>
              <br />
              <Input placeholder="Last Name" size="md" required ref={lastName} />
            </div>
            <div>
              <label>
                Your Email <span>*</span>
              </label>
              <br />
              <Input placeholder="Your email" size="md" required ref={email} />
            </div>
            <div>
              <label>
                Phone no. <span>*</span>
              </label>
              <br />
              <Input placeholder="Phone no." size="md" required ref={phone} />
            </div>
            <div>
              <label>Website Link</label>
              <br />
              <Input placeholder="Website Link" size="md" ref={website} />
            </div>
            <div>
              <label>
                Address <span>*</span>
              </label>
              <br />
              <Input placeholder="Address" size="md" required ref={address} />
            </div>
          </div>

          {/* ######################   Professional Details  ##################### */}
          <br />
          <br />
          <h2>Professional Details</h2>
          <div className="inputCon">
            <div>
              <label>
                Specialization <span>*</span>
              </label>
              <br />

              <Input placeholder="Eg. Cardiologist" size="md" required ref={specialization} />
            </div>
            <div>
              <label>
                Experience <span>*</span>
              </label>
              <br />
              <Input placeholder="Eg. 2.5 Years" type="number" size="md" required ref={experience} />
            </div>
            <div>
              <label>
                Fee per consultation <span>*</span>
              </label>
              <br />
              <Input placeholder="In Rupees" type="number" size="md" required ref={feePerConsultation} />
            </div>
            <div>
              <label>
                Hospital/Clinic <span>*</span>
              </label>
              <br />
              <Input placeholder="Hospital/Clinic" size="md" required ref={hospitalOrClinic} />
            </div>
          </div>
          <Button colorScheme="green" variant="solid" type="submit">
            Apply For Doctor
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ApplyDoctor;
