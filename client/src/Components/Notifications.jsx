import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button, Box, Image, Center } from "@chakra-ui/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import { SERVER_URL } from "../Utils/Constants";
import { setUser } from "../Utils/userSlice";
const Notifications = () => {
  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();
  console.log(user);

  const navigate = useNavigate();

  const markAsRead = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/user/mark-as-read-notifications/${user?._id}`);
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteNotification = async () => {
    try {
      const response = await axios.post(`${SERVER_URL}/api/user/delete-notifications/${user?._id}`);
      if (response.data.success) {
        toast.success(response.data.message);
        dispatch(setUser(await response.data.user));
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div id="body">
      <Header />
      <div id="notifications">
        <h1 id="heading">Notifications</h1>
        <br />
        <Tabs>
          <TabList>
            <Tab>Unread</Tab>
            <Tab>Read</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Button
                colorScheme="teal"
                size="sm"
                variant="outline"
                onClick={() => markAsRead()}
                style={{ float: "right" }}
              >
                Mark all as read
              </Button>
              <div style={{ width: "100%", marginTop: "35px", height: "1px" }}></div>
              {user?.unseenNotifications.length > 0 ? (
                user?.unseenNotifications.map((item, index) => (
                  <div key={index} className="item">
                    <p onClick={() => navigate(`${item.onClickPath}`)}>{item?.message}</p>
                  </div>
                ))
              ) : (
                <div>
                  <Image
                    src="Images/notification.jpg"
                    alt="Notification"
                    style={{ margin: "20px auto", textAlign: "center", width: "360px" }}
                  />
                </div>
              )}
            </TabPanel>
            <TabPanel>
              <Button
                colorScheme="teal"
                size="sm"
                variant="outline"
                onClick={() => deleteNotification()}
                style={{ float: "right" }}
              >
                Delete all
              </Button>
              <div style={{ width: "100%", marginTop: "35px", height: "1px" }}></div>
              {user?.seenNotifications.length > 0 ? (
                user?.seenNotifications.map((item, index) => (
                  <div key={index} className="item">
                    <p onClick={() => navigate(`${item.onClickPath}`)}>{item?.message}</p>
                  </div>
                ))
              ) : (
                <div>
                  <Image
                    src="Images/notification.jpg"
                    alt="Notification"
                    style={{ margin: "20px auto", textAlign: "center", width: "360px" }}
                  />
                </div>
              )}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
