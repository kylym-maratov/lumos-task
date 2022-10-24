import React from 'react';
import {UserMenuWrapper} from './styles'
import {Link} from "react-router-dom";
import {AuthService} from "../../../../../services/auth.service";


export const UserMenu: React.FC<{showUserMenu: boolean}> = ({showUserMenu}) => {
  const {logout} = AuthService()
  if (showUserMenu) {
    return (
      <UserMenuWrapper>
         <div>
           <div>
             <Link to="/profile">My profile</Link>
           </div>
           <button type="button" onClick={() => logout()}>Logout</button>
         </div>
      </UserMenuWrapper>
    );
  }

  return null
};

