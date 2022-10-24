import styled from "styled-components";



export const UserMenuWrapper = styled.div`
   width: 200px;
   background: white;
   position: absolute;
   padding: 10px;
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  box-shadow: 0px 1px 5px rgba(0, 110, 180, 0.15);
  button {
    width: 80px;
    height: 30px;
    background: red;
    font-weight: bold;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
`