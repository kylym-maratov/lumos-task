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
  height: 45px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  bottom: ${props => props.loadingNow ? '50px' : '-50px'};
  left: 44%;
  z-index: 999999999999;
  transition: all .2s;
`