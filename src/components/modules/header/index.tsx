import React, {   useRef} from 'react';
import {HeaderBlock, HeaderMenuBlock} from './styles'
import logo from '../../../assets/images/logo.svg'
import {Link, useLocation} from 'react-router-dom'
import {AuthUtil} from "../../../services/auth.service";

export const Header = () => {
    const {logout} = AuthUtil()
    const location = useLocation()
    const menuRef = useRef<HTMLDivElement>(null)



    return (
        <HeaderBlock>
            <HeaderMenuBlock active={true}>
                <div id="logo">
                    <Link to="/"><img src={logo}></img></Link>
                </div>
                <div id="menu" ref={menuRef}>
                    <Link  to="/"><li id="active">Home</li></Link>
                    <Link  to="/Posts"><li>Posts</li></Link>
                    <Link  to="/colleagues"><li>Colleagues</li></Link>
                    <Link  to="/collaborators"><li>Collaborators</li></Link>
                    <Link  to="/myprofile"><li>My Profile</li></Link>
                </div>
            </HeaderMenuBlock>
            <button onClick={() => logout()}>
                Logout
            </button>
        </HeaderBlock>
    );
};
