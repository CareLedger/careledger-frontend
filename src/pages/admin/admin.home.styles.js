import styled from "styled-components";

export const AdminHomeParent = styled.main`
  width: 100%;
  height: 100%;
  background:#ffffff;
`;

export const CenterWrapper = styled.div`
  width: 93%;
  height: 90%;
   margin: 2rem auto;
   background: #ffffff;

  & h1{
  font-size: 2.0rem;
  font-weight: 500;
  color: #000F19;

}

`;

export const SummaryContainer = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  gap: 1.5rem;
  justify-content: space-around;
  align-items: center;
  padding-top:1.5rem;
  background: #ffffff;
`;

export const SummaryCard = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem;
  background: ${(props) => (props.background ? props.background : "")};
  border: 1px solid ${(props) => (props.borderColor ? props.borderColor : "")};
  border-radius: 10px;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  
  & h2 {
    font-weight: 500;
    font-size: 1.1rem;
    color: #ffffff;
    line-height: 1.2rem;
    padding-left: 1rem;
    padding-right: 0.5rem;
  }

  & h1 {
    font-weight: 700;
    font-size: 1.5rem;
    color: #ffffff;
    line-height: 1.8rem;
  }

  & p {
    font-weight: 200;
    font-size: 1rem;
    color: #ffffff;
    line-height: 1rem;
  }
  

 
`;

export const LogoContainer = styled.section`
  width: 100%;
  display: flex;
  background: #00B4B6;
  align-items: center;
  height: 20%;
  
`;

export const FContainer = styled.section`
  width: 100%;
  display: flex;
  background: #00B4B6;
  align-items: center;
  height: 30%;
  padding-top: 0.5rem;

  & img {
    position:absolute;
    }

  & rec1 {
   transform: translate(-50%, -50%);
  }
`;

export const ActivitiesContainer = styled.section`
  width: 100%;
  display: flex;
  background: #ffffff;
  align-items: center;
  gap: 2rem;
  height: 100%;
  
`;

export const PatientStatisticsContainer = styled.div`
  height: 100%;
  width:60%;
  display:flex;
  background: #ffffff;
  border: 1px solid #00B4B6;
  border-radius: 12px;
  margin-top:3rem;
  padding-left:1rem;
  padding-top:1rem;
  
  
`;

export const BarChartContainer = styled.div`
  height: 100%;
  max-width:100%;
  display:flex;
  flex-direction: column;
  width: 400px;
  color: #00B4B6;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5em;

  & h1{
    color: #00B4B6;
  }
  

`;

export const PatientCalendarContainer = styled.div`
  height: 100%;
  width:40%;
  display:flex;
  border: 1px solid #00B4B6;
  border-radius: 12px;
  margin-top:3rem;
  padding-top: 1rem;
  padding-left:1rem;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.05), 0px 15px 25px rgba(0, 0, 0, 0.03);

  & h1 {
    margin-right: 3rem;
  }

`;


export const CalendarContainer = styled.div`
  height: 100%;
  width:100%;
  display:flex;
  flex-direction: column;
  

`;

export const HContainer = styled.div`
  height: 20%;
  width:100%;
  display:flex;
  flex-direction: column;

  & h1 {
 color: #00B4B6;
  }
  

`;

export const RCalendar = styled.div`
  height: 100%;
  max-width:100%;
  display:flex;
  flex-direction: column;
  width: 400px;
  color: #00B4B6;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5em;
  

`;

export const LowerContainer = styled.div`
  width: 100%;
  display: flex;
  background: #ffffff;
  align-items: center;
  gap: 2rem;
  height: 100%;
  margin-top: 5rem;
  border: 1px solid #00B4B6;
  border-radius: 8px;
  padding-top: 5rem;
  justify-content: space-around;
`;


