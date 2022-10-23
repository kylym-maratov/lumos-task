import styled from "styled-components";



export const PostWrapper = styled.article`
  border-radius: 8px;
  align-content: stretch;
  box-sizing: border-box;
  z-index: 9999999;
  box-shadow: 0px 1px 5px rgba(0, 110, 180, 0.15);
  margin-bottom: 60px;
  transition: all .5s;
  background: white;

 
`

export const PostHeader = styled.div`
  justify-content: space-between;
  height: 50px;
  background: white;
  border-radius: inherit;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  padding: 0px 10px;
  color: black;
  
  img {
    width: 37px;
    height: 37px;
    border-radius: 50%;
    border: 1px solid red;
  }
  
  div {
    display: flex;
    align-items: center;
  }
   span {
     margin-left: 8px;
   }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    display: flex;
    align-items: center;
  }
  
  svg {
    font-size: 24px;
  }
`

export const PostContent = styled.div`
   display: flex;
   justify-content: center;
   background: black;
   max-height: 100%;
   overflow: hidden;
  img {
     width: 100%;
  }
`

export const PostButtons = styled.div`
   display: flex;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  padding: 0px 3px;
  
  button {
     background: transparent;
     border: none; outline: none;
     cursor: pointer;
  }
  
  svg {
    font-size: 26px;
    color: black;
  }
`
export const PostAbout = styled.div`
     display: flex;
     justify-content: space-between;
     align-items: end;
     padding: 0px 10px 18px 10px;
     
  
  
  div[id = "likes"] {
     font-weight: bold;
     font-size: 13px;
  }
  div [id = "desc"] {
    font-size: 13px;
    overflow: hidden;
    width: 350px;
    height: 50px;
  }
 
  
  span {
    font-size: 12px;
    color: gray;
    cursor: pointer;
    display: flex;
  }
  
  `
