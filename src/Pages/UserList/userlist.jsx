import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Paper from "@mui/material/Paper";
import "./userlist.css";
import { UserRows } from "../../dummy";
import { DeleteOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Userlist = () => {

  const [data, setData] =  useState(UserRows);



  const handleDelete =(id)=>{
      setData(data.filter((item)=> item.id !== id));
  }

  const columns = [
  { field: 'id', headerName: 'ID', width: 100 },

  {
    field: 'Username',
    headerName: 'Username',
    width: 200,
    renderCell: (params) => (
      <div className="userlistuser">
        <img src={params.row.avatar} alt="#" className="userlistimg" />
        {params.row.Username}
      </div>
    ),
  },

  { field: 'email', headerName: 'Email', width: 200 },

  { field: 'Status', headerName: 'Status', width: 160 },

  { field: 'transcation', headerName: 'Transcation Volume', width: 160 },

  {
    field: 'action',
    headerName: 'Action',
    width: 150,
    renderCell: (params) => (
      <>
        <Link to={"/user/"+params.row.id}>
          <button className="userlistEdit">Edit</button>
        </Link>
        <DeleteOutline className="userlistDelete"  onClick={()=> handleDelete(params.row.id)} />
      </>
    ),
  },
];

  const paginationModel = { pageSize: 8, page: 0 };

  return (
    <div className='userList'>
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
  );
};

export default Userlist;
