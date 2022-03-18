import React from 'react';
import "./topbar.css";
import {NotificationsNone, Language, Settings} from '@material-ui/icons';
import BasicMenu from '../basic/Basic';

export default function Topbar() {
  return (
  <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
            <span className="logo">Kenan</span>
        </div>
        <div className="topRight">
            <div className="topbarIconContainer">
                <NotificationsNone />
            <span className='topbarIconBag'>2</span>
            </div>
            <div className="topbarIconContainer">
                <Language />
            <span className='topbarIconBag'></span>
            </div>
            <div className="topbarIconContainer">
                <Settings />
            <span className='topbarIconBag'></span>
            </div>
            <div>
                <BasicMenu/>
            </div>
            <img src="https://www.codeur.com/system/user_profiles/avatars/000/387/635/large/avatar.jpg?1587463526" alt="" className='topAvatar'/>
          </div>
      </div>
  </div>
  )
}
