import React from "react";
import TopBar from "./Topbar/topbar";
import Sidebar from "./Sidebar/sidebar";
import MainContent from "./Home/home";
import PatientsDashboard from "./PatientsDashboard/patientsDashboard";
import Patients from "./Patients/patients";
import DoctorsDashboard from "./DoctorsDashboard/doctors";
import { Route, Routes } from "react-router-dom";
import {AiOutlineHome} from "react-icons/ai"
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {TbLayoutDashboard} from "react-icons/tb"

const links = [
  { name: "Home", path: "/dashboard", icon:<AiOutlineHome size={20}/>},
  { name: "Patients Dashboard", path: "/dashboard/patients-dashboard", icon:<MdOutlineDashboardCustomize size={25}/>},
  { name: "Doctors Dashboard", path: "/dashboard/doctors", icon:<TbLayoutDashboard size={25}/> },
  { name: "Patients", path: "/dashboard/patients-list" , icon:<TbLayoutDashboard size={25}/> },
];

function Dashboard() {
  return (
    <div className="flex bg-[#000f19] flex-col min-h-screen">
      {/* Top bar */}
      <TopBar />
      {/* Content */}
      <div className="flex flex-grow">
        {/* Sidebar */}
        <Sidebar links={links} />
        {/* Main content */}

        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/patients-dashboard" element={<PatientsDashboard />} />
          <Route path="/doctors" element={<DoctorsDashboard />} />
          <Route path="/patients-list" element={<Patients />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
