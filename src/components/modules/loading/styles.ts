import styled from 'styled-components'

type LoadingBlockProps = {
    loadingNow: boolean;
}

export const LoadingBlock = styled.div<LoadingBlockProps>`
     display: flex;
     justify-content: center;
  align-items: center;
     font-size: 16px;
     color: black;
     position: fixed;
     font-weight: bold;
  width: 170px;
    padding: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  bottom: ${props => props.loadingNow ? '50px' : '-50px'};
  transform: ${props => props.loadingNow ? 'scale(1)' : 'scale(0)'};
    left: 50%;
    transform: translate(-50%);
  z-index: 999999999999;
  transition: all .3s;
`