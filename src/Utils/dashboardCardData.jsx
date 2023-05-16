import {
    FaUser,
    FaFileUpload,
    FaClipboardList,
    //   FaBlockchain,
  } from "react-icons/fa";

export const DashboardCardData = [
    {
        icon: <FaUser color="white" />,
        title: "Overall Visitors",
        figure: "2,567",
        averageFigure: "+ 10.4%",
        description: "Data obtained from the last 7days from 1,040 Visitors to 2,587 Visitors.",
        progressNumber: "w-[100px]",

    },
    {
        icon: <FaFileUpload color="white" />,
        title: "Total Patient",
        figure: "1,567",
        averageFigure: "+ 10.4%",
        description: "Increased in data by 700 patient over the last 7 days",
        progressNumber: "w-[100px]",

    },
    {
        icon: <FaClipboardList color="white" />,
        title: "Record Upload",
        figure: "1,500",
        averageFigure: "+ 140%",
        description: "Record Upload over the last 7days increased by over 500",
        progressNumber: "w-[100px]",

    },
    {
        icon: <FaFileUpload color="white" />,
        title: "Total Doctors",
        figure: "1,001",
        averageFigure: "+ 240%",
        description: "DMore onboarding of 500 doctors over the last 7 days",
        progressNumber: "w-[100px]",

    }
]