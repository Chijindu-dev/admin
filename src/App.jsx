import { useState } from 'react';
import Topbar from './Components/Topbar/topbar';
import Sidebar from './Components/Sidebar/sidebar';
import Home from './Pages/Home/home';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Userlist from "./Pages/UserList/userlist";
import User from './Pages/User/user';
import Newuser from './Pages/NewUser/newuser';
import Product from './Pages/Product/product';
import Productlist from './Pages/ProductList/productlist';
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
                <Route path="/user/:userid" element={<User/>} />
                <Route path="/newuser" element={<Newuser/>} />
                <Route path="/products" element={<Productlist/>} />
                <Route path="/product/:productsid" element={<Product/>} />
                <Route path="/newproduct" element={<User/>} />
              </Routes>
          </div>
        </Router>
        </>
      )
}

export default App
