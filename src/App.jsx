import { useState } from 'react';
import Topbar from './Components/Topbar/topbar';
import Sidebar from './Components/Sidebar/sidebar';
import "./App.css";

function App() {
      return (
        <>
        <div>
          <Topbar/>
          <div className="container">

          <Sidebar/>

          <div className='others'>
            <p>others</p>
          </div>
          
          </div>
        </div>
        </>
      )
}

export default App
