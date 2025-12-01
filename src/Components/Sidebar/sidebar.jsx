import React, { useState } from 'react';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import BarChartIcon from '@mui/icons-material/BarChart';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ErrorIcon from '@mui/icons-material/Error';
import CampaignOutlined from '@mui/icons-material/CampaignOutlined';
import WorkOutline from '@mui/icons-material/WorkOutline';
import MenuIcon from '@mui/icons-material/Menu';        // Hamburger
import CloseIcon from '@mui/icons-material/Close';      // Close button
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Hamburger Button - Visible only on mobile */}
      <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}>
        <div className="sidebarWrapper">
          {/* Your existing sidebar content */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Dashboard</h3>
            <ul className="sidebarlist">
              <Link to="/" className='link' onClick={() => setIsOpen(false)}>
                <li className="sidebarlistItems">
                  <LineStyleIcon className='sidebarIcon'/>
                  Home
                </li>
              </Link>
              <li className="sidebarlistItems">
                <TimelineIcon className='sidebarIcon'/> Analytics
              </li>
              <li className="sidebarlistItems">
                <TrendingUpIcon className='sidebarIcon'/> Sales
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Quick Menu</h3>
            <ul className="sidebarlist">
              <Link to="/userlist" className='link' onClick={() => setIsOpen(false)}>
                <li className="sidebarlistItems">
                  <PermIdentityIcon className='sidebarIcon'/> User
                </li>
              </Link>
              <Link to="/products" className='link' onClick={() => setIsOpen(false)}>
                <li className="sidebarlistItems">
                  <StorefrontIcon className='sidebarIcon'/> Products
                </li>
              </Link>
              <li className="sidebarlistItems">
                <AttachMoneyIcon className='sidebarIcon'/> Transactions
              </li>
              <li className="sidebarlistItems">
                <BarChartIcon className='sidebarIcon'/> Reports
              </li>
            </ul>
          </div>

          {/* Other sections (Notifications, Staff) - same as yours */}
          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Notifications</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistItems">
                <MailOutlineIcon className='sidebarIcon'/> Mail
              </li>
              <li className="sidebarlistItems">
                <CampaignOutlined className='sidebarIcon'/> Feedback
              </li>
              <li className="sidebarlistItems">
                <ChatBubbleOutlineIcon className='sidebarIcon'/> Messages
              </li>
            </ul>
          </div>

          <div className="sidebarMenu">
            <h3 className="sidebarTitle">Staff</h3>
            <ul className="sidebarlist">
              <li className="sidebarlistItems">
                <WorkOutline className='sidebarIcon'/> Manage
              </li>
              <li className="sidebarlistItems">
                <TimelineIcon className='sidebarIcon'/> Analytics
              </li>
              <li className="sidebarlistItems">
                <ErrorIcon className='sidebarIcon'/> Reports
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Dark Overlay (mobile only) */}
      {isOpen && <div className="sidebar-overlay" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;