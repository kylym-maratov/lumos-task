import React from 'react';
import {HeaderBlock} from './styles'
import logo from '../../../assets/images/logo.svg'

export const Header = () => {
    return (
        <HeaderBlock>
            <div>
                <div>
                    <img src={logo}></img>
                </div>
                <div>
                    <a>dsad</a>
                </div>
            </div>
            <div>User</div>
        </HeaderBlock>
    );
};
