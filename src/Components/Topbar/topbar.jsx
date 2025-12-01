import React from 'react';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import { Settings } from '@mui/icons-material';
import "./topbar.css"
import avatar from "../../assets/avatar.jpg"

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="topbarwrapper">

        <div className="topleft">
          <span className="logo">TudorAdmin</span>
        </div>

        <div className="topright">

          <div className="topbarIconsContainer">
            <NotificationsNoneIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <LanguageIcon />
            <span className="topIconBadge">2</span>
          </div>

          <div className="topbarIconsContainer">
            <Settings />
          </div>

          <img src={avatar} alt="avatar" className="topAvatar" />
        </div>

      </div>
    </div>
  );
};

export default Topbar;
