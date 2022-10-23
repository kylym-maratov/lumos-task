import styled from "styled-components";


export  const UserContainerWrapper = styled.div`
  justify-content: space-between;
  width: 250px;
  height: 40px;
  display: flex;
  align-items: center;
  font-weight: bolder;
  font-size: 14px;
  
  div {
    display: inherit;
    align-items: inherit;
  }
  
  img {
    width: 50px;
    height: 50px;
    margin-right: 5px;
    border-radius: 50%;
  }
  
  button {
    margin-left: 40px;
    background: red;
    border: none;
    color: white;
    border-radius: 5px;
    padding: 5px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`