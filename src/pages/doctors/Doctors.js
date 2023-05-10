import React, { useState } from "react";
import FormTextInput from "../../../src/component/custom-input/FormTextInput";
import {
    DoctorsParent,
    DoctorWrapper,
    Heading,
    DivideWrapper,
    ResumeForm,
    Side,
    SubmitContainer
} from "./doctors.styles";
import FormDateInput from "../../../src/component/custom-date-input/FormDateInput";




const Doctors = () => {
    const [DoctorInfo, setDoctorInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        contactAddress: "",
        city: "",
        country: "",
        dateOfBirth: "",
    });

    
const handleChange = (e) => {
            const { value, name } = e.target;
            setDoctorInfo((prev) => ({
                ...prev,
                [name]: value,
            }));
        };

        const {
            firstName,
            lastName,
            email,
            phoneNumber,
            contactAddress,
            city,
            country,
            dateOfBirth,
        } = DoctorInfo;
    
    
        return (
            <DoctorsParent>
                <DoctorWrapper>
                    <Heading>Doctor's Personal Information</Heading>
                    <ResumeForm>
                        <FormTextInput
                            labelName="First Name"
                            placeholder="Enter first name"
                            value={firstName}
                            name="firstName"
                            handleChange={handleChange}
                        />
                        <FormTextInput
                            labelName="Last Name"
                            placeholder="Enter last name"
                            value={lastName}
                            name="lastName"
                            handleChange={handleChange}
                        />
                        <FormTextInput
                            labelName="Email Address"
                            placeholder="Enter email address"
                            value={email}
                            name="email"
                            handleChange={handleChange}
                        />
                        <FormTextInput
                            labelName="Phone Number"
                            placeholder="Enter phone number"
                            value={phoneNumber}
                            name="phoneNumber"
                            handleChange={handleChange}
                        />
                        <FormTextInput
                            labelName="Contact Address"
                            placeholder="Enter contact address"
                            value={contactAddress}
                            name="contactAddress"
                            handleChange={handleChange}
                        />

                        <FormDateInput
                            labelName="Date Of Birth"
                            placeholder=""
                            value={dateOfBirth}
                            name="dateOfBirth"
                            handleChange={handleChange}
                        />

                        <DivideWrapper>
                            <Side>
                                {" "}
                                <FormTextInput
                                    labelName="City"
                                    placeholder="Enter city"
                                    width="100%"
                                    value={city}
                                    name="city"
                                    handleChange={handleChange}
                                />
                            </Side>

                            <Side>
                                {" "}
                                <FormTextInput
                                    labelName="Country"
                                    placeholder="Enter country"
                                    width="100%"
                                    value={country}
                                    name="country"
                                    handleChange={handleChange}
                                />
                            </Side>
                        </DivideWrapper>
                        <SubmitContainer>
                            <button>Submit</button>
                        </SubmitContainer>

                    </ResumeForm>
                </DoctorWrapper>
            </DoctorsParent>
        );
    };

    export default Doctors;