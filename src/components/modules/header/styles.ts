import styled from 'styled-components'



export const HeaderBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1000px;
  margin: 0px auto;
`

export const HeaderWrapper = styled.div`
  padding: 10px 10px;
  background: white;
  position: fixed;
  top: 0px;
  width: 100%;
  border-bottom: 1px solid darkgray;
`

export const HeaderLogo = styled.div`
   cursor: pointer;
`

export  const HeaderSearch = styled.div`
  border: 1px solid gray;
  border-radius: 5px;
  padding: 0px 5px;
   input {
     border: none;
     outline: none;
     font-size: 11px;
     height: 25px;
     width: 200px;
     border-radius: inherit;
   }
  svg {
    font-size: 20px;
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
