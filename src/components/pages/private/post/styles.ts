import styled from "styled-components";


export const PostDetailWrapper = styled.div`
   width: 850px;
 box-shadow: 0px 1px 5px rgba(0, 110, 180, 0.15);
  display: flex;
   margin: 100px auto;
  background: white;
  border-radius: 10px;
`

export const PostDetailHeader = styled.div`
  text-align: center;
  font-weight: bold;
`

export const PostDetailComments = styled.div`
  width: 500px;
   display: flex;
    justify-content: center;
`

export const PostDetailComment = styled.div`
  width: 300px;
  overflow-y: scroll;
  height: 450px;
  
  div {
  
     margin-top: 10px;
     display: flex;
     justify-content: space-between;  
  
    
    span {
      font-weight: bold;
      font-size: 12px;
      color: gray;
    }
    
    img {
      width: 40px;
      height: 40px;
    }
    
    p {
      margin: 5px 0px;
      font-size: 12px;
    }
  }
  
`