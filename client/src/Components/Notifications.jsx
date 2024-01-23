import React from "react";
import { useSelector } from "react-redux";
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from "@chakra-ui/react";
import Header from "./Header";
import { useNavigate } from "react-router-dom";

const Notifications = () => {
  const { user } = useSelector((store) => store.user);
  console.log(user);
  const navigate = useNavigate();

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
              <Button colorScheme="teal" size="sm" variant="outline" style={{ float: "right" }}>
                Mark all as read
              </Button>
              <div style={{ width: "100%", marginTop: "35px", height: "1px" }}></div>
              {user &&
                user?.unseenNotifications.map((item, index) => (
                  <div key={index} className="item">
                    <p onClick={() => navigate(`${item.onClickPath}`)}>{item?.message}</p>
                  </div>
                ))}
            </TabPanel>
            <TabPanel>{/* Read Panel */}</TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </div>
  );
};

export default Notifications;
