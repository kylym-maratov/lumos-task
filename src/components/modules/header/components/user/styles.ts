import styled from "styled-components";



export const UserMenuWrapper = styled.div`
   width: 200px;
   background: white;
   border: 1px solid gray;
   position: absolute;
   padding: 10px;
   display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
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