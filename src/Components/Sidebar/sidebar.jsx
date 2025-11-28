import React from 'react'
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
import {Link} from "react-router-dom"
import "./sidebar.css"
import { CampaignOutlined, ErrorOutline, WorkOutline } from '@mui/icons-material';

const sidebar = () => {

  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
            <div className="sidebarMenu">
                <h3 className="sidebarTitle">Dashboard</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistItems">
                        <LineStyleIcon className='sidebarIcon'/>
                        home 
                    </li>
                    <li className="sidebarlistItems">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarlistItems">
                        <TrendingUpIcon className='sidebarIcon'/>
                        Sales
                    </li>
                   
                </ul>
            </div>
             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Quick Menu</h3>
                <ul className="sidebarlist">
                    <li  className="sidebarlistItems">
                        <PermIdentityIcon  className='sidebarIcon'/>
                     <Link to="userlist"> Users</Link>   
                    </li>
                    <li className="sidebarlistItems">
                        < StorefrontIcon className='sidebarIcon'/>
                        products
                    </li>
                    <li className="sidebarlistItems">
                        <AttachMoneyIcon className='sidebarIcon'/>
                        transactions
                    </li>
                    <li className="sidebarlistItems">
                        <BarChartIcon className='sidebarIcon'/>
                        report
                    </li>
                </ul>
            </div>
             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Notifications</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistItems">
                        <MailOutlineIcon className='sidebarIcon'/>
                        Mail
                    </li>
                    <li className="sidebarlistItems">
                        <CampaignOutlined className='sidebarIcon'/>
                        feedback
                    </li>
                    <li className="sidebarlistItems">
                        <ChatBubbleOutlineIcon className='sidebarIcon'/>
                        messages
                    </li>
                   
                </ul>
            </div>
             <div className="sidebarMenu">
                <h3 className="sidebarTitle">Staff</h3>
                <ul className="sidebarlist">
                    <li className="sidebarlistItems">
                        <WorkOutline className='sidebarIcon'/>
                        manage
                    </li>
                    <li className="sidebarlistItems">
                        <TimelineIcon className='sidebarIcon'/>
                        Analytics
                    </li>
                    <li className="sidebarlistItems">
                        <ErrorIcon className='sidebarIcon'/>
                        report
                    </li>
                   
                </ul>
            </div> 
        </div>
    </div>
  )
}

export default sidebar