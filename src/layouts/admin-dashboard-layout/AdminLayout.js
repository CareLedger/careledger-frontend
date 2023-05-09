import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../component/sidebar/Sidebar";
import AdminHome from "../../pages/admin/AdminHome";
import Appointment from "../../pages/appointment/Appointment";
import Departments from "../../pages/departments/Departments"
import Doctors from "../../pages/doctors/Doctors";
import ChatBox from "../../pages/chat-box/ChatBox";
import Settings from "../../pages/settings/Settings";
import {
  AdminDashboardHeader,
  AdminHeaderContainer,
  AvatarContainer,

  MainContentArea,
  NotificationContainer,
  ParentContainer,
  SearchBarContainer,
  SearchBarForm
} from "./admin.dashboard.styles.js";
import notificationbell from "../../assets/notificationbell.png";
import avatar from "../../assets/avatar.png";
import searchIcon from "../../assets/search-icon.png";
import { sideBarLinks } from "./admin.routes";



const AdminLayout = () => {
  return (
    <ParentContainer>
      <Sidebar routes={sideBarLinks} />

      <MainContentArea>
        {/* Build the admin dashboard header here. See the applicant dashboard for inspiration */}
        <AdminDashboardHeader>
          <AdminHeaderContainer>
            <SearchBarContainer>
              <SearchBarForm>
                <button>
                  <img src={searchIcon} alt="search-icon" />
                </button>
                <input
                  type="text"
                  className="search-input"
                  placeholder="Search anything here..."
                />
              </SearchBarForm>
            </SearchBarContainer>
            
            
            <NotificationContainer>
              <img src={notificationbell} alt="notificationbell" />
            </NotificationContainer>
            <AvatarContainer>
              <img src={avatar} alt="avatar" />
              </AvatarContainer>


          </AdminHeaderContainer>
        </AdminDashboardHeader>

        <div
          className=""
          style={{
            height: "100%",
            overflowX: "hidden",
            overflowY: "auto",
          }}
        >
          <Routes>
            <Route index element={<AdminHome />} />
            <Route path="/" element={<AdminHome />} />
            <Route path="/overview" element={<AdminHome />} />
            <Route path="/appointment" element={<Appointment />} />
            <Route path="/departments" element={<Departments />} />
            <Route
              path="/doctors"
              element={<Doctors />}
            />

            <Route path="/chat-box" element={<ChatBox />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </MainContentArea>
    </ParentContainer>
  );
};

export default AdminLayout;