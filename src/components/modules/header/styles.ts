import styled from 'styled-components'



export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: 0px auto;
`

export const HeaderWrapper = styled.div`
  padding: 10px 10px;
  background: white;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid darkgray;
`

export const HeaderLogo = styled.div`
   cursor: pointer;
`

export  const HeaderSearch = styled.div`
  background: #efefef;
  border-radius: 5px;
  padding: 0px 5px;
   input {
     border: none;
     outline: none;
     font-size: 13px;
     height: 30px;
     width: 220px;
     border-radius: inherit;
     background: transparent;
     color: gray;
   }
  svg {
    font-size: 20px;
    color: gray;
    position: relative;
    top: 5px;
  }
`

export const HeaderMenu = styled.div`
  display: flex;
  align-items: center;
  
  
  a {
    margin-right: 18px;
  }
  
  svg {
    font-size: 26px;
    color: black;
  }

  svg:hover {color: gray}
`
export const HeaderUser = styled.div`
  
  cursor: pointer;
 
  img {
    border-radius: 100%;
    border: 2px solid green; 
    border-radius: 100%;
    height: 26px;
    width: 26px;
   
  }
`