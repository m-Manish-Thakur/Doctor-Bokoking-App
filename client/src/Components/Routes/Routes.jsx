import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { Toaster } from "react-hot-toast";
import Sidebar from "../Sidebar";
import Body from "../Body";
import SignUp from "../SignUp";
import SignIn from "../SignIn";
import { useDispatch, useSelector } from "react-redux";
import ApplyDoctor from "../Doctor/ApplyDoctor";
import { setUser } from "../../Utils/userSlice";
import Notifications from "../Notifications";
import Doctors from "../Admin/Doctors";
import DoctorsList from "../User/DoctorsList";
import ProtectedRoute from "./ProtectedRoutes";
import Appointments from "../User/Appointments";

const Router = () => {
  const loading = useSelector((state) => state.loading.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    dispatch(setUser(user));
  }, []);

  return (
    <div id="App">
      {loading && (
        <div id="spinnerContainer">
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.100" color="green.500" size="xl" />
        </div>
      )}
      <BrowserRouter>
        <Sidebar />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/user/applyDoctor" element={<ApplyDoctor />} />
          <Route
            path="/notifications"
            element={
              <ProtectedRoute>
                <Notifications />
              </ProtectedRoute>
            }
          />
          <Route path="/admin/doctors" element={<Doctors />} />
          <Route path="/user/doctors-list" element={<DoctorsList />} />
          <Route
            path="/user/appointments"
            element={
              <ProtectedRoute>
                <Appointments />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};

export default Router;
