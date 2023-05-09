import React from "react";
import girl from "../../../assets/girl1.jpg"
import girl1 from "../../../assets/girrl.jpg"
import man from "../../../assets/man1.jpg"

const PatientsDashboard = () => {
  const data = [
    {
      id: 1,
      media: girl,
      patientId: "P0001",
      name: "John Doe",
      age: 32,
      address: "123 Main Street",
      number: "+1-555-555-5555",
      status: "Active",
    },
    {
      id: 2,
      media: girl1,
      patientId: "P0002",
      name: "Jane Smith",
      age: 45,
      address: "456 Oak Avenue",
      number: "+1-555-555-5555",
      status: "Inactive",
    },
    {
      id: 2,
      media: man,
      patientId: "P0002",
      name: "Jane Smith",
      age: 45,
      address: "456 Oak Avenue",
      number: "+1-555-555-5555",
      status: "Inactive",
    },
   
  ];

  
  return (
    <div className="flex-grow py-[20px] bg-[#000f19] px-[30px]">
      <h1 className="text-[25px] text-white mt-[5px]">Patients List</h1>
      <p className="text-[15px] text-gray-400">Get all patients lists</p>

      <table className="min-w-full divide-y divide-gray-700 mt-[50px]">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Media
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Patient ID
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Address
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-900 divide-y divide-gray-700">
          {data.map((item) => {
            return (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="flex-shrink-0 h-10 w-10">
                      <img
                        className="h-10 w-10 rounded-full"
                        src={item.media}
                        alt=""
                      />
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.patientId}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-400">
                    {item.name}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.age}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.address}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.number}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-400">{item.status}</div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default PatientsDashboard;
