import styled from "styled-components";

type Props = {
    detail: boolean;
}

export const PostWrapper = styled.article<Props>`
  border-radius: 8px;
  align-content: stretch;
  box-sizing: border-box;
  z-index: 9999999;
  box-shadow: ${props => !props.detail ? '0px 1px 5px rgba(0, 110, 180, 0.15)' : 'none'};
  margin-bottom ${props => !props.detail ? '60px' : '0px'};
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
   align-items: center;
   position: relative;
  transition: all .5s;
    
  div {
    background: black;
    max-height: 100%;
    display: flex;
    overflow: hidden;
 
  }
  img {
    width: 100%;
  }
    button { 
      position: absolute;
      transition: all .3s;
      font-size: 22px;
      background: transparent;
      border: none;
      cursor: pointer;
      outline: none;
    }
  
  button:first-child {
     left: -50px;
     opacity: 0;
  }
  
  button:last-child {
    right: -50px;
    opacity: 0;
  }
  
  :hover button:first-child {
    left: 5px;
    opacity: 1;
  }
  :hover   button:last-child {
    right: 5px;
    opacity: 1;
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
    width: 350px;
    height: 50px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  a{
    font-size: 12px;
    color: gray;
    text-decoration: none
  }
  
  span {
    font-size: 11px;
    color: gray;
    display: flex;
  }
  
  `


export const ContentPoints = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 2px;
    align-items: center;
  transition: all .5s;
  
    div {
       border-radius: 100%; 
       border: 3px solid gray;
       margin-left: 10px;
       background: gray;
    }

  div[id = "active"] {
     border: 4px solid blue;
  }
`