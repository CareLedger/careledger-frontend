import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from '../../utils/device';

export const SidebarParent = styled.aside`
  width: 10%;
  height: 100%;
  background: #fff;
  border-right: 1px solid #00b4b6;
  border-bottom: 1px solid #00b4b6;
  display: flex;
  flex-direction: column;
  }

  @media ${device.laptop} {
    width: 10rem;
    height: 100%;
    background: #fff;
    border-right: 1px solid #00b4b6;
    display: flex;
    flex-direction: column;
    transition: 0.5s ease-in-out;
    
    &:hover {
      width: 10%;
      display: flex;
      flex-direction: column;
      transition: 0.5s ease-in-out;
      opacity: 1;

      & h1 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }

      & h3 {
        opacity: 1;
        transition: 0.5s ease-in-out;
      }
    }
  }
`;

export const SidebarLogoContainer = styled.div`
  align-items: center;
  color: ##00b4b6;
  padding: 1rem;
  colour: #00b4b6;

  & h1 {
    opacity: 0;
    font-size:1.2rem;
    font-weight: 500;
  }

  & img {
    width: 1.5rem;
    height: 1.5rem;
  }

  @media ${device.laptop} {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    color: #00b4b6;
    padding: 3rem 2rem;

    & h1 {
      font-family: "Urbane";
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
      opacity: 0;
    }

    & img {
      width: 3rem;
      height: 3rem;
      border-radius: 100%;
      margin: 1rem;
    }
  }
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  color: #000;
  align-items: center;
  padding: 1rem;

  & h3 {
     font-family: "Urbane";
      font-style: normal;
      font-weight: 500;
      font-size: 1rem;
    opacity: 0;
  }

  
  & h2 {
    opacity: 0;
    font-size:1.5rem;
    font-weight: 700;
    colour:#00b4b6;
  }


  @media ${device.laptop} {
    text-decoration: none;
    display: flex;
    width: 100%;
    align-items: center;
    color: #000;
    padding: 3rem 2rem;

    & span {
      margin-left: 1.5rem;
      margin-right: 1rem;  
    }

    & h3 {
      font-family: "Inter";
      font-weight: 500;
      font-size: 1.5rem;
      line-height: 1.5rem;
      opacity: 0;
    }

    &.active {
      background: #00b4b6;
      color: #fff;
    }

    &.active span {
      background: ##00b4b6;
      color: #fff;
    }
  }
`;

export const SidebarLinksContainer = styled.section`
  display: flex;
  flex-direction: column;
  flex: 80%;
  margin-top: 3rem;
`;

