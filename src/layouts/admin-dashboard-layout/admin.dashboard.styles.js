import styled from "styled-components";

export const ParentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background: #ffffff;
`;

export const MainContentArea = styled.div`
  flex: 1;
  border: 1px solid #00B4B6;
  display: flex;
  flex-direction: column;
`;

export const AdminDashboardHeader = styled.header`
  width: 100%;
  height: 10%;
  border-bottom: 1px solid #00B4B6;
  display: flex;
  
`;

export const AdminHeaderContainer = styled.div`
width: 92%;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
`;



export const NotificationContainer = styled.div`
  width: 50%;
  height: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  margin-top: 3rem;
  margin-bottom:1.5rem;
  
  & img {
    width: 3.3rem;
    position: relative;
  }
`;


export const SearchBarContainer = styled.section`
  flex: 1;
  height: 65%;
  margin-top: 1.1rem;
`;

export const SearchBarForm = styled.div`
  display: flex;
  width: 100%;
  border: 1px solid #b3b3b3;
  border-radius: 5px;
  height: 95%;
  padding: 0 9px;
  background: #fff;

  & .search-input {
    border: 0;
    outline: none;
    background: #fff;
    color: #00B4B6;
    font-size: 1.1rem;

  }
  & .search-input::placeholder {
    color: #5d5e5f;
    line-height: 28px;
    font-size: 1rem;
    margin-left: 1rem;
  }
  & button {
    background: transparent;
    border: 0;
    outline: none;
    width: 20px;
    height: 10px;
  }
  & button img {
    width: 12px;
    height: 12px;
    margin-top: 1rem;
    margin-right: 1rem;
  }
`;

export const AvatarContainer = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
   width: 5.3rem;
    height: auto;
  }
`;