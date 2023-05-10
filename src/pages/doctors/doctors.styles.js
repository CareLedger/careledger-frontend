import styled from "styled-components";

export const DoctorsParent = styled.main`
  width: 100%;
  height: 100%;
`;

export const DoctorWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 3rem;
`;

export const Heading = styled.h3`
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.4rem;
  color: #00B4B6;
  margin-left: 2rem;
`;

export const ResumeForm = styled.form`
  width: 80%;
  height: 50%;
  margin-top: 1rem;
  margin-left:2rem;

  & button {
  color: #00B4B6;
   width: 50%;
   font-size:3rem;
   font-weight:400;
   }
`;

export const SubmitContainer = styled.button`
  width: 30%;
  color: #00B4B6;
  font-size:3rem;
  font-weight:400;
  border-radius:10px;
  border: 1px solid #00B4B6;
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 5rem;
   
`;
export const DivideWrapper = styled.div`
  display: flex;
  width: 65%;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Side = styled.div`
  width: 50%;
`;