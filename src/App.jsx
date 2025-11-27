import { useState } from 'react';
import Topbar from './Components/Topbar/topbar';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Pages/Home/home';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Userlist from "./Pages/UserList/userlist";
import "./App.css";

function App() {
      return (
        <>
        <Router>
          <Topbar/>
          <div className="container">
          <Sidebar/>
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/userlist" element={<Userlist/>} />
              </Routes>
          </div>
        </Router>
        </>
      )
}

export default App
