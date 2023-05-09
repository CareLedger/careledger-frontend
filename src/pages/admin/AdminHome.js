import { React, useState } from 'react'
import {
  ActivitiesContainer,
  AdminHomeParent,
 BarChartContainer,
  CenterWrapper,
  FContainer,
  HContainer,
  PatientCalendarContainer,
  RCalendar,
  PatientStatisticsContainer,
  SummaryCard,
  SummaryContainer,
  LogoContainer,
  LowerContainer,
  CalendarContainer
} from "./admin.home.styles.js";
import slogo from "../../assets/slogo.png";
import plogo from "../../assets/plogo.png";
import rlogo from "../../assets/rlogo.png";
import ellipse from "../../assets/ellipse.png";
import ellipse2 from "../../assets/ellipse2.png";
import rec1 from "../../assets/rec1.png";
import rec2 from "../../assets/rec2.png";
import Calendar from 'react-calendar';
import { getUserName } from "../../utils";
import BarChart from "react-bar-chart";




const AdminHome = () => {
  const data = [
    { text: "Mon", value: 900 },
    { text: "Tue", value: 750 },
    { text: "Wed", value: 600 },
    { text: "Thur", value: 900 },
    { text: "Fri", value: 600 },
    {text: "Sat", value: 500}
  ];
  const color = { color: "#00b4b6" };
  const margin = { top: 20, right: 20, bottom: 30, left: 50 };
  const handleBarClick = (element) => {
    console.log(`The  ${element.text} with value ${element.value} was clicked`);
  };
  const [date, setDate] = useState(new Date());

  return (

    <AdminHomeParent>
      <CenterWrapper>
        <h1>Welcome Back, {getUserName()}</h1>
        <SummaryContainer>
          <SummaryCard background="#00b4b6" borderColor="#000000">
            <LogoContainer><img src={slogo} alt="slogo" width="15px" height="15px" />
              <h2>Overall Visitors</h2> <img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
            </LogoContainer>
            <h1>2,567</h1>
            <p>Data obtained from the last 7 days
              from 1,040 Visitors to 2,567 Visitors</p>
            <FContainer><img src={rec1} alt="rec1" /> <img src={rec2} alt="rec2" /> </FContainer>
          </SummaryCard>
          <SummaryCard background="#00b4b6" borderColor="#000000">
            <LogoContainer><img src={plogo} alt="plogo" width="15px" height="15px" />
              <h2 color='#0000'>Total Patients</h2><img src={ellipse2} alt="ellipse2" />
              <img src={ellipse2} alt="ellipse2" />
              <img src={ellipse2} alt="ellipse2" /></LogoContainer>
            <h1>1567</h1>
            <p>Increase in data by 700 inpatients
              over the last 7 days</p>
            <FContainer><img src={rec1} alt="rec1" /> <img src={rec2} alt="rec2" /> </FContainer>
          </SummaryCard>
          <SummaryCard background="#00b4b6" borderColor="#000000">
            <LogoContainer><img src={rlogo} alt="rlogo" width="15px" height="15px" />
              <h2>Records Upload</h2><img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
            </LogoContainer>
            <h1>1500</h1>
            <p>Records uploaded over the last 7
              days increased by over 500</p>
            <FContainer><img src={rec1} alt="rec1" /> <img src={rec2} alt="rec2" /> </FContainer>
          </SummaryCard>
          <SummaryCard background="#00b4b6" borderColor="#000000">
            <LogoContainer><img src={plogo} alt="plogo" width="15px" height="15px" />
              <h2>Total Doctors</h2><img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
              <img src={ellipse} alt="ellipse" />
            </LogoContainer>
            <h1>1001</h1>
            <p>More onboarding of 500 doctors
              over the last 7 days</p>
            <FContainer><img src={rec1} alt="rec1" /> <img src={rec2} alt="rec2" /> </FContainer>
          </SummaryCard>
        </SummaryContainer>
        <ActivitiesContainer>
         <PatientStatisticsContainer> <BarChartContainer><h1>Patient Statistics</h1>

          <BarChart
          ylabel="Quantity"
          width={400}
          height={400}
          margin={margin}
          data={data}
          color={color}
          onBarClick={handleBarClick}
        />
        </BarChartContainer>
          </PatientStatisticsContainer>
          <PatientCalendarContainer>
            <CalendarContainer><RCalendar><HContainer><h1>Calendar</h1></HContainer>
              <Calendar onChange={setDate} value={date} />

            </RCalendar>
            </CalendarContainer>
          </PatientCalendarContainer>


        </ActivitiesContainer>
        <LowerContainer>

        </LowerContainer>
      </CenterWrapper>
    </AdminHomeParent>
  );
};

export default AdminHome