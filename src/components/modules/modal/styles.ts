import styled from "styled-components";


type ModalBlockProps = {
    error: boolean,
    showModal: boolean
}


export const ModalBlock = styled.div<ModalBlockProps>`
    display: flex;
    justify-content: center;
    align-items: center;
  position: fixed;
  left: 50%;
    transform: translate(-50%);
  padding: 30px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  color: ${props => props.error ? "red" : "green"};
  bottom: ${props => props.showModal ? '20px' : '-500px'};
  transition: all .3s;
  cursor: pointer;
  background: white;
  
  div {
    position: relative;
    top: 2px;
    font-size: 20px;
    margin-right: 10px;
  }
`