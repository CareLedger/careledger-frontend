import React from "react";
import PatientTableData from "../../../component/PatientTableData/patientTableData";

const PatientsDashboard = () => {
  

  
  return (
    <div className="flex-grow py-[20px] bg-[#000f19] px-[30px]">
      <h1 className="text-[25px] text-white mt-[5px]">Patients List</h1>
      <p className="text-[15px] text-gray-400">Get all patients lists</p>

      <PatientTableData/>
    </div>
  );
};

export default PatientsDashboard;
