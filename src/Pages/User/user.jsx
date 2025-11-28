import React from 'react'
import "./user.css"
import avatar from "../../assets/avatar.jpg"
import { CalendarToday, LocationSearching, MailOutline, PermIdentityOutlined, PhoneAndroid, Publish } from '@mui/icons-material'
import { Link } from 'react-router-dom'





const user = () => {
  return (
    <div className="user">
        <div className="usertitleContainer">
            <h1 className='usertitle'>Edit User</h1>
            <Link to="/newuser">
            <button className="userAddButton">Create</button>
            </Link>
        </div>
            {/* User container */}
        <div className="userContainer">
            <div className="userShow">
                {/* show top */}
                <div className="userShowTop">
                    <img src={avatar} alt="#" className="userShowImg" />
                    <div className="userShowTopTitle">
                        <span className="UserShowtopUsername">James Bones</span>
                        <span className="UserShowtopUserTitle">Welder</span>
                    </div>
                </div>
                    {/* show bottom */}
                <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>

                        <div className="usershowInfo">
                        <PermIdentityOutlined className='usershowIcon '/>
                        <span className="usershowInfoTitle">Miracle Sam</span>
                        </div>

                         <div className="usershowInfo">
                        <CalendarToday className='usershowIcon '/>
                        <span className="usershowInfoTitle">10-11-1988</span>
                        </div>

                        <span className="userShowTitle">Contact Details</span>

                         <div className="usershowInfo">
                        <PhoneAndroid className='usershowIcon '/>
                        <span className="usershowInfoTitle">+234-813-132-2623</span>
                        </div>

                         <div className="usershowInfo">
                        <MailOutline className='usershowIcon '/>
                        <span className="usershowInfoTitle">Miraclesam@gmail.com</span>
                        </div>

                         <div className="usershowInfo">
                        <LocationSearching className='usershowIcon '/>
                        <span className="usershowInfoTitle">Lagos , Nigeria</span>
                        </div>
                </div>
            </div>

            <div className="userUpdate">
                <span className="userUpdateTitle">Edit</span>
                <form className="userUpdateForm">
                    {/* User Update left section */}
                    <div className="userUpdateLeft">
                        <div className="userUpdateItem">
                            <label>Username:</label>
                            <input type='text' placeholder='James Bones' className='userUpdateInput'/>
                        </div>

                         <div className="userUpdateItem">
                            <label>Full Name:</label>
                            <input type='text' placeholder='Miracle Sam' className='userUpdateInput'/>
                        </div>

                         <div className="userUpdateItem">
                            <label>Email:</label>
                            <input type='text' placeholder='Miraclesam@gmail.com' className='userUpdateInput'/>
                        </div>

                         <div className="userUpdateItem">
                            <label>Phone:</label>
                            <input type='text' placeholder='+234-813-132-2623' className='userUpdateInput'/>
                        </div>

                         <div className="userUpdateItem">
                            <label>Address</label>
                            <input type='text' placeholder='Lagos , Nigeria' className='userUpdateInput'/>
                        </div>

                    </div>

                    {/* User Update Left Section */}
                    <div className="userUpdateRight">
                        <div className="userUpdateUpload">
                            <img src={avatar} alt="#" className='userUpdateImg'/>
                            <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                            <input type="file" id='file' style={{display:"none"}}/>
                        </div>
                        <button className="userUpdateButton">Update</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default user