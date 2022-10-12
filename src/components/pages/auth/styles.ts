import styled from "styled-components";


const SignDiv = styled.div`
  width: 430px;
  background: #FFFFFF;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
`

const Logo = styled.div`
   display: flex;
  justify-content: center;
  padding: 7px 0px;
  margin-top: 20px;
`

const InputBlock = styled.div`
  width: 90%;  
  margin: 10px auto;
  
  label {
     font-size: 12px;
  }
  
  a {
    color: black;
     font-size: 11px;
    cursor: pointer;
    position: relative;
    left: 2px;
    text-decoration: underline;
  }
  span {
    font-size: 12px;
    color: red;
  }
`

const InputBorder = styled.div`
   display: flex;
   border: 1.5px solid black;
   border-radius: 5px;
    input {
        border: none;
        width: 100%;
        height: 44px;
        outline: none;
        border-radius: 5px;
       font-size: 11px;
      padding: 0px 5px;
    }
  
    svg {
       font-size: 28px;
       position: relative;
       right: 8px;
       top: 8px;
       cursor: pointer;
    }
`
const ButtonBlock = styled.div`
   display: flex;
  justify-content: center;
  margin-top: 30px;
  
  button {
     width: 140px;
    height: 40px;
    border-radius: none;
    outline: none;
    color: white;
    background: #474747;
    border-radius: 5px;
    font-weight: bold;
    font-size: 14px;
    cursor: pointer;
    transition:  all .5s;
  }

  button:disabled {background: gray;}
   
`

const SwitchBlock = styled.div`
   display: flex;
   justify-content: center;
  margin-top: 40px;
  font-size: 14px;
  padding: 5px 0px;
`

export default {SignDiv, InputBlock, InputBorder, Logo, ButtonBlock, SwitchBlock}