import React, { useState } from 'react'
import "./productlist.css"
import { DataGrid } from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import { ProductRows } from "../../dummy";
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';


const productlist = () => {
    const [data ,setData] = useState(ProductRows)



        const handleDelete =(id)=>{
        setData(data.filter((item)=> item.id !== id));
    }


      const columns = [
      { field: 'id', headerName: 'ID', width: 100 },
    
      {
        field: 'product',
        headerName: 'Product',
        width: 200,
        renderCell: (params) => (
          <div className="productlistuser">
            <img src={params.row.img} alt="#" className="productlistimg" />
            {params.row.name}
          </div>
        ),
      },
    
      { field: 'stock', headerName: 'Stock', width: 200 },
    
      { field: 'Status', headerName: 'Status', width: 160 },
    
      { field: 'price', headerName: 'Price', width: 160 },
    
      {
        field: 'action',
        headerName: 'Action',
        width: 150,
        renderCell: (params) => (
          <>
            <Link to={"/product/"+params.row.id}>
              <button className="productlistEdit">Edit</button>
            </Link>
            <DeleteOutline className="productlistDelete"  onClick={()=> handleDelete(params.row.id)} />
          </>
        ),
      },
    ];
  const paginationModel = { pageSize: 8, page: 0 };


  return (
    <div className='productlist'>
        <Paper sx={{ height: 550, width: '100%' }}>
        <DataGrid
          disableRowSelectionOnClick
          rows={data}
          columns={columns}
          initialState={{
            pagination: { paginationModel },
          }}
          pageSizeOptions={[8, 10]}
          checkboxSelection
          sx={{ border: 0 }}
        />
      </Paper>
    </div>
  )
}

export default productlist