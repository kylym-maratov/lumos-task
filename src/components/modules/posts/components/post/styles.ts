import styled from "styled-components";



export const PostWrapper = styled.article`
  margin-top: 20px;
  box-shadow: 0 0 2px rgba(0,0,0,0.5);
  border-radius: 8px;
  min-width: 470px;
  align-content: stretch;
  max-height: 600px;
  overflow: hidden;
  box-sizing: border-box;
  
  div[id = "header"] {
    display: flex;
    align-items: center;
    height: 40px;
    background: white;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px
  }
  
  div[id= "about"] {
    width: 100%;
  }
  
  div[id = "description"] {
    font-size: 12px;
    
    
    span {
      cursor: pointer;
      color: gray;
      font-size: 11px;
    }
  }
  
  div[id = "name"]  {
     font-size: 12px;
     font-weight: bold;
  }
  div[id = "post-image"] {
    background: black;
  }
  
  div[id = "post-image"] img{
     display: flex;
     margin: 0px auto;
     max-width: 100%;
     max-height: 100%;
  }
`
