import styled from 'styled-components'

type HeaderMenuProps = {
    active: boolean;
}

export const HeaderBlock = styled.div`
    display: flex;
  justify-content: space-between;
  align-items: center;
   padding: 0px 20px;
   
    
  
  button {
     width: 97px;
    height: 31px;
    background: #9C0404;
    color: white;
    border: none;
    outline: none;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
  }
`

export const HeaderMenuBlock = styled.div<HeaderMenuProps>`
  display: flex;
  align-items: center;
  
  div[id = 'logo'] {
     cursor: pointer;
    margin-top: 2px;
  }

  div[id = 'menu'] {display: flex; list-style-type: none;}
  
  div[id = 'menu'] a{
    font-size: 12px;
    color: black;
    font-weight: bold;
    text-decoration: none;
    margin-left: 25px;
  }

  div[id = 'menu'] > a > li[id = 'active'] {list-style-type: ${props => props.active ? 'disc' : 'none'}}
`