import React, {useState} from 'react';
import logo from '../../../assets/images/logo_main.svg'
import {Link} from 'react-router-dom'
import {HeaderBlock, HeaderLogo, HeaderMenu, HeaderSearch, HeaderWrapper, HeaderUser} from './styles'
import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineSetting
} from 'react-icons/ai'
import {UserMenu} from "./components/user";

export const Header = () => {
   const [showUserMenu, setShowUserMenu] = useState<boolean>(false)

    return (
        <HeaderWrapper>
            <HeaderBlock>
              <HeaderLogo>
                <Link to="/"> <img src={logo} alt="logo"></img></Link>
              </HeaderLogo>
              <HeaderSearch>
                <AiOutlineSearch />
                <input type="text" placeholder="Search by post name"></input>

              </HeaderSearch>
              <HeaderMenu>
                <Link to="/"><AiOutlineHome /></Link>
                <Link to="/"><AiOutlineMessage /></Link>
                <Link to="/"><AiOutlineHeart /></Link>
                <Link to="/"><AiOutlineSetting /></Link>
                <HeaderUser>
                  <img
                    src="https://media.wired.com/photos/5fb2cc575c9914713ead03de/master/w_1920,c_limit/Gear-Apple-MacBook-Air-top-down-SOURCE-Apple.jpg" alt="user"
                    onClick={() => setShowUserMenu(!showUserMenu)}
                  />
                  <UserMenu showUserMenu={showUserMenu}/>
                </HeaderUser>
              </HeaderMenu>
            </HeaderBlock>
        </HeaderWrapper>
    );
};
