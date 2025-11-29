import React from 'react'
import "./newuser.css"

const NewUser = () => {
  return (
    <div className='newUser'>
      <h1 className="newUserTitle">New User</h1>

      <form className="newUserForm">

        <div className="newUserItem">
          <label> Username : </label>
          <input type='text' placeholder='john'/>
        </div>

        <div className="newUserItem">
          <label> FullName : </label>
          <input type='text' placeholder='John Smith'/>
        </div>

        <div className="newUserItem">
          <label> Email : </label>
          <input type='email' placeholder='john@gmail.com'/>
        </div>

        <div className="newUserItem">
          <label> Password : </label>
          <input type='password' placeholder='password'/>
        </div>

        <div className="newUserItem">
          <label> Phone : </label>
          <input type='text' placeholder='+234 345 232 1122'/>
        </div>

        <div className="newUserItem">
          <label> Address : </label>
          <input type='text' placeholder='Lagos | Nigeria'/>
        </div>

        {/* GENDER */}
        <div className="newUserItem">
          <label> Gender : </label>
          <div className="newUserGender">
            <input type='radio' name='gender' id='male' value="male"/>
            <label htmlFor="male">Male</label>

            <input type='radio' name='gender' id='female' value="female"/>
            <label htmlFor="female">Female</label>

            <input type='radio' name='gender' id='others' value="others"/>
            <label htmlFor="others">Others</label>
          </div>
        </div>

        {/* ACTIVE */}
        <div className="newUserItem">
          <label>Active :</label>
          <select className='newUserSelect' name='active' id='active'>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>

        {/* BUTTON */}
        <button className="newUserButton">Create</button>
    </form>
    </div>
)
}

export default NewUser
