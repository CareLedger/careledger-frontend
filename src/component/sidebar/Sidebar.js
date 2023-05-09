import React from "react";
import {
  SidebarLogoContainer,
  SidebarParent,
  SidebarLinksContainer,
  StyledNavLink,
} from "./sidebar.styles.js";
import Clogo from "../../assets/Clogo.png";


const Sidebar = ({ routes }) => {
  
  return (
    <SidebarParent>
      <SidebarLogoContainer>
      <img src={Clogo} alt="Clogo" />
      <h1>Medical Admin Dashboard</h1>
      </SidebarLogoContainer>
        <SidebarLinksContainer>
        <h2>Main Menu</h2>
        {routes.map((link) => (
          <StyledNavLink
            to={link.path}
            style={{ textDecoration: "none" }}
            key={link.text}
          >
            <span>{link.icon}</span>
            <h3>{link.text}</h3>
          </StyledNavLink>
        ))}
      </SidebarLinksContainer>
      </SidebarParent>
  );
};

export default Sidebar;