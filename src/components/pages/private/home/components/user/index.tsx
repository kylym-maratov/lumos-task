import React from 'react';
import {UserContainerWrapper} from './styles'
import {useAppSelector} from "../../../../../../store/hooks";
import {AuthService} from "../../../../../../services/auth.service";

export const UserContainer: React.FC = () => {
  const {username} = useAppSelector(state => state.userReducer)
  const {logout} = AuthService()
  return (
     <UserContainerWrapper>
       <div>
         <img src="https://yt3.ggpht.com/ytc/AMLnZu_bigcRag_cOSQIA2fXMTWIYd5rRArUg_g_8Ha3=s900-c-k-c0x00ffffff-no-rj" alt={username}/>
         <div> @{username}</div>
       </div>
       <div>
         <button type="button" onClick={() => logout()}>Logout</button>
       </div>
     </UserContainerWrapper>
  );
};

