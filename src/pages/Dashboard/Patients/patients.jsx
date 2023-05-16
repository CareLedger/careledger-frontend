import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { AiOutlineSave } from "react-icons/ai";

const Patients = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    date: "",
    description: "",
    gender: "",
  });

  const handleChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement save function here
  };

  return (
    <div className="flex-grow py-[20px] px-[30px]">
      <h1 className="text-[25px] text-white mt-[5px]">Basic Information</h1>
      <p className="text-[15px] text-gray-400">Description text here...</p>

      <form
        onSubmit={handleSubmit}
        className="bg-gray-900 flex flex-wrap gap-y-[25px] mt-[40px] py-[35px] justify-between px-[25px] rounded-lg w-full md:mr-6 mb-4 md:mb-0"
      >
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="rounded-lg border-2 text-white outline-none morphism shadow border-gray-600 h-[45px] w-[32%] p-2 bg-transparent"
          required
        />

        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          className="rounded-lg border-2 text-white outline-none morphism shadow border-gray-600 h-[45px] w-[32%] p-2 bg-transparent"
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          className="rounded-lg border-2 text-white outline-none morphism shadow border-gray-600 h-[45px] w-[32%] p-2 bg-transparent"
          required
        />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={formData.age}
          onChange={handleChange}
          className="rounded-lg border-2 text-white outline-none morphism shadow border-gray-600 h-[45px] w-[24%] p-2 bg-transparent"
          required
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="rounded-lg border-2 text-white morphism shadow outline-none text-gray-600 border-gray-600 h-[45px] w-[24%] p-2 bg-transparent"
          required
        />

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="rounded-lg text-white border-2 outline-none morphism shadow  border-gray-600 h-[45px] w-[24%] p-2 bg-transparent"
          required
          placeholder="Gender"
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="rounded-lg text-white border-2 outline-none morphism shadow border-gray-600 h-[45px] w-[24%] p-2 bg-transparent"
          required
          placeholder="Enter Patient Email"
        />

        <input
          type="text"
          name="text"
          placeholder="Name of Test Taken"
          // value={formData.firstName}
          onChange={handleChange}
          className="rounded-lg outline-none morphism shadow border-2 text-white border-gray-600 h-[45px] w-[48%] p-2 bg-transparent"
          required
        />

        <input
          type="text"
          name="text"
          placeholder="Test Results"
          // value={formData.lastName}
          onChange={handleChange}
          className="rounded-lg border-2 text-white outline-none morphism shadow border-gray-600 h-[45px] w-[48%] p-2 bg-transparent"
          required
        />

        <input
          type="file"
          name="file"
          // value={formData.email}
          onChange={handleChange}
          className="rounded-lg border-2 outline-none morphism shadow text-gray-600 border-gray-600 h-[45px] w-full p-2 bg-transparent"
          required
          placeholder="Input file"
        />
        

        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="rounded-lg border-2 bg-transparent outline-none morphism shadow w-full border-gray-600 p-4"
          placeholder="Patient Description"
          rows={6}
        />

        <div className="flex justify-end mt-[15px]">
          <button
            type="button"
            className="mr-4 px-[25px] py-2 bg-blue-600 text-white rounded hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
          >
            Save
          </button>
          <button
            type="button"
            className="px-[25px] py-2 bg-gray-600 text-white rounded hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-opacity-50"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default Patients;
