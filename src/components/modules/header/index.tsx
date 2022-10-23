import React  from 'react';
import logo from '../../../assets/images/logo_main.svg'
import {Link} from 'react-router-dom'
import {HeaderBlock, HeaderLogo, HeaderMenu, HeaderSearch, HeaderWrapper} from './styles'
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSetting
} from 'react-icons/ai'

export const Header = () => {

    return (
        <HeaderWrapper>
            <HeaderBlock>
              <HeaderLogo>
                <Link to="/"> <img src={logo} alt="logo"></img></Link>
              </HeaderLogo>
              <HeaderSearch>
                <input type="text" placeholder="Search by post name"></input>
                <AiOutlineSearch />
              </HeaderSearch>
              <HeaderMenu>
                <Link to="/"><AiOutlineHome /></Link>
                <Link to="/"><AiOutlineMessage /></Link>
                <Link to="/"><AiOutlineHeart /></Link>
                <Link to="/"><AiOutlineSetting /></Link>
              </HeaderMenu>
            </HeaderBlock>
        </HeaderWrapper>
    );
};
