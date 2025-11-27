import React from 'react'
import user from "../../assets/avatar.jpg"
import "./Widgetsmall.css";
import { Visibility } from '@mui/icons-material';




const Widgetsmall = () => {
  return (
    <div className='widgetsmall'>
        <span className="widgetsmallTitle">New Joined Members</span> 
        <ul className="widgetsmallList">
            <li className="widgetsmallListItem">
                <img src={user} alt="" className="widgetsmallImg" />
                <div className="widgetsmallUser">
                    <span className="widgetsmallUsername">Brayn Bill</span>
                    <span className="widgetsmallUserTitle">Customer Service</span>
                </div>
                <button className="widgetsmallBtn">
                    <Visibility className='widgetsmallIcon'/> Display
                </button>
            </li>

             <li className="widgetsmallListItem">
                <img src={user} alt="" className="widgetsmallImg" />
                <div className="widgetsmallUser">
                    <span className="widgetsmallUsername">Brayn Bill</span>
                    <span className="widgetsmallUserTitle">Customer Service</span>
                </div>
                <button className="widgetsmallBtn">
                    <Visibility className='widgetsmallIcon'/> Display
                </button>
            </li>

             <li className="widgetsmallListItem">
                <img src={user} alt="" className="widgetsmallImg" />
                <div className="widgetsmallUser">
                    <span className="widgetsmallUsername">Brayn Bill</span>
                    <span className="widgetsmallUserTitle">Customer Service</span>
                </div>
                <button className="widgetsmallBtn">
                    <Visibility className='widgetsmallIcon'/> Display
                </button>
            </li>

             <li className="widgetsmallListItem">
                <img src={user} alt="" className="widgetsmallImg" />
                <div className="widgetsmallUser">
                    <span className="widgetsmallUsername">Brayn Bill</span>
                    <span className="widgetsmallUserTitle">Customer Service</span>
                </div>
                <button className="widgetsmallBtn">
                    <Visibility className='widgetsmallIcon'/> Display
                </button>
            </li>

             <li className="widgetsmallListItem">
                <img src={user} alt="" className="widgetsmallImg" />
                <div className="widgetsmallUser">
                    <span className="widgetsmallUsername">Brayn Bill</span>
                    <span className="widgetsmallUserTitle">Customer Service</span>
                </div>
                <button className="widgetsmallBtn">
                    <Visibility className='widgetsmallIcon'/> Display
                </button>
            </li>
        </ul>
    </div>
  )
}

export default Widgetsmall