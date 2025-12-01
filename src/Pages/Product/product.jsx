import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom';
import Chart from "../../Components/Charts/chart";
import {ProductData} from "../../dummy";
import door from "../../assets/door.png"
import { Publish } from '@mui/icons-material';

const product = () => {
  return (
    <div className='product'>
        <div className="productTitleContainer">
            <h1 className="productTitle">
                product
            </h1>
            <Link to="/newProduct">
            <button className="productAddButton">Create</button>          
            </Link>
        </div>


        <div className="productTop">
            <div className="productTopLeft">
                <Chart data={ProductData} dataKey="Sales" title="Sales Performance"/>
            </div>

            <div className="productTopRight">

                <div className="productInfoTop">
                    <img src={door} alt="" className="productInfoImg" />
                    <span className="productName">Wooden Door</span>
                </div>

                <div className="productInfoBottom">
                    <div className="productInfoItem">
                        <span className="productInfoKey">id:</span>
                        <span className="productInfoValue">123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">Sales:</span>
                        <span className="productInfoValue">5123</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">active:</span>
                        <span className="productInfoValue">yes</span>
                    </div>

                    <div className="productInfoItem">
                        <span className="productInfoKey">in stock:</span>
                        <span className="productInfoValue">no</span>
                    </div>

                </div>
            </div>
        </div>

        <div className="productBottom">
            <form  className="productForm">
                <div className="productFormLeft">  
                    <label> Product Name :</label>
                        <input type="text" placeholder='wooden door' />
                    <label>In Stock :</label>
                    <select name='InStock' id='instock'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>

                    <label>Active :</label>
                    <select name='active' id='active'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>


                <div className="productFormRight">
                    <div className="productUpload">
                        <img src={door} alt="#" className="productUploadImg" />
                        <label For="file">
                            <Publish/>
                            <input type="file" id='file'  style={{display:"none"}}/>
                        </label>
                    </div>
                    <button className="productButton">Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default product