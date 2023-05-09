import { CgHomeAlt } from "react-icons/cg";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineTeam } from "react-icons/ai";
import { TbSettings } from "react-icons/tb";

export const sideBarLinks = [
  {
    path: "/admin/",
    icon: <CgHomeAlt size={22} />,
    text: "Overview",
    alt: "logo",
  },
  {
    path: "/admin/appointment",
    icon: <MdOutlineVerified size={22} />,
    text: "Appointment",
    alt: "blocks",
  },
  {
    path: "/admin/departments",
    icon: <MdOutlineVerified size={22} />,
    text: "Departments",
    alt: "bdoctor",
  },
  {
    path: "/admin/doctors",
    icon: <AiOutlineTeam size={22} />,
    text: "Doctors",
    alt: "digitalStore",
  },
  
  {
    path: "/admin/cello-wallet",
    icon: <AiOutlineTeam size={22} />,
    text: "Celo Wallet",
    alt: "digitalStore",
  },
  
  {
    path: "/admin/chat-box",
    icon: <AiOutlineTeam size={22} />,
    text: "Chat Box",
    alt: "digitalStore",
  },
  
  {
    path: "/admin/setting",
    icon: <TbSettings size={22} />,
    text: "Setting",
    alt: "setting-icon",
  },
];