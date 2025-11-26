import React from 'react'
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import "./sidebar.css"

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
                <h3 className="sidebarTitle">Notifications</h3>
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
        </div>
    </div>
  )
}

export default sidebar